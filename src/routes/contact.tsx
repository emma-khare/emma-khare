import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Emma Khare" },
      { name: "description", content: "Get in touch with Emma Khare — email, phone, LinkedIn, and full portfolio." },
      { property: "og:title", content: "Contact — Emma Khare" },
      { property: "og:description", content: "Get in touch with Emma Khare." },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    label: "Email",
    handle: "emmakhare24@gmail.com",
    href: "mailto:emmakhare24@gmail.com",
    accent: "pink",
  },
  {
    label: "Phone",
    handle: "(402) 889-7712",
    href: "tel:+14028897712",
    accent: "coral",
  },
  {
    label: "LinkedIn",
    handle: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/emmakhare/",
    accent: "blue",
  },
  {
    label: "Portfolio",
    handle: "Full portfolio on Canva",
    href: "https://www.canva.com/design/DAG0xJz09Fg/X9QebExuSJAM_l8JjgXhpg/view",
    accent: "coral",
  },
] as const;

const accentBar = {
  pink: "bg-[color:var(--pink)]",
  blue: "bg-[color:var(--blue)]",
  purple: "bg-[color:var(--coral)]",
} as const;

function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-20 pb-12 sm:pt-28">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--coral-ink)]">
          Contact
        </p>
        <h1 className="mt-4 text-balance text-5xl sm:text-7xl">
          Say
          <span className="text-[color:var(--pink-ink)]"> hello</span>.
        </h1>
        <p className="mt-6 text-lg text-foreground/80">
          Based in San Jose, CA. Email is the fastest way to reach me — I
          usually respond within two business days. LinkedIn works well for
          quick intros, and the full visual portfolio lives on Canva.
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
