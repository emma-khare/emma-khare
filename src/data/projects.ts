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
  /** Optional secondary "action" photo shown within the case study (public/ path or imported asset). */
  actionImage?: string;
  actionCaption?: string;
  /** Optional embedded video (YouTube/Vimeo *embed* URL). */
  videoUrl?: string;
  videoCaption?: string;
  overview: string;
  context: string;
  methods: string[];
  outcome: string;
  /** "What I'd carry forward" — strategic reflections shown at the end of the case study. */
  lessons?: string[];
  caseStudy?: CaseStudy;
};

const projectsRaw: Project[] = [
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
    lessons: [
      "Early-stage research is about narrowing what to build, not validating a finished design — surveys and synthesis were enough to point to a direction.",
      "The value is in synthesis: turning raw sessions into a few clear findings mattered more than the raw number of sessions.",
      "Flagging an uncomfortable risk early — like a market conflict — is part of the job; research that only delivers good news isn't doing its job.",
    ],
    image: woafmeowImg,
    title: "Conversational AI for a Pet-Care App",
    tagline:
      "Survey design and session synthesis for a conversational-AI pet-care app — plus early ideation for a companion smart ring.",
    year: "2025",
    role: "UX Research Intern",
    client: "Woaf Meow",
    tags: ["Conversational AI", "Survey Research", "Session Synthesis"],
    accent: "blue",
    cover:
      "from-[oklch(0.78_0.13_200)] via-[oklch(0.7_0.16_240)] to-[oklch(0.66_0.19_270)]",
    overview:
      "As a UX research intern, I designed and analyzed surveys and reviewed and synthesized usability sessions for a conversational-AI pet-care app.\n\nI also contributed to early ideation for a companion smart ring, and flagged a market-conflict risk for the team to weigh.",
    context:
      "The product was an early-stage conversational-AI app for pet care, with a companion smart ring still in ideation. Research ran with US participants. Before committing to a direction, the team needed survey insight and synthesized session findings to understand what users wanted — and an honest read on the risks.",
    methods: [
      "Designed and analyzed user surveys to learn what pet owners wanted from the app.",
      "Reviewed and synthesized usability sessions into findings the team could act on.",
      "Contributed to early ideation for a companion smart ring.",
      "Flagged a market-conflict risk and raised it with the team.",
    ],
    outcome:
      "Delivered survey analysis and synthesized session findings that informed early product direction, and surfaced a market-conflict risk for the team to weigh.",
    caseStudy: {
      badges: ["Conversational AI", "Pet-care app", "2025"],
      goals: [
        "Understand what pet owners wanted from a conversational-AI app through survey research.",
        "Synthesize usability sessions into findings the team could use.",
        "Surface risks early — including a market-conflict risk — before the product locked in.",
      ],
      process: [
        {
          title: "Survey design & analysis",
          body: "Designed and analyzed surveys to learn what pet owners actually wanted from the app, turning open questions into signal the team could use.",
        },
        {
          title: "Session review & synthesis",
          body: "Reviewed usability sessions and synthesized them into clear findings — separating what users did from what they said they wanted.",
        },
        {
          title: "Early smart-ring ideation",
          body: "Contributed to early ideation for a companion smart ring, helping shape what the hardware could become.",
        },
        {
          title: "Flagging a market-conflict risk",
          body: "Surfaced a market-conflict risk and raised it with the team so it could be weighed before the product committed to a direction.",
        },
      ],
      decisions: [
        "Led with surveys and session synthesis to define direction, rather than over-claiming from a small, early-stage study.",
        "Raised a market-conflict risk early instead of letting it surface later.",
        "Kept every finding scoped to what the research could actually support.",
      ],
    },
  },
  {
    slug: "indigenous-education-omaha",
    lessons: [
      "Culturally responsive design isn't a nice-to-have — engagement rose once the program genuinely reflected the community it served.",
      "A mixed-methods evaluation framework turned 'it feels like it's working' into a defensible retention gain.",
      "Grant writing is a research skill: funding meant translating community needs into a funder's language.",
    ],
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
    lessons: [
      "In language-revitalization work, logistics and IRB paperwork either protect community trust or erode it — there is no neutral option.",
      "Reporting back to community audiences first, not as an afterthought to the academic write-up, changed how the work was received.",
      "Holding interview methodology consistent across very different cultures let me compare findings without flattening the differences.",
    ],
    image: irelandImg,
    actionImage: "/ireland-studio.jpg",
    actionCaption: "On location during the Ireland language-revitalization fieldwork.",
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
    slug: "indigenous-climate-documentary",
    image: "https://img.youtube.com/vi/LV52sIJmjM8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/LV52sIJmjM8",
    videoCaption: "Seven Generations Forward — an ethnographic documentary",
    title: "Ethnographic Documentary — Indigenous Climate Change",
    tagline:
      "An ethnographic documentary bringing an Indigenous perspective to climate change, through interviews with Miami Tribe elders.",
    year: "2021 — 2022",
    role: "Researcher & Documentarian",
    client: "Miami University",
    tags: ["Ethnographic Research", "Documentary", "Climate"],
    accent: "peach",
    cover:
      "from-[oklch(0.85_0.12_70)] via-[oklch(0.74_0.15_45)] to-[oklch(0.64_0.16_25)]",
    overview:
      "Seven Generations Forward is an ethnographic video documentary describing an Indigenous perspective on climate change.\n\nThrough interviews with Miami Tribe elders and original musical variation, it explores a journey of indigeneity through the lens of historical sovereignty and survivance.",
    context:
      "Created in 2021–2022, the project set out to bring Indigenous voices to the forefront of climate-change discourse — a conversation that often excludes the very people with the most grounded data on how the climate has changed. This community has witnessed climate change over the last two hundred years and holds a relationship with the environment that goes well beyond the surface: they have preserved the names of each Indigenous plant species and their interconnected relationships with the community, with animals, and with one another. As the documentary details, when one part of that web is affected, the entire web of relationships is affected.",
    methods: [
      "Conducted ethnographic interviews with Miami Tribe elders.",
      "Wove original musical variation into the documentary's narrative.",
      "Edited interviews and footage into a film exploring sovereignty and survivance.",
    ],
    outcome:
      "An ethnographic documentary that brings an Indigenous perspective into climate-change discourse — framing solution development through historical sovereignty and survivance.",
    lessons: [
      "Minority voices belong in the discourse — they're potential goldmines for innovation and solution engineering.",
      "Indigenous communities hold knowledge that isn't being used but could greatly help efforts that affect us all, like climate change.",
      "Indigenous knowledge is multifaceted and goes beyond storytelling — it carries information-rich density through language, cultural knowledge, and the intergenerational transmission of that knowledge.",
      "For UX: this taught me to look beyond surface-level qualitative research — to dig deeper and question not only the people I interviewed, but the definitions and biases I didn't know I was carrying.",
    ],
  },
  {
    slug: "nsf-reu-linguistics",
    lessons: [
      "Ambiguous source data makes peer review essential — accuracy was a collaborative achievement, not a solo one.",
      "Turning 100+ manuscript pages into a structured, searchable database created more lasting value than the transcription alone.",
      "Presenting to tribal members, faculty, and grant administrators taught me to pitch the same findings three different ways for three audiences.",
    ],
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
      "The source documents were printed photocopies of handwritten manuscripts written in IPA — the International Phonetic Alphabet, the standardized system that gives every human speech sound its own written symbol. Transcription meant deciphering which characters had been written by hand, working out the sounds they represented, and logging each reading in a spreadsheet — with peer review and collaboration essential to verify accuracy.",
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
    lessons: [
      "Hard linguistics skills are only useful if you can translate them for a non-specialist audience — the presentation mattered as much as the analysis.",
      "Working from open-source audio alongside first-person community members made the findings both rigorous and accountable to the people they came from.",
      "Presenting to stakeholders is research, not an afterthought — it's where trust and future collaboration get built.",
    ],
    image: reuAllophonesImg,
    title: "Myaamia & Ojibwe Language Study + Stakeholder Presentation",
    tagline:
      "Presenting Myaamia and Ojibwe language research to tribal, academic, and federal stakeholders — grounded in acoustic phonetics and rigorous method.",
    year: "2022",
    role: "NSF REU Fellow — Linguistics",
    client: "University of Oregon × Myaamia Center",
    tags: ["Stakeholder Engagement", "Research Presentation", "Acoustic Phonetics"],
    accent: "blue",
    cover:
      "from-[oklch(0.82_0.12_210)] via-[oklch(0.72_0.16_245)] to-[oklch(0.64_0.19_275)]",
    overview:
      "Part of my National Science Foundation (NSF) REU fellowship — presented as a research poster to tribal members, faculty, and federal grant administrators.\n\nIt paired acoustic-phonetic analysis of Myaamia and Ojibwe with a stakeholder-facing presentation, turning technical linguistics into findings partners could carry forward.",
    context:
      "Myaamia and Ojibwe are reawakening Indigenous languages with small but growing bodies of acoustic documentation. The study examined allophones — the subtly different ways a single speech sound is pronounced depending on its phonetic environment, variations that don't change a word's meaning but reveal how the sound system works. Acoustic evidence of this patterning supports both pedagogy and the revitalization work led by community partners.",
    methods: [
      "Presented findings as a research poster to 200+ stakeholders — tribal members, university faculty, and federal grant administrators — translating technical results for non-specialist audiences.",
      "Parsed out allophonic similarities from existing open-source audio files alongside first-person Indigenous community members, then segmented tokens in Praat and analyzed formant and duration data to identify the environments conditioning the variation.",
      "Held the work to rigorous research methods, producing documentation usable for future phonological description.",
      "Built long-lasting relationships with Indigenous researchers and community members, leaving deliverables their revitalization work could build on.",
    ],
    outcome:
      "Delivered acoustic evidence and a stakeholder presentation that fed directly into ongoing revitalization work — and, as much as the findings, established long-lasting relationships among Indigenous researchers and community members for future research to build on.",
    caseStudy: {
      badges: ["Stakeholder presentation", "Acoustic phonetics", "Language revitalization"],
      stats: [
        { label: "Stakeholders presented to", value: "200+" },
        { label: "Audience", value: "Tribal · academic · federal" },
        { label: "Tools", value: "Praat" },
      ],
      goals: [
        "Present Myaamia and Ojibwe language findings in a format accessible to tribal, academic, and federal stakeholders.",
        "Document allophonic variation with rigorous acoustic evidence and a strong linguistics foundation.",
        "Leave deliverables and relationships that future revitalization research can build on.",
      ],
      process: [
        {
          title: "Stakeholder presentation & engagement",
          body: "Designed and presented a research poster to 200+ tribal members, university faculty, and federal grant administrators — calibrated to be readable by non-specialist community audiences without diluting the technical content.",
        },
        {
          title: "Acoustic analysis & hard linguistics skills",
          body: "Drew on existing open-source audio files and first-person Indigenous community members to parse out allophonic similarities, then segmented and measured tokens in Praat — analyzing formant and duration data to pin down the phonological environments in which allophones surfaced.",
        },
        {
          title: "Deliverables for future research",
          body: "Produced documentation held to a standard usable for phonological description, so the work could serve ongoing pedagogy and revitalization rather than sit as a one-off study.",
        },
        {
          title: "Lasting community relationships",
          body: "Worked from existing open-source audio files and directly with first-person community members, building long-lasting relationships among Indigenous researchers and community members that future research can continue.",
        },
      ],
      decisions: [
        "Led with the stakeholder presentation, treating accessibility for community audiences as a core deliverable, not an afterthought.",
        "Held the analysis to a standard usable for phonological description — demonstrating hard linguistics skills and rigorous method.",
        "Invested in existing open-source audio files and direct work with community members, prioritizing long-term relationships over one-time output.",
      ],
    },
  },
  {
    slug: "ai-gender-romantic-fiction",
    lessons: [
      "Sentiment scores are a starting point for interpretation, not an answer — the cultural reading is what made the numbers mean something.",
      "Translating a computational study into personas is what turned an academic NLP project into something a product team could use.",
      "Holding the computational and cultural lenses in tension on purpose kept either one from overwriting the other.",
    ],
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

// Display order: lead with product / conversational-AI work, then the
// linguistics "edge" (why she understands how people talk to machines), then
// the community / education / fieldwork projects.
const PROJECT_ORDER = [
  "apple-conversational-ai",
  "woaf-meow-smart-ring",
  "ai-gender-romantic-fiction",
  "myaamia-allophones",
  "nsf-reu-linguistics",
  "indigeneity-identity-ireland",
  "indigenous-education-omaha",
  "indigenous-climate-documentary",
];

export const projects: Project[] = [...projectsRaw].sort(
  (a, b) => PROJECT_ORDER.indexOf(a.slug) - PROJECT_ORDER.indexOf(b.slug),
);

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
