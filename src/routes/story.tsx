import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FadeIn,
  PageWrap,
  StaggerList,
  StaggerItem,
  staggerItemVariants,
} from "@/components/Motion";
import { CountUp } from "@/components/Interaction";
import archiveBand from "@/assets/archive-thread.webp";

export const Route = createFileRoute("/story")({
  head: () => ({
          meta: [
      { title: "Story: From Language to Measurement | Emma Khare" },
      {
        name: "description",
        content:
          "A member of the myaamia people (Miami Tribe of Oklahoma) on rebuilding myaamiaataweenki, and how that work taught her to read data holistically and notice what a measurement leaves out.",
      },
      { property: "og:title", content: "Story: From Language to Measurement | Emma Khare" },
      {
        property: "og:description",
        content: "Myaamiaataweenki, the language of the myaamia people, was declared extinct in the 1970s. Today more than a hundred people speak it. A story about language, data, and what preservation means.",
      },
    ],
  }),
  component: Story,
});

const STATS = [
  { value: "0", label: "Fluent speakers by the 1990s" },
  { value: "100+", label: "Myaamiaki speakers today" },
  { value: "100,000+", label: "Archived words and phrases" },
  { value: "5,000+", label: "Tribal members reached daily" },
];

type TimelineItem = {
  when: string;
  what: string;
  slug?: string;
  href?: "/resume" | "/projects";
};

const TIMELINE: TimelineItem[] = [
  { when: "Oct 2026 – Present", what: "Study Coordinator · Apple", href: "/resume" },
  {
    when: "Jan – Oct 2026",
    what: "Research Moderator · Apple",
    slug: "apple-conversational-ai",
  },
  {
    when: "Jan 2024 – Sept 2025",
    what: "UX Researcher · Woaf Meow / Luv Health",
    slug: "woaf-meow-smart-ring",
  },
  {
    when: "Apr 2024 – Aug 2025",
    what: "Education Specialist · NICE",
    slug: "indigenous-education-omaha",
  },
  {
    when: "Aug – Dec 2022",
    what: "Project Coordinator · Ireland",
    slug: "indigeneity-identity-ireland",
  },
  {
    when: "Jun – Aug 2022",
    what: "NSF REU · Language",
    slug: "nsf-reu-linguistics",
  },
  {
    when: "2021 – 2022",
    what: "Myaamia language work",
    slug: "myaamia-allophones",
  },
];

/** One node on the axis: dot on the line, dotted stem, date and title on alternating sides. */
function TimelineNode({ t, above }: { t: TimelineItem; above: boolean }) {
  const body = (
    <>
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-ink bg-background transition-colors duration-300 group-hover:bg-[var(--gx-gold)]"
      />
      <span
        aria-hidden
        className={`absolute left-1/2 h-10 border-l border-dotted border-foreground/30 ${
          above ? "bottom-1/2" : "top-1/2"
        }`}
      />
      <span
        className={`absolute inset-x-1 text-center ${
          above ? "bottom-[calc(50%+48px)]" : "top-[calc(50%+48px)]"
        }`}
      >
        <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-pink-ink">
          {t.when}
        </span>
        <span className="mt-1.5 block font-display text-sm md:text-base leading-tight text-foreground text-balance transition-colors group-hover:text-pink-ink">
          {t.what}
        </span>
      </span>
    </>
  );
  const cls = "group absolute inset-0 block rounded-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-ink";

  return t.slug ? (
    <Link to="/projects/$slug" params={{ slug: t.slug }} className={cls}>
      {body}
    </Link>
  ) : t.href === "/resume" ? (
    <Link to="/resume" className={cls}>
      {body}
    </Link>
  ) : (
    <Link to="/projects" className={cls}>
      {body}
    </Link>
  );
}

