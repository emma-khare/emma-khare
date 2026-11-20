import irelandImg from "@/assets/project-ireland.jpg";
import irelandFieldnotesImg from "@/assets/fieldnotes-ireland.jpg";
import reuImg from "@/assets/project-reu.jpg";
import reuAllophonesImg from "@/assets/project-reu-allophones.jpg";
import omahaImg from "@/assets/project-omaha.jpg";
import woafmeowImg from "@/assets/project-woafmeow.jpg";
import appleAudioImg from "@/assets/project-apple-audio.png";
import romanceNlpImg from "@/assets/project-romance-nlp.png";
import romanceCollageImg from "@/assets/project-sentiment-collage.jpg";
import manuscriptCollageImg from "@/assets/project-manuscript-collage.jpg";
import llmJudgeImg from "@/assets/cover-llm-judge.webp";
import learningSignalsImg from "@/assets/cover-learning-signals.webp";
import tutoringAbImg from "@/assets/cover-socratic-vs-direct.webp";
import aiFluencyImg from "@/assets/cover-ai-fluency.webp";
import llmJudgeChart from "@/assets/chart-llm-judge.png";
import learningSignalsChart from "@/assets/chart-learning-signals.png";
import tutoringAbChart from "@/assets/chart-tutoring-ab.png";
import aiFluencyChart from "@/assets/chart-ai-fluency.png";

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
  /** Optional secondary "action" photo shown within the case study (public/ path or imported asset). */
  actionImage?: string;
  actionCaption?: string;
  /** Photographs and illustrations run full-bleed; charts stay framed so their axes survive. */
  actionImageBleed?: boolean;
  /** Archival cover art prints into the page as a full-bleed ground instead of a framed card. */
  coverGround?: boolean;
  /** Optional embedded video (YouTube/Vimeo *embed* URL). */
  videoUrl?: string;
  videoCaption?: string;
  /** Optional public repository URL, rendered as a "read the code" link. */
  repoUrl?: string;
  overview: string;
  context: string;
  methods: string[];
  /** Wrap values and key terms in ** to render them bold. */
  outcome: string;
  /** "What I'd carry forward", strategic reflections shown at the end of the case study. */
  lessons?: string[];
  /** Limitations: what the work does not show, rendered as its own section. */
  limitations?: string[];
  caseStudy?: CaseStudy;
};

