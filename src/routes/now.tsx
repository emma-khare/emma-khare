import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn, PageWrap, StaggerList, StaggerItem, staggerItemVariants, WordReveal } from "@/components/Motion";
import { projects } from "@/data/projects";
import { BleedPhoto } from "@/components/Interaction";
import evalAuditImg from "@/assets/eval-audit.webp";
import governanceImg from "@/assets/governance-seal.webp";

// The evaluation studies, highlighted as a set on Now.
const RECENT_SLUGS = [
  "llm-as-judge-reliability",
  "learning-signals-capability",
  "ai-fluency-measure",
  "socratic-vs-direct-tutoring",
];

export const Route = createFileRoute("/now")({
  head: () => ({
    meta: [
      { title: "Now | Emma Khare" },
      { name: "description", content: "What Emma Khare is working on, reading, learning, and thinking about right now." },
      { property: "og:title", content: "Now | Emma Khare" },
      { property: "og:description", content: "What Emma is working on, reading, and learning right now." },
    ],
  }),
  component: Now,
});

const READING = [
  { title: "Just Research", author: "Erika Hall", cover: "https://covers.openlibrary.org/b/id/7387007-M.jpg", note: "A short argument for treating research as an ongoing practice." },
  { title: "Conversational Design", author: "Erika Hall", cover: "https://covers.openlibrary.org/b/isbn/9781937557676-M.jpg", note: "Re-reading for how language shapes interface trust." },
  { title: "The Design of Everyday Things", author: "Don Norman", cover: "https://covers.openlibrary.org/b/isbn/9780465050659-M.jpg", note: "A reminder that affordances carry ethics." },
  { title: "Raciolinguistics", author: "H. Samy Alim et al.", cover: "", note: "On language, identity, and power, and how they shape inclusive AI." },
  { title: "A Woman Makes a Plan", author: "Maye Musk", cover: "https://covers.openlibrary.org/b/isbn/9781984878502-M.jpg", note: "On building a career across disciplines, decade after decade." },
];

const LEARNING = [
  {
    skill: "Evaluation rubric design",
    context:
      "Writing criteria precise enough that a second rater could apply them without me in the room.",
  },
  {
    skill: "Reliability on live data",
    context: "Running ICC and kappa on real audit scores rather than a simulated judge.",
  },
  {
    skill: "Auditing AI-generated artifacts",
    context:
      "Courses, lesson plans, and assessment items, and what a rubric can and cannot see.",
  },
  {
    skill: "AI governance frameworks",
    context:
      "Indigenous data sovereignty, consent, and where evaluation work sits inside a wider governance story.",
  },
];

const TOOLS = [
  "Python (stdlib, NLTK)",
  "ICC · Cohen's kappa · bootstrap CIs",
  "Evaluation rubrics & scorecards",
  "LLM-as-judge pipelines",
  "Claude (API-based scoring)",
  "Qualitative coding",
  "Audit tracking in spreadsheets",
  "UserTesting",
];

// How the audit was run — the method, not the findings.
const AUDIT = [
  "I wrote the rubric from what the course claims to teach before reading the material, so the material could fail it.",
  "I drew a defensible sample of lessons, exercises, and assessment items instead of skimming every page.",
  "I tracked what the course got wrong separately from what the rubric could not see.",
  "I checked agreement between raters before quoting any percentage.",
];