function Story() {
  return (
    <PageWrap>
      {/* TIMELINE */}
      <section className="mx-auto max-w-6xl px-6 lg:px-12 pt-24 pb-14 lg:pt-32">
        <FadeIn className="mb-8">
          <p className="label-mono">Timeline</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-balance max-w-[24ch]">
            From language work <span className="gradient-ink">to measurement.</span>
          </h2>
        </FadeIn>
        <div className="overflow-x-auto">
          <div className="relative min-w-[980px]">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-dotted border-foreground/30"
            />
            <ol className="relative grid grid-cols-7">
              {TIMELINE.map((t, i) => (
                <li key={t.what} className="relative h-[260px]">
                  <TimelineNode t={t} above={i % 2 === 0} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 lg:px-12 pt-14 pb-10 border-t border-hairline">
        <FadeIn>
          <p className="label-mono mb-6">Story · From language to measurement</p>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight text-balance leading-[1.02]">
            Language taught me to see data <span className="gradient-ink">holistically.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-8 text-xl md:text-2xl leading-relaxed text-pretty max-w-[58ch]">
            I'm a member of the <strong className="font-medium">myaamia</strong> people, the{" "}
            <strong className="font-medium">Miami Tribe of Oklahoma</strong>. Our language,{" "}
            <em className="gradient-ink not-italic">myaamiaataweenki</em>, is being brought back
            into daily use, and we have a phrase for that work: breathing new life into language.
            Rebuilding it from archives taught me to read data the same way, and to notice how much
            a measurement leaves out.
          </p>
        </FadeIn>
      </section>

      {/* ARCHIVE BAND — full-bleed texture that fades into the page */}
      <div aria-hidden className="relative my-8 h-52 w-full overflow-clip md:h-72">
        <img
          src={archiveBand}
          alt=""
          loading="lazy"
          style={{ objectPosition: "center 64%" }}
          className="band-blend h-full w-full object-cover"
        />
      </div>

      {/* THE ARC */}
      <section className="mx-auto max-w-4xl px-6 lg:px-12 py-12 border-t border-hairline">
        <FadeIn className="mb-8">
          <p className="label-mono">Reawakening what was asleep</p>
        </FadeIn>
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty max-w-[62ch]">
          <FadeIn>
            <p>
              In the 1970s, myaamiaataweenki was classified{" "}
              <strong className="font-medium text-foreground">extinct</strong>. By the 1990s, every
              fluent speaker had passed away. Daryl Baldwin and David Costa rebuilt it from 250 years
              of archival records, and the{" "}
              <strong className="font-medium text-foreground">Myaamia Center</strong> has carried the
              work since.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="space-y-3 pt-2">
            <p className="font-flow text-[1.6rem] md:text-[2.1rem] leading-[1.25] text-pink text-pretty">
              What we think is dead can wake. What comes next follows a legacy built{" "}
              <span className="not-italic font-bold">holistically</span>.
            </p>
            <p className="font-flow text-lg md:text-xl leading-[1.4] text-foreground/60 text-pretty">
              Rebuilding a language took decades of{" "}
              <span className="not-italic font-bold text-foreground/85">checking sources</span>{" "}
              against each other. Measurement deserves the same patience.
            </p>
          </FadeIn>
        </div>

        {/* STATS */}
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 border-y border-hairline py-10">
          {STATS.map((s) => (
            <FadeIn key={s.label} className="min-w-0">
              <CountUp
                value={s.value}
                className="block whitespace-nowrap font-display text-[1.9rem] md:text-[2.05rem] lg:text-[2.3rem] gradient-ink leading-none not-italic tabular-nums"
              />
              <p className="label-mono mt-3 max-w-[16ch]">{s.label}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="label-mono mt-10 leading-relaxed">
            Sources:{" "}
            <a
              href="https://aacimotaatiiyankwi.org/2025/11/05/how-we-revitalize-the-myaamia-language/"
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              How We Revitalize the Myaamia Language
            </a>{" "}
            and{" "}
            <a
              href="https://aacimotaatiiyankwi.org/2024/10/22/the-miami-awakening-a-linguists-perspective/"
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              The Miami Awakening: A Linguist's Perspective
            </a>
            , Aacimotaatiiyankwi (Myaamia Center).
          </p>
        </FadeIn>
      </section>

      {/* ORIGIN: HERITAGE, LANGUAGE WORK, AND THE MOVE INTO RESEARCH */}
      <section className="mx-auto max-w-4xl px-6 lg:px-12 py-12 border-t border-hairline">
        <div className="grid gap-8 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Coding my own story</p>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-8 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty">
              <span className="mb-1 block font-display text-3xl md:text-4xl gradient-ink leading-none">
                Archive.
              </span>
              Through the{" "}
              <a
                href="https://miamioh.edu/miami-tribe-relations/myaamia-students/myaamia-heritage-award-program.html"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-pink-ink"
              >
                Myaamia Heritage Award Program
              </a>{" "}
              I built the Tribe's first storymaps of culturally significant sites, then made{" "}
              <Link
                to="/projects/$slug"
                params={{ slug: "indigenous-climate-documentary" }}
                className="link-underline text-pink-ink"
              >
                Seven Generations Forward
              </Link>
              , a documentary in myaamiaataweenki. That work gave me the habit of checking a source
              before trusting it.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty">
              <span className="mb-1 block font-display text-3xl md:text-4xl gradient-ink leading-none">
                Method.
              </span>
              My{" "}
              <Link to="/projects/$slug" params={{ slug: "myaamia-allophones" }} className="link-underline text-pink-ink">
                allophone study
              </Link>{" "}
              applies comparative linguistics to Myaamia and Ojibwe. In Oregon I worked inside the{" "}
              <a
                href="https://endangeredlanguages.com/resource/indigenous-languages-digital-archive-ilda"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-pink-ink"
              >
                Indigenous Languages Digital Archive
              </a>{" "}
              while communities decided how their own material would be protected. Who owns a dataset
              is now a question I ask of every evaluation set, including the{" "}
              <Link
                to="/projects/$slug"
                params={{ slug: "llm-as-judge-reliability" }}
                className="link-underline text-pink-ink"
              >
                LLM judge
              </Link>{" "}
              and{" "}
              <Link
                to="/projects/$slug"
                params={{ slug: "learning-signals-capability" }}
                className="link-underline text-pink-ink"
              >
                learning signals
              </Link>{" "}
              studies.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty">
              <span className="mb-1 block font-display text-3xl md:text-4xl gradient-ink leading-none">
                Technical.
              </span>
              In school I built a{" "}
              <Link
                to="/projects/$slug"
                params={{ slug: "ai-gender-romantic-fiction" }}
                className="link-underline text-pink-ink"
              >
                Python sentiment analysis of romance fiction
              </Link>
              , my first encounter with machine learning. It is why I keep the sociocultural and the
              technical together.
            </p>
            <div className="border-l-2 border-pink-ink pl-5 pt-2 md:pl-6">
              <p className="font-display text-[1.75rem] md:text-[2.5rem] leading-[1.14] text-balance text-pink">
                Your team already has the data. I'm the one who makes it measurable.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 label-mono link-underline"
              >
                Tell me what your team is sitting on →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* THESIS: the language work applied to technology */}
      <section className="mx-auto max-w-4xl px-6 lg:px-12 py-16 border-t border-hairline">
        <FadeIn>
          <p className="label-mono mb-6">The same habit, applied to AI</p>
          <p className="font-display text-4xl md:text-6xl tracking-tight text-balance leading-[1.05] max-w-[24ch]">
            I don't hand over a number I <span className="gradient-ink">can't defend.</span>
          </p>
        </FadeIn>
        <div className="mt-10 max-w-[62ch] space-y-6">
          <FadeIn>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty">
              I want to do the same with technology: breathe life into it. How we use it matters as
              much as why.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty">
              In practice that means{" "}
              <Link
                to="/projects/$slug"
                params={{ slug: "llm-as-judge-reliability" }}
                className="link-underline text-pink-ink"
              >
                LLM judge
              </Link>{" "}
              reliability, a validated{" "}
              <Link
                to="/projects/$slug"
                params={{ slug: "ai-fluency-measure" }}
                className="link-underline text-pink-ink"
              >
                AI fluency
              </Link>{" "}
              rubric, auditing a course an AI wrote, and bringing this perspective to my work at
              Apple.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <StaggerList className="flex flex-wrap gap-4 pt-2">
              <StaggerItem variants={staggerItemVariants}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: "indigenous-climate-documentary" }}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.02] transition-transform"
                >
                  Watch the documentary →
                </Link>
              </StaggerItem>
              <StaggerItem variants={staggerItemVariants}>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/80 px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  See the evaluation work
                </Link>
              </StaggerItem>
            </StaggerList>
          </FadeIn>
        </div>
      </section>
    </PageWrap>
  );
}
