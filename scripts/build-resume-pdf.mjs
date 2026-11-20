#!/usr/bin/env bun
/**
 * build-resume-pdf.mjs — regenerate public/emma-khare-resume.pdf
 *
 * The résumé page mirrors /resume, so both have to move together. This lays the
 * same content out as a two-page Letter PDF with Chrome's print engine: no
 * extra dependencies, selectable text, and real page breaks.
 *
 *   bun scripts/build-resume-pdf.mjs
 */
import { execFile } from "node:child_process";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";

const run = promisify(execFile);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public/emma-khare-resume.pdf");

const CHROME =
  process.env.CHROME_PATH ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const NAME = "Emma Khare";
const DISCIPLINE = "AI Evaluation &amp; Measurement · Computational Linguistics · Conversational AI";
const CONTACT = [
  "San Jose, CA",
  "emmakhare24@gmail.com",
  "linkedin.com/in/emma-khare",
  "github.com/emma-khare",
];

const SUMMARY =
  "Evaluation and measurement researcher focused on whether the instruments we use to evaluate language models, including rubrics, benchmarks, and LLM judges, measure what they claim. Currently a Study Coordinator at Apple, running end-to-end research in high-confidentiality programs, after a year of study design, protocol development, moderation, and stakeholder reporting across iPhone, iPad, Mac, Vision Pro, and AirPods.";

