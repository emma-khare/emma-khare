import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { getProject, projects, type CaseStudy } from "@/data/projects";
import { FadeIn, PageWrap, StaggerList, StaggerItem, staggerItemVariants } from "@/components/Motion";
import { BleedPhoto, CountUp, ZoomImage } from "@/components/Interaction";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Case study, Emma Khare" }] };
    return {
      meta: [
        { title: `${p.title}, Emma Khare` },
        { name: "description", content: p.overview },
        { property: "og:title", content: `${p.title}, Emma Khare` },
        { property: "og:description", content: p.overview },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="label-mono mb-4">404</p>
      <h1 className="font-display text-5xl mb-6">Case study not found</h1>
      <Link to="/projects" className="link-underline">Back to all case studies</Link>
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
          <Link to="/projects" className="label-mono link-underline">← All case studies</Link>
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
            {p.repoUrl && (
              <a
                href={p.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="label-mono link-underline mt-5 inline-block"
              >
                Read the code on GitHub ↗
              </a>
            )}
          </FadeIn>
        </div>
      </section>

      <section ref={heroRef} className="relative mt-12 overflow-clip md:mt-16">
        {p.coverGround && p.image ? (
          <motion.div
            layoutId={`cover-${p.slug}`}
            className="relative h-[34vh] min-h-[220px] w-full md:h-[46vh]"
          >
            <motion.div style={{ y, top: "-14%", bottom: "-14%" }} className="absolute inset-x-0">
              <img src={p.image} alt="" aria-hidden className="cover-ground-img" />
            </motion.div>
          </motion.div>
        ) : (
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
              <motion.div
                style={{ opacity }}
                className="absolute inset-0 bg-gradient-to-t from-[#3a1c25]/45 via-[#3a1c25]/10 to-transparent"
              />
            </motion.div>
          </div>
        )}
      </section>

      {/* META STRIP */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 mt-16 grid gap-8 md:grid-cols-4 border-y border-hairline py-8">
        <Meta label="Role" value={p.role} />
        <Meta label="Client" value={p.client} />
        <Meta label="Year" value={p.year} />
        <Meta label="Focus" value={p.tags.join(", ")} />
      </section>

      {p.caseStudy?.badges && p.caseStudy.badges.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-8">
          <FadeIn>
            <div className="flex flex-wrap gap-2">
              {p.caseStudy.badges.map((b) => (
                <span key={b} className="label-mono px-3 py-1 rounded-full border border-hairline">
                  {b}
                </span>
              ))}
            </div>
          </FadeIn>
        </section>
      )}

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-16 pb-12">
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
        <Figure caption={p.videoCaption}>
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-hairline bg-foreground/[0.03]">
            <iframe
              src={p.videoUrl}
              title={p.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Figure>
      ) : null}

      {/* 1, CONTEXT */}
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

      {/* ACTION PHOTO (optional), every visual carries an insight via its caption */}
      {p.actionImage ? (
        p.actionImageBleed ? (
          <div className="my-6">
            <BleedPhoto
              src={p.actionImage}
              alt={p.actionCaption ?? p.title}
              caption={p.actionCaption}
              className="h-[44vh] min-h-[240px] md:h-[58vh]"
            />
          </div>
        ) : (
          <Figure caption={p.actionCaption}>
            <ZoomImage
              src={p.actionImage}
              alt={p.actionCaption ?? p.title}
              className="aspect-[16/9]"
            />
          </Figure>
        )
      ) : null}

      {/* 2, IMPACT (prominent; can't scroll past the results) */}
      <Impact outcome={p.outcome} stats={p.caseStudy?.stats} />

      {/* 3, APPROACH (the how) */}
      {p.caseStudy ? (
        <Approach cs={p.caseStudy} methods={p.methods} />
      ) : (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
          <div className="grid gap-12 md:grid-cols-12">
            <FadeIn className="md:col-span-4">
              <p className="label-mono">Approach</p>
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

      {/* 4, LESSONS LEARNED */}
      <Lessons items={p.lessons} />

      {/* 5, LIMITATIONS & HONEST SCOPE */}
      <Limitations items={p.limitations} />

      {/* NEXT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-12 border-t border-hairline">
        <Link to="/projects/$slug" params={{ slug: next.slug }} className="group block">
          <p className="label-mono mb-3">Next case study ↘</p>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight group-hover:gradient-ink transition-all">
              {next.title}
            </h2>
            <span
              aria-hidden
              className="mb-2 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/25 text-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background md:flex"
            >
              ↗
            </span>
          </div>
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

/** A visual with a required-by-convention insight caption ("why it takes up space"). */
function Figure({ caption, children }: { caption?: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
      <FadeIn>
        <figure className="space-y-4">
          {children}
          {caption ? (
            <figcaption className="label-mono text-center max-w-[70ch] mx-auto">{caption}</figcaption>
          ) : null}
        </figure>
      </FadeIn>
    </section>
  );
}

/** Renders **…** spans from the data as bold, so key values carry the impact line. */
function Highlight({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((chunk, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold not-italic text-foreground">
            {chunk}
          </strong>
        ) : (
          <span key={i}>{chunk}</span>
        ),
      )}
    </>
  );
}

function Impact({
  outcome,
  stats,
}: {
  outcome: string;
  stats?: { label: string; value: string }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
      <FadeIn>
        <div className="rounded-3xl border border-hairline bg-foreground/[0.03] px-6 md:px-12 py-12 md:py-16">
          <p className="label-mono mb-8">Impact</p>
          <p className="font-display text-3xl md:text-5xl leading-[1.08] text-balance max-w-[24ch]">
            <span className="gradient-ink">
              <Highlight text={outcome} />
            </span>
          </p>
          {stats && stats.length > 0 && (
            <div className="mt-12 grid gap-8 md:grid-cols-3 border-t border-hairline pt-10">
              {stats.map((s) => (
                <FadeIn key={s.label}>
                  <CountUp
                    value={s.value}
                    className="block font-display text-6xl md:text-7xl gradient-ink leading-none not-italic tabular-nums"
                  />
                  <p className="label-mono mt-3">{s.label}</p>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

function Lessons({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12 border-t border-hairline">
      <div className="grid gap-12 md:grid-cols-12">
        <FadeIn className="md:col-span-4">
          <p className="label-mono">Lessons learned</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            What I'd <span className="gradient-ink">carry forward.</span>
          </h2>
        </FadeIn>
        <StaggerList className="md:col-span-8 divide-y divide-hairline border-y border-hairline">
          {items.map((l, i) => (
            <StaggerItem
              key={i}
              variants={staggerItemVariants}
              className="flex gap-6 items-start py-6"
            >
              <span className="font-mono text-sm text-pink-ink pt-1 shrink-0">0{i + 1}</span>
              <p className="text-lg md:text-xl text-foreground/90 text-pretty leading-relaxed">{l}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}

function Limitations({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12 border-t border-hairline">
      <div className="grid gap-12 md:grid-cols-12">
        <FadeIn className="md:col-span-4">
          <p className="label-mono">Limitations</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            What this <span className="gradient-ink">does not show.</span>
          </h2>
        </FadeIn>
        <StaggerList className="md:col-span-8 divide-y divide-hairline border-y border-hairline">
          {items.map((l, i) => (
            <StaggerItem
              key={i}
              variants={staggerItemVariants}
              className="flex gap-6 items-start py-6"
            >
              <span className="font-mono text-sm text-pink-ink pt-1 shrink-0">0{i + 1}</span>
              <p className="text-lg md:text-xl text-foreground/90 text-pretty leading-relaxed">{l}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}

/** The "how", research goals, methods, process, decisions, engagement. */
function Approach({ cs, methods }: { cs: CaseStudy; methods: string[] }) {
  return (
    <>
      {(cs.goals?.length || methods.length) ? (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
          <div className="grid gap-12 md:grid-cols-2">
            {cs.goals && cs.goals.length > 0 && (
              <FadeIn>
                <p className="label-mono mb-6">Research goals</p>
                <ul className="divide-y divide-hairline border-y border-hairline">
                  {cs.goals.map((g, i) => (
                    <li key={i} className="py-4 text-base md:text-lg text-foreground/90 text-pretty">
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
                    <li key={i} className="py-4 text-base md:text-lg text-foreground/90 text-pretty">
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
                <StaggerItem key={i} variants={staggerItemVariants} className="flex gap-6 items-start">
                  <span className="font-mono text-sm text-pink-ink pt-2 shrink-0">0{i + 1}</span>
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
                  <h4 className="font-display text-xl md:text-2xl mb-2">{e.title}</h4>
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
