import { createFileRoute } from "@tanstack/react-router";
import { FadeIn, PageWrap } from "@/components/Motion";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Résumé, Emma Khare" },
      {
        name: "description",
        content:
          "Emma Khare, AI evaluation and measurement researcher. Résumé: experience, skills, education.",
      },
      { property: "og:title", content: "Résumé, Emma Khare" },
      { property: "og:description", content: "Emma Khare, AI evaluation and measurement researcher. Résumé." },
    ],
  }),
  component: Resume,
});

const SUMMARY =
  "Evaluation and measurement researcher focused on whether the instruments we use to evaluate language models, including rubrics, benchmarks, and LLM judges, measure what they claim. Currently a Study Coordinator at Apple, running end-to-end research in high-confidentiality programs, after a year of study design, protocol development, moderation, and stakeholder reporting across iPhone, iPad, Mac, Vision Pro, and AirPods.";

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
    items: "Python (NLTK, NRCLex, WordNet) · Cohen's kappa · bootstrap confidence intervals · qualitative coding",
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
    role: "Study Coordinator",
    org: "Apple (via Akkodis)",
    meta: "Cupertino, CA · Oct 2026 – Present",
    bullets: [
      "Independently plan, execute, and synthesize qualitative and mixed-methods studies on undisclosed devices across multiple product areas, including high-confidentiality projects with enhanced security requirements.",
      "Develop research protocols, manage participant recruitment and screening, and lead end-to-end research sessions under strict confidentiality, disclosure-handling, and project-specific security protocols.",
      "Analyze complex qualitative findings and survey data, translating research into actionable insights and stakeholder share-outs that inform product and design decisions.",
      "Partner with product managers, designers, and engineers to align research objectives with user needs and business goals, adapting terminology for technical and non-technical audiences.",
      "Author standardized SOPs and contribute to research operations, documentation, and knowledge-management practices.",
    ],
  },
  {
    role: "UX Researcher / Research Moderator",
    org: "Apple (via INSPYR Solutions)",
    meta: "Cupertino, CA · Jan 2026 – Oct 2026",
    bullets: [
      "Designed and led 4+ end-to-end mixed-methods UX research studies across Apple consumer hardware, translating research questions into repeatable data-collection protocols.",
      "Authored the full protocol for a large-scale, multi-team conversational-AI data-collection study, including procedures designed for international replication.",
      "Moderated hundreds of participant sessions across iPhone, iPad, Mac, Vision Pro, and AirPods while maintaining data integrity, procedural consistency, and high-quality participant interaction.",
      "Coordinated with 5+ stakeholder teams across engineering, design, and research to define study requirements and operationalize the end-to-end collection and moderation process.",
      "Created standardized SOPs and trained 2 new moderators; tracked study progress and synthesized usability findings into stakeholder-facing reports.",
    ],
  },
  {
    role: "UX Research Intern",
    org: "Woaf Meow",
    meta: "Remote / Cross-market · Jan 2024 – Sept 2025",
    bullets: [
      "Moderated usability sessions for a conversational-AI pet-care app and companion health wearable across U.S. and China cohorts, surfacing cross-cultural differences in onboarding and navigation.",
      "Synthesized mixed-methods findings to identify a critical U.S./China product-team communication breakdown and communicated the issue to PMs to support roadmap decisions.",
      "Delivered personas, journey maps, and usability reports that informed global market-expansion priorities.",
    ],
  },
  {
    role: "Education Specialist, Native & Indigenous-Centered Education",
    org: "Omaha Public Schools",
    meta: "Omaha, NE · Apr 2024 – Aug 2025",
    bullets: [
      "Built and ran an applied mixed-methods evaluation framework using surveys, interviews, and program evaluations to measure learning outcomes, contributing to a 20% retention boost.",
      "Designed and delivered culturally responsive workshops for 90+ students and families, using structured feedback and evaluation to improve engagement by 30%.",
      "Secured $35K+ in program funding through grant writing and stakeholder partnerships.",
    ],
  },
  {
    role: "Project Coordinator, Indigeneity, Identity & Ireland",
    org: "Miami University · Foras na Gaeilge & Údarás na Gaeltachta",
    meta: "Oxford, OH / Ireland · Aug 2022 – Dec 2022",
    bullets: [
      "Coordinated multilingual applied field research across two continents, managing interviews, scheduling, logistics, and IRB documentation.",
      "Synthesized qualitative and archival data into clear findings for academic and community stakeholders.",
    ],
  },
  {
    role: "NSF REU Fellow, Linguistics",
    org: "University of Oregon",
    meta: "Eugene, OR · Jun – Aug 2022",
    bullets: [
      "Conducted Indigenous language-preservation research on Hanis, Coos, and Miluk, transcribing and converting 100+ pages of 1800s-era manuscripts into IPA and English.",
      "Built and maintained an interactive research database used by academic and community researchers.",
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
          <span className="text-pink-ink select-none" aria-hidden="true">—</span>
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
              AI Evaluation &amp; Measurement · Computational Linguistics · Conversational AI
            </p>
            <p className="mt-2 label-mono">
              San Jose, CA ·{" "}
              <a href="mailto:emmakhare24@gmail.com" className="link-underline">emmakhare24@gmail.com</a>{" "}
              ·{" "}
              <a href="https://www.linkedin.com/in/emma-khare/" target="_blank" rel="noreferrer" className="link-underline">
                LinkedIn ↗
              </a>{" "}
              ·{" "}
              <a href="https://github.com/emma-khare" target="_blank" rel="noreferrer" className="link-underline">
                GitHub ↗
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