const EXPERIENCE = [
  {
    role: "Study Coordinator",
    org: "Apple (via Akkodis)",
    meta: "Cupertino, CA · Oct 2026 – Present",
    bullets: [
      "Independently plan, execute, and synthesize qualitative and mixed-methods studies across multiple product areas, including high-confidentiality projects with enhanced security requirements.",
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
    role: "Education Specialist, Native &amp; Indigenous-Centered Education",
    org: "Omaha Public Schools",
    meta: "Omaha, NE · Apr 2024 – Aug 2025",
    bullets: [
      "Built and ran an applied mixed-methods evaluation framework using surveys, interviews, and program evaluations to measure learning outcomes, contributing to a 20% retention boost.",
      "Designed and delivered culturally responsive workshops for 90+ students and families, using structured feedback and evaluation to improve engagement by 30%.",
      "Secured $35K+ in program funding through grant writing and stakeholder partnerships.",
    ],
  },
  {
    role: "Project Coordinator, Indigeneity, Identity &amp; Ireland",
    org: "Miami University · Foras na Gaeilge &amp; Údarás na Gaeltachta",
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

const PROJECTS = [
  {
    title: "Can We Trust an LLM Judge?",
    meta: "LLM judge reliability · Independent · 2026",
    bullets: [
      "Repeated an LLM judge eight times per item and measured reliability with Cohen's kappa and bootstrap confidence intervals.",
      "Found reliability of 0.85 on clear cases and 0.10 on ambiguous ones; a single call agreed with a human annotator at kappa 0.67, a majority of eight at 0.89.",
    ],
  },
  {
    title: "Measuring AI Fluency: Building &amp; Validating an Instrument",
    meta: "Instrument design · construct validity · Independent · 2026",
    bullets: [
      "Wrote an AI fluency rubric, then validated it against human judgment: Spearman's rho 0.96, within one level 100% of the time, Krippendorff's alpha 0.90.",
      "Reported the validation evidence alongside the scale so the rubric's limits travel with it.",
    ],
  },
  {
    title: "Learning Signals: Capability vs. Engagement",
    meta: "Measurement · learning sciences · Independent · 2026",
    bullets: [
      "Built a tool that reads a tutoring transcript and scores evidence of skill building rather than session activity.",
      "Separated capability from engagement so an active session cannot pass as learning.",
    ],
  },
  {
    title: "Socratic vs. Direct Tutoring: An A/B Experiment",
    meta: "Experimental design · statistical power · Independent · 2026",
    bullets: [
      "Ran a known-truth A/B validation that detected a real effect (d = 0.59, p &lt; 0.001) and returned null when there was none (p = 0.91).",
      "Showed a real effect being missed 70% of the time at small samples, and reported the power needed to detect it.",
    ],
  },
];

const SKILLS = [
  {
    group: "Research methods",
    items:
      "Usability testing · mixed-methods research · qualitative &amp; quantitative analysis · ethnographic field research · semi-structured interviews · survey design · contextual inquiry · persona development · journey mapping · thematic &amp; affinity analysis · participant recruitment &amp; screening",
  },
  {
    group: "Research operations",
    items:
      "End-to-end study design · moderation SOPs · protocol authoring · IRB-compliant participant research · cross-functional stakeholder management · research synthesis &amp; reporting · moderator training",
  },
  {
    group: "AI &amp; conversational research",
    items:
      "Study design for AI prompt-creation tasks · conversation-design protocols · human–AI interaction research · sentiment analysis",
  },
  {
    group: "Technical",
    items:
      "Python (NLTK, NRCLex, WordNet) · Cohen's kappa · bootstrap confidence intervals · qualitative coding",
  },
  {
    group: "Domain strengths",
    items:
      "Cross-cultural research (US, China, Ireland, Indigenous communities) · multilingual fieldwork · consumer hardware · language preservation · K–12 community research",
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

const jobs = (list) =>
  list
    .map(
      (job) => `
      <div class="job">
        <div class="job-head">
          <p class="job-title">${job.role} <span class="org">· ${job.org}</span></p>
          <p class="job-meta">${job.meta}</p>
        </div>
        <ul class="bullets">
          ${job.bullets.map((b) => `<li>${b}</li>`).join("\n")}
        </ul>
      </div>`,
    )
    .join("\n");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${NAME}, Résumé</title>
    <style>
      @page { size: Letter; margin: 0.6in 0.68in 0.55in; }
      * { box-sizing: border-box; }
      html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      body {
        margin: 0;
        font-family: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
        font-size: 9.6pt;
        line-height: 1.4;
        color: #3a1c25;
      }
      h1 {
        margin: 0;
        font-size: 25pt;
        font-weight: 600;
        letter-spacing: -0.01em;
        line-height: 1.05;
      }
      .discipline {
        margin: 4pt 0 0;
        font-size: 9.4pt;
        color: #98203f;
      }
      .contact {
        margin: 3pt 0 0;
        font-size: 8.6pt;
        color: #5d3b45;
      }
      .rule {
        height: 1px;
        background: #c39a3c;
        margin: 11pt 0 0;
      }
      .summary {
        margin: 10pt 0 0;
        font-size: 10.2pt;
        line-height: 1.45;
      }
      h2 {
        margin: 15pt 0 7pt;
        padding-bottom: 3pt;
        border-bottom: 1px solid #e2d3c6;
        font-family: "SF Mono", "Menlo", monospace;
        font-size: 7.6pt;
        font-weight: 600;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: #98203f;
      }
      .job { margin: 0 0 9pt; break-inside: avoid; }
      .job-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12pt;
      }
      .job-title {
        margin: 0;
        font-size: 10.4pt;
        font-weight: 600;
      }
      .org { font-weight: 400; color: #6b4550; }
      .job-meta {
        margin: 0;
        flex: none;
        font-family: "SF Mono", Menlo, monospace;
        font-size: 7.4pt;
        letter-spacing: 0.04em;
        color: #8a616c;
        white-space: nowrap;
      }
      .bullets { margin: 3pt 0 0; padding: 0; list-style: none; }
      .bullets li {
        position: relative;
        margin: 0 0 2.5pt;
        padding-left: 11pt;
      }
      .bullets li::before {
        content: "";
        position: absolute;
        left: 2pt;
        top: 0.52em;
        width: 3pt;
        height: 3pt;
        border-radius: 50%;
        background: #98203f;
      }
      table.skills { width: 100%; border-collapse: collapse; }
      table.skills th {
        width: 30%;
        padding: 3pt 10pt 3pt 0;
        vertical-align: top;
        text-align: left;
        font-family: "SF Mono", Menlo, monospace;
        font-size: 7.2pt;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #6b4550;
      }
      table.skills td {
        padding: 3pt 0;
        vertical-align: top;
        border-bottom: 1px solid #eee1d6;
      }
      table.skills tr:last-child td { border-bottom: 0; }
      .plain { margin: 0; padding: 0; list-style: none; }
      .plain li { margin: 0 0 2.5pt; }
      .two-col { display: flex; gap: 24pt; }
      .two-col > div { flex: 1; }
      .edu-title { margin: 0; font-size: 10.4pt; font-weight: 600; }
      .edu-meta {
        margin: 2pt 0 0;
        font-family: "SF Mono", Menlo, monospace;
        font-size: 7.4pt;
        letter-spacing: 0.04em;
        color: #8a616c;
      }
      .edu-body { margin: 4pt 0 0; }
    </style>
  </head>
  <body>
    <header>
      <h1>${NAME}</h1>
      <p class="discipline">${DISCIPLINE}</p>
      <p class="contact">${CONTACT.join(" · ")}</p>
      <div class="rule"></div>
    </header>

    <p class="summary">${SUMMARY}</p>

    <h2>Experience</h2>
    ${jobs(EXPERIENCE)}

    <h2>Selected research projects</h2>
    ${jobs(PROJECTS)}

    <h2>Core skills</h2>
    <table class="skills">
      ${SKILLS.map((s) => `<tr><th>${s.group}</th><td>${s.items}</td></tr>`).join("\n")}
    </table>

    <h2>Education</h2>
    <p class="edu-title">B.A. Anthropology <span class="org">· Miami University, Oxford, OH</span></p>
    <p class="edu-meta">Dec 2022</p>
    <p class="edu-body">
      Summa Cum Laude · GPA 3.98 · Dean's List &amp; President's List. Relevant coursework:
      Computational Linguistics, Linguistic Anthropology, Research Methods.
    </p>

    <div class="two-col" style="margin-top: 15pt">
      <div>
        <h2 style="margin-top: 0">Certifications</h2>
        <ul class="plain">${CERTS.map((c) => `<li>${c}</li>`).join("")}</ul>
      </div>
      <div>
        <h2 style="margin-top: 0">Languages</h2>
        <ul class="plain">${LANGUAGES.map((l) => `<li>${l}</li>`).join("")}</ul>
      </div>
    </div>
  </body>
</html>`;

const dir = await mkdtemp(path.join(tmpdir(), "resume-pdf-"));
try {
  const page = path.join(dir, "resume.html");
  await writeFile(page, html, "utf8");
  await run(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--user-data-dir=${path.join(dir, "profile")}`,
    `--print-to-pdf=${OUT}`,
    pathToFileURL(page).href,
  ]);
} finally {
  await rm(dir, { recursive: true, force: true });
}

const { size } = await stat(OUT);
console.log(`wrote public/emma-khare-resume.pdf (${Math.round(size / 1024)} KB)`);
