import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Hamburger — drawn UI element */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-foreground"
        >
          <span className="h-[2px] w-6 bg-foreground" />
          <span className="h-[2px] w-6 bg-foreground" />
          <span className="h-[2px] w-6 bg-foreground" />
        </button>

        {/* Center search-pill brand */}
        <Link
          to="/"
          aria-label="Emma Khare — home"
          className="hidden items-center gap-3 rounded-full border-[1.5px] border-foreground bg-card px-5 py-2 sm:flex"
        >
          <SearchIcon className="h-4 w-4 text-foreground" />
          <span className="font-display text-xl leading-none">emma khare</span>
        </Link>

        {/* Right-side pagination dots — decorative */}
        <div className="flex flex-col items-end gap-1.5" aria-hidden>
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
        </div>
      </div>

      {/* Drawer nav */}
      {open && (
        <nav
          aria-label="Primary"
          className="absolute left-6 top-20 z-50 w-64 rounded-xl border-[1.5px] border-foreground bg-card p-3 shadow-[6px_6px_0_0_var(--foreground)]"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 font-display text-2xl text-foreground hover:bg-secondary"
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{
                    className:
                      "block rounded-md px-3 py-2 font-display text-2xl text-[color:var(--coral-ink)] bg-secondary",
                  }}
                >
                  {l.label.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
