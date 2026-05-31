import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn, PageWrap, StaggerList, StaggerItem, staggerItemVariants, WordReveal } from "@/components/Motion";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/now")({
  head: () => ({
    meta: [
      { title: "Now — Emma Khare" },
      { name: "description", content: "What Emma Khare is working on, reading, learning, and thinking about right now." },
      { property: "og:title", content: "Now — Emma Khare" },
      { property: "og:description", content: "What Emma is working on, reading, and learning right now." },
    ],
  }),
  component: Now,
});

const READING = [
  { title: "Just Research", author: "Erika Hall", note: "A quiet manifesto for research as a practice, not a phase." },
  { title: "Conversational Design", author: "Erika Hall", note: "Re-reading for how language shapes interface trust." },
  { title: "The Design of Everyday Things", author: "Don Norman", note: "Always on my desk. A reminder that affordances are ethical." },
  { title: "Raciolinguistics", author: "H. Samy Alim et al.", note: "Connecting language, identity, and power — directly relevant to how I think about inclusive AI." },
];

const LEARNING = [
  { skill: "Advanced qualitative coding in Dovetail", context: "Building thematic frameworks for conversational AI studies at scale." },
  { skill: "Voice UX research methods", context: "Expanding from screen-based moderation to ambient, multi-turn voice interactions." },
  { skill: "Irish (Gaeilge)", context: "Continuing fieldwork connections from the Foras na Gaeilge project." },
];

const TOOLS = [
  "Dovetail",
  "Figma",
  "Notion",
  "UserTesting",
  "Lookback",
  "Python (pandas, NLTK)",
  "R / SPSS",
  "Voice memos + handwritten notes",
];

const FOCUS = [
  {
    label: "Work",
    text: "Moderating Siri-related user research at Apple. Deep in the details of how people actually talk to AI — the pauses, the repairs, the trust signals.",
  },
  {
    label: "Side project",
    text: "Building a small annotated bibliography of how gender is constructed in LLM training data. Thinking about what 'neutral' language actually encodes.",
  },
  {
    label: "Personal",
    text: "Running a lot. Trying to be outside more than inside. Learning that rest is part of rigor.",
  },
];

function Now() {
  return (
    <PageWrap>
      <section className="relative overflow-hidden">
        <div className="blob blob-peach h-[420px] w-[420px] -top-20 -right-20" />
        <div className="blob blob-blue h-[320px] w-[320px] top-60 -left-20" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-20 lg:pt-32">
          <p className="label-mono mb-6">Now</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-[18ch] text-balance">
            <WordReveal
              text="What I'm doing at this exact moment in time."
              highlight="exact"
            />
          </h1>
          <FadeIn delay={0.4} className="mt-8 max-w-xl">
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              A living page. I update this when something shifts — a new book,
              a new tool, a new obsession. If you're reading this in a few months,
              it might look different.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Focus */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16 border-t border-hairline">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Current focus</p>
          </FadeIn>
          <StaggerList className="md:col-span-8 divide-y divide-hairline">
            {FOCUS.map((f) => (
              <StaggerItem key={f.label} variants={staggerItemVariants} className="py-6">
                <p className="label-mono mb-2">{f.label}</p>
                <p className="text-lg text-foreground/85 leading-relaxed text-pretty">{f.text}</p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* Reading */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16 border-t border-hairline">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Reading</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Books that are <span className="gradient-ink">shaping my thinking.</span>
            </h2>
          </FadeIn>
          <StaggerList className="md:col-span-8 divide-y divide-hairline">
            {READING.map((b) => (
              <StaggerItem key={b.title} variants={staggerItemVariants} className="py-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-lg font-medium text-foreground">{b.title}</p>
                  <p className="text-sm text-muted-foreground">by {b.author}</p>
                </div>
                <p className="mt-2 text-foreground/70 text-pretty">{b.note}</p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* Learning */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16 border-t border-hairline">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Learning</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Skills <span className="gradient-ink">in progress.</span>
            </h2>
          </FadeIn>
          <StaggerList className="md:col-span-8 divide-y divide-hairline">
            {LEARNING.map((l) => (
              <StaggerItem key={l.skill} variants={staggerItemVariants} className="py-6">
                <p className="text-lg font-medium text-foreground">{l.skill}</p>
                <p className="mt-2 text-foreground/70 text-pretty">{l.context}</p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* Tools */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16 border-t border-hairline">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Tools</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              The <span className="gradient-ink">stack.</span>
            </h2>
          </FadeIn>
          <StaggerList className="md:col-span-8 flex flex-wrap gap-2">
            {TOOLS.map((t) => (
              <StaggerItem
                key={t}
                variants={staggerItemVariants}
                className="rounded-full border border-foreground/80 px-4 py-2 text-sm"
              >
                {t}
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* Personal note */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20 border-t border-hairline">
        <FadeIn>
          <p className="label-mono mb-6">Why research</p>
          <blockquote className="font-display text-3xl md:text-5xl tracking-tight text-balance max-w-[24ch] leading-[1.15]">
            I got into research because I believe the quietest voices in a room often hold the most important truths. My job is to create the conditions where those voices can be heard.
          </blockquote>
        </FadeIn>
      </section>
    </PageWrap>
  );
}
