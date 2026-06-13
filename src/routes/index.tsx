import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FadeIn, StaggerList, StaggerItem, staggerItemVariants, PageWrap } from "@/components/Motion";
import portrait from "@/assets/emma-headshot.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emma Khare, UX Researcher | Conversational AI & Consumer Hardware" },
      {
        name: "description",
        content:
          "Mixed-methods UX researcher specializing in conversational AI and consumer-hardware research, usability testing, survey and interview design, moderation, and synthesis. Currently at Apple. San Jose, CA.",
      },
      { property: "og:title", content: "Emma Khare, UX Researcher | Conversational AI & Consumer Hardware" },
      { property: "og:description", content: "Mixed-methods UX researcher: conversational AI, consumer hardware, usability testing, and research synthesis. Currently at Apple." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageWrap>
      <Hero />
      <FeaturedWork />
      <StoryFeature />
      <Capabilities />
      <Closing />
    </PageWrap>
  );
}

function Hero() {
  return (
    <section className="hero-archival relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-12 pt-20 pb-24 lg:pt-28">
        <div className="text-center">
          <p className="ha-label mb-7">Emma Khare, UX Researcher · 2026</p>
          <FadeIn>
            <h1 className="mx-auto max-w-5xl text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] text-balance">
              Bridging the people who build AI
              <br />
              and the people who <em>live with it</em>.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-7 text-sm md:text-base text-foreground/70 tracking-wide text-balance max-w-[60ch] mx-auto">
              UX Researcher · Conversational AI &amp; Consumer Hardware · Currently at Apple ·
              San Jose, CA, open to roles
            </p>
          </FadeIn>
          <div className="my-12 flex justify-center" aria-hidden>
            <span
              className="block h-px w-28"
              style={{ background: "linear-gradient(90deg, transparent, var(--gx-gold), transparent)" }}
            />
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12 items-center text-left">
          <FadeIn className="md:col-span-5">
            <div className="ha-portrait relative">
              <div className="ha-frame relative z-[1] aspect-[4/5] overflow-hidden rounded-[2px]">
                <img
                  src={portrait}
                  alt="Portrait of Emma Khare"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-7 space-y-5">
            <p className="ha-lead text-2xl md:text-[1.6rem] leading-snug text-balance">
              I'm Emma, a UX researcher trained in anthropology and linguistics.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-pretty">
              I moderate conversational-AI research at Apple, design surveys and synthesize
              usability studies for consumer products, build culturally responsive education
              programs, and{" "}
              <span className="ha-say">
                help teams hear what their participants are actually saying.
              </span>
            </p>
            <p className="ha-muted text-base md:text-lg leading-relaxed text-pretty">
              My background blends ethnography, NLP, and IRB-compliant fieldwork. I care about the
              small details that make research trustworthy: protocol design, moderation hygiene,
              consent, and the quiet work of synthesis.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Link to="/projects" className="ha-btn ha-btn-primary">
                See selected work →
              </Link>
              <Link to="/resume" className="ha-btn ha-btn-ghost">
                Résumé
              </Link>
              <Link to="/contact" className="ha-btn ha-btn-ghost">
                Get in touch
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-2.5 gap-y-2 pt-4">
              {[
                "Mixed-methods research",
                "Usability testing",
                "Conversational AI",
                "Moderation & synthesis",
                "Survey & interview design",
              ].map((k) => (
                <span
                  key={k}
                  className="label-mono px-3 py-1 rounded-full border border-hairline"
                >
                  {k}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const featured = projects.slice(0, 4);
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24">
      <div className="flex items-end justify-between mb-12 gap-6">
        <FadeIn>
          <p className="label-mono mb-4">Selected work · 2021, 2026</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Research, end to end.
          </h2>
        </FadeIn>
        <Link to="/projects" className="hidden sm:inline-flex shrink-0 label-mono link-underline">
          View all →
        </Link>
      </div>

      <StaggerList className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {featured.map((p, i) => (
          <StaggerItem key={p.slug} variants={staggerItemVariants}>
            <ProjectCard project={p} index={i} />
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  );
}

const ACCENT_TINT: Record<string, string> = {
  pink: "from-[oklch(0.78_0.16_355)] via-[oklch(0.7_0.18_320)] to-[oklch(0.62_0.22_293)]",
  blue: "from-[oklch(0.78_0.13_220)] via-[oklch(0.68_0.18_258)] to-[oklch(0.55_0.22_280)]",
  coral: "from-[oklch(0.78_0.17_355)] via-[oklch(0.65_0.22_320)] to-[oklch(0.58_0.22_293)]",
  peach: "from-[oklch(0.85_0.14_60)] via-[oklch(0.75_0.18_30)] to-[oklch(0.62_0.22_355)]",
};

function ProjectCard({ project: p, index }: { project: typeof projects[number]; index: number }) {
  const tint = ACCENT_TINT[p.accent] ?? ACCENT_TINT.pink;
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: p.slug }}
      className="group block"
    >
      <motion.div
        layoutId={`cover-${p.slug}`}
        className={`relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${tint} grain-overlay`}
      >
        {p.image && (
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-end p-7">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/90">
            0{index + 1} / {p.year.split(" ")[0]}
          </span>
        </div>
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500"
        />
      </motion.div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <motion.h3
            layoutId={`title-${p.slug}`}
            className="font-display text-2xl md:text-[1.75rem] tracking-tight text-balance"
          >
            {p.title}
          </motion.h3>
          <p className="mt-2 text-foreground/70 text-sm md:text-base max-w-[42ch] text-pretty">
            {p.tagline}
          </p>
        </div>
        <span className="mt-1 text-foreground/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="label-mono px-2 py-1 rounded-full border border-hairline">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}

function StoryFeature() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20 border-t border-hairline">
      <div className="grid gap-10 md:grid-cols-12 items-center">
        <FadeIn className="md:col-span-7">
          <p className="label-mono mb-4">Story · Language revitalization</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-balance leading-[1.05]">
            Myaamiaataweenki was never dead. <span className="gradient-ink">Only asleep.</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/80 leading-relaxed text-pretty max-w-[52ch]">
            I'm a member of the myaamia people, the Miami Tribe of Oklahoma. The story of how our
            language was reawakened, and what it means to preserve data in the age of AI.
          </p>
          <Link
            to="/story"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.02] transition-transform"
          >
            Read the story →
          </Link>
        </FadeIn>
        <FadeIn delay={0.1} className="md:col-span-5">
          <blockquote className="font-display text-2xl md:text-3xl leading-snug text-pretty border-l-2 border-pink-ink pl-6 text-foreground/85">
            Breathing new life into language.
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    { k: "Methods", v: "Generative & evaluative research, ethnography, diary studies, usability testing, interviews, surveys, IRB compliance." },
    { k: "Synthesis", v: "Personas, journey maps, opportunity matrices, mixed-methods evaluation frameworks, stakeholder readouts." },
    { k: "Domains", v: "Conversational AI, consumer hardware, wearables & health, K-12 education, language preservation." },
    { k: "Stack", v: "UserTesting, Python (NLTK, NRCLex, WordNet), Qualitative coding, Excel, Google Sheets." },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <FadeIn className="md:col-span-4">
          <p className="label-mono mb-3">What I bring</p>
          <h2 className="font-display text-4xl md:text-5xl">
            A research <span className="gradient-ink">practice</span>, not a deliverable.
          </h2>
        </FadeIn>
        <StaggerList className="md:col-span-8 divide-y divide-hairline">
          {items.map((it) => (
            <StaggerItem key={it.k} variants={staggerItemVariants} className="grid md:grid-cols-12 gap-4 py-6">
              <p className="md:col-span-3 label-mono pt-1">{it.k}</p>
              <p className="md:col-span-9 text-lg text-foreground/85 text-pretty">{it.v}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-28 border-t border-hairline">
      <FadeIn>
        <p className="label-mono mb-6">Let's talk</p>
        <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance max-w-[16ch]">
          The next study is <span className="gradient-ink">probably yours.</span>
        </h2>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium"
          >
            Start a conversation →
          </Link>
          <a
            href="/emma-khare-resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/80 text-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            Download résumé
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
