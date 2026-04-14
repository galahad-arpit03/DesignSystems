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
  { name: "ClickHouse", desc: "Fast analytics database. Yellow-accented, technical documentation style.", installs: "956", bookmarked: "19", logo: "https://www.vectorlogo.zone/logos/clickhouse/clickhouse-icon.svg", category: "Backend, Database & DevOps" }
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
  "Automotive"
];
