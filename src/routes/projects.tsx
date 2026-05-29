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

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Emma Khare" },
      { name: "description", content: "An index of selected UX research projects by Emma Khare." },
      { property: "og:title", content: "Projects — Emma Khare" },
      { property: "og:description", content: "Selected UX research projects." },
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
  return (
    <PageWrap>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-12 lg:pt-32">
        <FadeIn>
          <p className="label-mono mb-6">Index · {projects.length} projects</p>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight max-w-[18ch] text-balance">
            Six years of research, <span className="gradient-ink">in their own words.</span>
          </h1>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24">
        <StaggerList className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <StaggerItem key={p.slug} variants={staggerItemVariants}>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
                <motion.div
                  layoutId={`cover-${p.slug}`}
                  className={`relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${ACCENT_TINT[p.accent] ?? ACCENT_TINT.pink} grain-overlay`}
                >
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
            </StaggerItem>
          ))}
        </StaggerList>
      </section>
    </PageWrap>
  );
}
