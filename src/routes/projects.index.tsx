import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import {
  FadeIn,
  PageWrap,
  StaggerList,
  StaggerItem,
  staggerItemVariants,
} from "@/components/Motion";
import { TiltCard } from "@/components/Interaction";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Case Studies | Emma Khare" },
      {
        name: "description",
        content:
          "AI measurement and evaluation case studies by Emma Khare: instrument design, statistical validation, and human-AI product research.",
      },
      { property: "og:title", content: "Case Studies | Emma Khare" },
      {
        property: "og:description",
        content: "AI measurement and evaluation case studies by Emma Khare.",
      },
    ],
  }),
  component: ProjectsIndex,
});

// Cover fallbacks stay inside the garnet-and-gold palette while images load.
const ACCENT_TINT: Record<string, string> = {
  pink: "from-[oklch(0.84_0.05_18)] via-[oklch(0.7_0.09_14)] to-[oklch(0.45_0.17_14)]",
  blue: "from-[oklch(0.92_0.05_85)] via-[oklch(0.8_0.08_80)] to-[oklch(0.61_0.11_80)]",
  coral: "from-[oklch(0.78_0.09_22)] via-[oklch(0.58_0.15_12)] to-[oklch(0.41_0.16_14)]",
  peach: "from-[oklch(0.93_0.04_72)] via-[oklch(0.84_0.06_60)] to-[oklch(0.66_0.1_45)]",
};

function ProjectsIndex() {
  const featured = projects.slice(0, 4);
  const more = projects.slice(4);
  return (
    <PageWrap>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-12 lg:pt-32">
        <FadeIn>
          <p className="label-mono mb-6">Index · {projects.length} case studies</p>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight max-w-[16ch] text-balance">
            Evaluating AI is a <span className="gradient-ink">measurement problem.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-foreground/75 leading-relaxed text-pretty max-w-[58ch]">
            I design rubrics, run experiments, and check the statistics behind them, then talk to
            the people the numbers describe. Linguistics and anthropology taught me to question an
            instrument; product research taught me to ship one. LLM judges, tutoring transcripts,
            fluency scales: in each case the question is whether the number measures the thing it
            names.
          </p>
        </FadeIn>
      </section>

      {/* Featured: AI measurement & evaluation gave the brand */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-16">
        <FadeIn>
          <p className="label-mono mb-8">Featured · AI measurement &amp; evaluation</p>
        </FadeIn>
        <StaggerList className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featured.map((p, i) => (
            <StaggerItem key={p.slug} variants={staggerItemVariants}>
              <ProjectCard p={p} i={i} />
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* More: applied AI product research, then language & fieldwork */}
      {more.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-14 pb-24 border-t border-hairline">
          <FadeIn>
            <p className="label-mono mb-8">More research · applied AI, language &amp; fieldwork</p>
          </FadeIn>
          <StaggerList className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {more.map((p, i) => (
              <StaggerItem key={p.slug} variants={staggerItemVariants}>
                <ProjectCard p={p} i={i + featured.length} />
              </StaggerItem>
            ))}
          </StaggerList>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24 border-t border-hairline pt-14">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="font-display text-3xl md:text-4xl tracking-tight text-balance max-w-[26ch]">
            Have a study that belongs on this page?{" "}
            <span className="gradient-ink">Tell me about it.</span>
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.02] transition-transform">
            Start an email →
          </Link>
        </div>
      </section>
    </PageWrap>
  );
}

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  return (
    <TiltCard className="h-full rounded-3xl">
      <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
        <motion.div
          layoutId={`cover-${p.slug}`}
          className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br ${ACCENT_TINT[p.accent] ?? ACCENT_TINT.pink} grain-overlay`}
        >
          {p.image && (
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3a1c25]/60 via-[#3a1c25]/12 to-transparent" />
          <span aria-hidden className="cover-spot" />
          <div className="absolute inset-0 flex items-end p-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/90">
              {String(i + 1).padStart(2, "0")} · {p.year}
            </span>
          </div>
          <span className="pointer-events-none absolute bottom-5 right-5 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-background/95 px-3.5 py-2 text-[10px] uppercase tracking-[0.14em] text-foreground opacity-0 shadow-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View study <span aria-hidden>↗</span>
          </span>
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
          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
            ↗
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="label-mono px-2 py-1 rounded-full border border-hairline transition-colors group-hover:border-pink-ink/30"
            >
              {t}
            </span>
          ))}
        </div>
      </Link>
    </TiltCard>
  );
}
