import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { FadeIn, WordReveal, StaggerList, StaggerItem, staggerItemVariants, PageWrap } from "@/components/Motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emma Khare — UX Researcher" },
      {
        name: "description",
        content:
          "Selected research from Emma Khare — UX research across conversational AI, consumer hardware, education, and language preservation.",
      },
      { property: "og:title", content: "Emma Khare — UX Researcher" },
      { property: "og:description", content: "Selected UX research across conversational AI, wearables, and community programs." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageWrap>
      <Hero />
      <FeaturedWork />
      <Capabilities />
      <Closing />
    </PageWrap>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yPink = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yBlue = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yPurple = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* ambient blobs */}
      <motion.div style={{ y: yPink }} className="blob blob-pink h-[420px] w-[420px] -top-20 -left-20" />
      <motion.div style={{ y: yBlue }} className="blob blob-blue h-[520px] w-[520px] top-40 -right-32" />
      <motion.div style={{ y: yPurple }} className="blob blob-purple h-[340px] w-[340px] top-[60vh] left-1/3" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-32 lg:pt-40 lg:pb-48">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-10 bg-foreground" />
          <span className="label-mono">Portfolio — vol. 01 · 2026</span>
        </div>

        <h1 className="font-display text-[clamp(2.75rem,8.5vw,7rem)] leading-[0.95] tracking-[-0.035em] text-balance max-w-[18ch]">
          <WordReveal
            text="I design the space between insight and action."
            highlight="insight"
          />
        </h1>

        <FadeIn delay={0.5} className="mt-12 grid gap-10 md:grid-cols-12">
          <p className="md:col-span-7 text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty max-w-[58ch]">
            I'm <span className="text-foreground font-medium">Emma Khare</span>, a UX researcher
            working across conversational AI, consumer hardware, and community programs. I write
            study protocols, moderate sessions, and turn what people actually do into things teams
            can act on.
          </p>
          <div className="md:col-span-5 md:col-start-9 flex flex-col items-start gap-4 self-end">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.02]"
            >
              See selected work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link to="/contact" className="text-sm link-underline text-foreground/70 hover:text-foreground ml-6">
              Or get in touch
            </Link>
          </div>
        </FadeIn>
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
          <p className="label-mono mb-4">Selected work · 2021 — 2026</p>
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

function Capabilities() {
  const items = [
    { k: "Methods", v: "Generative & evaluative research, ethnography, diary studies, usability testing, interviews, surveys, IRB compliance." },
    { k: "Synthesis", v: "Personas, journey maps, opportunity matrices, mixed-methods evaluation frameworks, stakeholder readouts." },
    { k: "Domains", v: "Conversational AI, consumer hardware, wearables & health, K-12 education, language preservation." },
    { k: "Stack", v: "Figma, UserTesting, Dovetail, Notion, Python (NLTK, NRCLex, WordNet), R, SPSS." },
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
