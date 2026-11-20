import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { projects } from "@/data/projects";
import {
  FadeIn,
  StaggerList,
  StaggerItem,
  staggerItemVariants,
  PageWrap,
  WordReveal,
} from "@/components/Motion";
import { Magnetic, Marquee, TiltCard } from "@/components/Interaction";
import portrait from "@/assets/emma-headshot.jpg";
import heroWash from "@/assets/hero-wash.webp";
import sectionBand from "@/assets/section-band.webp";
import paperTile from "@/assets/paper-tile.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emma Khare | AI Evaluation & Measurement · Computational Linguistics" },
      {
        name: "description",
        content:
          "Evaluation and measurement researcher specializing in the validity of AI measurement: LLM evaluation, inter-rater reliability, psychometrics, and language data. Currently at Apple. San Jose, CA.",
      },
      { property: "og:title", content: "Emma Khare | AI Evaluation & Measurement · Computational Linguistics" },
      { property: "og:description", content: "Evaluation researcher: AI measurement validity, LLM judges, inter-rater reliability, and computational linguistics. Currently at Apple." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageWrap>
      <Hero />
      <FeaturedWork />
      <SectionBand />
      <StoryFeature />
      <Capabilities />
      <Closing />
    </PageWrap>
  );
}

const HERO_KEYWORDS = [
  "Measurement validity",
  "LLM evaluation",
  "Inter-rater reliability",
  "Experiment design",
  "Ethnographic fieldwork",
  "Language data",
];

/** Portrait that leans with the pointer, floating gently on its own. */
function HeroPortrait() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 110, damping: 18, mass: 0.5 });
  const y = useSpring(my, { stiffness: 110, damping: 18, mass: 0.5 });

  return (
    <div
      className="ha-portrait relative"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - (r.left + r.width / 2)) / r.width) * 22);
        my.set(((e.clientY - (r.top + r.height / 2)) / r.height) * 22);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <span aria-hidden className="ha-orbit" />
      <motion.div style={reduce ? undefined : { x, y }} className="relative z-[1]">
        <div className="ha-frame ha-float relative aspect-[4/5] overflow-hidden rounded-[2px]">
          <img
            src={portrait}
            alt="Portrait of Emma Khare"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <p className="relative z-[1] mt-7 text-center font-display text-2xl font-semibold md:text-3xl tracking-tight gradient-ink">
          Emma Khare
        </p>
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-archival relative overflow-hidden">
      <div aria-hidden className="hero-wash">
        <img src={heroWash} alt="" className="hero-wash-img" />
        <span className="hero-wash-fade" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 lg:px-12 pt-20 pb-24 lg:pt-28">
        <div className="text-center">
          <p className="ha-label mb-7">Emma Khare, AI Evaluation & Measurement · 2026</p>
          <h1 className="mx-auto max-w-5xl text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] text-balance">
            <WordReveal
              text={"An AI can be accurate and still not right.\nI measure the difference."}
              highlight="measure the difference"
            />
          </h1>
          <FadeIn delay={0.15}>
            <p className="mt-7 text-sm md:text-base text-foreground/70 tracking-wide text-balance max-w-[60ch] mx-auto">
              AI Evaluation &amp; Measurement · Computational Linguistics · Currently at Apple ·
              San Jose, CA
            </p>
          </FadeIn>
          <div className="my-12 flex justify-center" aria-hidden>
            <span
              className="rule-draw block h-px w-28"
              style={{ background: "linear-gradient(90deg, transparent, var(--gx-gold), transparent)" }}
            />
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12 items-center text-left">
          <FadeIn className="md:col-span-5">
            <HeroPortrait />
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-7 space-y-5">
            <p className="ha-lead text-2xl md:text-[1.6rem] leading-snug text-balance">
              Test the instrument. Find the missing data. Give the data a{" "}
              <span className="ha-say">voice</span>.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-pretty">
              At Apple I led moderation on a multi-team study of naturalistic AI audio across
              devices, and I now coordinate studies there. Before that I studied my tribe's
              language,{" "}
              <Link to="/story" className="link-underline text-pink-ink">
                myaamiaataweenki
              </Link>
              , declared extinct and rebuilt from archival recordings and elders' speech. It taught
              me how much people carry in their words, and how easily a{" "}
              <span className="ha-say">measurement misses it.</span>
            </p>
            <p className="ha-muted text-base md:text-lg leading-relaxed text-pretty">
              I've also built evaluation skills through{" "}
              <Link to="/now" className="link-underline text-pink-ink">
                a self-directed research portfolio
              </Link>{" "}
              on LLM judge reliability, instrument validation, and AI tutoring experiments.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-pretty">
              I'm looking for a team where language, culture, and fieldwork shape how AI gets built
              and evaluated. Start with the case studies, then{" "}
              <Link to="/contact" className="link-underline text-pink-ink">
                tell me what your team is working on
              </Link>
              .
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Magnetic strength={0.15}>
                <Link to="/projects" className="ha-btn ha-btn-primary">
                  See the work →
                </Link>
              </Magnetic>
              <Magnetic strength={0.15}>
                <Link to="/resume" className="ha-btn ha-btn-ghost">
                  Résumé
                </Link>
              </Magnetic>
              <Magnetic strength={0.15}>
                <Link to="/contact" className="ha-btn ha-btn-ghost">
                  Work with me
                </Link>
              </Magnetic>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="relative border-t border-[rgba(195,154,60,0.35)] bg-[rgba(255,255,255,0.35)] py-3.5">
        <Marquee items={HERO_KEYWORDS} />
      </div>
    </section>
  );
}

