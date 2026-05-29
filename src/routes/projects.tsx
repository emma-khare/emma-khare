import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Emma" },
      { name: "description", content: "A complete archive of Emma's design work across brand, product, and editorial." },
      { property: "og:title", content: "Projects — Emma" },
      { property: "og:description", content: "A complete archive of Emma's design work." },
    ],
  }),
  component: ProjectsIndex,
});

const accentInk = {
  pink: "text-[color:var(--pink-ink)]",
  blue: "text-[color:var(--blue-ink)]",
  purple: "text-[color:var(--purple-ink)]",
} as const;

function ProjectsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 sm:pt-28">
      <header className="max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--purple-ink)]">
          The Archive
        </p>
        <h1 className="text-5xl sm:text-6xl">All projects</h1>
        <p className="mt-6 text-lg text-foreground/80">
          Six years of selected work. Brand systems, product surfaces, editorial,
          and the occasional packaging detour.
        </p>
      </header>

      <ul className="mt-16 divide-y divide-border border-y border-border">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group grid grid-cols-12 items-center gap-6 py-6 transition-colors hover:bg-secondary/60"
            >
              <div className="col-span-12 sm:col-span-2">
                <div
                  aria-hidden
                  className={`h-16 w-full rounded-lg bg-gradient-to-br ${p.cover}`}
                />
              </div>
              <div className="col-span-12 sm:col-span-7">
                <h2 className="font-display text-2xl sm:text-3xl">{p.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${accentInk[p.accent]}`}>
                  {p.tags[0]}
                </p>
                <p className="mt-1 text-sm text-foreground/80">{p.year}</p>
              </div>
              <div className="col-span-6 flex justify-end sm:col-span-1">
                <span className="rounded-full border border-border p-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
