import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { getProject, projects, type CaseStudy } from "@/data/projects";
import { FadeIn, PageWrap, StaggerList, StaggerItem, staggerItemVariants } from "@/components/Motion";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — Emma Khare" }] };
    return {
      meta: [
        { title: `${p.title} — Emma Khare` },
        { name: "description", content: p.overview },
        { property: "og:title", content: `${p.title} — Emma Khare` },
        { property: "og:description", content: p.overview },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="label-mono mb-4">404</p>
      <h1 className="font-display text-5xl mb-6">Project not found</h1>
      <Link to="/projects" className="link-underline">Back to all projects</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground text-sm">{error.message}</p>
    </div>
  ),
  component: ProjectPage,
});

const ACCENT_TINT: Record<string, string> = {
  pink: "from-[oklch(0.78_0.16_355)] via-[oklch(0.7_0.18_320)] to-[oklch(0.62_0.22_293)]",
  blue: "from-[oklch(0.78_0.13_220)] via-[oklch(0.68_0.18_258)] to-[oklch(0.55_0.22_280)]",
  coral: "from-[oklch(0.78_0.17_355)] via-[oklch(0.65_0.22_320)] to-[oklch(0.58_0.22_293)]",
  peach: "from-[oklch(0.85_0.14_60)] via-[oklch(0.75_0.18_30)] to-[oklch(0.62_0.22_355)]",
};

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <PageWrap>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-12">
        <FadeIn>
          <Link to="/projects" className="label-mono link-underline">← All projects</Link>
        </FadeIn>

        <div className="mt-10 grid gap-8 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <p className="label-mono mb-5">{p.client} · {p.year}</p>
            <motion.h1
              layoutId={`title-${p.slug}`}
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.98] text-balance"
            >
              {p.title}
            </motion.h1>
          </div>
          <FadeIn delay={0.15} className="md:col-span-4">
            <p className="text-lg text-foreground/80 text-pretty">{p.tagline}</p>
          </FadeIn>
        </div>
      </section>

      <section ref={heroRef} className="relative mt-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            layoutId={`cover-${p.slug}`}
            className={`relative aspect-[16/8] w-full overflow-hidden rounded-3xl bg-gradient-to-br ${ACCENT_TINT[p.accent] ?? ACCENT_TINT.pink} grain-overlay`}
          >
            {p.image && (
              <motion.img
                src={p.image}
                alt={p.title}
                style={{ y }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* META STRIP */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 mt-16 grid gap-8 md:grid-cols-4 border-y border-hairline py-8">
        <Meta label="Role" value={p.role} />
        <Meta label="Client" value={p.client} />
        <Meta label="Year" value={p.year} />
        <Meta label="Focus" value={p.tags.join(", ")} />
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Overview</p>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-8 space-y-6">
            {p.overview.split("\n\n").map((para, i) => (
              <p key={i} className="font-display text-3xl md:text-4xl leading-tight text-balance">
                {para}
              </p>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* VIDEO EMBED (optional) */}
      {p.videoUrl ? (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
          <FadeIn>
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-hairline bg-foreground/[0.03]">
              <iframe
                src={p.videoUrl}
                title={p.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {p.videoCaption ? (
              <p className="label-mono mt-4 text-center">{p.videoCaption}</p>
            ) : null}
          </FadeIn>
        </section>
      ) : null}

      {/* CONTEXT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Context</p>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-8">
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed text-pretty max-w-[58ch]">
              {p.context}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ACTION PHOTO (optional) */}
      {p.actionImage ? (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
          <FadeIn>
            <figure className="space-y-4">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-foreground/[0.04] grain-overlay">
                <img
                  src={p.actionImage}
                  alt={p.actionCaption ?? p.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              {p.actionCaption ? (
                <figcaption className="label-mono text-center">{p.actionCaption}</figcaption>
              ) : null}
            </figure>
          </FadeIn>
        </section>
      ) : null}

      {/* METHODS — hidden when a rich case study is present (rendered side-by-side with Goals below) */}
      {!p.caseStudy && (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
          <div className="grid gap-12 md:grid-cols-12">
            <FadeIn className="md:col-span-4">
              <p className="label-mono">What I did</p>
            </FadeIn>
            <StaggerList className="md:col-span-8 divide-y divide-hairline">
              {p.methods.map((m: string, i: number) => (
                <StaggerItem key={i} variants={staggerItemVariants} className="flex gap-6 py-6 items-start">
                  <span className="font-mono text-sm text-pink-ink pt-1">0{i + 1}</span>
                  <p className="text-lg text-foreground/90 text-pretty">{m}</p>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </section>
      )}

      {p.caseStudy && <CaseStudySections cs={p.caseStudy} methods={p.methods} />}

      {/* OUTCOME */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Outcome</p>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-8">
            <p className="font-display text-3xl md:text-4xl leading-tight text-balance">
              <span className="gradient-ink">{p.outcome}</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* NEXT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-12 border-t border-hairline">
        <Link to="/projects/$slug" params={{ slug: next.slug }} className="group block">
          <p className="label-mono mb-3">Next project ↘</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight group-hover:gradient-ink transition-all">
            {next.title}
          </h2>
        </Link>
      </section>
    </PageWrap>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="label-mono mb-2">{label}</p>
      <p className="text-sm md:text-base text-foreground/90">{value}</p>
    </div>
  );
}

function CaseStudySections({ cs, methods }: { cs: CaseStudy; methods: string[] }) {
  return (
    <>
      {cs.badges && cs.badges.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-4">
          <FadeIn>
            <div className="flex flex-wrap gap-2">
              {cs.badges.map((b) => (
                <span
                  key={b}
                  className="label-mono px-3 py-1 rounded-full border border-hairline"
                >
                  {b}
                </span>
              ))}
            </div>
          </FadeIn>
        </section>
      )}

      {cs.stats && cs.stats.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
          <div className="grid gap-8 md:grid-cols-3 border-y border-hairline py-10">
            {cs.stats.map((s) => (
              <FadeIn key={s.label}>
                <p className="font-display text-5xl md:text-6xl gradient-ink leading-none">
                  {s.value}
                </p>
                <p className="label-mono mt-3">{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {(cs.goals?.length || methods.length) ? (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
          <div className="grid gap-12 md:grid-cols-2">
            {cs.goals && cs.goals.length > 0 && (
              <FadeIn>
                <p className="label-mono mb-6">Research goals</p>
                <ul className="divide-y divide-hairline border-y border-hairline">
                  {cs.goals.map((g, i) => (
                    <li
                      key={i}
                      className="py-4 text-base md:text-lg text-foreground/90 text-pretty"
                    >
                      {g}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}
            {methods.length > 0 && (
              <FadeIn delay={0.1}>
                <p className="label-mono mb-6">Methods</p>
                <ul className="divide-y divide-hairline border-y border-hairline">
                  {methods.map((m, i) => (
                    <li
                      key={i}
                      className="py-4 text-base md:text-lg text-foreground/90 text-pretty"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}
          </div>
        </section>
      ) : null}

      {cs.process && cs.process.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
          <div className="grid gap-12 md:grid-cols-12">
            <FadeIn className="md:col-span-4">
              <p className="label-mono">Research process</p>
            </FadeIn>
            <StaggerList className="md:col-span-8 space-y-10">
              {cs.process.map((step, i) => (
                <StaggerItem
                  key={i}
                  variants={staggerItemVariants}
                  className="flex gap-6 items-start"
                >
                  <span className="font-mono text-sm text-pink-ink pt-2 shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-3 text-balance">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-pretty max-w-[62ch]">
                      {step.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </section>
      )}

      {cs.decisions && cs.decisions.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
          <div className="grid gap-12 md:grid-cols-12">
            <FadeIn className="md:col-span-4">
              <p className="label-mono">Key research decisions</p>
            </FadeIn>
            <StaggerList className="md:col-span-8 divide-y divide-hairline">
              {cs.decisions.map((d, i) => (
                <StaggerItem
                  key={i}
                  variants={staggerItemVariants}
                  className="py-5 text-base md:text-lg text-foreground/85 text-pretty"
                >
                  {d}
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </section>
      )}

      {cs.engagement && cs.engagement.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
          <div className="grid gap-12 md:grid-cols-12">
            <FadeIn className="md:col-span-4">
              <p className="label-mono">Broader engagement at Apple</p>
            </FadeIn>
            <StaggerList className="md:col-span-8 space-y-6">
              {cs.engagement.map((e, i) => (
                <StaggerItem
                  key={i}
                  variants={staggerItemVariants}
                  className="border border-hairline rounded-2xl p-6"
                >
                  <h4 className="font-display text-xl md:text-2xl mb-2">
                    {e.title}
                  </h4>
                  <p className="text-foreground/80 text-pretty">{e.body}</p>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </section>
      )}
    </>
  );
}
