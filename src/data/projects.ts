import irelandImg from "@/assets/project-ireland.jpg";
import reuImg from "@/assets/project-reu.jpg";
import reuAllophonesImg from "@/assets/project-reu-allophones.jpg";
import omahaImg from "@/assets/project-omaha.jpg";
import woafmeowImg from "@/assets/project-woafmeow.jpg";
import appleAudioImg from "@/assets/project-apple-audio.png";
import romanceNlpImg from "@/assets/project-romance-nlp.png";

export type CaseStudy = {
  badges?: string[];
  stats?: { label: string; value: string }[];
  goals?: string[];
  methodList?: string[];
  process?: { title: string; body: string }[];
  decisions?: string[];
  engagement?: { title: string; body: string }[];
};

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
  image?: string;
  overview: string;
  context: string;
  methods: string[];
  outcome: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "apple-conversational-ai",
    image: appleAudioImg,
    title: "Multi-Device AI Audio Capture Study",
    tagline:
      "Lead moderator on a large-scale, multi-team AI data collection study across Apple consumer hardware platforms.",
    year: "2026",
    role: "Lead Moderator",
    client: "Apple (via INSPYR Solutions)",
    tags: ["Conversational AI", "Consumer Hardware", "Moderation"],
    accent: "coral",
    cover:
      "from-[oklch(0.78_0.17_300)] via-[oklch(0.72_0.18_320)] to-[oklch(0.72_0.16_358)]",
    overview:
      "End-to-end research operations for a large-scale, multi-team AI data collection study across consumer hardware platforms. Promoted to lead moderator over the course of this engagement, going on to lead or contribute to two additional studies.",
    context:
      "Apple's research teams needed a unified protocol that could serve engineering, design, and research simultaneously across concurrent studies — without letting any one team's requirements compromise data integrity. The work pushed into newer territory: testing how participants produce naturalistic audio across multiple simultaneous device configurations.",
    methods: [
      "Structured prompt-based audio elicitation (60 min sessions).",
      "Multi-device simultaneous capture with parallel moderator setups.",
      "Diverse prompt domains to capture natural language variation.",
      "QA review and post-session data upload protocols.",
    ],
    outcome:
      "Data delivered to engineering teams to inform AI model decisions. Protocol built to serve as the foundational template for future study phases and potential expansion to international markets and additional languages.",
    caseStudy: {
      badges: ["NDA-safe", "Apple via INSPYR Solutions", "2026", "Lead moderator"],
      stats: [
        { label: "Participants tracked", value: "100+" },
        { label: "Sessions moderated", value: "50+" },
        { label: "Teams aligned", value: "5+" },
      ],
      goals: [
        "Capture naturalistic user audio across multiple simultaneous device configurations.",
        "Compare model and software performance against real user behavior.",
        "Evaluate AI audio recognition accuracy across diverse user populations.",
      ],
      process: [
        {
          title: "Scoping & stakeholder alignment",
          body: "Engaged with multiple managers across teams with different priorities and technical requirements. Translated competing needs into a unified study design that could serve engineering, design, and research simultaneously — without letting any one team's requirements compromise data integrity.",
        },
        {
          title: "Protocol design",
          body: "Authored the end-to-end study protocol from scratch: physical device setup with diagrams and specifications, in-house software recording configuration, parallel app workflows, step-by-step session instructions, troubleshooting guides, and QA/post-session upload procedures. Designed for replication — documented with enough precision that international teams could run the same protocol in future phases or additional locales.",
        },
        {
          title: "Prompt design & participant management",
          body: "Wrote diverse prompt sets spanning numerous domains to elicit natural language variation across participants. Built a tracking system for 100+ participants and their session outcomes. Managed outreach, scheduling coordination, and participant rapport — establishing trust to reduce performance bias during sessions.",
        },
        {
          title: "Moderation & execution",
          body: "Served as lead moderator, personally running 50+ one-hour sessions while maintaining study consistency and data integrity across a high-volume collection period — including through two weeks of illness. Trained and oversaw a second moderator running a parallel setup simultaneously, doubling throughput without sacrificing protocol fidelity.",
        },
        {
          title: "Handoff & impact",
          body: "Data delivered to engineering teams to inform AI model decisions. Protocol built to serve as the foundational template for future study phases and potential expansion to international markets and additional languages. Trust established in this study directly led to being tapped as lead moderator on a subsequent study, and as a contributing researcher on a third.",
        },
      ],
      decisions: [
        "Chose structured prompt elicitation over free-form interaction to control for variability while still capturing natural speech patterns — critical for meaningful AI model comparison.",
        "Built participant rapport intentionally before and after sessions to reduce performance anxiety — improving data naturalness at scale.",
        "Designed the protocol for international replication from day one, rather than treating localization as a later problem — reducing rework for future study phases.",
      ],
      engagement: [
        {
          title: "Study 1 — Lead moderator",
          body: "This case study. Protocol author, lead moderator, moderator trainer.",
        },
        {
          title: "Study 2 — Lead moderator",
          body: "Selected again as lead moderator on a subsequent study — reflecting trust built through prior execution.",
        },
        {
          title: "Study 3 — Contributing researcher",
          body: "Contributed to a third study in a supporting research role across a concurrent research stream.",
        },
      ],
    },
  },
  {
    slug: "woaf-meow-smart-ring",
    image: woafmeowImg,
    title: "Cross-Cultural Smart Ring Research",
    tagline:
      "Shaping an early-stage consumer health smart ring through prototypes, surveys, and cross-cultural US–China research.",
    year: "2025",
    role: "User Experience Researcher",
    client: "Woaf Meow",
    tags: ["Wearables", "Cross-Cultural", "Usability"],
    accent: "blue",
    cover:
      "from-[oklch(0.78_0.13_200)] via-[oklch(0.7_0.16_240)] to-[oklch(0.66_0.19_270)]",
    overview:
      "Worked mainly on the software side of an early-stage consumer health smart ring, supporting the first stages of hardware development. Drafted prototypes and ran surveys to learn what users wanted and where the product could go — with research spanning US and China cohorts.",
    context:
      "The product was in its earliest stages: the software was taking shape while the hardware was still being prototyped. Before committing to a direction, the team needed grounded evidence about what users actually wanted — and where expectations diverged between the US and China markets.",
    methods: [
      "Ran surveys to learn what users wanted from the product and where it could develop next.",
      "Drafted and iterated early prototypes with the software team during the first stages of hardware development.",
      "Built personas, journey maps, and usability reports to ground product direction.",
      "Surfaced where onboarding and expectations diverged between US and China cohorts, and flagged the US–China team communication gaps slowing iteration.",
    ],
    outcome:
      "Turned early survey and prototype research into a grounded product direction, and surfaced cross-cultural differences and team-communication gaps that shaped which features to prioritize as the product took shape.",
    caseStudy: {
      badges: ["Consumer wearable", "US ↔ China", "2025"],
      stats: [
        { label: "Markets studied", value: "2" },
        { label: "Cohorts compared", value: "US + CN" },
        { label: "Cross-functional partners", value: "PM · Eng · Design" },
      ],
      goals: [
        "Define what the product could become through surveys and early prototype feedback.",
        "Ground software and first-stage hardware direction in real user needs.",
        "Identify where expectations diverged between US and China cohorts, and close the communication gaps slowing iteration.",
      ],
      process: [
        {
          title: "Surveys to define product direction",
          body: "Ran surveys to understand what users wanted from an early-stage smart ring and where the product could develop — turning open questions about direction into grounded signal for the team.",
        },
        {
          title: "Drafting early prototypes",
          body: "Worked mainly on the software side while the hardware was in its first stages, drafting and iterating prototypes with designers and engineers to test what the product could become.",
        },
        {
          title: "Synthesis into product-direction artifacts",
          body: "Built personas, journey maps, and usability reports to ground decisions about features and direction — inputs the team could act on as the product took shape.",
        },
        {
          title: "Bridging US and China product teams",
          body: "Surfaced where onboarding and expectations diverged between US and China cohorts — and the team-communication gaps between regions that were the real bottleneck — so early product decisions accounted for both markets.",
        },
      ],
      decisions: [
        "Led with surveys and prototypes to define direction before the product locked into a shape.",
        "Tied every deliverable to a concrete product decision rather than shipping generic insights.",
        "Treated US–China differences and cross-team communication as first-class findings during early development, not later localization.",
      ],
    },
  },
  {
    slug: "indigenous-education-omaha",
    image: omahaImg,
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
    caseStudy: {
      badges: ["K-12", "Community-centered", "Mixed methods"],
      stats: [
        { label: "Native students & families served", value: "90+" },
        { label: "Program funding secured", value: "$35K+" },
        { label: "Engagement lift", value: "+30%" },
      ],
      goals: [
        "Build programming that genuinely serves Native and Indigenous community members — not just symbolically.",
        "Center community voice in both curriculum and evaluation.",
        "Generate evidence strong enough to secure ongoing funding.",
      ],
      process: [
        {
          title: "Community-rooted curriculum design",
          body: "Designed weekly workshops and inclusive curriculum materials addressing the educational and cultural needs surfaced directly by Native students and families — not assumed from outside the community.",
        },
        {
          title: "Mixed-methods evaluation framework",
          body: "Built an evaluation framework combining surveys, interviews, and program evaluations so qualitative voice and quantitative outcomes could be read together when reporting back to the district and to funders.",
        },
        {
          title: "Stakeholder partnerships & grant writing",
          body: "Wrote grants and built partnerships with district stakeholders and community organizations to secure $35K+ in program funding — translating evaluation findings into a funding case.",
        },
        {
          title: "Iterating on what worked",
          body: "Used evaluation data to refine workshop design across the year, lifting program engagement 30% and student retention 20%.",
        },
      ],
      decisions: [
        "Treated community voice as the source of curriculum, not a layer on top of pre-made content.",
        "Designed the evaluation alongside the program so 'what's working' could be answered, not just claimed.",
        "Wrote grants from evaluation data rather than aspiration — strengthening both the funding case and the program itself.",
      ],
    },
  },
  {
    slug: "indigeneity-identity-ireland",
    image: irelandImg,
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
    caseStudy: {
      badges: ["Ethnographic", "Multilingual", "Two-continent fieldwork"],
      stats: [
        { label: "Continents coordinated", value: "2" },
        { label: "Institutional partners", value: "3" },
        { label: "Languages in scope", value: "Gaeilge + Indigenous NA" },
      ],
      goals: [
        "Connect Irish (Gaeilge) and Indigenous North American language-revitalization communities through shared research questions.",
        "Hold logistics and IRB compliance to a standard that protects, rather than burdens, community partners.",
        "Translate fieldwork into insights usable by both academic and community audiences.",
      ],
      process: [
        {
          title: "Partnership cultivation",
          body: "Built research partnerships with Foras na Gaeilge and Údarás na Gaeltachta, treating relationship-building as the substrate that everything else depends on.",
        },
        {
          title: "Logistics & IRB across two continents",
          body: "Managed interview schedules, participant logistics, and IRB documentation across two continents — keeping the paperwork in service of trust rather than the other way around.",
        },
        {
          title: "Fieldwork & interviewing",
          body: "Conducted and coordinated multilingual interviews, holding methodological consistency across very different linguistic and cultural contexts.",
        },
        {
          title: "Synthesis & dual-audience reporting",
          body: "Synthesized qualitative interview and archival data into actionable insights, presented in formats appropriate for both academic and community audiences.",
        },
      ],
      decisions: [
        "Designed IRB and translation logistics around what supported community trust, not what was administratively convenient.",
        "Held interview methodology consistent across both communities so findings could be compared honestly without flattening cultural difference.",
        "Reported back to community audiences first, not as an afterthought to the academic write-up.",
      ],
    },
  },
  {
    slug: "nsf-reu-linguistics",
    image: reuImg,
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
      "The source documents were printed photocopies of handwritten manuscripts. Transcription meant deciphering which characters of the IPA had originally been written by hand, working out the phonetic sounds those characters were meant to represent, and recording every reading in a spreadsheet. IPA — the International Phonetic Alphabet — assigns every sound a human can produce its own written orthographic symbol; it is the standardized system linguists use across the field to document and decipher languages consistently. Because the handwriting was ambiguous, peer review and collaboration were essential to verify accuracy — all under strict ethical compliance with Indigenous community partners.",
    methods: [
      "Transcribed 100+ pages of 1800s-era source material into IPA and English.",
      "Designed and maintained an interactive research database used by academic users.",
      "Presented findings to 200+ stakeholders including tribal members, faculty, and federal grant administrators.",
    ],
    outcome:
      "Database engagement up 40% across academic users. Trust maintained with Indigenous community partners through strict ethical compliance.",
    caseStudy: {
      badges: ["NSF-funded", "Archival", "IRB-compliant"],
      stats: [
        { label: "Pages transcribed (IPA + English)", value: "100+" },
        { label: "Stakeholders presented to", value: "200+" },
        { label: "Database engagement lift", value: "+40%" },
      ],
      goals: [
        "Transcribe and digitize fragile 1800s-era Hanis, Coos, and Miluk manuscripts into a usable scholarly resource.",
        "Build an interactive database that academic users would actually return to.",
        "Maintain strict IRB and ethical compliance with Indigenous community partners throughout.",
      ],
      process: [
        {
          title: "Archival transcription into IPA",
          body: "Transcribed 100+ pages of pre-1900 source material into IPA and English, working carefully through idiosyncratic and inconsistent original transcriptions.",
        },
        {
          title: "Database design",
          body: "Designed and maintained an interactive research database for academic users — structuring the data so future researchers could query, compare, and cite it.",
        },
        {
          title: "Ongoing community accountability",
          body: "Held strict IRB and ethical-compliance standards with Indigenous community partners at every step, treating compliance as relational rather than purely procedural.",
        },
        {
          title: "Dissemination",
          body: "Presented findings to 200+ stakeholders including tribal members, university faculty, and federal grant administrators — adjusting framing for each audience without losing fidelity.",
        },
      ],
      decisions: [
        "Standardized transcription into IPA so the digitized corpus could serve linguistic research, not just preservation.",
        "Built the database for researcher workflows, not as a static archive — driving the 40% engagement lift.",
        "Treated community trust as the project's success condition, not a compliance checkbox.",
      ],
    },
  },
  {
    slug: "myaamia-allophones",
    image: reuAllophonesImg,
    title: "Myaamia Allophones Acoustic Study",
    tagline:
      "An acoustic-phonetic analysis of allophonic variation in Myaamia, completed within the NSF REU fellowship.",
    year: "2022",
    role: "NSF REU Fellow — Linguistics",
    client: "University of Oregon × Myaamia Center",
    tags: ["Acoustic Phonetics", "Praat", "Language Revitalization"],
    accent: "blue",
    cover:
      "from-[oklch(0.82_0.12_210)] via-[oklch(0.72_0.16_245)] to-[oklch(0.64_0.19_275)]",
    overview:
      "A sub-project of my NSF REU fellowship: an acoustic study of allophonic variation in Myaamia, presented as a research poster to faculty, tribal members, and federal grant administrators.",
    context:
      "Myaamia is a reawakening language with a small but growing body of acoustic documentation. Acoustic evidence of allophonic patterning supports both pedagogy and ongoing revitalization work led by the Myaamia Center.",
    methods: [
      "Segmented and measured target tokens in Praat from existing Myaamia recordings.",
      "Analyzed formant and duration data to identify conditioning environments for allophonic variation.",
      "Designed and presented a research poster summarizing findings for academic and community audiences.",
    ],
    outcome:
      "Contributed acoustic evidence supporting Myaamia phonological description, and shared findings with community partners and the broader REU cohort.",
    caseStudy: {
      badges: ["Acoustic phonetics", "Praat", "Language revitalization"],
      stats: [
        { label: "Tool", value: "Praat" },
        { label: "Audience", value: "Community + academic" },
        { label: "Format", value: "Research poster" },
      ],
      goals: [
        "Document allophonic variation in Myaamia with acoustic evidence.",
        "Produce findings usable by both phonologists and the Myaamia Center's revitalization work.",
        "Present results in a format accessible to non-specialist community audiences.",
      ],
      process: [
        {
          title: "Token selection from existing recordings",
          body: "Segmented and measured target tokens in Praat from existing Myaamia recordings, choosing items that could reveal conditioning environments for allophonic variation.",
        },
        {
          title: "Acoustic analysis",
          body: "Analyzed formant and duration data to identify the phonological environments in which allophones surfaced, building a defensible quantitative picture from a modest dataset.",
        },
        {
          title: "Translation into a community-readable artifact",
          body: "Designed and presented a research poster summarizing findings — calibrated to be readable by academic and community audiences without diluting the technical content.",
        },
      ],
      decisions: [
        "Worked from existing recordings rather than requesting new ones — respecting community resources and timelines.",
        "Held the analysis to a standard usable for phonological description, not just illustrative.",
        "Designed the poster as a community deliverable, not only a conference artifact.",
      ],
    },
  },
  {
    slug: "ai-gender-romantic-fiction",
    image: romanceNlpImg,
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
    caseStudy: {
      badges: ["NLP", "Python", "Mixed methods"],
      stats: [
        { label: "Stack", value: "NRCLex · NLTK · WordNet" },
        { label: "Method", value: "Sentiment + cultural reading" },
        { label: "Output", value: "Personas + analysis" },
      ],
      goals: [
        "Surface emotional patterns and gender representation in romantic fiction text data.",
        "Pair computational analysis with the kind of cultural reading anthropology trains for.",
        "Connect computational insights to plausible stakeholder use cases via personas.",
      ],
      process: [
        {
          title: "Corpus cleaning & preparation",
          body: "Cleaned and structured large text datasets so sentiment and lexical analyses would run against consistent inputs rather than noisy raw text.",
        },
        {
          title: "Sentiment & lexical analysis",
          body: "Used NRCLex, NLTK, and WordNet to surface emotional trends and gendered patterns in the corpus — running computational analysis as the first pass, not the final word.",
        },
        {
          title: "Cultural reading & framing",
          body: "Framed computational findings through cultural context, storytelling, and computational linguistics — letting each lens catch what the other missed.",
        },
        {
          title: "Persona translation",
          body: "Built research personas linking the computational insights to real stakeholder use cases, demonstrating how an NLP study could feed a product or design conversation.",
        },
      ],
      decisions: [
        "Treated sentiment scores as a starting point for interpretation, not as conclusions on their own.",
        "Used personas to bridge an academic NLP study into a UX-research-shaped deliverable.",
        "Held cultural and computational readings in tension on purpose, so neither would overwrite the other.",
      ],
    },
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
