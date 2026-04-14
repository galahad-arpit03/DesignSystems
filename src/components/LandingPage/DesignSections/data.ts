export interface Design {
  name: string;
  desc: string;
  installs: string;
  bookmarked: string;
  logo: string;
  category: string;
}

export const designs: Design[] = [
  { name: "Airbnb", desc: "Travel marketplace. Warm coral accent, photography-driven, rounded UI.", installs: "2.4K", bookmarked: "271", logo: "https://www.vectorlogo.zone/logos/airbnb/airbnb-icon.svg", category: "Productivity & SaaS" },
  { name: "Airtable", desc: "Spreadsheet-database hybrid. Colorful, friendly, structured data aesthetic.", installs: "1.2K", bookmarked: "72", logo: "https://www.vectorlogo.zone/logos/airtable/airtable-icon.svg", category: "Productivity & SaaS" },
  { name: "Apple", desc: "Consumer electronics. Premium white space, SF Pro, cinematic imagery.", installs: "4.5K", bookmarked: "849", logo: "https://www.vectorlogo.zone/logos/apple/apple-icon.svg", category: "Media & Consumer Tech" },
  { name: "Binance", desc: "Crypto exchange. Bold yellow accent on monochrome, trading-floor urgency.", installs: "577", bookmarked: "30", logo: "https://www.vectorlogo.zone/logos/binance/binance-icon.svg", category: "Fintech & Crypto" },
  { name: "BMW", desc: "Luxury automotive. Dark premium surfaces, precise German engineering aesthetic.", installs: "1.1K", bookmarked: "41", logo: "https://www.vectorlogo.zone/logos/bmw/bmw-icon.svg", category: "Automotive" },
  { name: "BMW (Alt)", desc: "Hypercar brand. Cinema-black canvas, monochrome austerity, monumental display type.", installs: "281", bookmarked: "9", logo: "https://www.vectorlogo.zone/logos/bmw/bmw-icon.svg", category: "Automotive" },
  { name: "Cal.com", desc: "Open-source scheduling. Clean neutral UI, developer-oriented simplicity.", installs: "1.3K", bookmarked: "45", logo: "https://www.vectorlogo.zone/logos/cal/cal-icon.svg", category: "Productivity & SaaS" },
  { name: "Claude", desc: "Anthropic's AI assistant. Warm terracotta accent, clean editorial layout.", installs: "3.3K", bookmarked: "292", logo: "https://www.vectorlogo.zone/logos/anthropic/anthropic-icon.svg", category: "AI & LLM Platforms" },
  { name: "Clay", desc: "Creative agency. Organic shapes, soft gradients, art-directed layout.", installs: "1.2K", bookmarked: "57", logo: "https://www.vectorlogo.zone/logos/clay/clay-icon.svg", category: "Design & Creative Tools" },
  { name: "ClickHouse", desc: "Fast analytics database. Yellow-accented, technical documentation style.", installs: "956", bookmarked: "19", logo: "https://www.vectorlogo.zone/logos/clickhouse/clickhouse-icon.svg", category: "Backend, Database & DevOps" },
  { name: "Discord", desc: "Communication platform. Blurple accent, friendly illustration style.", installs: "3.5K", bookmarked: "412", logo: "https://www.vectorlogo.zone/logos/discord/discord-icon.svg", category: "Media & Consumer Tech" },
  { name: "Dropbox", desc: "File storage. Clean blue accent, focus on collaboration and simplicity.", installs: "1.8K", bookmarked: "156", logo: "https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg", category: "Productivity & SaaS" },
  { name: "Figma", desc: "Collaborative design tool. Vibrant colors, sleek dark mode, tool-centric.", installs: "5.1K", bookmarked: "1.2K", logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", category: "Design & Creative Tools" },
  { name: "GitHub", desc: "Software development platform. Minimal monochrome, technical clarity.", installs: "6.2K", bookmarked: "2.5K", logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg", category: "Developer Tools & IDEs" },
  { name: "Google", desc: "Search and tech. Primary colors, clean whitespace, Material Design.", installs: "10K", bookmarked: "5.4K", logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg", category: "Media & Consumer Tech" },
  { name: "Intercom", desc: "Customer messaging. Blue accent, friendly, business-oriented.", installs: "1.1K", bookmarked: "89", logo: "https://www.vectorlogo.zone/logos/intercom/intercom-icon.svg", category: "Productivity & SaaS" },
  { name: "Linear", desc: "Issue tracking. Sleek dark mode, keyboard-first, high performance.", installs: "2.1K", bookmarked: "342", logo: "/logos/linear.svg", category: "Productivity & SaaS" },
  { name: "Microsoft", desc: "Tech giant. Fluent Design, versatile, business-ready aesthetic.", installs: "4.8K", bookmarked: "612", logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg", category: "Media & Consumer Tech" },
  { name: "Notion", desc: "All-in-one workspace. Minimal monochrome, block-based, clean UI.", installs: "3.8K", bookmarked: "945", logo: "https://www.vectorlogo.zone/logos/notion/notion-icon.svg", category: "Productivity & SaaS" },
  { name: "Slack", desc: "Team communication. Colorful, friendly layout, highly interactive.", installs: "4.2K", bookmarked: "756", logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg", category: "Productivity & SaaS" },
  { name: "Spotify", desc: "Music streaming. Bold green on black, image-rich, dynamic.", installs: "5.5K", bookmarked: "1.1K", logo: "https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg", category: "Media & Consumer Tech" },
  { name: "Stripe", desc: "Payment processing. Gradient-rich, sleek, developer-beloved design.", installs: "2.9K", bookmarked: "823", logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg", category: "Fintech & Crypto" },
  { name: "Tailwind CSS", desc: "Utility-first CSS framework. Blue-teal gradients, modern technical.", installs: "4.1K", bookmarked: "1.5K", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", category: "Developer Tools & IDEs" },
  { name: "Vercel", desc: "Cloud platform. Minimal black & white, performance-focused layout.", installs: "3.3K", bookmarked: "678", logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg", category: "Backend, Database & DevOps" },
];

export const categories = [
  "All",
  "AI & LLM Platforms",
  "Developer Tools & IDEs",
  "Backend, Database & DevOps",
  "Productivity & SaaS",
  "Design & Creative Tools",
  "Fintech & Crypto",
  "E-commerce & Retail",
  "Media & Consumer Tech",
  "Automotive",
];

export const categoryCounts: Record<string, number> = {
  "All": 66,
  "AI & LLM Platforms": 12,
  "Developer Tools & IDEs": 7,
  "Backend, Database & DevOps": 8,
  "Productivity & SaaS": 7,
  "Design & Creative Tools": 6,
  "Fintech & Crypto": 6,
  "E-commerce & Retail": 4,
  "Media & Consumer Tech": 10,
  "Automotive": 6,
};
