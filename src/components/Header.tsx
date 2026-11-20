import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const NAV = [
  { to: "/projects", label: "Case Studies" },
  { to: "/story", label: "Story" },
  { to: "/now", label: "Now" },
  { to: "/resume", label: "Résumé" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { location } = useRouterState();
  const [open, setOpen] = useState(false);
  const isActive = (to: string) => location.pathname.startsWith(to);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-hairline"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-12">
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <span className="relative inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-pink">
            <span className="absolute inset-0 rounded-full bg-pink animate-ping opacity-50" />
          </span>
          <span className="font-display text-lg leading-none whitespace-nowrap">Emma Khare</span>
          <span className="label-mono hidden lg:inline">AI Evaluation</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex sm:gap-2">
          {NAV.map((item) => (
            <MagneticNavLink
              key={item.to}
              to={item.to}
              label={item.label}
              active={isActive(item.to)}
            />
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span aria-hidden className="flex w-5 flex-col gap-[5px]">
            <span
              className={`h-px w-full bg-foreground transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-foreground transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-foreground transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-hairline bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 sm:px-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-hairline/60 py-3.5 text-base tracking-tight last:border-b-0 ${
                  isActive(item.to) ? "text-pink-ink" : "text-foreground/80"
                }`}
              >
                {item.label}
                <span aria-hidden className="label-mono">
                  {isActive(item.to) ? "●" : "→"}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
}

function MagneticNavLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      animate={{ x: reduce ? 0 : pos.x, y: reduce ? 0 : pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setPos({
          x: (e.clientX - (r.left + r.width / 2)) * 0.25,
          y: (e.clientY - (r.top + r.height / 2)) * 0.25,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className="relative"
    >
      <Link
        to={to}
        className="relative inline-block px-3 py-2 text-sm tracking-tight text-foreground/80 hover:text-foreground"
      >
        {label}
        {active ? (
          <motion.span
            layoutId="nav-active"
            className="absolute -bottom-0.5 left-3 right-3 h-px bg-foreground"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        ) : null}
      </Link>
    </motion.div>
  );
}
