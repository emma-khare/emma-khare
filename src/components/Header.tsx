import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MagneticLink } from "./Motion";

const NAV = [
  { to: "/", label: "Index" },
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
          {NAV.slice(1).map((item) => {
            const active =
              item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);
            return (
              <MagneticLink
                key={item.to}
                href={item.to}
                onClick={(e) => {
                  // let TanStack Link handle it
                  e.preventDefault();
                  window.history.pushState({}, "", item.to);
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
                className="relative px-3 py-2 text-sm tracking-tight text-foreground/80 hover:text-foreground"
              >
                <Link to={item.to} className="relative">
                  {item.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </Link>
              </MagneticLink>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