const FOCUS = [
  {
    label: "Evaluations audit",
    text: "Auditing a course Claude built: write the rubric, sample the lessons, exercises, and assessment items, check agreement between raters, then summarise. The method comes from the LLM-judge study, applied here to a live artifact.",
  },
  {
    label: "Work",
    text: "Coordinating studies at Apple, after a year moderating conversational-AI and voice research. I study how people talk to AI in practice: pauses, repairs, and the moments trust breaks.",
  },
  {
    label: "Side project",
    text: "Studying AI governance and the Indigenous Data Sovereignty movement, and writing an essay on what those frameworks offer anyone navigating digital rights.",
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
              text="What I'm working on right now."
              highlight="now"
            />
          </h1>
          <FadeIn delay={0.4} className="mt-8 max-w-xl">
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              I update this page when something changes: a new book, a new tool, a new question. If
              any of it overlaps with a problem your team is stuck on,{" "}
              <Link to="/contact" className="link-underline text-pink-ink">
                tell me about it
              </Link>
              .
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

      {/* Recent work — the evaluation studies */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16 border-t border-hairline">
        <FadeIn>
          <p className="label-mono mb-4">Recent work · Evaluation</p>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight max-w-[22ch] text-balance">
            Four studies on whether{" "}
            <span className="gradient-ink">a number can be trusted.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80 leading-relaxed text-pretty">
            Self-directed work on measurement: a judge that scores AI output, a rubric for AI
            fluency, a capability score read from a tutoring transcript, and an experiment tested
            against known ground truth. Each one asks the same question about a different
            instrument.
          </p>
        </FadeIn>
        <StaggerList className="mt-10 grid gap-6 md:grid-cols-2">
          {RECENT_SLUGS.map((slug) => projects.find((p) => p.slug === slug))
            .filter((p): p is NonNullable<typeof p> => Boolean(p))
            .map((p) => (
              <StaggerItem key={p.slug} variants={staggerItemVariants}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group block h-full rounded-2xl border border-hairline p-6 transition-colors hover:bg-foreground/[0.03]"
                >
                  <p className="label-mono mb-3">{p.tags[0]}</p>
                  <h3 className="font-display text-xl tracking-tight text-balance">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground/70 text-pretty">
                    {p.tagline}
                  </p>
                  <span className="mt-5 inline-block text-foreground/60 transition-transform group-hover:translate-x-1">
                    Read case study ↗
                  </span>
                </Link>
              </StaggerItem>
            ))}
        </StaggerList>
      </section>

      {/* Most recent — AI evaluations audit */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-16 pb-10 border-t border-hairline">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Most recent · AI evaluations audit</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-balance">
              Auditing a course <span className="gradient-ink">Claude built.</span>
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Independent research", "2026", "Rubric-based audit"].map((b) => (
                <span
                  key={b}
                  className="label-mono px-3 py-1 rounded-full border border-hairline"
                >
                  {b}
                </span>
              ))}
            </div>
          </FadeIn>
          <div className="md:col-span-8 space-y-6">
            <FadeIn>
              <p className="text-lg text-foreground/85 leading-relaxed text-pretty">
                A course can read fluently and still be wrong about what it teaches. I audited one
                that Claude built end to end, checking each lesson, exercise, and assessment item
                against the course's own claims.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="text-lg text-foreground/85 leading-relaxed text-pretty">
                The method follows the LLM-judge study, moved from a simulated dataset to a live
                artifact: write criteria, sample, score, then check the instrument before trusting
                the summary.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The audit itself, edge to edge */}
      <FadeIn>
        <BleedPhoto
          src={evalAuditImg}
          alt="Illustration: a stack of scored grid sheets under a brass magnifying glass, paper scraps in the air"
          caption="Illustration · the audit's shape: criteria, sample, scores, agreement."
          className="h-[44vh] min-h-[240px] md:h-[58vh]"
          focus="62% 48%"
        />
      </FadeIn>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-14 pb-16">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">The method</p>
          </FadeIn>
          <div className="md:col-span-8 space-y-6">
            <FadeIn delay={0.16}>
              <ul className="divide-y divide-hairline border-y border-hairline">
                {AUDIT.map((a, i) => (
                  <li key={i} className="flex gap-6 items-start py-5">
                    <span className="font-mono text-sm text-pink-ink pt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <p className="text-base md:text-lg text-foreground/85 leading-relaxed text-pretty">
                      {a}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed text-pretty">
                The audit also became a governance question. An AI-generated course is a claim about
                a curriculum, and the audit is where that claim gets tested. That is why the
                evaluation work and the data-sovereignty reading keep meeting.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Current Research */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16 border-t border-hairline">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Current research</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              AI governance & <span className="gradient-ink">Indigenous data sovereignty.</span>
            </h2>
          </FadeIn>
          <div className="md:col-span-8 space-y-6">
            <FadeIn>
              <p className="text-lg text-foreground/85 leading-relaxed text-pretty">
                AI is spreading faster than the rules around it. I'm studying the Indigenous Data Sovereignty movement and the frameworks it has produced, which assert community ownership, consent, and control over material and digital data.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-foreground/85 leading-relaxed text-pretty">
                Shoshana Zuboff calls the wider problem "surveillance capitalism": human experience extracted as raw material for predictive products. Indigenous communities have dealt with versions of it for decades and have built frameworks that treat data sources as human, with a right to govern how their data is used.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-foreground/85 leading-relaxed text-pretty">
                They matter beyond Indigenous communities. Anyone whose photos, genetic data, and identity now sit inside digital products has something to learn from them.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Governance, edge to edge */}
      <FadeIn>
        <BleedPhoto
          src={governanceImg}
          alt="Illustration: a garnet wax seal at the centre of concentric gold rings, laid over layered parchment"
          className="h-[40vh] min-h-[220px] md:h-[52vh]"
          focus="52% 50%"
        />
      </FadeIn>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-10 pb-16">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">The essay</p>
          </FadeIn>
          <div className="md:col-span-8 space-y-6">
            <FadeIn delay={0.25}>
              <div className="mt-4 border-l-2 border-pink-ink bg-foreground/[0.03] rounded-r-lg pl-6 pr-5 py-5">
                <p className="label-mono mb-3">Coming soon · Essay</p>
                <p className="text-foreground/85 leading-relaxed text-pretty">
                  I'm turning this research into an essay. It follows a reversal: while much of the policy world
                  steps back from AI guardrails, Indigenous communities have spent decades building the consent and
                  governance frameworks the rest of us are only now reaching for.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-4 rounded-2xl border border-hairline bg-foreground/[0.03] p-7">
                <p className="label-mono mb-3">Why this matters to UX research</p>
                <p className="text-foreground/85 leading-relaxed text-pretty">
                  Data governance frameworks give me a structural view of who research serves, who it extracts from, and how consent gets designed. That shapes participant ethics, study design, and how I work with communities.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-6">
                <p className="label-mono mb-3">References</p>
                <p className="text-sm text-foreground/70 leading-relaxed text-pretty">
                  Adams, M. M. (2024). Indigenous fire data sovereignty: Applying Indigenous data sovereignty principles to fire research. <em>Fire</em>, 7(7), 222.{" "}
                  <a href="https://doi.org/10.3390/fire7070222" target="_blank" rel="noreferrer" className="link-underline">https://doi.org/10.3390/fire7070222</a>
                </p>
              </div>
            </FadeIn>
          </div>
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
                <div className="flex gap-4 items-start">
                  <div className="relative shrink-0 w-14 aspect-[2/3] overflow-hidden rounded-[3px] border border-hairline bg-foreground/[0.06] shadow-[0_6px_14px_-8px_rgba(58,28,37,0.5)]">
                    <span className="absolute inset-0 flex items-center justify-center font-display text-xl text-foreground/35">
                      {b.title.charAt(0)}
                    </span>
                    {b.cover ? (
                      <img
                        src={b.cover}
                        alt={`${b.title} cover`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : null}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p className="text-lg font-medium text-foreground">{b.title}</p>
                      <p className="text-sm text-muted-foreground">by {b.author}</p>
                    </div>
                    <p className="mt-2 text-foreground/70 text-pretty">{b.note}</p>
                  </div>
                </div>
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

      {/* Previous Research */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16 border-t border-hairline">
        <FadeIn>
          <p className="label-mono mb-4">Previous research</p>
          <h2 className="font-display text-3xl md:text-4xl max-w-[20ch]">
            Case studies <span className="gradient-ink">and prior work.</span>
          </h2>
        </FadeIn>
        <StaggerList className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.filter((p) => !RECENT_SLUGS.includes(p.slug)).map((p) => (
            <StaggerItem key={p.slug} variants={staggerItemVariants}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block h-full rounded-2xl border border-hairline p-6 transition-colors hover:bg-foreground/[0.03]"
              >
                <p className="label-mono mb-3">{p.year} · {p.role}</p>
                <h3 className="font-display text-xl tracking-tight text-balance">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-foreground/70 text-pretty">
                  {p.tagline}
                </p>
                <span className="mt-5 inline-block text-foreground/60 transition-transform group-hover:translate-x-1">
                  Read case study ↗
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* Personal note */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20 border-t border-hairline">
        <FadeIn>
          <p className="label-mono mb-6">Why research</p>
          <blockquote className="font-display text-3xl md:text-5xl tracking-tight text-balance max-w-[24ch] leading-[1.15]">
            New products usually start at the margins.{" "}
            <span className="font-sans font-light text-pink">I design studies to hear what people mean, in their own words.</span>
          </blockquote>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24 border-t border-hairline pt-14">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="font-display text-3xl md:text-4xl tracking-tight text-balance max-w-[26ch]">
            Bring me the question your survey <span className="gradient-ink">can't answer.</span>
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.02] transition-transform">
            Tell me about it →
          </Link>
        </div>
      </section>
    </PageWrap>
  );
}
