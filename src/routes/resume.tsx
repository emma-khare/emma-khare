import { createFileRoute } from "@tanstack/react-router";
import { FadeIn, PageWrap } from "@/components/Motion";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Résumé, Emma Khare" },
      { name: "description", content: "Emma Khare, mixed-methods UX Researcher. Résumé: experience, skills, education." },
      { property: "og:title", content: "Résumé, Emma Khare" },
      { property: "og:description", content: "Emma Khare, mixed-methods UX Researcher. Résumé." },
    ],
  }),
  component: Resume,
});

const SUMMARY =
  "Mixed-methods UX researcher combining conversational-AI study design, Apple consumer-hardware research, and a linguistics-grounded, cross-cultural research background. I currently moderate UX research at Apple, with study protocols that incorporate AI prompt creation and conversation design, and bring a Summa Cum Laude background in anthropology, Python-based NLP, and active fluency in an endangered Indigenous language. I drive research operations end to end: from protocol authoring and stakeholder alignment to synthesis and actionable reporting.";

const SKILLS: { group: string; items: string }[] = [
  {
    group: "Research methods",
    items:
      "Usability testing · mixed-methods research · qualitative & quantitative analysis · ethnographic field research · semi-structured interviews · survey design · contextual inquiry · persona development · journey mapping · thematic & affinity analysis · participant recruitment & screening",
  },
  {
    group: "Research operations",
    items:
      "End-to-end study design · moderation SOPs · protocol authoring · IRB-compliant participant research · cross-functional stakeholder management · research synthesis & reporting · moderator training",
  },
  {
    group: "AI & conversational research",
    items:
      "Study design for AI prompt-creation tasks · conversation-design protocols · human–AI interaction research · sentiment analysis",
  },
  {
    group: "Technical",
    items: "Python (NLTK, NRCLex, WordNet) · Figma · Excel · Google Sheets · qualitative coding",
  },
  {
    group: "Domain strengths",
    items:
      "Cross-cultural research (US, China, Ireland, Indigenous communities) · multilingual fieldwork · consumer hardware · language preservation · K–12 community research",
  },
];

const EXPERIENCE: {
  role: string;
  org: string;
  meta: string;
  bullets: string[];
}[] = [
  {
    role: "UX Research Moderator",
    org: "Apple (via INSPYR Solutions)",
    meta: "Cupertino, CA · Jan 2026 – Present",
    bullets: [
      "Designed and led 4+ end-to-end UX research studies across Apple consumer hardware, with protocols incorporating AI prompt creation and conversation-design parameters.",
      "Moderated hundreds of participant sessions while holding SOP adherence, data integrity, and concurrent study flow across multiple active research streams.",
      "Drove a cross-departmental moderation initiative aligning 5+ stakeholder teams across engineering, design, and research, defining the end-to-end process from the ground up.",
      "Authored standardized moderation SOPs and trained 2 new moderators on procedures, escalation paths, and best practices, reducing onboarding friction and ensuring consistency.",
      "Synthesized session findings into stakeholder-facing reports that directly informed product and design decisions across multiple Apple research teams.",
    ],
  },
  {
    role: "UX Research Intern",
    org: "Woaf Meow",
    meta: "Internship · 2025", // dates to confirm
    bullets: [
      "Designed and analyzed user surveys for a conversational-AI pet-care app to learn what owners wanted.",
      "Reviewed and synthesized usability sessions into clear findings the team could act on.",
      "Contributed to early ideation for a companion smart ring, and flagged a market-conflict risk for the team to weigh.",
    ],
  },
  {
    role: "Education Specialist, Native & Indigenous-Centered Education",
    org: "Omaha Public Schools",
    meta: "Part-time · Apr 2024 – Aug 2025",
    bullets: [
      "Designed and delivered research-driven, culturally responsive workshops serving 90+ Native students and families, improving program engagement by 30%.",
      "Secured $35K+ in program funding through grant writing and stakeholder partnerships to expand Indigenous education programming.",
      "Built and executed a mixed-methods evaluation framework (surveys, interviews, program evaluations) that measured learning outcomes and contributed to a 20% boost in student retention.",
    ],
  },
  {
    role: "Project Coordinator, Indigeneity, Identity & Ireland",
    org: "Miami University · Foras na Gaeilge & Údarás na Gaeltachta",
    meta: "Aug – Dec 2022",
    bullets: [
      "Coordinated multilingual fieldwork across Irish (Gaeilge) and Indigenous North American research communities, managing interview schedules, participant logistics, and IRB documentation.",
      "Built cross-cultural research partnerships with global language-revitalization organizations; synthesized qualitative and archival data into insights presented to academic and community audiences.",
    ],
  },
  {
    role: "NSF REU Fellow, Linguistics",
    org: "University of Oregon",
    meta: "Eugene, OR · Jun – Aug 2022",
    bullets: [
      "Conducted Indigenous language-preservation research on Hanis, Coos, and Miluk, transcribing and converting 100+ pages of 1800s-era manuscripts into IPA and English.",
      "Built and maintained an interactive research database that increased user engagement by 40% across academic users.",
      "Presented findings to 200+ academic and community stakeholders, including tribal members, university faculty, and federal grant administrators.",
    ],
  },
  {
    role: "Qualitative Data Analyst",
    org: "#Native: Decolonizing Social Media · Miami University",
    meta: "2021 – 2022",
    bullets: [
      "Analyzed multimedia engagement patterns of Indigenous creators across social platforms, evaluating representation trends, audience reach, and frameworks of digital agency.",
      "Synthesized findings into advocacy-oriented reports presented at the Miami University Undergraduate Research Forum.",
    ],
  },
];

