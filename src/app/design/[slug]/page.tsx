'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

const extractFonts = (markdown: string) => {
  const displayMatch = markdown?.match(/Display\*\*:\s*`?([^`\n,]+)`?/i);
  const bodyMatch = markdown?.match(/Body\*\*:\s*`?([^`\n,]+)`?/i);
  
  return {
    display: displayMatch ? displayMatch[1].trim() : 'inherit',
    body: bodyMatch ? bodyMatch[1].trim() : 'inherit'
  };
};

// --- LIVE PREVIEW ENGINE (Dynamic Typography) ---

const InternalSiteHeader = ({ logoUrl, name, theme, displayFont }: { logoUrl: string, name: string, theme: 'light' | 'dark', displayFont: string }) => (
  <div className={`px-6 py-3 border-b flex items-center justify-between transition-colors ${theme === 'dark' ? 'bg-[#1a1a1a] border-white/10 text-white' : 'bg-white border-[#eee] text-black'}`}>
    <div className="flex items-center gap-4">
      <span className="font-bold text-xs tracking-tight font-mono uppercase tracking-[0.2em]">Design</span>
      <div className={`hidden sm:flex items-center gap-2 px-2 py-0.5 rounded-full border text-[9px] font-medium ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white/40' : 'bg-black/5 border-black/5 text-black/40'}`}>
         awesome-design
      </div>
    </div>
    
    <div className="hidden lg:flex items-center gap-5 text-[10px] font-bold uppercase tracking-widest opacity-40">
      <span style={{ fontFamily: displayFont }}>Colors</span>
      <span style={{ fontFamily: displayFont }}>Typography</span>
      <span style={{ fontFamily: displayFont }}>Buttons</span>
      <span style={{ fontFamily: displayFont }}>Cards</span>
      <span style={{ fontFamily: displayFont }}>Forms</span>
    </div>

    <button 
      style={{ fontFamily: displayFont }}
      className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest ${name === 'Airbnb' ? 'bg-[#ff385c] text-white' : 'bg-[#0071e3] text-white'}`}
    >
      Shop Now
    </button>
  </div>
);

const LivePreview = ({ design, theme }: { design: any, theme: 'light' | 'dark' }) => {
  const data = design.preview_json || (design.command && design.command.startsWith('{') ? JSON.parse(design.command) : null);
  const { display: displayFont, body: bodyFont } = extractFonts(design.markdown || '');

  return (
    <div className={`w-full border rounded-xl overflow-hidden min-h-[600px] shadow-sm transition-all ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10 text-white' : 'bg-white border-[#eee] text-black'}`}>
      {/* Scoped Brand Typography */}
      <style dangerouslySetInnerHTML={{ __html: `
        .brand-specimen { font-family: ${bodyFont}, Inter, system-ui, sans-serif !important; }
        .brand-display { font-family: ${displayFont}, Inter, system-ui, sans-serif !important; }
      `}} />

      <InternalSiteHeader name={design.name} logoUrl={design.logo_url} theme={theme} displayFont={displayFont} />
      
      <div className="flex flex-col items-center justify-center py-24 px-6 text-center max-w-3xl mx-auto brand-specimen">
         <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 brand-display">
           Design System <br/><span className="opacity-30">Inspired by</span> {design.name}
         </h1>
         <p className="text-sm md:text-base opacity-50 mb-10 max-w-lg leading-relaxed font-medium">
           A design token catalog generated from Design. Every color, font, component, and spacing value — visualized.
         </p>
         <div className="flex flex-wrap items-center justify-center gap-3">
            <button 
              style={{ fontFamily: displayFont }}
              className={`px-6 py-2.5 rounded-lg font-bold text-[11px] uppercase tracking-widest ${design.name === 'Airbnb' ? 'bg-[#ff385c]' : 'bg-[#0071e3]'} text-white`}
            >
              Learn more
            </button>
            <button 
              style={{ fontFamily: displayFont }}
              className={`px-6 py-2.5 rounded-lg font-bold text-[11px] uppercase tracking-widest border ${theme === 'dark' ? 'border-white/20' : 'border-black/10 text-black'}`}
            >
              View Documentation
            </button>
         </div>
      </div>

      {data && (
        <div className="px-8 pb-16 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3 brand-specimen">
           {(data.colors || []).slice(0, 8).map((c: any, i: number) => (
             <div key={i} className={`p-2 rounded-xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5'}`}>
                <div className="aspect-square rounded-lg mb-2" style={{ backgroundColor: c.value }} />
                <div className="text-[9px] font-bold truncate text-center opacity-70 brand-display">{c.name}</div>
             </div>
           ))}
        </div>
      )}
    </div>
  );
};

// --- MAIN DETAIL PAGE ---

