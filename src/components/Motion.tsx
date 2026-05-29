import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef, useState, type ReactNode, type ComponentPropsWithoutRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  y = 16,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const MotionTag = motion[As] as typeof motion.div;
  return (
    <MotionTag
      ref={ref as never}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function WordReveal({
  text,
  className,
  delay = 0,
  highlight,
}: {
  text: string;
  className?: string;
  delay?: number;
  /** word(s) inside `text` to render with gradient highlight */
  highlight?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 22, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: EASE },
    },
  };
  return (
    <motion.span variants={container} initial="hidden" animate="show" className={className}>
      {words.map((w, i) => {
        const clean = w.replace(/[.,!?]/g, "").toLowerCase();
        const isHl = highlight && highlight.toLowerCase().split(" ").includes(clean);
        return (
          <motion.span
            key={i}
            variants={word}
            className={isHl ? "gradient-ink" : undefined}
            style={{ display: "inline-block", marginRight: "0.28em" }}
          >
            {w}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

export function MagneticLink({
  children,
  strength = 0.25,
  className,
  ...rest
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
} & ComponentPropsWithoutRef<typeof motion.a>) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  return (
    <motion.a
      ref={ref}
      className={className}
      animate={{ x: reduce ? 0 : pos.x, y: reduce ? 0 : pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setPos({
          x: (e.clientX - (r.left + r.width / 2)) * strength,
          y: (e.clientY - (r.top + r.height / 2)) * strength,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

export function StaggerList({
  children,
  className,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    >
      {children}
    </motion.div>
  );
}

export const StaggerItem = motion.div;
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function PageWrap({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
