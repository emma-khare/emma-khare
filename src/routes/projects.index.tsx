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

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Case Studies, Emma Khare" },
      { name: "description", content: "Selected UX research case studies by Emma Khare." },
      { property: "og:title", content: "Case Studies, Emma Khare" },
      { property: "og:description", content: "Selected UX research case studies." },
    ],
  }),
  component: ProjectsIndex,
});

const ACCENT_TINT: Record<string, string> = {
  pink: "from-[oklch(0.78_0.16_355)] via-[oklch(0.7_0.18_320)] to-[oklch(0.62_0.22_293)]",
  blue: "from-[oklch(0.78_0.13_220)] via-[oklch(0.68_0.18_258)] to-[oklch(0.55_0.22_280)]",
  coral: "from-[oklch(0.78_0.17_355)] via-[oklch(0.65_0.22_320)] to-[oklch(0.58_0.22_293)]",
  peach: "from-[oklch(0.85_0.14_60)] via-[oklch(0.75_0.18_30)] to-[oklch(0.62_0.22_355)]",
};

function ProjectsIndex() {
  const featured = projects.slice(0, 4);
  const more = projects.slice(4);
  return (
    <PageWrap>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-12 lg:pt-32">
        <FadeIn>
          <p className="label-mono mb-6">Index · {projects.length} case studies</p>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight max-w-[18ch] text-balance">
            Research across academia, community, <span className="gradient-ink">and industry.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-foreground/75 leading-relaxed text-pretty max-w-[58ch]">
            The through-line is language — and whether our instruments for studying it are
            trustworthy. From archival phonetics to LLM judges, I ask one question: does this
            measurement mean what it claims?
          </p>
        </FadeIn>
      </section>

      {/* Featured, product / conversational-AI work first */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-16">
        <FadeIn>
          <p className="label-mono mb-8">Featured · conversational AI &amp; product research</p>
        </FadeIn>
        <StaggerList className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featured.map((p, i) => (
            <StaggerItem key={p.slug} variants={staggerItemVariants}>
              <ProjectCard p={p} i={i} />
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* Code, public repositories */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-4">
        <FadeIn>
          <p className="label-mono mb-8">Code · public repositories</p>
          <a
            href="https://github.com/emma-khare/llm-judge-agreement"
            target="_blank"
            rel="noreferrer"
            className="group block border-t border-hairline pt-8"
          >
            <h3 className="font-display text-2xl md:text-[1.75rem] tracking-tight text-balance">
              Can you trust an LLM judge?
              <span className="ml-2 inline-block text-foreground/50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </h3>
            <p className="mt-2 text-foreground/70 text-sm md:text-base max-w-[52ch] text-pretty">
              Cohen&rsquo;s kappa and a bootstrap confidence interval on a human-versus-LLM
              annotation set. Python, standard library only, with the limitations written down.
            </p>
            <p className="mt-3 label-mono text-foreground/60">github.com/emma-khare/llm-judge-agreement</p>
          </a>
        </FadeIn>
      </section>

      {/* More research, community, language & fieldwork */}
      {more.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-14 pb-24 border-t border-hairline">
          <FadeIn>
            <p className="label-mono mb-8">More research · community, language &amp; fieldwork</p>
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
    </PageWrap>
  );
}

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  return (
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-end p-7">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/90">
            {String(i + 1).padStart(2, "0")} · {p.year}
          </span>
        </div>
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
