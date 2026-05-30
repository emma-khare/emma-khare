import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn, PageWrap, StaggerList, StaggerItem, staggerItemVariants, WordReveal } from "@/components/Motion";
import portrait from "@/assets/emma-headshot.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Emma Khare" },
      { name: "description", content: "Emma Khare is a UX researcher working across conversational AI, wearables, and community programs." },
      { property: "og:title", content: "About — Emma Khare" },
      { property: "og:description", content: "UX researcher across conversational AI, wearables, and community programs." },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { y: "2026 — Now", t: "Data Moderator, User Research", o: "Apple (via INSPYR)" },
  { y: "2024 — 2025", t: "UX Researcher", o: "Woaf Meow" },
  { y: "2024 — 2025", t: "Education Specialist", o: "Omaha Public Schools" },
  { y: "2022", t: "Project Coordinator", o: "Miami University × Foras na Gaeilge" },
  { y: "2022", t: "NSF REU Fellow — Linguistics", o: "University of Oregon" },
  { y: "2021", t: "Researcher", o: "Miami University" },
];

const SKILLS = [
  "Generative & evaluative research",
  "Ethnography & diary studies",
  "Usability testing & moderation",
  "Interview & survey design",
  "IRB & ethical compliance",
  "Mixed-methods evaluation",
  "Personas & journey mapping",
  "Python (NLTK, NRCLex, WordNet)",
  "Cross-cultural & multilingual fieldwork",
  "Stakeholder readouts & reporting",
];

function About() {
  return (
    <PageWrap>
      <section className="relative overflow-hidden">
        <div className="blob blob-purple h-[420px] w-[420px] top-10 -right-20" />
        <div className="blob blob-pink h-[320px] w-[320px] top-60 -left-20" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-20 lg:pt-32">
          <p className="label-mono mb-6">About</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-[18ch] text-balance">
            <WordReveal
              text="A researcher who treats every study like a trust exercise."
              highlight="trust"
            />
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <FadeIn className="md:col-span-4">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] grain-overlay">
              <img
                src={portrait}
                alt="Portrait of Emma Khare"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <p className="label-mono mt-6">Bio</p>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-8 space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 text-pretty">
              I'm Emma — a UX researcher trained in anthropology and linguistics. I moderate
              conversational AI studies at Apple, run cross-cultural usability sessions for
              wearables, design culturally responsive education programs, and help teams hear
              what their participants are actually saying.
            </p>
            <p className="text-lg leading-relaxed text-foreground/75 text-pretty">
              My background blends ethnography, NLP, and IRB-compliant fieldwork. I care about
              the small operational details that make research trustworthy: protocol design,
              moderation hygiene, consent, and the quiet work of synthesizing what came up in
              the room.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16 border-t border-hairline">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Skills</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              The toolkit, in <span className="gradient-ink">plain language.</span>
            </h2>
          </FadeIn>
          <StaggerList className="md:col-span-8 flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <StaggerItem
                key={s}
                variants={staggerItemVariants}
                className="rounded-full border border-foreground/80 px-4 py-2 text-sm"
              >
                {s}
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16 border-t border-hairline">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Timeline</p>
          </FadeIn>
          <StaggerList className="md:col-span-8 divide-y divide-hairline">
            {TIMELINE.map((t) => (
              <StaggerItem
                key={`${t.y}-${t.t}`}
                variants={staggerItemVariants}
                className="grid md:grid-cols-12 gap-3 py-5 items-baseline"
              >
                <p className="md:col-span-3 label-mono">{t.y}</p>
                <p className="md:col-span-6 text-lg text-foreground/90">{t.t}</p>
                <p className="md:col-span-3 text-sm text-muted-foreground md:text-right">{t.o}</p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20 border-t border-hairline">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-6xl text-balance max-w-[20ch]">
            Want the full résumé?
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/resume" className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">
              View résumé →
            </Link>
            <Link to="/contact" className="rounded-full border border-foreground/80 px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
              Get in touch
            </Link>
          </div>
        </FadeIn>
      </section>
    </PageWrap>
  );
}
