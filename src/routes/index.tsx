import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";

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

const accentInk = {
  pink: "text-[color:var(--pink-ink)]",
  blue: "text-[color:var(--blue-ink)]",
  purple: "text-[color:var(--purple-ink)]",
} as const;

function Index() {
  const featured = projects.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-40 h-[480px] w-[480px] rounded-full bg-gradient-trio opacity-30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-32 h-[360px] w-[360px] rounded-full bg-[color:var(--blue)] opacity-20 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--pink)]" />
            San Jose, CA · Currently at Apple
          </p>
          <h1 className="text-balance text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
            UX research for
            <span className="text-[color:var(--purple-ink)]"> conversational AI</span>,
            <span className="text-[color:var(--pink-ink)]"> consumer hardware</span>, and
            <span className="text-[color:var(--blue-ink)]"> the cultures</span> they live inside.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80">
            I'm Emma Khare — a mixed-methods researcher with an anthropology
            background, working on study design, moderation, and synthesis for
            teams shipping into many markets and many languages.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              See research projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 pb-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl">Selected work</h2>
          <Link
            to="/projects"
            className="text-sm font-semibold text-foreground underline-accent"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className={`group relative block overflow-hidden rounded-2xl border border-border bg-card transition-transform hover:-translate-y-1 ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className={`aspect-[16/10] w-full bg-gradient-to-br ${p.cover} ${
                  i === 0 ? "sm:aspect-[21/9]" : ""
                }`}
                aria-hidden
              />
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${accentInk[p.accent]}`}>
                    {p.tags[0]} · {p.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1 max-w-md text-sm text-muted-foreground">
                    {p.tagline}
                  </p>
                </div>
                <span className="mt-1 shrink-0 rounded-full border border-border p-2 text-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
