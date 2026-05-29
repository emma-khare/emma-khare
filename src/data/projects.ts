export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  client: string;
  tags: string[];
  accent: "coral" | "blue" | "pink" | "peach";
  cover: string;
  overview: string;
  context: string;
  methods: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "apple-conversational-ai",
    title: "Conversational AI Studies at Apple",
    tagline:
      "End-to-end UX research across iPhone, iPad, Mac, Vision Pro, and AirPods.",
    year: "2026 — Present",
    role: "Data Moderator, User Research",
    client: "Apple (via INSPYR Solutions)",
    tags: ["Conversational AI", "Consumer Hardware", "Moderation"],
    accent: "coral",
    cover:
      "from-[oklch(0.78_0.17_300)] via-[oklch(0.72_0.18_320)] to-[oklch(0.72_0.16_358)]",
    overview:
      "Designing and moderating UX research studies that fold AI prompt creation and conversation design into protocols for Apple's consumer hardware lineup.",
    context:
      "Apple's research teams needed consistent moderation practices across concurrent studies spanning five hardware lines. The work also pushed into newer territory — testing how participants form, repair, and refine prompts in conversation with AI features.",
    methods: [
      "Authored 4+ end-to-end study protocols incorporating AI prompt creation and conversation design tasks.",
      "Moderated hundreds of participant sessions with strict SOP adherence and data integrity across study streams.",
      "Wrote standardized moderation SOPs from scratch and trained 2 new moderators on procedures and escalation paths.",
      "Led a cross-departmental moderation initiative with 5+ stakeholder teams across engineering, design, and research.",
    ],
    outcome:
      "Synthesized session findings into stakeholder-facing reports informing product and design decisions across multiple Apple research teams.",
  },
  {
    slug: "woaf-meow-smart-ring",
    title: "Cross-Cultural Smart Ring Research",
    tagline:
      "Surfacing UX divergences between US and China cohorts for a consumer health wearable.",
    year: "2024 — 2025",
    role: "User Experience Researcher",
    client: "Woaf Meow",
    tags: ["Wearables", "Cross-Cultural", "Usability"],
    accent: "blue",
    cover:
      "from-[oklch(0.78_0.13_200)] via-[oklch(0.7_0.16_240)] to-[oklch(0.66_0.19_270)]",
    overview:
      "Moderated usability sessions for an Oura-style smart ring across US and China-based cohorts, identifying where onboarding and app navigation diverged between markets.",
    context:
      "The product team was iterating quickly but had blind spots between regional cohorts. Critical communication gaps between US and China product teams were slowing iteration, and roadmap priorities for global expansion needed grounded evidence.",
    methods: [
      "Ran structured testing protocols across both markets, holding methodological consistency between cohorts.",
      "Built personas, journey maps, and usability reports tied to roadmap priorities.",
      "Translated participant feedback into iterative app updates with designers, engineers, and PMs.",
      "Troubleshot device and connectivity issues mid-session and escalated per research SOPs.",
    ],
    outcome:
      "Surfaced team-communication gaps that were blocking iteration speed, and turned cross-cultural findings into prioritized roadmap inputs for global expansion.",
  },
  {
    slug: "indigenous-education-omaha",
    title: "Native & Indigenous-Centered Education",
    tagline:
      "Research-driven, culturally responsive programming for 90+ Native students and families.",
    year: "2024 — 2025",
    role: "Education Specialist",
    client: "Omaha Public Schools",
    tags: ["Community Research", "Program Evaluation", "K-12"],
    accent: "pink",
    cover:
      "from-[oklch(0.82_0.15_358)] via-[oklch(0.78_0.17_10)] to-[oklch(0.74_0.18_340)]",
    overview:
      "Designed and delivered culturally responsive workshops for Native students and their families, paired with a mixed-methods evaluation framework to measure what was working.",
    context:
      "The district needed programming that genuinely served Native and Indigenous community members — not just symbolically. That meant centering community voice in both the curriculum and the evaluation.",
    methods: [
      "Designed weekly workshops and inclusive curriculum materials addressing educational and cultural needs.",
      "Built a mixed-methods evaluation framework using surveys, interviews, and program evaluations.",
      "Wrote grants and built stakeholder partnerships to secure $35K+ in program funding.",
    ],
    outcome:
      "Program engagement up 30% and student retention up 20%. Funding secured to expand Indigenous education programming the following year.",
  },
  {
    slug: "indigeneity-identity-ireland",
    title: "Indigeneity, Identity & Ireland",
    tagline:
      "Multilingual fieldwork across Irish (Gaeilge) and Indigenous North American research communities.",
    year: "2022",
    role: "Project Coordinator",
    client: "Miami University × Foras na Gaeilge × Údarás na Gaeltachta",
    tags: ["Ethnographic Research", "Multilingual Fieldwork"],
    accent: "coral",
    cover:
      "from-[oklch(0.78_0.16_290)] via-[oklch(0.7_0.19_310)] to-[oklch(0.66_0.2_330)]",
    overview:
      "Coordinated cross-cultural fieldwork connecting Irish and Indigenous North American language-revitalization communities, then synthesized findings into insights for academic and community audiences.",
    context:
      "Language revitalization work is relational — calendars, IRB paperwork, and translation logistics all have to support trust between communities, not get in its way.",
    methods: [
      "Managed interview schedules, participant logistics, and IRB documentation across two continents.",
      "Cultivated research partnerships with Foras na Gaeilge and Údarás na Gaeltachta.",
      "Synthesized qualitative interview and archival data into actionable insights.",
    ],
    outcome:
      "Findings presented to academic and community audiences, supporting cultural and linguistic revitalization initiatives on both sides of the partnership.",
  },
  {
    slug: "nsf-reu-linguistics",
    title: "Indigenous Language Preservation",
    tagline:
      "Transcribing 100+ pages of 1800s-era Hanis, Coos, and Miluk manuscripts into IPA.",
    year: "2022",
    role: "NSF REU Fellow — Linguistics",
    client: "University of Oregon",
    tags: ["Field Linguistics", "Archival Research", "Database Design"],
    accent: "blue",
    cover:
      "from-[oklch(0.85_0.13_220)] via-[oklch(0.76_0.16_250)] to-[oklch(0.7_0.18_280)]",
    overview:
      "An NSF-funded fellowship transcribing and digitizing historical manuscripts in Hanis, Coos, and Miluk into IPA and English, alongside building an interactive research database for academic users.",
    context:
      "Pre-1900 manuscripts are fragile, idiosyncratic, and inconsistently transcribed. The work required strict IRB and ethical compliance with Indigenous community partners at every step.",
    methods: [
      "Transcribed 100+ pages of 1800s-era source material into IPA and English.",
      "Designed and maintained an interactive research database used by academic users.",
      "Presented findings to 200+ stakeholders including tribal members, faculty, and federal grant administrators.",
    ],
    outcome:
      "Database engagement up 40% across academic users. Trust maintained with Indigenous community partners through strict ethical compliance.",
  },
  {
    slug: "ai-gender-romantic-fiction",
    title: "AI & Gender in Romantic Fiction",
    tagline:
      "A Python sentiment-analysis study of emotion and gender representation in romance text data.",
    year: "2021",
    role: "Researcher",
    client: "Miami University",
    tags: ["NLP", "Python", "Sentiment Analysis"],
    accent: "pink",
    cover:
      "from-[oklch(0.85_0.13_340)] via-[oklch(0.78_0.17_358)] to-[oklch(0.74_0.18_20)]",
    overview:
      "Built a Python sentiment-analysis tool using NRCLex, NLTK, and WordNet to surface emotional patterns and gender representation in romantic fiction text data.",
    context:
      "An early experiment in pairing computational methods with the kind of cultural reading anthropology trains for — letting each catch what the other misses.",
    methods: [
      "Cleaned and analyzed large text datasets for emotional trends.",
      "Framed findings through cultural context, storytelling, and computational linguistics.",
      "Built research personas linking computational insights to real stakeholder use cases.",
    ],
    outcome:
      "Demonstrated an adaptable UX research methodology in an NLP context — a throughline that still shapes how I design conversational-AI studies today.",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
