import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Emma" },
      { name: "description", content: "Get in touch with Emma — email and social channels." },
      { property: "og:title", content: "Contact — Emma" },
      { property: "og:description", content: "Get in touch with Emma." },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    label: "Email",
    handle: "emma@example.com",
    href: "mailto:emma@example.com",
    accent: "pink",
  },
  {
    label: "Instagram",
    handle: "@emma.designs",
    href: "https://instagram.com",
    accent: "purple",
  },
  {
    label: "LinkedIn",
    handle: "in/emma",
    href: "https://linkedin.com",
    accent: "blue",
  },
  {
    label: "Are.na",
    handle: "are.na/emma",
    href: "https://are.na",
    accent: "purple",
  },
] as const;

const accentBar = {
  pink: "bg-[color:var(--pink)]",
  blue: "bg-[color:var(--blue)]",
  purple: "bg-[color:var(--purple)]",
} as const;

function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-20 pb-12 sm:pt-28">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--purple-ink)]">
          Contact
        </p>
        <h1 className="mt-4 text-balance text-5xl sm:text-7xl">
          Say
          <span className="text-[color:var(--pink-ink)]"> hello</span>.
        </h1>
        <p className="mt-6 text-lg text-foreground/80">
          Best reached by email — I usually respond within two business days.
          For quicker things or to follow along with what I'm making, the other
          channels work too.
        </p>
      </header>

      <ul className="mt-16 grid gap-4 sm:grid-cols-2">
        {channels.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
            >
              <span
                aria-hidden
                className={`absolute left-0 top-0 h-full w-1 ${accentBar[c.accent]}`}
              />
              <div className="pl-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-2 font-display text-2xl text-foreground">
                  {c.handle}
                </p>
              </div>
              <span className="rounded-full border border-border p-2 text-foreground transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
