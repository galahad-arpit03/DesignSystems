export const whatIsThisContent = {
  title: "What is design?",
  intro:
    "The design concept was introduced by Google Stitch. Stitch uses a plain markdown file to describe design patterns, colors, typography, spacing, components, and hands it to an AI agent so it can generate consistent UI. No Figma plugin, no JSON schema, just a markdown file the agent reads before it writes code. We built the VoltAgent/awesome-design-md repository on top of that idea. getdesign is the web app version of that repo. You can browse, preview, and copy any design file without cloning anything.",
  sections: [
    {
      id: "the-problem",
      title: 'The problem: AI builds "nice" but not "yours"',
      content: [
        'Tell any AI agent to "build me a landing page" and you already know what you\'ll get. Rounded cards. A purple-blue gradient. A centered hero. A "Get Started" button. It works. It also looks like everything else.',
        'The reason is simple. The agent\'s idea of "good design" is an average of averages. It has no clue why Vercel uses border instead of shadow, why Linear keeps its letter-spacing so tight, or why Stripe goes easy on gradients. Even if it did know, cramming all of that into a prompt is borderline impossible.',
        "So you end up with two bad options:",
        '1. Write 40 lines of prompt every time ("use #0070f3 for links, -0.02em letter spacing on headings, 8px border radius, no shadows just 1px borders...") and still get half of it wrong.',
        '2. Screenshot a site, paste it, say "make it look like this." The agent copies pixels but misses the system behind them.',
        "Neither scales.",
      ],
    },
    {
      id: "the-fix",
      title: "The fix: design",
      content: [
        "A design file describes a design system semantically. It is not a token list. Not a Figma export. Not a component library. Picture a document where an experienced designer explains a brand's visual language to a developer who's seeing it for the first time. That's what it reads like.",
        "Here's what goes inside:",
        '• Visual theme and atmosphere tells the agent what the brand looks like and, more importantly, why. The philosophy behind the aesthetic. Sentences like "Minimalism as engineering principle." The agent gets intent, not just instructions.',
        '• Color palette and roles gives every color a hex value and a job. "#ff5b4f, ship red, used for the production deploy flow because shipping should feel urgent." The name tells you what the color does.',
        '• Typography rules cover font, size, weight, line-height, letter-spacing. But the real value is context: which style goes where, and why. "Display sizes get -2.4px tracking because headlines should feel like minified code."',
        "• Spacing, shadows, motion, components fill in the rest of the system. Every rule, wherever possible, with a reason attached.",
        "design keeps token, rule, and rationale in the same file. A token tells you what to use but not where. A rule tells you where but not when to bend it. The rationale is what lets an agent make the right call when it hits a situation the file never covers.",
      ],
    },
    {
      id: "why-markdown",
      title: "Why markdown?",
      content: [
        "Because it is the language AI agents speak best. They can read JSON tokens but can't interpret them. They can't see Figma files. They'll imitate a screenshot but won't systematize it. Markdown sits in the middle: readable by humans, parseable by machines, easy to version and diff, and you can drop it in a repo root.",
        "Drop a design file in your project root and tell your agent \"use design as reference before you write any UI.\" From that point on, whether you're working with Claude Code, Cursor, or Windsurf, the agent knows which font, which color, which spacing to reach for. You don't have to repeat yourself in every prompt.",
      ],
    },
    {
      id: "why-collection",
      title: "Why a collection?",
      content: [
        'Most teams don\'t write their own design from scratch. Most teams say "make it look like Linear," "give it that Stripe feel," or "keep it close to Apple." These references are real. They come up constantly.',
        'getdesign collects those starting points. Inspiration files based on Vercel, Stripe, Linear, Apple, Tesla, Notion, Figma, Supabase, and dozens more, all in the same format, all comparable. Pick one, drop it into your project, tell your agent "use this file as reference." Building on top of that language with your own content and components is up to you.',
        'The goal is not "copy Vercel." It is to give the agent a starting language. Enough context to escape the generic average and land on a specific aesthetic. From there you drift, you make it yours, you evolve it.',
      ],
    },
    {
      id: "structure",
      title: "The structure of a design file",
      content: [
        "A design file has 9 standard sections. Each one is a layer the agent reaches for when making a specific design decision.",
      ],
      subsections: [
        {
          title: "1. Visual theme and atmosphere",
          text: "The top of the file describes the brand's feel. Not tokens or pixels. Attitude and philosophy.",
          code: '## Visual theme and atmosphere\n\nLinear\'s interface embodies "opinionated calm." Every surface is dark,\nevery motion is restrained, every element earns its place through\ninformation density, not decoration. The aesthetic borrows from\ndeveloper tooling: monospaced accents, tight spacing, muted palettes.',
        },
        {
          title: "2. Color palette and roles",
          text: 'Every color is defined with its hex value and its semantic role. The file doesn\'t just say "blue." It says what that blue does.',
          table: {
            headers: ["Role", "Token", "Value"],
            rows: [
              ["Background", "--bg-primary", "#000000"],
              ["Surface", "--bg-surface", "#141414"],
              ["Brand accent", "--accent-primary", "#5E6AD2"],
              ["Destructive", "--color-danger", "#E5484D"],
              ["Text primary", "--text-primary", "#EDEDEF"],
              ["Border default", "--border-default", "#2A2A2A"],
            ],
          },
        },
        {
          title: "3. Typography rules",
          text: "Font family, size hierarchy, weight, line-height, and letter-spacing, all in a table, with context for which one goes where.",
          table: {
            headers: ["Level", "Size", "Weight", "Line", "Spacing"],
            rows: [
              ["Display", "52px", "500", "1.1", "-2.4px"],
              ["Heading 1", "32px", "500", "1.2", "-1.2px"],
              ["Body", "14px", "400", "1.6", "-0.1px"],
              ["Caption", "12px", "400", "1.4", "0"],
            ],
          },
        },
        {
          title: "4. Component styles",
          text: "Style definitions for core elements like buttons, cards, inputs, navigation, and badges, including all states.",
          code: "### Button (primary)\n- Background: var(--accent-primary)\n- Padding: 6px 12px\n- Border-radius: 6px\n- Font-size: 13px, weight 500\n- Hover: brightness(1.15)\n- Focus: 2px ring offset 2px\n- Disabled: opacity 0.5, pointer-events none",
        },
        {
          title: "5. Layout principles",
          text: "Spacing scale, grid system, container widths, whitespace approach, and border-radius scale.",
          code: "## Layout\n\n- Base unit: 4px\n- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64\n- Max content width: 1080px\n- Section gap: 64-96px\n- Border-radius scale: 4px (badge), 6px (button), 8px (card), 12px (modal)",
        },
        {
          title: "6. Depth and elevation",
          text: "The shadow system, surface hierarchy, and elevation levels.",
          table: {
            headers: ["Level", "Usage", "Shadow"],
            rows: [
              ["Level 0", "Page bg", "none"],
              ["Level 1", "Card", "0 1px 2px rgba(0,0,0,0.3)"],
              ["Level 2", "Dropdown", "0 4px 12px rgba(0,0,0,0.4)"],
              ["Level 3", "Modal", "0 8px 24px rgba(0,0,0,0.5)"],
            ],
          },
        },
        {
          title: "7. Do's and don'ts",
          text: "Design boundaries and anti-patterns. The 'don't' list matters.",
          code: "Do:\n- Use border for separation, not shadow\n- Keep letter-spacing tight\n\nDon't:\n- Don't use rounded-full on rectangular buttons\n- Don't mix warm and cool grays",
        },
        {
          title: "8. Responsive behavior",
          text: "Breakpoints, touch target sizes, and how things collapse.",
          table: {
            headers: ["Breakpoint", "Width", "Behavior"],
            rows: [
              ["Mobile", "< 640px", "Single column"],
              ["Tablet", "< 1024px", "Sidebar collapses"],
              ["Desktop", ">= 1024px", "Full layout"],
            ],
          },
        },
        {
          title: "9. Agent prompt guide",
          text: "A quick-reference summary for the AI agent.",
          code: '## Agent prompt guide\n\nQuick palette: bg=#000, surface=#141414, accent=#5E6AD2\n\n### Ready-to-use prompts:\n- "Create a settings page" -> dark bg, grouped sections...',
        },
      ],
    },
    {
      id: "mental-model",
      title: "Mental model",
      content: [
        'You used to hire a designer and say "you know Linear, right? Give me that feel." It worked because the designer already carried the reference in their head. That shared context sat underneath every conversation you had with them.',
        "An AI agent doesn't have that shared context. design writes it into a file and puts it in the agent's \"head.\"",
      ],
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      content: [
        "These are not official design systems from the listed companies. They are curated starting points inspired by publicly visible design patterns. All trademarks, brand names, and design elements belong to their respective owners.",
      ],
    },
  ],
};
