import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Emma" },
      { name: "description", content: "Emma is an independent designer working across brand, product, and editorial." },
      { property: "og:title", content: "About — Emma" },
      { property: "og:description", content: "Independent designer working across brand, product, and editorial." },
    ],
  }),
  component: About,
});

const skills = [
  { label: "Brand systems", color: "pink" },
  { label: "Product design", color: "blue" },
  { label: "Editorial", color: "purple" },
  { label: "Type & lettering", color: "pink" },
  { label: "Design systems", color: "blue" },
  { label: "Art direction", color: "purple" },
] as const;

const colorMap = {
  pink: "border-[color:var(--pink)] text-[color:var(--pink-ink)]",
  blue: "border-[color:var(--blue)] text-[color:var(--blue-ink)]",
  purple: "border-[color:var(--purple)] text-[color:var(--purple-ink)]",
} as const;

const timeline = [
  { year: "2024 — Now", role: "Independent designer", detail: "Brand and product work for early-stage teams." },
  { year: "2021 — 2024", role: "Senior Designer, Folio Studio", detail: "Led brand and editorial projects across publishing and tech." },
  { year: "2019 — 2021", role: "Designer, Cobalt Co.", detail: "Product design for a fintech startup." },
  { year: "2018", role: "BFA, Design", detail: "Rhode Island School of Design." },
];

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-20 pb-12 sm:pt-28">
      <header className="grid grid-cols-1 gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--blue-ink)]">
            About
          </p>
          <h1 className="mt-4 text-balance text-5xl sm:text-6xl">
            Hi, I'm Emma — a designer who likes
            <span className="text-[color:var(--purple-ink)]"> small</span>,
            <span className="text-[color:var(--pink-ink)]"> careful</span> things.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              I've spent the last six years designing for studios, startups, and
              the occasional civic project. My favorite kind of work sits at the
              edge of brand and product — the place where typography, voice, and
              interaction have to agree.
            </p>
            <p>
              Outside of client work I write about design fundamentals, draw
              type, and run a small letterpress in my garage.
            </p>
          </div>
        </div>
        <aside className="md:col-span-2">
          <div
            aria-hidden
            className="aspect-[4/5] w-full rounded-3xl bg-gradient-trio"
          />
          <p className="mt-3 text-xs text-muted-foreground">
            Replace with portrait once provided.
          </p>
        </aside>
      </header>

      <section className="mt-20">
        <h2 className="text-3xl">What I work on</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {skills.map((s) => (
            <li
              key={s.label}
              className={`rounded-full border-2 bg-background px-4 py-2 text-sm font-semibold ${colorMap[s.color]}`}
            >
              {s.label}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl">A short timeline</h2>
        <ol className="mt-8 divide-y divide-border border-y border-border">
          {timeline.map((t) => (
            <li key={t.year} className="grid grid-cols-12 gap-6 py-6">
              <p className="col-span-12 text-sm font-semibold text-muted-foreground sm:col-span-3">
                {t.year}
              </p>
              <div className="col-span-12 sm:col-span-9">
                <p className="font-display text-xl text-foreground">{t.role}</p>
                <p className="mt-1 text-foreground/75">{t.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 flex flex-wrap gap-3">
        <Link
          to="/resume"
          className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
        >
          Read the résumé
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