const projectsRaw: Project[] = [
  {
    slug: "apple-conversational-ai",
    image: appleAudioImg,
    title: "Multi-Device AI Audio Capture Study",
    tagline: "Lead moderator on a multi-team Apple study capturing naturalistic AI audio across consumer devices.",
    year: "2026",
    role: "Lead Moderator",
    client: "Apple (via INSPYR Solutions)",
    tags: ["Conversational AI", "Consumer Hardware", "Moderation"],
    accent: "coral",
    cover:
      "from-[oklch(0.78_0.17_300)] via-[oklch(0.72_0.18_320)] to-[oklch(0.72_0.16_358)]",
    overview:
      "Research operations for a large-scale AI data collection study across Apple hardware. Promoted to lead moderator, then trusted with two further studies.",
    context:
      "Engineering, design, and research needed one protocol that served concurrent studies without compromising data integrity, including a first look at naturalistic audio captured across simultaneous device setups.",
    methods: [
      "Structured prompt-based audio elicitation (60-minute sessions).",
      "Simultaneous multi-device capture with parallel moderator setups.",
      "Diverse prompt domains to capture natural language variation.",
      "QA review and post-session upload protocols.",
    ],
    outcome:
      "**Data delivered to engineering** to inform model decisions, and a protocol that became the **foundational template** for later phases and international expansion.",
    caseStudy: {
      badges: ["NDA-safe", "Apple via INSPYR Solutions", "2026", "Lead moderator"],
      stats: [
        { label: "Participants tracked", value: "100+" },
        { label: "Sessions moderated", value: "50+" },
        { label: "Teams aligned", value: "5+" },
      ],
      goals: [
        "Capture naturalistic audio across simultaneous device configurations.",
        "Compare model performance against real user behavior.",
        "Evaluate recognition accuracy across diverse user populations.",
      ],
      process: [
        {
          title: "Scoping & alignment",
          body: "Turned managers with competing priorities into one study design that served engineering, design, and research at once.",
        },
        {
          title: "Protocol design",
          body: "Wrote the protocol end to end (device setup, recording configuration, session scripts, troubleshooting, QA), precise enough for international teams to replicate.",
        },
        {
          title: "Prompts & participants",
          body: "Wrote prompt sets across many domains and tracked **100+ participants**, building rapport to reduce performance bias.",
        },
        {
          title: "Moderation at volume",
          body: "Ran **50+ one-hour sessions** while training a second moderator on a parallel setup, doubling throughput without losing fidelity.",
        },
        {
          title: "Handoff & impact",
          body: "Data informed model decisions and the protocol became the template for later phases; the trust built here led to lead-moderator and researcher roles on **two further studies**.",
        },
      ],
      decisions: [
        "Structured prompts over free-form chat: controls variability while keeping speech natural.",
        "Built for international replication from day one, avoiding later rework.",
      ],
      engagement: [
        {
          title: "Study 1, Lead moderator",
          body: "Protocol author, lead moderator, moderator trainer.",
        },
        {
          title: "Study 2, Lead moderator",
          body: "Selected again on a subsequent study.",
        },
        {
          title: "Study 3, Contributing researcher",
          body: "Supported a concurrent research stream.",
        },
      ],
    },
  },
  {
    slug: "woaf-meow-smart-ring",
    lessons: [
      "Early-stage research narrows what to build; it doesn't validate a finished design.",
      "Flagging an uncomfortable risk early, such as a market conflict, is part of the job.",
    ],
    image: woafmeowImg,
    title: "Conversational AI for a Pet-Care App",
    tagline: "Survey design and session synthesis for a conversational-AI pet-care app, plus early ideation for a companion smart ring.",
    year: "2025",
    role: "UX Research Intern",
    client: "Woaf Meow",
    tags: ["Conversational AI", "Survey Research", "Session Synthesis"],
    accent: "blue",
    cover:
      "from-[oklch(0.78_0.13_200)] via-[oklch(0.7_0.16_240)] to-[oklch(0.66_0.19_270)]",
    overview:
      "Designed and analyzed surveys and synthesized usability sessions for an early-stage conversational-AI pet-care app, plus early ideation for a companion smart ring.",
    context:
      "The app was early and the smart ring still an idea. The team needed to know what pet owners wanted before committing to a direction.",
    methods: [
      "Designed and analyzed surveys on what pet owners wanted from the app.",
      "Synthesized usability sessions into findings the team could act on.",
      "Contributed to early ideation for a companion smart ring.",
      "Flagged a market-conflict risk for the team to weigh.",
    ],
    outcome:
      "Survey analysis and synthesized findings informed **early product direction**, and surfaced a **market-conflict risk** before it was locked in.",
    caseStudy: {
      badges: ["Conversational AI", "Pet-care app", "2025"],
      goals: [
        "Understand what pet owners wanted from the app.",
        "Turn usability sessions into findings the team could use.",
        "Surface risks before the product locked in a direction.",
      ],
      process: [
        {
          title: "Survey design & analysis",
          body: "Turned open questions into signal the team could act on.",
        },
        {
          title: "Session synthesis",
          body: "Separated what users did from what they said they wanted.",
        },
        {
          title: "Smart-ring ideation",
          body: "Helped shape what the companion hardware could become.",
        },
        {
          title: "Flagging a market conflict",
          body: "Raised the risk early so it could be weighed, not discovered.",
        },
      ],
      decisions: [
        "Led with surveys and synthesis rather than over-claiming from a small study.",
        "Kept every finding scoped to what the data could support.",
      ],
    },
  },
  {
    slug: "indigenous-education-omaha",
    lessons: [
      "Culturally responsive design changed the numbers: engagement rose once the program reflected its community.",
      "Grant writing is a research skill: it translates community needs into a funder's language.",
    ],
    image: omahaImg,
    title: "Native & Indigenous-Centered Education",
    tagline: "Research-driven, culturally responsive programming for 90+ Native students and families.",
    year: "2024, 2025",
    role: "Education Specialist",
    client: "Omaha Public Schools",
    tags: ["Community Research", "Program Evaluation", "K-12"],
    accent: "pink",
    cover:
      "from-[oklch(0.82_0.15_358)] via-[oklch(0.78_0.17_10)] to-[oklch(0.74_0.18_340)]",
    overview:
      "Designed culturally responsive workshops for Native students and families, paired with a mixed-methods evaluation to measure what was working.",
    context:
      "The district needed programming that served Native and Indigenous community members in practice, which meant centering community voice in the curriculum and the evaluation.",
    methods: [
      "Weekly workshops and inclusive curriculum materials built with community input.",
      "A mixed-methods evaluation: surveys, interviews, and program evaluations.",
      "Grants and stakeholder partnerships to fund the work.",
    ],
    outcome:
      "Program engagement up **30%** and student retention up **20%**, with **$35K+** secured to expand Indigenous education programming the following year.",
    caseStudy: {
      badges: ["K-12", "Community-centered", "Mixed methods"],
      stats: [
        { label: "Native students & families served", value: "90+" },
        { label: "Program funding secured", value: "$35K+" },
        { label: "Engagement lift", value: "+30%" },
      ],
      goals: [
        "Build programming that serves Native and Indigenous community members, not symbolically.",
        "Center community voice in curriculum and evaluation.",
        "Generate evidence strong enough to secure ongoing funding.",
      ],
      process: [
        {
          title: "Community-rooted curriculum",
          body: "Workshops and materials shaped by what Native students and families surfaced, not assumed from outside.",
        },
        {
          title: "Mixed-methods evaluation",
          body: "Survey, interview, and program data read together when reporting to the district and funders.",
        },
        {
          title: "Partnerships & grants",
          body: "Built district and community partnerships and wrote the grants that secured **$35K+**.",
        },
        {
          title: "Iterating on what worked",
          body: "Used evaluation data to refine workshops across the year: engagement **+30%**, retention **+20%**.",
        },
      ],
      decisions: [
        "Treated community voice as the source of curriculum, not a layer on top of it.",
        "Designed the evaluation alongside the program so 'what's working' could be answered, not claimed.",
      ],
    },
  },
  {
    slug: "indigeneity-identity-ireland",
    lessons: [
      "In language-revitalization work, logistics and IRB either protect community trust or erode it.",
      "Reporting to community audiences first, not after the academic write-up, changed how the work landed.",
    ],
    image: irelandImg,
    actionImage: irelandFieldnotesImg,
    actionImageBleed: true,
    actionCaption:
      "Illustration · archival field materials: maps, notes, pressed specimens, and the thread that ties the two traditions together.",
    title: "Indigeneity, Identity & Ireland",
    tagline: "Multilingual fieldwork across Irish (Gaeilge) and Indigenous North American research communities.",
    year: "2022",
    role: "Project Coordinator",
    client: "Miami University × Foras na Gaeilge × Údarás na Gaeltachta",
    tags: ["Ethnographic Research", "Multilingual Fieldwork"],
    accent: "coral",
    cover:
      "from-[oklch(0.78_0.16_290)] via-[oklch(0.7_0.19_310)] to-[oklch(0.66_0.2_330)]",
    overview:
      "Coordinated cross-cultural fieldwork connecting Irish and Indigenous North American language-revitalization communities, then synthesized findings for academic and community audiences.",
    context:
      "Language revitalization is relational. Calendars, IRB paperwork, and translation logistics all have to support trust between communities rather than get in its way.",
    methods: [
      "Managed interviews, participant logistics, and IRB across two continents.",
      "Cultivated partnerships with Foras na Gaeilge and Údarás na Gaeltachta.",
      "Synthesized qualitative interview and archival data into insights.",
    ],
    outcome:
      "Findings presented to **academic and community audiences**, supporting revitalization initiatives on both sides of the partnership.",
    caseStudy: {
      badges: ["Ethnographic", "Multilingual", "Two-continent fieldwork"],
      stats: [
        { label: "Continents coordinated", value: "2" },
        { label: "Institutional partners", value: "3" },
        { label: "Languages in scope", value: "Gaeilge + Indigenous NA" },
      ],
      goals: [
        "Connect Irish and Indigenous North American revitalization communities through shared questions.",
        "Hold logistics and IRB to a standard that protects community partners.",
        "Translate fieldwork into insights both audiences could use.",
      ],
      process: [
        {
          title: "Partnership cultivation",
          body: "Built relationships with Foras na Gaeilge and Údarás na Gaeltachta as the substrate everything else depended on.",
        },
        {
          title: "Logistics & IRB",
          body: "Managed interviews and documentation across two continents, keeping paperwork in service of trust.",
        },
        {
          title: "Fieldwork",
          body: "Held one methodology across very different linguistic and cultural contexts.",
        },
        {
          title: "Synthesis & reporting",
          body: "Turned interview and archival data into insights for both academic and community readers.",
        },
      ],
      decisions: [
        "Designed IRB and translation logistics around community trust, not administrative convenience.",
        "Reported to community audiences first, not as an afterthought.",
      ],
    },
  },
  {
    slug: "indigenous-climate-documentary",
    image: "https://img.youtube.com/vi/LV52sIJmjM8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/LV52sIJmjM8",
    videoCaption: "Seven Generations Forward, an ethnographic documentary",
    title: "Ethnographic Documentary, Indigenous Climate Change",
    tagline: "An ethnographic documentary bringing an Indigenous perspective to climate change, through interviews with Miami Tribe elders.",
    year: "2021, 2022",
    role: "Researcher & Documentarian",
    client: "Miami University",
    tags: ["Ethnographic Research", "Documentary", "Climate"],
    accent: "peach",
    cover:
      "from-[oklch(0.85_0.12_70)] via-[oklch(0.74_0.15_45)] to-[oklch(0.64_0.16_25)]",
    overview:
      "Seven Generations Forward is an ethnographic documentary describing an Indigenous perspective on climate change, through interviews with Miami Tribe elders and original musical variation.",
    context:
      "Climate discourse often excludes the people with the most grounded data on how the climate has changed. This community has documented that change over two centuries, with a relationship to the land recorded down to the names of each plant species and how they relate to one another. When one part of that web is affected, the whole web is.",
    methods: [
      "Conducted ethnographic interviews with Miami Tribe elders.",
      "Wove original musical variation into the narrative.",
      "Edited interviews and footage into a film on sovereignty and survivance.",
    ],
    outcome:
      "A documentary that brings an **Indigenous perspective** into climate discourse, framing solutions through historical sovereignty and survivance.",
    lessons: [
      "Minority voices belong in the discourse; they are often where innovation starts.",
      "Indigenous knowledge is information-dense: language, culture, and intergenerational transmission, not storytelling alone.",
    ],
  },
  {
    slug: "nsf-reu-linguistics",
    lessons: [
      "Ambiguous source data made peer review essential; accuracy was collaborative.",
      "A structured, searchable database created more lasting value than transcription alone.",
    ],
    image: reuImg,
    actionImage: manuscriptCollageImg,
    actionImageBleed: true,
    actionCaption:
      "Illustration · manuscript transcription: 1800s-era pages converted to IPA and a working database.",
    title: "Indigenous Language Preservation",
    tagline: "Transcribing 100+ pages of 1800s-era Hanis, Coos, and Miluk manuscripts into IPA.",
    year: "2022",
    role: "NSF REU Fellow, Linguistics",
    client: "University of Oregon",
    tags: ["Field Linguistics", "Archival Research", "Database Design"],
    accent: "blue",
    cover:
      "from-[oklch(0.85_0.13_220)] via-[oklch(0.76_0.16_250)] to-[oklch(0.7_0.18_280)]",
    overview:
      "An NSF-funded fellowship transcribing 1800s-era Hanis, Coos, and Miluk manuscripts into IPA and English, plus an interactive database for academic users.",
    context:
      "The sources were photocopies of handwritten IPA, the notation that gives every speech sound its own symbol. Transcription meant deciphering each character, working out the sound it represented, and logging the reading; peer review kept it accurate.",
    methods: [
      "Transcribed 100+ pages of pre-1900 material into IPA and English.",
      "Designed and maintained an interactive research database.",
      "Presented findings to 200+ stakeholders.",
    ],
    outcome:
      "Database engagement up **40%** across academic users, with community trust maintained through strict ethical compliance.",
    caseStudy: {
      badges: ["NSF-funded", "Archival", "IRB-compliant"],
      stats: [
        { label: "Pages transcribed (IPA + English)", value: "100+" },
        { label: "Stakeholders presented to", value: "200+" },
        { label: "Database engagement lift", value: "+40%" },
      ],
      goals: [
        "Digitize fragile 1800s manuscripts into a usable scholarly resource.",
        "Build a database researchers would return to.",
        "Hold strict IRB and ethical compliance with community partners.",
      ],
      process: [
        {
          title: "Archival transcription",
          body: "Worked through **100+ pages** of inconsistent original transcriptions into IPA and English.",
        },
        {
          title: "Database design",
          body: "Structured the data so future researchers could query, compare, and cite it.",
        },
        {
          title: "Community accountability",
          body: "Treated compliance as relational, not procedural.",
        },
        {
          title: "Dissemination",
          body: "Presented to **200+ stakeholders**, adjusting framing per audience without losing fidelity.",
        },
      ],
      decisions: [
        "Standardized on IPA so the corpus could serve research as well as preservation.",
        "Built for researcher workflows rather than as a static archive, which produced the **40%** lift.",
      ],
    },
  },
  {
    slug: "myaamia-allophones",
    lessons: [
      "Hard linguistics is only useful if you can translate it for a non-specialist audience.",
      "Presenting to stakeholders is part of the research; trust and future collaboration get built there.",
    ],
    image: reuAllophonesImg,
    title: "Myaamia & Ojibwe Language Study + Stakeholder Presentation",
    tagline: "Presenting Myaamia and Ojibwe language research to tribal, academic, and federal stakeholders.",
    year: "2022",
    role: "NSF REU Fellow, Linguistics",
    client: "University of Oregon × Myaamia Center",
    tags: ["Stakeholder Engagement", "Research Presentation", "Acoustic Phonetics"],
    accent: "blue",
    cover:
      "from-[oklch(0.82_0.12_210)] via-[oklch(0.72_0.16_245)] to-[oklch(0.64_0.19_275)]",
    overview:
      "An NSF REU research poster pairing acoustic-phonetic analysis of Myaamia and Ojibwe with a stakeholder presentation, turning technical linguistics into findings partners could carry forward.",
    context:
      "Myaamiaataweenki and Ojibwe are reawakening languages with small acoustic documentation. The study examined allophones, how one sound shifts with its phonetic environment, evidence that supports both pedagogy and revitalization.",
    methods: [
      "Presented a research poster to 200+ tribal, academic, and federal stakeholders.",
      "Segmented and measured tokens in Praat with community members, using open-source audio.",
      "Held the analysis to a standard usable for future phonological description.",
    ],
    outcome:
      "Acoustic evidence and a **stakeholder presentation** that fed directly into ongoing revitalization work, plus relationships future research can build on.",
    caseStudy: {
      badges: ["Stakeholder presentation", "Acoustic phonetics", "Language revitalization"],
      stats: [
        { label: "Stakeholders presented to", value: "200+" },
        { label: "Audience", value: "Tribal · academic · federal" },
        { label: "Tools", value: "Praat" },
      ],
      goals: [
        "Present findings in a format accessible to tribal, academic, and federal audiences.",
        "Document allophonic variation with rigorous acoustic evidence.",
        "Leave deliverables and relationships future research can build on.",
      ],
      process: [
        {
          title: "Stakeholder presentation",
          body: "A poster for **200+** tribal members, faculty, and federal administrators, readable without diluting the linguistics.",
        },
        {
          title: "Acoustic analysis",
          body: "Segmented and measured tokens in Praat to pin down the environments where allophones surface.",
        },
        {
          title: "Deliverables",
          body: "Documentation held to a standard usable for phonological description and pedagogy.",
        },
        {
          title: "Relationships",
          body: "Worked directly with community members, prioritizing long-term collaboration over one-time output.",
        },
      ],
      decisions: [
        "Led with the stakeholder presentation, treating community access as a core deliverable.",
        "Prioritized relationships and reusable deliverables over a one-off study.",
      ],
    },
  },
  {
    slug: "ai-gender-romantic-fiction",
    lessons: [
      "Sentiment scores are a starting point; the cultural reading is what made the numbers mean something.",
      "Translating a computational study into personas made it usable by a product team.",
    ],
    image: romanceNlpImg,
    actionImage: romanceCollageImg,
    actionImageBleed: true,
    actionCaption:
      "Illustration · the lexicon at work: emotion categories mapped across the corpus.",
    title: "AI & Gender in Romantic Fiction",
    tagline: "A Python sentiment-analysis study of emotion and gender representation in romance text data.",
    year: "2021",
    role: "Researcher",
    client: "Miami University",
    tags: ["NLP", "Python", "Sentiment Analysis"],
    accent: "pink",
    cover:
      "from-[oklch(0.85_0.13_340)] via-[oklch(0.78_0.17_358)] to-[oklch(0.74_0.18_20)]",
    overview:
      "Built a Python sentiment-analysis tool with NRCLex, NLTK, and WordNet to surface emotional patterns and gender representation in romantic fiction.",
    context:
      "An early experiment in pairing computational methods with cultural reading, letting each catch what the other misses.",
    methods: [
      "Cleaned and analyzed large text datasets for emotional trends.",
      "Framed findings through cultural context and computational linguistics.",
      "Built research personas linking insights to stakeholder use cases.",
    ],
    outcome:
      "An adaptable UX research methodology applied in an NLP context, and it still shapes how I design **conversational-AI studies** today.",
    caseStudy: {
      badges: ["NLP", "Python", "Mixed methods"],
      stats: [
        { label: "Stack", value: "NRCLex · NLTK · WordNet" },
        { label: "Method", value: "Sentiment + cultural reading" },
        { label: "Output", value: "Personas + analysis" },
      ],
      goals: [
        "Surface emotional patterns and gender representation in the corpus.",
        "Pair computational analysis with cultural reading.",
        "Connect the findings to plausible stakeholder use cases.",
      ],
      process: [
        {
          title: "Corpus preparation",
          body: "Cleaned and structured the text so analyses ran against consistent inputs.",
        },
        {
          title: "Sentiment & lexical analysis",
          body: "NRCLex, NLTK, and WordNet as a first pass, not the final word.",
        },
        {
          title: "Cultural reading",
          body: "Framed results through storytelling and linguistics so neither lens overwrote the other.",
        },
        {
          title: "Persona translation",
          body: "Turned the analysis into personas a product team could act on.",
        },
      ],
      decisions: [
        "Treated sentiment scores as interpretation fuel, not conclusions.",
        "Held the cultural and computational readings in tension on purpose.",
      ],
    },
  },
  {
    slug: "learning-signals-capability",
    image: learningSignalsImg,
    coverGround: true,
    actionImage: learningSignalsChart,
    actionCaption:
      "Two transcripts with nearly identical activity land at 0.88 vs. 0.03 on capability. Activity can't tell them apart; the capability signals can.",
    title: "Learning Signals: Capability vs. Engagement",
    tagline: "A shippable tool that reads a tutoring transcript and shows whether a learner is building real skill, or just staying active.",
    year: "2026",
    role: "Independent Researcher & Builder",
    client: "Independent research portfolio",
    tags: ["Measurement", "Learning Sciences", "Human-AI Interaction"],
    accent: "peach",
    cover:
      "from-[oklch(0.82_0.13_70)] via-[oklch(0.78_0.15_45)] to-[oklch(0.72_0.16_25)]",
    overview:
      "Education tools measure engagement because it's easy. This tool extracts transparent, rule-based signals of capability growth (question depth, self-correction, concept reuse, hint-dependence) and contrasts them with raw activity.",
    context:
      "As an Education Specialist I watched students treat the right answer as a flag of completion. This tool tries to measure the difference the ed-AI conversation turns on: capability, not engagement.",
    methods: [
      "Rule-based signal extraction from learner turns, with no LLM or API key.",
      "Four capability signals: question depth, self-correction, concept reuse, hint-dependence.",
      "A Gradio app with an auditable per-turn breakdown.",
      "Validation against labeled transcripts; one validity flaw caught and fixed.",
    ],
    outcome:
      "Two transcripts with nearly identical activity scored **0.88** vs. **0.03** on capability. Activity couldn't tell them apart; the signals could. Shipped as a transparent proof of concept with limitations documented.",
    lessons: [
      "An auditable measure a teacher can contest beats an opaque 'the AI says 7/10.'",
      "I caught my own measure penalizing a concise-but-deep learner, fixed it, then stopped tuning.",
    ],
    limitations: [
      "Rule-based and English-only, so it misses subtle phrasing. An LLM backend is a documented optional upgrade.",
      "Demonstration transcripts, not real student data; real deployment needs consented data and outcome validation.",
      "The score's weights encode one reasoned theory of skill growth, not ground truth.",
    ],
    caseStudy: {
      badges: ["Independent research", "2026", "Live demo", "Transparent / no API key"],
      stats: [
        { label: "Capability signals", value: "4" },
        { label: "Growth vs. stuck (same activity)", value: "0.88 / 0.03" },
        { label: "API keys required", value: "0" },
      ],
      goals: [
        "Separate capability growth from mere activity.",
        "Keep every score auditable for a non-technical teacher.",
        "Ship something a person can open and use.",
      ],
      decisions: [
        "Rule-based on purpose: free, offline, instant, and auditable.",
        "Reported borderline cases rather than tuning thresholds to force clean bins.",
      ],
    },
  },
  {
    slug: "ai-fluency-measure",
    image: aiFluencyImg,
    coverGround: true,
    actionImage: aiFluencyChart,
    actionCaption:
      "Criterion validity: the rubric's scores track independent human fluency labels at Spearman's rho = 0.96 (within one level 100% of the time).",
    title: "Measuring AI Fluency: Building & Validating an Instrument",
    tagline: "What does it mean to use AI well, and can it be measured? A rubric, plus the validation step most rubrics skip.",
    year: "2026",
    role: "Independent Researcher & Builder",
    client: "Independent research portfolio",
    tags: ["Instrument Design", "Psychometrics", "Construct Validity"],
    accent: "pink",
    cover:
      "from-[oklch(0.80_0.12_350)] via-[oklch(0.74_0.15_355)] to-[oklch(0.70_0.16_10)]",
    overview:
      "I defined AI fluency as four dimensions (specificity, iteration, verification, task-awareness), built a transparent rubric to score them from a person's prompts, then validated it.",
    context:
      "Measuring AI fluency is a live question as AI becomes an everyday tool. This treats it as a measurement problem: define the construct, build an auditable scorer, check whether it holds up.",
    methods: [
      "A four-dimension rubric, each dimension scored 0–2.",
      "Transparent, rule-based scoring from prompts, with no API key.",
      "Criterion validity vs. human labels; internal consistency (Cronbach's alpha).",
    ],
    outcome:
      "On a demonstration set the rubric agreed with human judgment at Spearman's rho = **0.96** (within one level **100%** of the time) with alpha = **0.90**. An illustrative validation, not a field-ready instrument.",
    lessons: [
      "A rubric you haven't validated is just an opinion in a table.",
      "Criterion validity plus internal consistency is what separates a measure from a guess.",
    ],
    limitations: [
      "Rule-based and English-only; 'AI fluency' is contested, so this rubric is one reasoned theory of it.",
      "Small, hand-written sample with a single rater. A field-ready instrument needs real interactions and multiple raters.",
      "The criterion is a human fluency label, not a real outcome.",
    ],
    caseStudy: {
      badges: ["Independent research", "2026", "Psychometrics", "Transparent / no API key"],
      stats: [
        { label: "Criterion validity (Spearman rho)", value: "0.96" },
        { label: "Internal consistency (alpha)", value: "0.90" },
        { label: "Within one level", value: "100%" },
      ],
      goals: [
        "Define 'AI fluency' as a measurable construct.",
        "Build a transparent, auditable scorer.",
        "Validate it against human judgment and for internal consistency.",
      ],
    },
  },
  {
    slug: "llm-as-judge-reliability",
    image: llmJudgeImg,
    coverGround: true,
    actionImage: llmJudgeChart,
    actionCaption:
      "ICC 0.85 on clear cases, 0.10 on ambiguous ones, and not one ambiguous item got the same score across eight runs.",
    title: "Can We Trust an LLM Judge?",
        tagline: "Cohen's kappa, bootstrap intervals, and Python, testing whether an AI judge agrees with itself and with humans.",
    year: "2026",
    role: "Independent Researcher & Builder",
    client: "Independent research portfolio",
    tags: ["AI Evaluation", "Reliability", "Psychometrics"],
    accent: "blue",
    repoUrl: "https://github.com/emma-khare/llm-judge-agreement",
    cover:
      "from-[oklch(0.78_0.13_240)] via-[oklch(0.72_0.15_255)] to-[oklch(0.68_0.15_275)]",
    overview:
      "AI labs increasingly use models to grade other models at scale. This project asks whether that judge is reliable, using the psychometrics used to validate any instrument: test-retest reliability and agreement with human ratings.",
    context:
      "Grading at scale only works if the grader can be trusted. Measuring an AI evaluator's reliability is a current problem, and it extends the doubt that runs through the rest of this portfolio.",
    methods: [
      "Test-retest: each item graded eight times, scored with ICC(2,1) and unanimity.",
      "Human agreement: Cohen's kappa on the binary gate, weighted kappa on the 1–5 scores, each with a bootstrap interval.",
      "Results split by difficulty (clear vs. borderline), because an average hides the collapse.",
      "Error decomposition: errors the majority vote repairs (noise) vs. errors that survive it (bias).",
    ],
    outcome:
      "On a simulated judge, reliability was **0.85** on clear cases and **0.10** on ambiguous ones; **none** of the ambiguous items got the same score eight times. A single call reached kappa **0.67** against the human annotator; the majority of eight reached **0.89**. Repetition repaired **5 of 6** disagreements; the one that survived was bias, not noise.",
    lessons: [
      "A single judge score is unreliable exactly where judgment is hardest.",
      "A reliable judge is not an accurate one: consistency and correctness are separate measurements.",
    ],
    limitations: [
      "A simulated judge modeled on documented behavior demonstrates the method, not a real model's reliability; a live run is a one-line client swap away.",
      "40 items and one human rater; a defensible study needs hundreds of items and multiple raters.",
      "Majority voting repairs variance, not bias: the surviving error needs a rubric change, not more calls.",
      "Human agreement on real items is the ceiling, and it is low: on 4,645 ChaosNLI items, two real annotators reach only kappa 0.29 to 0.65 depending on how ambiguous the set is. The judge's 0.67 against a single annotator sits above that ceiling, which is a warning about the comparison rather than evidence for the judge.",
    ],
    caseStudy: {
      badges: ["Independent research", "2026", "Method demonstration (simulated judge)"],
      stats: [
        { label: "Reliability, clear cases (ICC)", value: "0.85" },
        { label: "Reliability, ambiguous cases (ICC)", value: "0.10" },
        { label: "Single-call errors repetition repaired", value: "5 of 6" },
      ],
      goals: [
        "Measure whether an LLM judge agrees with itself across runs.",
        "Measure whether it agrees with human ratings.",
        "Separate the judge's noise from its bias.",
      ],
      decisions: [
        "Built against a realistic simulated judge so the pipeline was free and fast, with a one-line swap to the live API.",
        "Never presented a simulated result as a real-model finding.",
      ],
    },
  },
  {
    slug: "socratic-vs-direct-tutoring",
    image: tutoringAbImg,
    coverGround: true,
    actionImage: tutoringAbChart,
    actionCaption:
      "Known-truth validation: the experiment detects a real effect (d = 0.59, p < 0.001) and correctly returns null when none exists, with no false positive.",
    title: "Socratic vs. Direct Tutoring: An A/B Experiment",
    tagline: "Does withholding the answer build more capability than giving it? A validated experimental pipeline for the question.",
    year: "2026",
    role: "Independent Researcher & Builder",
    client: "Independent research portfolio",
    tags: ["A/B Testing", "Experimental Design", "Statistical Power"],
    accent: "coral",
    cover:
      "from-[oklch(0.80_0.15_35)] via-[oklch(0.72_0.17_20)] to-[oklch(0.66_0.17_5)]",
    overview:
      "A controlled experiment testing whether a Socratic AI tutor builds more transferable capability than a direct-answer one, with the full A/B apparatus: random assignment, transfer-test outcome, effect size, significance, and power analysis.",
    context:
      "Real learning experiments need real participants, so this runs on simulated learners: a demonstration of the method, not a claim about real tutoring. Because ground truth is set, the pipeline itself can be validated.",
    methods: [
      "Random assignment with a baseline balance check.",
      "Outcome measured as transfer to new, untutored problems.",
      "Effect size (Cohen's d), Welch's t-test, and a permutation test.",
      "A power analysis showing how detection depends on sample size.",
    ],
    outcome:
      "The known-truth validation passed both ways: with an effect present the test detected it (**d = 0.59**, **p < 0.001**); with none it returned null (**p = 0.91**), with no false positive. The power curve showed a real effect missed **70%** of the time at small samples.",
    lessons: [
      "The value is a validated method, not a finding about tutoring.",
      "The real-world version needs IRB, recruitment, and adequate power, all work I've done before.",
    ],
    limitations: [
      "Learners are simulated, so the result validates the experimental method, not real tutoring.",
      "Starting ability is a known parameter here; in reality it must be estimated with a noisy pre-test.",
      "Real learners bring motivation, fatigue, and prior knowledge that randomization must handle at adequate sample size.",
    ],
    caseStudy: {
      badges: ["Independent research", "2026", "Method demonstration (simulated learners)"],
      stats: [
        { label: "Effect detected (Cohen's d)", value: "0.59" },
        { label: "No-effect check (p)", value: "0.91" },
        { label: "Power at n=10 vs n=200", value: "30% / 100%" },
      ],
      goals: [
        "Test whether withholding answers builds more transferable capability.",
        "Validate that the experiment detects real effects and refuses false ones.",
        "Show how statistical power depends on sample size.",
      ],
      decisions: [
        "Made the tutoring effect an explicit parameter so the method could be validated against known ground truth.",
        "Measured transfer to new problems, not lesson completion.",
      ],
    },
  },
];

// Display order: lead with product / conversational-AI work, then the
// linguistics "edge" (why she understands how people talk to machines), then
// the community / education / fieldwork projects.
/**
 * Presentation order, not chronology. AI measurement & evaluation leads (four
 * featured), then applied AI product research, quantitative text analysis,
 * program evaluation, and language fieldwork.
 */
const PROJECT_ORDER = [
  "llm-as-judge-reliability",
  "learning-signals-capability",
  "ai-fluency-measure",
  "socratic-vs-direct-tutoring",
  "apple-conversational-ai",
  "woaf-meow-smart-ring",
  "ai-gender-romantic-fiction",
  "indigenous-education-omaha",
  "indigeneity-identity-ireland",
  "nsf-reu-linguistics",
  "myaamia-allophones",
  "indigenous-climate-documentary",
];

export const projects: Project[] = [...projectsRaw].sort(
  (a, b) => PROJECT_ORDER.indexOf(a.slug) - PROJECT_ORDER.indexOf(b.slug),
);

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
