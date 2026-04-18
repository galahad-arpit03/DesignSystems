import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase env vars');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const designs = [
  { name: "Airbnb", desc: "Travel marketplace. Warm coral accent, photography-driven, rounded UI.", logo: "https://www.vectorlogo.zone/logos/airbnb/airbnb-icon.svg", category: "Productivity & SaaS" },
  { name: "Airtable", desc: "Spreadsheet-database hybrid. Colorful, friendly, structured data aesthetic.", logo: "https://www.vectorlogo.zone/logos/airtable/airtable-icon.svg", category: "Productivity & SaaS" },
  { name: "Apple", desc: "Consumer electronics. Premium white space, SF Pro, cinematic imagery.", logo: "https://www.vectorlogo.zone/logos/apple/apple-icon.svg", category: "Media & Consumer Tech" },
  { name: "Binance", desc: "Crypto exchange. Bold yellow accent on monochrome, trading-floor urgency.", logo: "https://www.vectorlogo.zone/logos/binance/binance-icon.svg", category: "Fintech & Crypto" },
  { name: "BMW", desc: "Luxury automotive. Dark premium surfaces, precise German engineering aesthetic.", logo: "https://www.vectorlogo.zone/logos/bmw/bmw-icon.svg", category: "Automotive" },
  { name: "BMW (Alt)", desc: "Hypercar brand. Cinema-black canvas, monochrome austerity, monumental display type.", logo: "https://www.vectorlogo.zone/logos/bmw/bmw-icon.svg", category: "Automotive" },
  { name: "Cal.com", desc: "Open-source scheduling. Clean neutral UI, developer-oriented simplicity.", logo: "https://www.vectorlogo.zone/logos/cal/cal-icon.svg", category: "Productivity & SaaS" },
  { name: "Claude", desc: "Anthropic's AI assistant. Warm terracotta accent, clean editorial layout.", logo: "https://www.vectorlogo.zone/logos/anthropic/anthropic-icon.svg", category: "AI & LLM Platforms" },
  { name: "Clay", desc: "Creative agency. Organic shapes, soft gradients, art-directed layout.", logo: "https://www.vectorlogo.zone/logos/clay/clay-icon.svg", category: "Design & Creative Tools" },
  { name: "ClickHouse", desc: "Fast analytics database. Yellow-accented, technical documentation style.", logo: "https://www.vectorlogo.zone/logos/clickhouse/clickhouse-icon.svg", category: "Backend, Database & DevOps" },
  { name: "Discord", desc: "Communication platform. Blurple accent, friendly illustration style.", logo: "https://www.vectorlogo.zone/logos/discord/discord-icon.svg", category: "Media & Consumer Tech" },
  { name: "Dropbox", desc: "File storage. Clean blue accent, focus on collaboration and simplicity.", logo: "https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg", category: "Productivity & SaaS" },
  { name: "Figma", desc: "Collaborative design tool. Vibrant colors, sleek dark mode, tool-centric.", logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", category: "Design & Creative Tools" },
  { name: "GitHub", desc: "Software development platform. Minimal monochrome, technical clarity.", logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg", category: "Developer Tools & IDEs" },
  { name: "Google", desc: "Search and tech. Primary colors, clean whitespace, Material Design.", logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg", category: "Media & Consumer Tech" },
  { name: "Intercom", desc: "Customer messaging. Blue accent, friendly, business-oriented.", logo: "https://www.vectorlogo.zone/logos/intercom/intercom-icon.svg", category: "Productivity & SaaS" },
  { name: "Microsoft", desc: "Tech giant. Fluent Design, versatile, business-ready aesthetic.", logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg", category: "Media & Consumer Tech" },
  { name: "Notion", desc: "All-in-one workspace. Minimal monochrome, block-based, clean UI.", logo: "https://www.vectorlogo.zone/logos/notion/notion-icon.svg", category: "Productivity & SaaS" },
  { name: "Slack", desc: "Team communication. Colorful, friendly layout, highly interactive.", logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg", category: "Productivity & SaaS" },
  { name: "Spotify", desc: "Music streaming. Bold green on black, image-rich, dynamic.", logo: "https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg", category: "Media & Consumer Tech" },
  { name: "Stripe", desc: "Payment processing. Gradient-rich, sleek, developer-beloved design.", logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg", category: "Fintech & Crypto" },
  { name: "Tailwind CSS", desc: "Utility-first CSS framework. Blue-teal gradients, modern technical.", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", category: "Developer Tools & IDEs" },
  { name: "Vercel", desc: "Cloud platform. Minimal black & white, performance-focused layout.", logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg", category: "Backend, Database & DevOps" },
];

async function seedData() {
  console.log('Clearing existing designs...');
  try {
    const { error: delError } = await supabase.from('designs').delete().neq('slug', 'null');
    if (delError) console.error('Error clearing:', delError);
  } catch (e) { console.error('Delete error:', e); }

  const formattedDesigns = designs.map(d => ({
    name: d.name,
    tagline: d.desc,
    logo_url: d.logo,
    category: d.category,
    installs_count: 0,
    bookmarks_count: 0,
    slug: d.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-'),
    description: `A comprehensive design system inspired by ${d.name}. ${d.desc}`,
    markdown: `# ${d.name} Design System\n\nThis design system captures the essence of ${d.name}'s visual language.\n\n## Key Characteristics\n- **Aesthetic**: ${d.desc}\n- **Tone**: Professional and modern\n\n## Usage\nTo use this design system in your project, run:\n\n\`\`\`bash\nnpx design@latest add ${d.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}\n\`\`\``,
    preview_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'
  }));

  console.log(`Inserting ${formattedDesigns.length} designs...`);
  const { data, error } = await supabase.from('designs').insert(formattedDesigns);
  
  if (error) {
    console.error('Error seeding:', error);
  } else {
    console.log('Successfully seeded database!');
  }
}

seedData();
