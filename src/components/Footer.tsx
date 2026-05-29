import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t-[1.5px] border-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-4xl text-foreground sm:text-5xl">
              let's talk
            </p>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Open to mixed-methods UX research collaborations and consulting.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="mailto:emmakhare24@gmail.com"
              className="font-medium text-foreground underline underline-offset-4 decoration-[color:var(--coral-ink)] decoration-2 hover:decoration-[3px]"
            >
              emmakhare24@gmail.com
            </a>
            <Link
              to="/contact"
              className="font-medium text-foreground underline underline-offset-4 decoration-[color:var(--blue-ink)] decoration-2"
            >
              All channels
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Emma Khare</p>
          <p>San Jose, CA</p>
        </div>
      </div>
    </footer>
  );
}