export default function DesignDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [design, setDesign] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState('preview');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [copyStatus, setCopyStatus] = useState('Copy');
  const [mdCopyStatus, setMdCopyStatus] = useState('Copy');

  useEffect(() => {
    const fetchDesign = async () => {
      setIsLoading(true);
      const { data } = await supabase.from('designs').select('*').eq('slug', slug).single();
      if (data) setDesign(data);
      setIsLoading(false);
    };
    fetchDesign();
  }, [slug]);

  const handleCopy = () => {
    const command = `npx design@latest add ${design.slug}`;
    navigator.clipboard.writeText(command);
    setCopyStatus('Copied!');
    setTimeout(() => setCopyStatus('Copy'), 2000);
  };

  const handleCopyMarkdown = () => {
    if (!design.markdown) return;
    navigator.clipboard.writeText(design.markdown);
    setMdCopyStatus('Copied!');
    setTimeout(() => setMdCopyStatus('Copy'), 2000);
  };

  if (isLoading) return <div className="min-h-screen bg-black text-white p-10 font-mono text-xs animate-pulse lowercase">fetching specs...</div>;
  if (!design) return <div className="min-h-screen bg-black text-white p-10 font-mono">Design Not Found</div>;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ffb0d9] selection:text-black font-sans">
      {/* Container sync with Landing Page: max-w-[1400px] px-6 md:px-14 lg:px-20 */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 lg:px-20 pt-10 pb-20">
        
        {/* Breadcrumb (Refined Font) */}
        <button onClick={() => router.back()} className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-white flex items-center gap-2 mb-10 transition-colors">
          ‹ Back to Library
        </button>
        
        {/* Header Area (Scaled Down) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
           <div className="space-y-4">
              <div className="flex items-center gap-4">
                 <div className="w-8 h-8 bg-white rounded-lg p-1.5 flex items-center justify-center shadow-lg">
                    <img src={design.logo_url} className="w-full h-full object-contain" alt="" />
                 </div>
                 <h1 className="text-xl md:text-3xl font-bold tracking-tight font-mono lowercase">
                    {design.name}
                 </h1>
              </div>
              <p className="text-white/40 text-xs md:text-sm font-medium tracking-wide max-w-xl">{design.tagline}</p>
           </div>

           <div className="flex gap-3">
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Verified</span>
              </div>
           </div>
        </div>

        {/* Action Row (Usage & Stats) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 mb-20 items-stretch">
           {/* Left: Command Box (Tightened) */}
           <div className="space-y-4 flex flex-col">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">Installation</div>
              <div className="flex-grow p-5 bg-[#0a0a0a] border border-white/5 rounded-xl flex items-center justify-between group">
                 <code className="text-[11px] md:text-xs font-mono text-[#FF61D2]">{`npx design@latest add ${design.slug}`}</code>
                 <button onClick={handleCopy} className="text-white/20 hover:text-white transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                 </button>
              </div>
           </div>

           {/* Right: Actions (Consistent sizes) */}
           <div className="flex items-end gap-3">
              <button className="flex-1 h-12 bg-[#FF61D2] text-black text-[11px] font-bold uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-transform">
                 Save to Library
              </button>
              <div className="h-12 px-5 bg-white/5 border border-white/10 rounded-xl flex items-center gap-6">
                 <div className="text-center">
                    <div className="text-[8px] font-bold text-white/20 uppercase tracking-[0.2em] mb-0.5">Stars</div>
                    <div className="text-xs font-bold text-[#FF61D2]">{design.installs_count ?? 0}</div>
                 </div>
                 <div className="h-4 w-px bg-white/10" />
                 <div className="text-center">
                    <div className="text-[8px] font-bold text-white/20 uppercase tracking-[0.2em] mb-0.5">Saved</div>
                    <div className="text-xs font-bold text-[#FF61D2]">{design.bookmarks_count ?? 0}</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Preview Section (Synchronized Spacing) */}
        <div className="pt-20 border-t border-white/5">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Specimen Engine</h2>
              <div className="flex items-center gap-2">
                 {/* View Toggle */}
                 <div className="flex p-0.5 bg-white/5 border border-white/10 rounded-lg">
                    <button 
                     onClick={() => setView('preview')}
                     className={`px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all ${view === 'preview' ? 'bg-white/10 text-white shadow-sm' : 'text-white/30 hover:text-white'}`}
                    >
                      Live Preview
                    </button>
                    <button 
                     onClick={() => setView('markdown')}
                     className={`px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all ${view === 'markdown' ? 'bg-white/10 text-white shadow-sm' : 'text-white/30 hover:text-white'}`}
                    >
                      Design
                    </button>
                 </div>

                 {/* Contextual Context */}
                 {view === 'preview' ? (
                   <div className="flex p-0.5 bg-white/5 border border-white/10 rounded-lg">
                      <button onClick={() => setTheme('light')} className={`px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-widest transition-all ${theme === 'light' ? 'bg-white/10 text-white shadow-sm' : 'text-white/30 hover:text-white'}`}>Light</button>
                      <button onClick={() => setTheme('dark')} className={`px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-widest transition-all ${theme === 'dark' ? 'bg-white/10 text-white shadow-sm' : 'text-white/30 hover:text-white'}`}>Dark</button>
                   </div>
                 ) : (
                   <button 
                    onClick={handleCopyMarkdown}
                    className="px-3 py-1.5 bg-white text-black rounded-lg text-[9px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2 animate-in fade-in slide-in-from-right-2 duration-300"
                   >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                      {mdCopyStatus}
                   </button>
                 )}
              </div>
           </div>

           {/* Result Area */}
           <div className="w-full">
              {view === 'preview' ? (
                <LivePreview design={design} theme={theme} />
              ) : (
                <div className="bg-[#0a0a0a] border border-white/5 text-white/70 rounded-xl p-10 md:p-16 lg:p-24 shadow-sm leading-relaxed overflow-x-auto">
                   <div className="max-w-6xl mx-auto prose prose-invert prose-sm md:prose-base font-medium prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#FF61D2] prose-strong:text-white
                   prose-table:border-collapse prose-th:text-left prose-th:p-4 prose-th:border-b prose-th:border-white/10 prose-td:p-4 prose-td:border-b prose-td:border-white/5 prose-tr:hover:bg-white/[0.02] transition-colors">
                     <ReactMarkdown remarkPlugins={[remarkGfm]}>{design.markdown || '# No documentation available'}</ReactMarkdown>
                   </div>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