/** A pause between the work and the story: paper, gold rules, one leaf. */
function SectionBand() {
  return (
    <div aria-hidden className="relative h-24 w-full overflow-hidden md:h-32">
      <img
        src={sectionBand}
        alt=""
        loading="lazy"
        className="band-blend h-full w-full object-cover object-center"
      />
    </div>
  );
}

function FeaturedWork() {
  const featured = projects.slice(0, 4);
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24">
      <div className="flex items-end justify-between mb-12 gap-6">
        <FadeIn>
          <p className="label-mono mb-4">Selected work · 2021, 2026</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Start with the <span className="gradient-ink">proof.</span>
          </h2>
        </FadeIn>
        <Link to="/projects" className="hidden sm:inline-flex shrink-0 label-mono link-underline">
          All {projects.length} case studies →
        </Link>
      </div>

      <StaggerList className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {featured.map((p, i) => (
          <StaggerItem key={p.slug} variants={staggerItemVariants}>
            <ProjectCard project={p} index={i} />
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  );
}

// Cover fallbacks stay inside the garnet-and-gold palette while images load.
const ACCENT_TINT: Record<string, string> = {
  pink: "from-[oklch(0.84_0.05_18)] via-[oklch(0.7_0.09_14)] to-[oklch(0.45_0.17_14)]",
  blue: "from-[oklch(0.92_0.05_85)] via-[oklch(0.8_0.08_80)] to-[oklch(0.61_0.11_80)]",
  coral: "from-[oklch(0.78_0.09_22)] via-[oklch(0.58_0.15_12)] to-[oklch(0.41_0.16_14)]",
  peach: "from-[oklch(0.93_0.04_72)] via-[oklch(0.84_0.06_60)] to-[oklch(0.66_0.1_45)]",
};

function ProjectCard({ project: p, index }: { project: typeof projects[number]; index: number }) {
  const tint = ACCENT_TINT[p.accent] ?? ACCENT_TINT.pink;
  return (
    <TiltCard className="h-full rounded-3xl">
      <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
        <motion.div
          layoutId={`cover-${p.slug}`}
          className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br ${tint} grain-overlay`}
        >
          {p.image && (
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3a1c25]/60 via-[#3a1c25]/12 to-transparent" />
          <span aria-hidden className="cover-spot" />
          <div className="absolute inset-0 flex items-end p-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/90">
              0{index + 1} / {p.year.split(" ")[0]}
            </span>
          </div>
          <span className="pointer-events-none absolute bottom-5 right-5 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-background/95 px-3.5 py-2 text-[10px] uppercase tracking-[0.14em] text-foreground opacity-0 shadow-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View study <span aria-hidden>↗</span>
          </span>
        </motion.div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <motion.h3
              layoutId={`title-${p.slug}`}
              className="font-display text-2xl md:text-[1.75rem] tracking-tight text-balance"
            >
              {p.title}
            </motion.h3>
            <p className="mt-2 text-foreground/70 text-sm md:text-base max-w-[42ch] text-pretty">
              {p.tagline}
            </p>
          </div>
          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
            ↗
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="label-mono px-2 py-1 rounded-full border border-hairline transition-colors group-hover:border-pink-ink/30"
            >
              {t}
            </span>
          ))}
        </div>
      </Link>
    </TiltCard>
  );
}

function StoryFeature() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20">
      <div className="grid gap-10 md:grid-cols-12 items-center">
        <FadeIn className="md:col-span-7">
          <p className="label-mono mb-4">Story · Why I measure</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-balance leading-[1.05]">
            An extinct language taught me <span className="gradient-ink">to question the instrument.</span>
          </h2>
          <p className="mt-5 text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty max-w-[52ch]">
            Rebuilding myaamiaataweenki from archives is where I learned to check a source before
            trusting it. That habit is the job now.
          </p>
          <Link
            to="/story"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.02] transition-transform"
          >
            Read the story →
          </Link>
        </FadeIn>
        <FadeIn delay={0.1} className="md:col-span-5">
          <blockquote className="font-display text-2xl md:text-3xl leading-snug text-pretty border-l-2 border-pink-ink pl-6 text-foreground/85">
            Breathing new life into language.
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    { k: "Methods", v: "Generative & evaluative research, ethnography, diary studies, usability testing, interviews, surveys, IRB compliance." },
    { k: "Synthesis", v: "Personas, journey maps, opportunity matrices, mixed-methods evaluation frameworks, stakeholder readouts." },
    { k: "Domains", v: "Conversational AI, consumer hardware, wearables & health, K-12 education, language preservation." },
    { k: "Stack", v: "Python (stdlib, NLTK), ICC & Cohen's kappa, bootstrap confidence intervals, evaluation rubrics, LLM-as-judge pipelines, qualitative coding, UserTesting." },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <FadeIn className="md:col-span-4">
          <p className="label-mono mb-3">What I bring</p>
          <h2 className="font-display text-4xl md:text-5xl">
            How I run <span className="gradient-ink">research.</span>
          </h2>
        </FadeIn>
        <StaggerList className="md:col-span-8 divide-y divide-hairline">
          {items.map((it) => (
            <StaggerItem key={it.k} variants={staggerItemVariants} className="grid md:grid-cols-12 gap-4 py-6">
              <p className="md:col-span-3 label-mono pt-1">{it.k}</p>
              <p className="md:col-span-9 text-lg text-foreground/85 text-pretty">{it.v}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-clip px-6 lg:px-12 py-28 border-t border-hairline">
      <div aria-hidden className="section-ground ground-paper">
        <img src={paperTile} alt="" loading="lazy" />
      </div>
      <FadeIn className="relative">
        <p className="label-mono mb-6">Let's talk</p>
        <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance max-w-[18ch]">
          Hire the person who <span className="gradient-ink">checks the number.</span>
        </h2>
        <p className="mt-7 text-lg md:text-xl leading-relaxed text-pretty max-w-[46ch]">
          Evaluation, measurement, and conversational AI research. Your data, my method, one team.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium"
          >
            Start a conversation →
          </Link>
          <a
            href="/emma-khare-resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/80 text-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            Download résumé
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
