import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Emma Khare" },
      { name: "description", content: "Anthropology-trained UX researcher specializing in mixed methods, conversational AI, and cross-cultural fieldwork." },
      { property: "og:title", content: "About — Emma Khare" },
      { property: "og:description", content: "Anthropology-trained UX researcher specializing in mixed methods, conversational AI, and cross-cultural fieldwork." },
    ],
  }),
  component: About,
});

const skillGroups = [
  {
    label: "Research Methods",
    items: [
      "Usability testing",
      "Mixed-methods research",
      "Ethnographic field research",
      "Semi-structured interviews",
      "Survey design",
      "Contextual inquiry",
      "Persona development",
      "Journey mapping",
      "Thematic & affinity analysis",
    ],
    accent: "pink",
  },
  {
    label: "Research Operations",
    items: [
      "End-to-end study design",
      "Moderation SOPs",
      "Protocol authoring",
      "IRB-compliant participant research",
      "Cross-functional stakeholder management",
      "Moderator training",
    ],
    accent: "purple",
  },
  {
    label: "AI & Conversational Research",
    items: [
      "Study design for AI prompt creation",
      "Conversation design protocols",
      "Human-AI interaction research",
      "Sentiment analysis",
    ],
    accent: "blue",
  },
  {
    label: "Technical Tools",
    items: ["Python (NLTK, NRCLex, WordNet)", "Figma", "Jupyter", "Qualitative coding", "Excel & Sheets", "Canva"],
    accent: "purple",
  },
] as const;

const accentBorder = {
  pink: "border-l-[color:var(--pink)]",
  blue: "border-l-[color:var(--blue)]",
  purple: "border-l-[color:var(--purple)]",
} as const;

const accentText = {
  pink: "text-[color:var(--pink-ink)]",
  blue: "text-[color:var(--blue-ink)]",
  purple: "text-[color:var(--purple-ink)]",
} as const;

const timeline = [
  { year: "2026 — Now", role: "Data Moderator, User Research", org: "Apple (via INSPYR Solutions)", detail: "UX research across iPhone, iPad, Mac, Vision Pro, and AirPods — with conversational-AI protocols." },
  { year: "2024 — 2025", role: "User Experience Researcher", org: "Woaf Meow", detail: "Cross-cultural usability research for a consumer health wearable across US and China cohorts." },
  { year: "2024 — 2025", role: "Education Specialist, Native & Indigenous-Centered Education", org: "Omaha Public Schools", detail: "Culturally responsive programming for 90+ Native students and families." },
  { year: "2022", role: "Project Coordinator, Indigeneity, Identity & Ireland", org: "Miami University × Foras na Gaeilge × Údarás na Gaeltachta", detail: "Multilingual fieldwork across Irish and Indigenous North American research communities." },
  { year: "2022", role: "NSF REU Fellow — Linguistics", org: "University of Oregon", detail: "Indigenous language preservation research on Hanis, Coos, and Miluk." },
  { year: "Dec 2022", role: "B.A. Anthropology, Summa Cum Laude (3.98 GPA)", org: "Miami University, Oxford, OH", detail: "Dean's List & President's List. Coursework in Computational Linguistics and Research Methods." },
];

const languages = [
  { name: "English", level: "Native" },
  { name: "Myaamiaataweenki (Miami-Illinois)", level: "Active speaker" },
  { name: "Irish (Gaeilge), Hanis, Coos, Miluk", level: "Research experience" },
];

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-20 pb-12 sm:pt-28">
      <header className="grid grid-cols-1 gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--blue-ink)]">
            About
          </p>
          <h1 className="mt-4 text-balance text-5xl sm:text-6xl">
            Hi, I'm Emma — a
            <span className="text-[color:var(--purple-ink)]"> mixed-methods</span> researcher who likes
            <span className="text-[color:var(--pink-ink)]"> hard questions</span> across
            <span className="text-[color:var(--blue-ink)]"> many cultures</span>.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              I currently moderate UX research at Apple across iPhone, iPad,
              Mac, Vision Pro, and AirPods — with study protocols that fold AI
              prompt creation and conversation design into the research itself.
            </p>
            <p>
              Before that, I led cross-cultural research for a consumer health
              wearable across US and China cohorts, evaluated K-12 programming
              for Native and Indigenous communities, and coordinated linguistic
              fieldwork across Irish and Indigenous North American communities.
            </p>
            <p>
              I trained as an anthropologist (Summa Cum Laude, 3.98 GPA at
              Miami University) and I'm an active speaker of Myaamiaataweenki,
              the Miami-Illinois language. The throughline is the same in every
              project: take cultural context seriously, design rigorous
              protocols, and translate what participants actually said into
              something a product team can act on.
            </p>
          </div>
        </div>
        <aside className="md:col-span-2">
          <div
            aria-hidden
            className="aspect-[4/5] w-full rounded-3xl bg-gradient-trio"
          />
          <p className="mt-3 text-xs text-muted-foreground">
            Send a portrait and I'll drop it in.
          </p>
        </aside>
      </header>

      <section className="mt-20">
        <h2 className="text-3xl">What I work on</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div
              key={g.label}
              className={`rounded-2xl border border-border border-l-4 bg-card p-6 ${accentBorder[g.accent]}`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${accentText[g.accent]}`}>
                {g.label}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-secondary px-3 py-1 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl">Experience & education</h2>
        <ol className="mt-8 divide-y divide-border border-y border-border">
          {timeline.map((t, i) => (
            <li key={i} className="grid grid-cols-12 gap-6 py-6">
              <p className="col-span-12 text-sm font-semibold text-muted-foreground sm:col-span-3">
                {t.year}
              </p>
              <div className="col-span-12 sm:col-span-9">
                <p className="font-display text-xl text-foreground">{t.role}</p>
                <p className="mt-1 text-sm font-medium text-[color:var(--purple-ink)]">{t.org}</p>
                <p className="mt-1 text-foreground/75">{t.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl">Languages</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {languages.map((l) => (
            <li key={l.name} className="rounded-xl border border-border bg-card p-5">
              <p className="font-display text-xl text-foreground">{l.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l.level}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 flex flex-wrap gap-3">
        <Link
          to="/resume"
          className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
        >
          Read the résumé
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