const PROJECTS: { title: string; meta: string; bullets: string[] }[] = [
  {
    title: "AI and Gender in Romantic Fiction",
    meta: "Python sentiment analysis · Miami University · 2021",
    bullets: [
      "Built a Python sentiment-analysis tool using NRCLex, NLTK, and WordNet to analyze emotional patterns and gender representation in large text datasets.",
      "Created research personas linking computational insights to real stakeholder use cases, demonstrating adaptable UX methodology in an NLP context.",
    ],
  },
  {
    title: "Seven Generations Forward",
    meta: "Community-based research & design · Miami University",
    bullets: [
      "Collaborated with Indigenous community leaders on participatory design sessions exploring intergenerational education models grounded in sustainability and identity.",
      "Developed culturally responsive design frameworks and visual prototypes communicating community-defined educational futures.",
    ],
  },
];

const CERTS = [
  "Foundations of UX Design, Google via Coursera · Aug 2025",
  "Coding for Beginners 1: Python, Udemy · Apr 2025",
  "A to Z Grantwriting (2.4 CEU), University of Nebraska Omaha · Apr 2024",
];

const LANGUAGES = [
  "Myaamiaataweenki (Miami-Illinois), active speaker",
  "English, native",
  "Research experience: Irish (Gaeilge), Hanis, Coos, Miluk",
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-5xl px-6 lg:px-12 py-12 border-t border-hairline">
      <div className="grid gap-8 md:grid-cols-12">
        <FadeIn className="md:col-span-4">
          <p className="label-mono">{label}</p>
        </FadeIn>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((b, i) => (
        <li key={i} className="flex gap-3 text-foreground/85 text-pretty leading-relaxed">
          <span className="text-pink-ink select-none">, </span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Resume() {
  return (
    <PageWrap>
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 lg:px-12 pt-24 pb-10 lg:pt-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <FadeIn>
            <p className="label-mono mb-6">Résumé</p>
            <h1 className="font-display text-5xl md:text-7xl tracking-tight max-w-[16ch] text-balance">
              The <span className="gradient-ink">long form</span>.
            </h1>
            <p className="mt-5 text-lg text-foreground/80">
              UX Researcher · Mixed-Methods · Conversational AI &amp; Consumer Hardware
            </p>
            <p className="mt-2 label-mono">
              San Jose, CA ·{" "}
              <a href="mailto:emmakhare24@gmail.com" className="link-underline">emmakhare24@gmail.com</a>{" "}
              ·{" "}
              <a href="https://www.linkedin.com/in/emmakhare/" target="_blank" rel="noreferrer" className="link-underline">
                LinkedIn ↗
              </a>
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="flex gap-3">
            <a
              href="/emma-khare-resume.pdf"
              download
              className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              Download PDF ↓
            </a>
            <a
              href="/emma-khare-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-foreground/80 px-5 py-2.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Open in tab ↗
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <p className="mt-10 font-display text-2xl md:text-3xl leading-snug text-balance max-w-[46ch]">
            {SUMMARY}
          </p>
        </FadeIn>
      </section>

      {/* Experience */}
      <Row label="Experience">
        <div className="space-y-10">
          {EXPERIENCE.map((job) => (
            <FadeIn key={job.role + job.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl md:text-2xl tracking-tight">
                  {job.role}{" "}
                  <span className="text-foreground/55">· {job.org}</span>
                </h3>
                <p className="label-mono shrink-0">{job.meta}</p>
              </div>
              <Bullets items={job.bullets} />
            </FadeIn>
          ))}
        </div>
      </Row>

      {/* Selected projects */}
      <Row label="Selected research projects">
        <div className="space-y-10">
          {PROJECTS.map((p) => (
            <FadeIn key={p.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl md:text-2xl tracking-tight">{p.title}</h3>
                <p className="label-mono shrink-0">{p.meta}</p>
              </div>
              <Bullets items={p.bullets} />
            </FadeIn>
          ))}
        </div>
      </Row>

      {/* Skills */}
      <Row label="Core skills">
        <div className="divide-y divide-hairline">
          {SKILLS.map((s) => (
            <div key={s.group} className="grid md:grid-cols-12 gap-2 md:gap-4 py-4">
              <p className="md:col-span-4 label-mono pt-1">{s.group}</p>
              <p className="md:col-span-8 text-foreground/85 text-pretty leading-relaxed">{s.items}</p>
            </div>
          ))}
        </div>
      </Row>

      {/* Education */}
      <Row label="Education">
        <FadeIn>
          <h3 className="font-display text-xl md:text-2xl tracking-tight">
            B.A. Anthropology <span className="text-foreground/55">· Miami University, Oxford, OH</span>
          </h3>
          <p className="label-mono mt-1">Dec 2022</p>
          <p className="mt-3 text-foreground/85 text-pretty leading-relaxed">
            Summa Cum Laude · GPA 3.98 · Dean's List &amp; President's List. Relevant coursework:
            Computational Linguistics, Linguistic Anthropology, Research Methods.
          </p>
        </FadeIn>
      </Row>

      {/* Certifications + Languages */}
      <Row label="Certifications">
        <ul className="space-y-2">
          {CERTS.map((c) => (
            <li key={c} className="text-foreground/85 leading-relaxed">{c}</li>
          ))}
        </ul>
      </Row>

      <Row label="Languages">
        <ul className="space-y-2">
          {LANGUAGES.map((l) => (
            <li key={l} className="text-foreground/85 leading-relaxed">{l}</li>
          ))}
        </ul>
      </Row>
    </PageWrap>
  );
}
