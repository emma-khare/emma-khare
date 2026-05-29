import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const NAV = [
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Résumé" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { location } = useRouterState();

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-hairline"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-pink">
            <span className="absolute inset-0 rounded-full bg-pink animate-ping opacity-50" />
          </span>
          <span className="font-display text-lg leading-none">Emma Khare</span>
          <span className="label-mono hidden sm:inline">UX Researcher</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => {
            const active = location.pathname.startsWith(item.to);
            return <MagneticNavLink key={item.to} to={item.to} label={item.label} active={active} />;
          })}
        </nav>
      </div>
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
