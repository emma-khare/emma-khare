import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Thin garnet reading-progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX: reduce ? scrollYProgress : smooth,
        background: "linear-gradient(90deg, var(--pink) 0%, var(--purple) 100%)",
      }}
    />
  );
}

/** Wraps any element so it leans gently toward the cursor. */
export function Magnetic({
  children,
  strength = 0.18,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      animate={{ x: reduce ? 0 : pos.x, y: reduce ? 0 : pos.y }}
      transition={{ type: "spring", stiffness: 240, damping: 18, mass: 0.4 }}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setPos({
          x: (e.clientX - (r.left + r.width / 2)) * strength,
          y: (e.clientY - (r.top + r.height / 2)) * strength,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  );
}

/**
 * Card wrapper that tilts in 3D toward the pointer and publishes the cursor
 * position as --mx/--my, which `.cover-spot` uses for a light sweep.
 */
export function TiltCard({
  children,
  className = "",
  max = 5,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rx = useSpring(0, { stiffness: 180, damping: 18, mass: 0.4 });
  const ry = useSpring(0, { stiffness: 180, damping: 18, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={`tilt-card ${className}`}
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.style.setProperty("--mx", `${px * 100}%`);
        el.style.setProperty("--my", `${py * 100}%`);
        if (reduce) return;
        ry.set((px - 0.5) * max * 2);
        rx.set(-(py - 0.5) * max * 2);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Seamless horizontal ticker; pauses on hover and focus. */
export function Marquee({
  items,
  className = "",
  duration = 44,
}: {
  items: string[];
  className?: string;
  duration?: number;
}) {
  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <div className="marquee-track flex w-max" style={{ animationDuration: `${duration}s` }}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center">
                <span className="label-mono no-rule whitespace-nowrap">{item}</span>
                <span aria-hidden className="mx-6 text-[10px] text-purple-ink/70">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Counts a leading number in a string ("0.85", "5,000+", "100%") up on scroll. */
export function CountUp({
  value,
  className = "",
  duration = 1.5,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const parsed = /^(\D*)(-?\d[\d,]*(?:\.\d+)?)([\s\S]*)$/.exec(value);
  const target = parsed ? Number(parsed[2].replace(/,/g, "")) : 0;
  const decimals = parsed && parsed[2].includes(".") ? parsed[2].split(".")[1].length : 0;
  const grouped = parsed ? parsed[2].includes(",") : false;

  const [display, setDisplay] = useState(() => {
    if (!parsed || reduce) return value;
    return `${parsed[1]}${grouped ? "0" : (0).toFixed(decimals)}${parsed[3]}`;
  });

  useEffect(() => {
    if (!parsed || reduce || !inView) return;
    const prefix = parsed[1];
    const suffix = parsed[3];
    const controls = animate(0, target, {
      duration,
      ease: EASE,
      onUpdate: (n) => {
        const body = grouped
          ? n.toLocaleString("en-US", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })
          : n.toFixed(decimals);
        setDisplay(`${prefix}${body}${suffix}`);
      },
      onComplete: () => setDisplay(value),
    });
    return () => controls.stop();
  }, [inView, reduce, target, value, duration, decimals, grouped]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/** Appears once the reader is a screen or so down the page. */
export function BackToTop() {
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 900));

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          whileHover={reduce ? undefined : { y: -3 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-pink-ink/40 bg-background/90 text-pink-ink shadow-[0_10px_30px_-16px_rgba(90,20,40,0.8)] backdrop-blur transition-colors hover:bg-pink hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden
          >
            <path d="M12 19V5" />
            <path d="M6 11l6-6 6 6" />
          </svg>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

/** Figure that opens full-screen on click — charts reward a closer look. */
export function ZoomImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Enlarge: ${alt}`}
          className={`zoom-frame group block w-full overflow-hidden rounded-3xl border border-hairline bg-foreground/[0.04] ${className}`}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-foreground opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
            Zoom <span aria-hidden>⤢</span>
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="w-[94vw] max-w-6xl border-hairline bg-background/98 p-3 sm:p-4">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <img src={src} alt={alt} className="max-h-[78vh] w-full rounded-xl object-contain" />
      </DialogContent>
    </Dialog>
  );
}

/**
 * A photograph that runs the full width of the viewport and fades into the
 * paper at its top and bottom edge — no frame, no card, no rounded corners.
 * `focus` sets the object-position so a wide crop keeps its subject.
 */
export function BleedPhoto({
  src,
  alt,
  caption,
  className = "h-[42vh] min-h-[220px] md:h-[56vh]",
  focus = "50% 50%",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  focus?: string;
}) {
  return (
    <figure className="w-full">
      <div className={`bleed-photo ${className}`}>
        <img src={src} alt={alt} loading="lazy" decoding="async" style={{ objectPosition: focus }} />
      </div>
      {caption ? (
        <figcaption className="label-mono no-rule mx-auto mt-5 max-w-[62ch] px-6 text-center text-balance">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
