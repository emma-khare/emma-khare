import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl text-foreground">
              Let's work together
              <span className="text-[color:var(--pink-ink)]">.</span>
            </p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Open to mixed-methods UX research collaborations and consulting.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="mailto:emmakhare24@gmail.com"
              className="font-medium text-foreground underline-accent"
            >
              emmakhare24@gmail.com
            </a>
            <Link to="/contact" className="text-foreground underline-accent">
              All channels
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Emma Khare. All rights reserved.</p>
          <p>San Jose, CA</p>
        </div>
      </div>
    </footer>
  );
}
