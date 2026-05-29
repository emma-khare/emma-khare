import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { Blob, Window, SearchPill } from "@/components/Decor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emma Khare — UX Researcher" },
      { name: "description", content: "Mixed-methods UX researcher working across conversational AI, consumer hardware, and cross-cultural research. Currently at Apple via INSPYR Solutions." },
      { property: "og:title", content: "Emma Khare — UX Researcher" },
      { property: "og:description", content: "Mixed-methods UX researcher working across conversational AI, consumer hardware, and cross-cultural research." },
    ],
  }),
  component: Index,
});

function CursorIcon() {
  return (
    <svg viewBox="0 0 32 40" className="h-16 w-12 text-foreground drop-shadow-sm" aria-hidden>
      <path
        d="M4 3 L4 30 L11 23 L15 33 L20 31 L16 21 L26 21 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Index() {
  const featured = projects.slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <Blob color="coral" className="left-[35%] top-[10%] h-[520px] w-[520px]" />
        <Blob color="peach" className="left-[55%] top-[40%] h-[300px] w-[300px]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-24 sm:pt-16 sm:pb-32">
          <div className="flex items-start gap-6">
            <div className="hidden flex-col gap-3 pt-2 sm:flex">
              <a
                href="https://www.linkedin.com/in/emmakhare/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center border-[1.5px] border-foreground bg-card text-foreground transition-transform hover:-translate-y-0.5"
              >
                <span className="font-display text-lg leading-none">in</span>
              </a>
              <a
                href="mailto:emmakhare24@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-sm border-[1.5px] border-foreground bg-card text-foreground transition-transform hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="M3 7l9 7 9-7" />
                </svg>
              </a>
            </div>

            <div className="relative flex-1">
              <div className="hidden sm:block">
                <SearchPill label="Designing Human-Centered Research" />
              </div>

              <div className="relative mt-16 sm:mt-28">
                <div className="absolute -left-2 -top-12 hidden sm:block">
                  <CursorIcon />
                </div>
                <h1 className="text-balance font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.92]">
                  emma khare
                  <br />
                  <span className="text-[color:var(--coral-ink)]">ux researcher</span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/85">
                  Mixed-methods researcher with an anthropology background.
                  Currently moderating UX research at Apple across iPhone, iPad,
                  Mac, Vision Pro, and AirPods — with conversational-AI protocols
                  woven through the studies.
                </p>
              </div>

              <div className="mt-12 flex items-end justify-between gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center rounded-full border-[1.5px] border-foreground bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[2px_2px_0_0_var(--foreground)]"
                  >
                    See case studies →
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border-[1.5px] border-foreground bg-card px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Get in touch
                  </Link>
                </div>
                <p className="hidden font-display text-xl text-foreground/70 sm:block">
                  +1 402.889.7712
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENTS */}
      <section className="relative overflow-hidden border-t-[1.5px] border-foreground py-20 sm:py-28">
        <Blob color="blue" className="left-[10%] top-[20%] h-[420px] w-[520px]" />
        <Blob color="peach" className="right-[5%] top-[5%] h-[260px] w-[260px]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
              [ contents ]
            </p>
            <h2 className="font-display text-6xl sm:text-8xl">contents</h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { num: "01", label: "Experience", to: "/about" as const },
              { num: "02", label: "Case Studies", to: "/projects" as const },
              { num: "03", label: "Credentials + Skills", to: "/resume" as const },
            ].map((c) => (
              <Link key={c.num} to={c.to}>
                <Window className="transition-transform hover:-translate-y-1 hover:translate-x-0.5">
                  <div className="flex flex-col items-center gap-6 py-8 text-center">
                    <p className="font-display text-6xl tracking-tight text-foreground">
                      {c.num}
                    </p>
                    <p className="font-display text-2xl text-foreground underline underline-offset-4 decoration-2">
                      {c.label.toLowerCase()}
                    </p>
                  </div>
                </Window>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="font-display text-5xl sm:text-7xl">selected work</h2>
          <Link
            to="/projects"
            className="text-sm font-semibold text-foreground underline underline-offset-4 decoration-[color:var(--coral-ink)] decoration-2"
          >
            view all →
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className={`group block ${i === 0 ? "sm:col-span-2" : ""}`}
            >
              <Window className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-0.5">
                <div className="relative overflow-hidden">
                  <div className={`relative h-56 w-full overflow-hidden rounded-md sm:h-72 ${i === 0 ? "sm:h-80" : ""}`}>
                    <div className="absolute inset-0 bg-secondary" aria-hidden />
                    <Blob color={p.accent as "coral" | "blue" | "pink" | "peach"} className="left-1/2 top-1/2 h-[140%] w-[80%] -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">
                        {p.tags[0]} · {p.year.split(" ")[0]}
                      </p>
                      <h3 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
                        {p.title.toLowerCase()}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm text-foreground/75">
                        {p.tagline}
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 font-display text-2xl text-foreground">→</span>
                  </div>
                </div>
              </Window>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
