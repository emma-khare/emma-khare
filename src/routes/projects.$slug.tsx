import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Emma` },
          { name: "description", content: loaderData.project.tagline },
          { property: "og:title", content: `${loaderData.project.title} — Emma` },
          { property: "og:description", content: loaderData.project.tagline },
        ]
      : [{ title: "Project — Emma" }],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="text-4xl">Project not found</h1>
      <p className="mt-4 text-muted-foreground">
        That project doesn't exist (yet).
      </p>
      <Link
        to="/projects"
        className="mt-8 inline-flex rounded-full border border-border px-5 py-2 text-sm font-semibold"
      >
        ← Back to all projects
      </Link>
    </div>
  ),
  component: ProjectDetail,
});

const accentInk = {
  pink: "text-[color:var(--pink-ink)]",
  blue: "text-[color:var(--blue-ink)]",
  purple: "text-[color:var(--coral-ink)]",
} as const;

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article>
      <div className="mx-auto max-w-4xl px-6 pt-16 sm:pt-24">
        <Link
          to="/projects"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          ← All projects
        </Link>
        <p className={`mt-8 text-xs font-semibold uppercase tracking-[0.18em] ${accentInk[project.accent]}`}>
          {project.tags.join(" · ")}
        </p>
        <h1 className="mt-4 text-balance text-5xl sm:text-7xl">{project.title}</h1>
        <p className="mt-6 max-w-2xl text-xl text-foreground/80">{project.tagline}</p>

        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-border py-6 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Client</dt>
            <dd className="mt-1 font-medium text-foreground">{project.client}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Role</dt>
            <dd className="mt-1 font-medium text-foreground">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Year</dt>
            <dd className="mt-1 font-medium text-foreground">{project.year}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Discipline</dt>
            <dd className="mt-1 font-medium text-foreground">{project.tags[0]}</dd>
          </div>
        </dl>
      </div>

      {/* Cover */}
      <div className="mx-auto mt-12 max-w-6xl px-6">
        <div
          aria-hidden
          className={`aspect-[21/9] w-full rounded-3xl bg-gradient-to-br ${project.cover}`}
        />
      </div>

      {/* Body */}
      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
        <h2 className="font-display text-2xl text-foreground md:text-3xl">Overview</h2>
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-foreground/85">{project.overview}</p>
        </div>

        <h2 className="font-display text-2xl text-foreground md:text-3xl">Context</h2>
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-foreground/85">{project.context}</p>
        </div>

        <h2 className="font-display text-2xl text-foreground md:text-3xl">What I did</h2>
        <div className="md:col-span-2">
          <ol className="space-y-4">
            {project.methods.map((step: string, i: number) => (
              <li key={i} className="flex gap-4">
                <span className={`font-display text-2xl ${accentInk[project.accent]}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg leading-relaxed text-foreground/85">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <h2 className="font-display text-2xl text-foreground md:text-3xl">Outcome</h2>
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-foreground/85">{project.outcome}</p>
        </div>
      </div>

      {/* Next */}
      <div className="mx-auto mt-24 max-w-6xl px-6">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group block overflow-hidden rounded-2xl border border-border bg-card"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className={`aspect-[16/10] bg-gradient-to-br ${next.cover}`} aria-hidden />
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Next project
              </p>
              <h3 className="mt-3 font-display text-4xl">{next.title}</h3>
              <p className="mt-2 text-muted-foreground">{next.tagline}</p>
              <span className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground underline-accent">
                Continue →
              </span>
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
}
