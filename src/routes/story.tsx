import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FadeIn,
  PageWrap,
  StaggerList,
  StaggerItem,
  staggerItemVariants,
} from "@/components/Motion";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Breathing New Life into Language, Emma Khare" },
      {
        name: "description",
        content:
          "A member of the myaamia people (Miami Tribe of Oklahoma) on the revitalization of myaamiaataweenki, comparative linguistics, fieldwork in Ireland, and what preservation means in the age of AI.",
      },
      { property: "og:title", content: "Breathing New Life into Language, Emma Khare" },
      {
        property: "og:description",
        content:
          "Myaamiaataweenki, the language of the myaamia people, was declared extinct. Then it wasn't. A story about language, data, and what it means to preserve.",
      },
    ],
  }),
  component: Story,
});

const STATS = [
  { value: "0", label: "Fluent speakers by the 1990s" },
  { value: "100+", label: "Myaamiaki speakers today" },
  { value: "5,000+", label: "Tribal members reached daily" },
];

function Story() {
  return (
    <PageWrap>
      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 lg:px-12 pt-24 pb-10 lg:pt-32">
        <FadeIn>
          <p className="label-mono mb-6">Story · Language revitalization</p>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight text-balance leading-[1.02]">
            Breathing new life <span className="gradient-ink">into language.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-8 text-xl md:text-2xl leading-relaxed text-pretty max-w-[58ch]">
            I'm a member of the <strong className="font-medium">myaamia</strong> people, the{" "}
            <strong className="font-medium">Miami Tribe of Oklahoma</strong>. Right now, my community
            is revolutionizing the revitalization of our language,{" "}
            <em className="gradient-ink not-italic">myaamiaataweenki</em>, and we have a phrase for
            it: breathing new life into language.
          </p>
        </FadeIn>
      </section>

      {/* THE ARC */}
      <section className="mx-auto max-w-4xl px-6 lg:px-12 py-12 border-t border-hairline">
        <FadeIn className="mb-8">
          <p className="label-mono">How a language came back</p>
        </FadeIn>
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty max-w-[62ch]">
          <FadeIn>
            <p>
              In the 1970s, <strong className="font-medium text-foreground">myaamiaataweenki</strong>, the language
              of the myaamia people, was classified as <strong className="font-medium text-foreground">extinct</strong>.
              By the 1990s, every fluent speaker had passed away.
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p>
              Then two people opened a discourse that changed what it meant for a language to "go extinct."{" "}
              <strong className="font-medium text-foreground">Daryl Baldwin</strong>, a tribe member who had just
              earned a master's in linguistics, set out to learn his community's language.{" "}
              <strong className="font-medium text-foreground">David Costa</strong>, an Algonquian linguist, had found a
              vast archive of myaamiaataweenki documentation during his doctoral research at UC Berkeley, at a time
              when no one else was looking for it.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p>
              Working from records preserved in archives and libraries across the United States and Canada, spanning
              250 years and many written in French, they began to recover the written language.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              Through careful transcription, translation, and linguistic analysis, they pieced together a working{" "}
              <strong className="font-medium text-foreground">orthography, phonology, and grammar</strong>. A language
              that had been declared lost was, sound by sound, rebuilt.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p>
              That work continues today at the <strong className="font-medium text-foreground">Myaamia Center</strong>.
              Its digital archive now holds more than{" "}
              <strong className="font-medium text-foreground">100,000 myaamiaataweenki words and phrases</strong>, the
              result of over thirty years of revitalization.
            </p>
          </FadeIn>
        </div>

        {/* STATS */}
        <div className="mt-14 grid gap-8 md:grid-cols-3 border-y border-hairline py-10">
          {STATS.map((s) => (
            <FadeIn key={s.label}>
              <p className="font-display text-5xl md:text-6xl gradient-ink leading-none not-italic">
                {s.value}
              </p>
              <p className="label-mono mt-3">{s.label}</p>
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

      {/* HER METHOD */}
      <section className="mx-auto max-w-4xl px-6 lg:px-12 py-12 border-t border-hairline">
        <div className="grid gap-8 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Where I come in</p>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-8 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty">
              The comparative method that rebuilt myaamiaataweenki is the same one I used in my own{" "}
              <Link to="/projects/$slug" params={{ slug: "myaamia-allophones" }} className="link-underline text-pink-ink">
                Myaamia and Ojibwe allophone study
              </Link>,
              listening across related languages to reconstruct the sounds, and the systems beneath
              them, from fragments.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty">
              During my NSF research fellowship in Oregon, I became a seasoned user of the{" "}
              <strong className="font-medium text-foreground">Indigenous Languages Digital Archive (ILDA)</strong> and
              the online dictionary it powers, the same kind of system at the heart of myaamiaataweenki's
              revitalization. The software was being extended and redesigned for the communities I worked with, and
              the stakeholders cared deeply about one question: how could the technology itself protect the knowledge
              and the security of their community? Every piece of work I did was treated as something to be
              safeguarded.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty">
              It was the first time I encountered community-based data protection and technology security through the
              lens of <em className="gradient-ink not-italic">preservation and survivance</em>. It is, directly, why I
              think about data the way I do now, working in AI.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/75 text-pretty">
              This isn't abstract heritage for me. It's a living practice of recovering meaning from incomplete
              records, which, it turns out, is most of what research actually is.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* IRELAND */}
      <section className="mx-auto max-w-4xl px-6 lg:px-12 py-12 border-t border-hairline">
        <div className="grid gap-8 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="label-mono">Carrying it to Ireland</p>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-8 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty">
              This is the story I carried with me across Ireland. During{" "}
              <Link to="/projects/$slug" params={{ slug: "indigeneity-identity-ireland" }} className="link-underline text-pink-ink">
                field studies and surveys
              </Link>, many of the people I met told me Gaelic was dying, too few speakers, too little motivation to
              preserve it.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty">
              But when I sat with the language institutes, there was still a{" "}
              <em className="gradient-ink not-italic">blazing flame</em> being kept alive. I can't tell you whether my
              story produced quantifiable results, whether it deepened anyone's resolve to preserve their own
              language. But it felt significant, especially now, in an era when the meaning of data itself is being
              debated in the AI world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="mx-auto max-w-4xl px-6 lg:px-12 py-20 border-t border-hairline">
        <FadeIn>
          <p className="label-mono mb-6">What it means for the work I do now</p>
          <blockquote className="font-display text-3xl md:text-5xl tracking-tight text-balance leading-[1.12] max-w-[24ch]">
            What is information? How should it be protected? What does it mean to preserve something,{" "}
            <span className="gradient-ink">and is anything ever really lost?</span>
          </blockquote>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-foreground/80 text-pretty max-w-[58ch]">
            A language was declared extinct, and then it wasn't. That fact reshapes how I think about data, memory,
            and the systems we build to hold them, including the AI systems I research today.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <StaggerList className="mt-12 flex flex-wrap gap-4">
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
                See the research
              </Link>
            </StaggerItem>
          </StaggerList>
        </FadeIn>
      </section>
    </PageWrap>
  );
}
