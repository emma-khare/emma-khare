import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn, PageWrap, StaggerList, StaggerItem, staggerItemVariants } from "@/components/Motion";
import appleAudioImg from "@/assets/project-apple-audio.png";

export const Route = createFileRoute("/projects/apple-conversational-ai")({
  head: () => ({
    meta: [
      { title: "Multi-Device AI Audio Capture Study — Emma Khare" },
      {
        name: "description",
        content:
          "Lead moderator case study: end-to-end research operations for a large-scale, multi-team AI data collection study across Apple consumer hardware platforms.",
      },
      {
        property: "og:title",
        content: "Multi-Device AI Audio Capture Study — Emma Khare",
      },
      {
        property: "og:description",
        content:
          "Lead moderator on a multi-team AI data collection study across Apple consumer hardware.",
      },
    ],
  }),
  component: AppleCaseStudy,
});

const STATS = [
  { value: "100+", label: "Participants tracked" },
  { value: "50+", label: "Sessions moderated" },
  { value: "5+", label: "Teams aligned" },
];

const GOALS = [
  "Capture naturalistic user audio across multiple simultaneous device configurations.",
  "Compare model and software performance against real user behavior.",
  "Evaluate AI audio recognition accuracy across diverse user populations.",
];

const METHODS = [
  "Structured prompt-based audio elicitation (60 min sessions).",
  "Multi-device simultaneous capture with parallel moderator setups.",
  "Diverse prompt domains to capture natural language variation.",
  "QA review and post-session data upload protocols.",
];

const PROCESS = [
  {
    title: "Scoping & stakeholder alignment",
    body: "Engaged with multiple managers across teams with different priorities and technical requirements. Translated competing needs into a unified study design that could serve engineering, design, and research simultaneously — without letting any one team's requirements compromise data integrity.",
  },
  {
    title: "Protocol design",
    body: "Authored the end-to-end study protocol from scratch: physical device setup with diagrams and specifications, in-house software recording configuration, parallel app workflows, step-by-step session instructions, troubleshooting guides, and QA/post-session upload procedures. Designed for replication across future phases and locales.",
  },
  {
    title: "Prompt design & participant management",
    body: "Wrote diverse prompt sets spanning numerous domains to elicit natural language variation across participants. Built a tracking system for 100+ participants and managed outreach, scheduling, and rapport — establishing trust to reduce performance bias during sessions.",
  },
  {
    title: "Moderation & execution",
    body: "Served as lead moderator, personally running 50+ one-hour sessions while maintaining study consistency and data integrity across a high-volume collection period. Trained and oversaw a second moderator running a parallel setup, doubling throughput without sacrificing protocol fidelity.",
  },
  {
    title: "Handoff & impact",
    body: "Data delivered to engineering teams to inform AI model decisions. Protocol built to serve as the foundational template for future study phases and potential expansion to international markets and additional languages.",
  },
];

const DECISIONS = [
  "Chose structured prompt elicitation over free-form interaction to control for variability while still capturing natural speech patterns — critical for meaningful AI model comparison.",
  "Built participant rapport intentionally before and after sessions to reduce performance anxiety — improving data naturalness at scale.",
  "Designed the protocol for international replication from day one, rather than treating localization as a later problem — reducing rework for future study phases.",
];

const ENGAGEMENT = [
  {
    title: "Study 1 — Lead moderator",
    body: "This case study. Protocol author, lead moderator, moderator trainer.",
  },
  {
    title: "Study 2 — Lead moderator (current)",
    body: "The project I'm leading now — selected again as lead moderator on the strength of prior execution. Built around specialized audio equipment, with a planned scale of 1,000 participants.",
  },
  {
    title: "Study 3 — Contributing researcher",
    body: "Contributed to a third study in a supporting research role across a concurrent research stream.",
  },
  {
    title: "Study 4 — Contributing researcher",
    body: "Contributing in coordination with international teams around the world, spanning 5+ locales and languages. The protocols and materials I developed are subsequently adopted and used by these global teams.",
  },
];

function AppleCaseStudy() {
  return (
    <PageWrap>
      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-12">
        <FadeIn>
          <Link to="/projects" className="label-mono link-underline">← Back to case studies</Link>
        </FadeIn>

        <div className="mt-10">
          <FadeIn delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="label-mono px-3 py-1 rounded-full border border-hairline">
                NDA-safe · Apple via INSPYR Solutions · 2026
              </span>
              <span className="label-mono px-3 py-1 rounded-full border border-hairline bg-foreground/5">
                Lead Moderator
              </span>
            </div>
          </FadeIn>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.98] text-balance">
            Multi-Device AI Audio Capture Study
          </h1>
          <FadeIn delay={0.1}>
            <div className="mt-10 relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-foreground/[0.04] grain-overlay">
              <img
                src={appleAudioImg}
                alt="Multi-Device AI Audio Capture Study"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid gap-8 md:grid-cols-3 border-y border-hairline py-10">
          {STATS.map((s) => (
            <FadeIn key={s.label}>
              <p className="font-display text-5xl md:text-6xl gradient-ink leading-none">
                {s.value}
              </p>
              <p className="label-mono mt-3">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* GOALS + METHODS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="border border-hairline rounded-2xl p-8 h-full">
              <p className="label-mono mb-6">Research goals</p>
              <ul className="space-y-4">
                {GOALS.map((g, i) => (
                  <li key={i} className="flex gap-4 text-base md:text-lg text-foreground/90 text-pretty">
                    <span className="font-mono text-sm text-pink-ink pt-1">0{i + 1}</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border border-hairline rounded-2xl p-8 h-full">
              <p className="label-mono mb-6">Methods</p>
              <ul className="space-y-4">
                {METHODS.map((m, i) => (
                  <li key={i} className="flex gap-4 text-base md:text-lg text-foreground/90 text-pretty">
                    <span className="font-mono text-sm text-pink-ink pt-1">0{i + 1}</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Research process</p>
          </FadeIn>
          <StaggerList className="md:col-span-8 space-y-10">
            {PROCESS.map((step, i) => (
              <StaggerItem
                key={i}
                variants={staggerItemVariants}
                className="flex gap-6 items-start"
              >
                <span className="font-mono text-sm text-pink-ink pt-2 shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-3 text-balance">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-pretty max-w-[62ch]">
                    {step.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* DECISIONS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Key research decisions</p>
          </FadeIn>
          <StaggerList className="md:col-span-8 space-y-5">
            {DECISIONS.map((d, i) => (
              <StaggerItem
                key={i}
                variants={staggerItemVariants}
                className="border-l-2 border-pink-ink bg-foreground/[0.03] rounded-r-lg pl-6 pr-5 py-5 text-base md:text-lg text-foreground/90 text-pretty"
              >
                {d}
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12 pb-24">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Broader engagement at Apple</p>
          </FadeIn>
          <StaggerList className="md:col-span-8 space-y-6">
            {ENGAGEMENT.map((e, i) => (
              <StaggerItem
                key={i}
                variants={staggerItemVariants}
                className="border border-hairline rounded-2xl p-6"
              >
                <h4 className="font-display text-xl md:text-2xl mb-2">{e.title}</h4>
                <p className="text-foreground/80 text-pretty">{e.body}</p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>
    </PageWrap>
  );
}
