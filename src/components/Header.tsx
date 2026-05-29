import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-display text-2xl tracking-tight text-foreground"
          aria-label="Emma — home"
        >
          Emma
          <span className="text-[color:var(--pink-ink)]">.</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{
                    className:
                      "rounded-md px-3 py-2 text-sm font-medium text-foreground bg-[color:var(--secondary)]",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
