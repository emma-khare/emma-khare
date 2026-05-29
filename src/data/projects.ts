export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  client: string;
  tags: string[];
  accent: "pink" | "blue" | "purple";
  cover: string; // gradient class for placeholder
  overview: string;
  challenge: string;
  approach: string[];
  outcome: string;
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: "lumen-rebrand",
    title: "Lumen Rebrand",
    tagline: "A warmer identity system for a sleep-tech startup.",
    year: "2025",
    role: "Lead Brand Designer",
    client: "Lumen Sleep",
    tags: ["Branding", "Identity", "Type"],
    accent: "purple",
    cover: "from-[oklch(0.78_0.17_300)] via-[oklch(0.72_0.18_320)] to-[oklch(0.72_0.16_358)]",
    overview:
      "Lumen had outgrown a cool, clinical visual language. We rebuilt their identity around the warmth of waking up rested — a softer palette, a custom display face, and a flexible logomark that breathes.",
    challenge:
      "The previous mark felt like a medical device. Investors loved it; customers found it cold. The brand needed to feel like a bedside lamp, not an operating room.",
    approach: [
      "Audited 18 months of customer interviews and pulled the language of comfort.",
      "Designed a custom display cut from a warm humanist sans.",
      "Built a flexible mark that animates from a dot to a full sun across touchpoints.",
    ],
    outcome:
      "Brand recall doubled in post-launch surveys. The new system shipped across web, app, packaging, and retail in eight weeks.",
  },
  {
    slug: "field-notes-app",
    title: "Field Notes",
    tagline: "A pocket journal for landscape architects.",
    year: "2024",
    role: "Product Designer",
    client: "Field Notes Studio",
    tags: ["Product", "Mobile", "UX"],
    accent: "blue",
    cover: "from-[oklch(0.75_0.15_220)] via-[oklch(0.72_0.16_245)] to-[oklch(0.7_0.18_270)]",
    overview:
      "An iOS companion that lets landscape architects sketch, measure, and tag site observations without losing the tactility of a paper notebook.",
    challenge:
      "Existing tools forced architects to choose between sketching freely and capturing structured data. Field Notes needed both, on a phone, in direct sunlight.",
    approach: [
      "Shadowed five architects on-site for two days each.",
      "Designed a single-thumb capture flow with voice, sketch, and measurement modes.",
      "Tuned every contrast pair for outdoor legibility at 800+ nits.",
    ],
    outcome:
      "4.8 stars in early access. Teams report 30% faster site reports and noticeably better field-to-office handoff.",
  },
  {
    slug: "petal-press",
    title: "Petal Press",
    tagline: "An editorial system for an indie magazine.",
    year: "2024",
    role: "Art Direction",
    client: "Petal Press",
    tags: ["Editorial", "Print", "Web"],
    accent: "pink",
    cover: "from-[oklch(0.82_0.15_358)] via-[oklch(0.78_0.17_10)] to-[oklch(0.74_0.18_340)]",
    overview:
      "A print-and-web editorial system for a quarterly magazine about urban gardens. One grid, one type family, infinite layouts.",
    challenge:
      "Five contributing designers, no style guide, and a print deadline every twelve weeks. Issues felt like five different magazines stapled together.",
    approach: [
      "Defined a 12-column grid that works equally well in InDesign and on the web.",
      "Wrote a one-page typographic constitution.",
      "Built a Figma library that mirrors the InDesign masters one-to-one.",
    ],
    outcome:
      "Three issues shipped on time. Newsstand reorders up 40% and the digital edition finally feels like the same publication.",
  },
  {
    slug: "civic-dashboard",
    title: "Civic Dashboard",
    tagline: "Making city budgets readable.",
    year: "2023",
    role: "Design Lead",
    client: "City of Oakland",
    tags: ["Civic", "Data Viz", "Web"],
    accent: "blue",
    cover: "from-[oklch(0.78_0.13_200)] via-[oklch(0.7_0.16_240)] to-[oklch(0.66_0.19_270)]",
    overview:
      "An open-source dashboard that turns a 400-page municipal budget into something a resident can actually read on their phone.",
    challenge:
      "Public budget data is technically public and practically invisible. The site needed to feel like journalism, not government.",
    approach: [
      "Partnered with two reporters to find the questions residents actually ask.",
      "Designed a scroll-driven explainer for the headline numbers.",
      "Released the chart components as an open-source library.",
    ],
    outcome:
      "Picked up by two other cities in the first quarter after launch.",
  },
  {
    slug: "study-hall",
    title: "Study Hall",
    tagline: "A focus app that respects your attention.",
    year: "2023",
    role: "Founding Designer",
    client: "Study Hall",
    tags: ["Product", "Web", "Brand"],
    accent: "purple",
    cover: "from-[oklch(0.78_0.16_290)] via-[oklch(0.7_0.19_310)] to-[oklch(0.66_0.2_330)]",
    overview:
      "A focus timer that pairs you with one other person for a 50-minute session — no chat, no leaderboard, just quiet company.",
    challenge:
      "Most focus apps are gamified into noise. Study Hall needed to feel like a library, not a casino.",
    approach: [
      "Stripped the home screen to one button.",
      "Designed an ambient pairing UI with no avatars or names.",
      "Built a brand around restraint: one color per session, no notifications.",
    ],
    outcome:
      "12,000 weekly active sessions within six months, almost entirely from word of mouth.",
  },
  {
    slug: "marigold-packaging",
    title: "Marigold Packaging",
    tagline: "Packaging for a small-batch tea ceremony kit.",
    year: "2022",
    role: "Designer & Illustrator",
    client: "Marigold Tea Co.",
    tags: ["Packaging", "Illustration"],
    accent: "pink",
    cover: "from-[oklch(0.85_0.13_50)] via-[oklch(0.78_0.16_20)] to-[oklch(0.74_0.18_358)]",
    overview:
      "A six-piece packaging system for a tea brand opening their first retail shop.",
    challenge:
      "Premium feel on a budget that didn't allow for foil or specialty paper.",
    approach: [
      "Designed custom botanical illustrations.",
      "Used a single Pantone and uncoated stock across the line.",
      "Built a modular sticker system so seasonal SKUs ship without new print runs.",
    ],
    outcome:
      "Opening weekend sold through 70% of inventory; the system is still in use three years later.",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
