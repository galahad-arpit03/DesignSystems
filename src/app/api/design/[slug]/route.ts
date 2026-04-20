
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('designs')
    .select('markdown, name')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    const { data: designs } = await supabase.from('designs').select('slug');
    const available = designs?.map(d => d.slug).join(', ') || '';
    return NextResponse.json({ 
      error: 'Design not found',
      availableSlugs: available
    }, { status: 404 });
  }

  return new NextResponse(data.markdown, {
    headers: {
      'Content-Type': 'text/markdown',
      'Content-Disposition': `attachment; filename="Design.md"`,
    },
  });
}
