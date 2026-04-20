# Design — Premium Design System Engine

A high-fidelity platform for browsing, visualizing, and installing design system tokens inspired by the world's most iconic brands. This project bridges the gap between design inspiration and technical implementation by providing structured design specifications that AI coding agents can use to build matching UIs.

![Design Platform Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80)

## 🚀 How to Use

The platform provides two primary ways to interact with design systems:

### 1. Web Library
Browse the [Design Library](https://designbyarpit.vercel.app) to explore 60+ design systems.
- **Specimen Engine**: Visualize colors, typography, and component styles in real-time.
- **Live Preview**: Toggle between Light and Dark modes to see how the system performs on various surfaces.
- **Design Tab**: View the raw design specifications that power the visualizations.

### 2. Command Line Interface (CLI)
Download any design system directly into your project root using the custom CLI:

```bash
npx design.md@latest add [slug]
```

**Example:**
```bash
npx design.md@latest add airbnb
```
This command downloads a `Design.md` file containing every detail (colors, spacing, font rules) of the selected system. Once downloaded, you can simply tell your AI assistant: *"Use Design for UI work."*

---

## 🛠 How It's Built

This platform is built with a modern, high-performance stack designed for speed and rich aesthetics.

### Core Stack
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router & Turbopack)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL + Real-time)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Typography**: [Geist](https://vercel.com/font) (Mono & Pixel variants)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (GitHub integration)

### Key Architectural Systems
1. **Specimen Engine**: A custom React-based engine that parses design tokens and translates them into live visual previews and component specimens.
2. **Dynamic Typography Injector**: A scoped styling system that injects brand-specific fonts (like Airbnb Cereal, Spotify Mix, or Cal Sans) into the preview environment without affecting the main platform UI.
3. **Download API**: A specialized REST endpoint (`/api/design/[slug]`) that serves raw design data to the CLI tool.
4. **Custom CLI**: A Node.js-based terminal tool that facilitates the "Design-to-Code" workflow.

---

## 💻 Development

### Setup
1. Clone the repository and install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXTAUTH_SECRET=your_secret
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
```

3. Run the development server:
```bash
npm run dev
```

### Testing the CLI Locally
You can test the CLI tool during development without publishing to npm:
```bash
# Test against your local server
node bin/design.js add airbnb --local
```

---

## 🎨 Design Philosophy
The platform adheres to a **Retro-Modern/Digital-Industrial** aesthetic:
- **Monochrome Foundation**: Black on white/black canvas with zero generic colors.
- **Micro-Animations**: Subtle hover transforms and fade-up transitions for a premium feel.
- **Typography as Content**: Heavy use of monospace and pixel fonts to emphasize the "Design-as-Code" nature of the project.
- **Glassmorphism**: Subtle borders and translucent overlays for depth.

---

Maintained by **Arpit**. Inspired by the intersection of Digital Design and Agentic Coding.
