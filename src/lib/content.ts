export type Lang = "en" | "sk";

export type Project = {
  slug: string;
  year: string;
  cover: string;
  tags: string[];
  metrics: { label: { en: string; sk: string }; value: string }[];
  title: { en: string; sk: string };
  kicker: { en: string; sk: string };
  summary: { en: string; sk: string };
  body: { en: string[]; sk: string[] };
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "securing-the-agentic-frontier",
    year: "2026",
    cover: "/media/hero-cube.jpg",
    tags: ["Thesis", "Agentic AI", "Security"],
    stack: ["Adaptive Guardrails", "MCP", "OWASP Agentic"],
    metrics: [
      { label: { en: "Thesis", sk: "Téza" }, value: "RMD26" },
      { label: { en: "Pillars", sk: "Piliere" }, value: "3" },
    ],
    title: {
      en: "Securing the Agentic Frontier",
      sk: "Zabezpečenie agentickej hranice",
    },
    kicker: {
      en: "A blueprint for velocity, trust, and sovereign AI systems",
      sk: "Plán pre rýchlosť, dôveru a suverénne AI systémy",
    },
    summary: {
      en: "Portfolio thesis on the shift from coding assistants to autonomous agents — and the adaptive security cube that must contain them.",
      sk: "Portfóliová téza o prechode od kódovacích asistentov k autonómnym agentom — a o adaptívnej bezpečnostnej kocke, ktorá ich musí obmedziť.",
    },
    body: {
      en: [
        "Eighty-two percent of developers now use AI coding assistants daily or weekly. Only twenty-eight percent trust that the code is secure and production-ready. That gap is the trust deficit.",
        "The sphere is raw intelligence: opaque, fast, non-deterministic. The wireframe cube is governance — visible boundaries, compliance parameters, control points. We cannot slow the sphere. We must build a stronger, smarter cube.",
        "The 2026 blueprint rests on three pillars: velocity via autonomy, trust via guardrails (early, explainable, frictionless), and sovereignty by design — data residency and regulatory adherence built into the architecture, not bolted on after deployment.",
      ],
      sk: [
        "Osemdesiatdva percent vývojárov používa AI kódovacích asistentov denne alebo týždenne. Len dvadsaťosem percent verí, že kód je bezpečný a pripravený do produkcie. Táto medzera je deficit dôvery.",
        "Guľa je surová inteligencia: nepriehľadná, rýchla, nestochastická. Drôtená kocka je riadenie — viditeľné hranice, parametre súladu, kontrolné body. Guľu nemôžeme spomaliť. Musíme postaviť silnejšiu a múdrejšiu kocku.",
        "Plán 2026 stojí na troch pilieroch: rýchlosť cez autonómiu, dôvera cez zábradlia (včasné, vysvetliteľné, bez trenia) a suverenita od návrhu — rezidencia dát a regulačný súlad sú súčasťou architektúry, nie dodatočnou nálepkou.",
      ],
    },
  },
  {
    slug: "architecting-ai-trust",
    year: "2026",
    cover: "/media/project-trust.jpg",
    tags: ["AppSec", "Lifecycle", "Guardrails"],
    stack: ["SAST / SCA", "IDE scanning", "AI-BOM"],
    metrics: [
      { label: { en: "Trust in AI code", sk: "Dôvera v AI kód" }, value: "28%" },
      { label: { en: "Hallucinations", sk: "Halucinácie" }, value: "76%" },
    ],
    title: {
      en: "Architecting AI Trust",
      sk: "Architektúra dôvery v AI",
    },
    kicker: {
      en: "From coding assistants to autonomous agentic systems",
      sk: "Od kódovacích asistentov k autonómnym agentickým systémom",
    },
    summary: {
      en: "A practical map of the AI development risk pipeline — IDE, pull request, repository — and the guardrails that belong at each gate.",
      sk: "Praktická mapa rizikového pipeline AI vývoja — IDE, pull request, repozitár — a zábradlia, ktoré patria na každú bránu.",
    },
    body: {
      en: [
        "AI generates code faster than traditional AppSec can secure it. Up to 21% of AI-suggested dependencies link to libraries that do not exist — an attack surface for advanced typosquatting. Models also reproduce the CWEs of their training data: injection, memory corruption, insecure defaults.",
        "Guardrails must live where code is born. Real-time linting in the IDE. Context-aware diff analysis on the pull request. Continuous scanning of the repository so nothing ships without an automated audit.",
        "Static 'block all AI code' policy creates friction and bypass. Adaptive governance scores risk by context: test scaffolding can auto-merge; crypto and auth paths demand a human. The inventory of that world is the AI-BOM — models, adapters, agents, and prompt libraries, tracked in real time.",
      ],
      sk: [
        "AI generuje kód rýchlejšie, ako ho tradičný AppSec stíha zabezpečiť. Až 21 % závislostí navrhnutých AI odkazuje na knižnice, ktoré neexistujú — útočná plocha pre pokročilý typosquatting. Modely tiež reprodukujú CWE zo svojich tréningových dát: injekcie, korupciu pamäte, nezabezpečené predvoľby.",
        "Zábradlia musia žiť tam, kde kód vzniká. Linting v reálnom čase v IDE. Kontextová analýza diffu na pull requeste. Priebežné skenovanie repozitára, aby nič neodišlo bez automatizovaného auditu.",
        "Statická politika „blokovať všetok AI kód“ vytvára trenie a obchádzanie. Adaptívne riadenie skóruje riziko podľa kontextu: testovací scaffolding môže ísť automaticky; cesty kryptografie a autentifikácie vyžadujú človeka. Inventárom tohto sveta je AI-BOM — modely, adaptéry, agenti a knižnice promptov, evidované v reálnom čase.",
      ],
    },
  },
  {
    slug: "sovereign-architect",
    year: "2026",
    cover: "/media/project-sovereign.jpg",
    tags: ["Product", "Agents", "Compliance"],
    stack: ["Next.js", "React", "Multi-model LLM"],
    metrics: [
      { label: { en: "Fit score", sk: "Fit skóre" }, value: "78%" },
      { label: { en: "Tracked calls", sk: "Sledované výzvy" }, value: "3" },
    ],
    title: {
      en: "Sovereign Architect",
      sk: "Sovereign Architect",
    },
    kicker: {
      en: "Agentic grant intelligence and compliance workspace",
      sk: "Agentický workspace pre grantovú inteligenciu a súlad",
    },
    summary: {
      en: "A platform that parses, scores, and drafts EU/US grant proposals while running live compliance checks against the underlying data.",
      sk: "Platforma, ktorá parsujú, hodnotí a pripravuje grantové návrhy EÚ/USA a súčasne spúšťa živé kontroly súladu voči podkladovým dátam.",
    },
    body: {
      en: [
        "Sovereign Architect is a Next.js workspace for grant intelligence. Agents search and index open calls (Horizon Europe, NSF, Digital Europe), score fit, and draft proposals — while a compliance radar flags AI Act classification, data residency, state-aid, and procurement risk.",
        "The stack is three layers: a client of dashboard, explorer, proposals, and compliance modules; an orchestration API for search and evaluation; and a multi-model intelligence engine (Fireworks, OpenAI, Groq) feeding a simulation layer for resilient testing.",
        "The design principle is the same as the thesis: autonomy for velocity, guardrails for trust, sovereignty for the jurisdiction the grant actually lives in.",
      ],
      sk: [
        "Sovereign Architect je Next.js workspace pre grantovú inteligenciu. Agenti vyhľadávajú a indexujú otvorené výzvy (Horizon Europe, NSF, Digital Europe), skórujú zhodu a pripravujú návrhy — zatiaľ čo radar súladu označuje klasifikáciu AI Act, rezidenciu dát, štátnu pomoc a riziká verejného obstarávania.",
        "Zásobník má tri vrstvy: klient s modulmi dashboard, explorer, proposals a compliance; orchestračné API pre vyhľadávanie a hodnotenie; a multimodelový inteligenčný engine (Fireworks, OpenAI, Groq) napájajúci simulačnú vrstvu na odolné testovanie.",
        "Princíp návrhu je rovnaký ako v téze: autonómia pre rýchlosť, zábradlia pre dôveru, suverenita pre jurisdikciu, v ktorej grant skutočne žije.",
      ],
    },
  },
  {
    slug: "slovensky-copilot",
    year: "2026",
    cover: "/media/project-copilot.jpg",
    tags: ["Sovereign AI", "NLP", "Slovakia"],
    stack: ["Localized LLM", "Sandboxed agents", "IT diagnostics"],
    metrics: [
      { label: { en: "Pilot testers", sk: "Pilotní testeri" }, value: "30" },
      { label: { en: "Target interactions", sk: "Cieľové interakcie" }, value: "500" },
    ],
    title: {
      en: "Slovenský Copilot",
      sk: "Slovenský Copilot",
    },
    kicker: {
      en: "Project SKNICVP26_017 — a localized AI assistant for Slovak IT work",
      sk: "Projekt SKNICVP26_017 — lokalizovaný AI asistent pre slovenskú IT prácu",
    },
    summary: {
      en: "A sovereign, culturally aligned assistant for Slovak-language IT support, education, and administration — sandboxed, measurable, and built for regional context global models miss.",
      sk: "Suverénny, kultúrne zladený asistent pre slovenské IT, vzdelávanie a administratívu — v sandboxe, merateľný a postavený pre regionálny kontext, ktorý globálne modely míňajú.",
    },
    body: {
      en: [
        "Global LLMs still stumble on Slovak language and local operational context. Slovenský Copilot is a dark-mode workspace with a diagnostic engine for hardware and software troubleshooting, automated administrative drafting, and continuous optimization from localized empirical data.",
        "The 2026 pilot targets thirty verified testers, five hundred processed interactions, and a satisfaction baseline above eighty percent, across five sandboxed agentic modules. Timeline: analysis and design, prototype NLP, a live pilot, then documentation and public deployment.",
        "The work sits inside a SK-NIC funded blueprint of €17,580 — majority allocated to AI and NLP specialist labor, with dedicated lines for compute, cloud, security licensing, and pilot recruitment.",
      ],
      sk: [
        "Globálne LLM stále narážajú na slovenčinu a miestny prevádzkový kontext. Slovenský Copilot je workspace v tmavom režime s diagnostickým engine pre hardvér a softvér, automatizovanou administratívou a priebežnou optimalizáciou z lokalizovaných empirických dát.",
        "Pilot 2026 cieli na tridsať overených testerov, päťsto spracovaných interakcií a spokojnosť nad osemdesiat percent, v piatich sandboxovaných agentických moduloch. Harmonogram: analýza a návrh, prototyp NLP, živý pilot, potom dokumentácia a verejné nasadenie.",
        "Práca je súčasťou plánu financovaného SK-NIC vo výške 17 580 € — väčšina ide na špecialistov AI a NLP, s vyčlenenými položkami na výpočty, cloud, bezpečnostné licencie a nábor testerov.",
      ],
    },
  },
  {
    slug: "databricks-dlt-medallion",
    year: "2025",
    cover: "/media/project-medallion.jpg",
    tags: ["Data", "Streaming", "Databricks"],
    stack: ["Delta Live Tables", "Kafka", "Unity Catalog", "PySpark"],
    metrics: [
      { label: { en: "Layers", sk: "Vrstvy" }, value: "3" },
      { label: { en: "Ingest", sk: "Príjem" }, value: "Hybrid" },
    ],
    title: {
      en: "Streaming Medallion on Databricks",
      sk: "Streamovací medailón na Databricks",
    },
    kicker: {
      en: "Fault-tolerant real-time pipeline with Delta Live Tables",
      sk: "Odolný pipeline v reálnom čase na Delta Live Tables",
    },
    summary: {
      en: "A bronze–silver–gold streaming architecture: Auto Loader and Kafka in, quality contracts and watermarks in the middle, business aggregates out.",
      sk: "Streamovacia architektúra bronz–striebro–zlato: Auto Loader a Kafka na vstupe, kontrakty kvality a vodoznaky v strede, biznis agregácie na výstupe.",
    },
    body: {
      en: [
        "Streaming platforms fail on schema drift, late data, small files, and silent bad records. This design uses Delta Live Tables instead of raw Structured Streaming so checkpoints, retries, data quality, and lineage are owned by the framework.",
        "Bronze is append-only raw events from Kafka or cloud storage. Silver cleans, deduplicates with dropDuplicatesWithinWatermark, and quarantines bad records via expect_or_drop / expect_or_quarantine. Gold serves daily platform summaries and live user-activity metrics through Unity Catalog.",
        "Operational choices: autoOptimize to crush the small-file problem, maxOffsetsPerTrigger against OOM during spikes, one- and two-hour watermarks for late data, date partitions in bronze and window partitions in gold, and cluster autoscaling for cost.",
      ],
      sk: [
        "Streamovacie platformy zlyhávajú na vývoji schémy, oneskorených dátach, malých súboroch a tichých chybných záznamoch. Tento návrh používa Delta Live Tables namiesto surového Structured Streaming, aby checkpointy, opakovania, kvalitu dát a líniu vlastnil rámec.",
        "Bronz je append-only surové udalosti z Kafky alebo cloudového úložiska. Striebro čistí, deduplikuje cez dropDuplicatesWithinWatermark a karanténuje zlé záznamy cez expect_or_drop / expect_or_quarantine. Zlato slúži denné súhrny platformy a živé metriky aktivity cez Unity Catalog.",
        "Prevádzkové rozhodnutia: autoOptimize proti malým súborom, maxOffsetsPerTrigger proti OOM pri špičkách, jedno- a dvojhodinové vodoznaky pre oneskorené dáta, delenie podľa dátumu v bronzi a podľa okien v zlate, a autoscaling klastrov kvôli nákladom.",
      ],
    },
  },
];

export type Job = {
  period: string;
  role: { en: string; sk: string };
  org: string;
  place: { en: string; sk: string };
  note: { en: string; sk: string };
};

export const JOBS: Job[] = [
  {
    period: "2025 – 2026",
    role: { en: "General operator", sk: "Všeobecný operátor" },
    org: "Mata Automotive s.r.o.",
    place: { en: "Slovakia", sk: "Slovensko" },
    note: {
      en: "Production tasks against quality standards on the automotive line.",
      sk: "Výrobné úlohy podľa kvalitatívnych noriem na automobilovej linke.",
    },
  },
  {
    period: "2024 – 2025",
    role: { en: "Production operator", sk: "Operátor vo výrobe" },
    org: "FYSAM Auto Decorative Slovakia s.r.o.",
    place: { en: "Veľký Krtíš, Slovakia", sk: "Veľký Krtíš, Slovensko" },
    note: {
      en: "Processing and assembly of decorative automotive components.",
      sk: "Spracovanie a montáž dekoratívnych komponentov pre automotive.",
    },
  },
  {
    period: "2022 – 2023",
    role: { en: "Production operator", sk: "Operátor vo výrobe" },
    org: "Mata Automotive s.r.o.",
    place: { en: "Slovakia", sk: "Slovensko" },
    note: {
      en: "Line equipment operation and visual quality inspection.",
      sk: "Obsluha výrobných zariadení a vizuálna kontrola kvality.",
    },
  },
  {
    period: "2018 – 2020",
    role: { en: "External quality control, automotive", sk: "Externá kontrola kvality pre automotive" },
    org: "Naro24h",
    place: { en: "Germany", sk: "Nemecko" },
    note: {
      en: "Sorting auto parts for German customers; records and outgoing inspection reports.",
      sk: "Triedenie autodielov pre nemeckých odberateľov; záznamy a výstupné kontrolné správy.",
    },
  },
  {
    period: "2016 – 2018",
    role: { en: "Picker, packer, claims", sk: "Picker, packer, reklamácie" },
    org: "VF Corp. Praha",
    place: { en: "Czech Republic", sk: "Česká republika" },
    note: {
      en: "Picking, packing, and claims handling in a distribution centre.",
      sk: "Vychystávanie, balenie tovaru a spracovanie reklamácií v skladovom centre.",
    },
  },
  {
    period: "2014 – 2016",
    role: { en: "Quality control", sk: "Kontrola kvality" },
    org: "VIZA Automotive",
    place: { en: "Czech Republic", sk: "Česká republika" },
    note: {
      en: "In-process and outgoing inspection of manufactured components.",
      sk: "Medzioperačná a výstupná kontrola vyrobených komponentov.",
    },
  },
  {
    period: "2012 – 2014",
    role: { en: "Production operator", sk: "Operátor vo výrobe" },
    org: "Tower Automotive",
    place: { en: "Slovakia", sk: "Slovensko" },
    note: {
      en: "Manufacture and stamping of metal body parts.",
      sk: "Výroba a lisovanie kovových dielov pre karosérie.",
    },
  },
  {
    period: "2010 – 2012",
    role: { en: "Logistics", sk: "Logistika" },
    org: "Daikin Plzeň",
    place: { en: "Czech Republic", sk: "Česká republika" },
    note: {
      en: "Internal logistics and material handling for production lines.",
      sk: "Interná logistika a manipulácia s materiálom pre výrobné linky.",
    },
  },
  {
    period: "2008 – 2009",
    role: { en: "Warehouse operative (UPS site)", sk: "Skladník (pobočka UPS)" },
    org: "Industrial Temporaries London",
    place: { en: "United Kingdom", sk: "Spojené kráľovstvo" },
    note: {
      en: "Warehouse work, sorting, and parcel packing.",
      sk: "Skladové práce, triedenie a balenie zásielok.",
    },
  },
  {
    period: "2006 – 2007",
    role: { en: "Warehouse operative", sk: "Skladník" },
    org: "Panasonic AVC Networks CZ",
    place: { en: "Czech Republic", sk: "Česká republika" },
    note: {
      en: "Inbound, put-away, and outbound of goods.",
      sk: "Príjem, naskladňovanie a expedícia tovaru.",
    },
  },
];

export const LANGUAGES = [
  { name: { en: "Slovak", sk: "Slovenský" }, level: "C2", note: { en: "Native", sk: "Rodný" } },
  { name: { en: "Hungarian", sk: "Maďarský" }, level: "C1", note: { en: "Advanced", sk: "Pokročilý" } },
  { name: { en: "English", sk: "Anglický" }, level: "B2", note: { en: "Upper intermediate", sk: "Stredne pokročilý" } },
  { name: { en: "German", sk: "Nemecký" }, level: "B1", note: { en: "Intermediate", sk: "Mierne pokročilý" } },
];

export const SKILL_GROUPS: {
  title: { en: string; sk: string };
  items: Array<string | { en: string; sk: string }>;
}[] = [
  {
    title: { en: "Cloud & enterprise", sk: "Cloud a podnikové systémy" },
    items: [
      "Microsoft Fabric",
      "Microsoft 365",
      "Power Platform",
      "Azure",
      "Entra ID",
      "Google Cloud Certified",
      "AWS",
      "IBM Cloud",
      "Alibaba Cloud",
      "SAP",
      "Salesforce",
      "Kubernetes",
      "Docker",
      "Stripe Developer",
    ],
  },
  {
    title: { en: "Build & community", sk: "Vývoj a komunita" },
    items: ["GitHub", "Stack Overflow", "WordPress"],
  },
  {
    title: { en: "Data & AI", sk: "Dáta a AI" },
    items: ["AI Data Scientist", "Databricks / DLT", "PySpark", "Medallion architecture"],
  },
  {
    title: { en: "Operations", sk: "Prevádzka" },
    items: [
      { en: "Automotive quality", sk: "Kvalita v automotive" },
      { en: "Logistics", sk: "Logistika" },
      { en: "CO₂ welding ticket", sk: "Zváračský preukaz CO₂" },
      { en: "Line production", sk: "Linková výroba" },
    ],
  },
];

export const CONTACT = {
  name: "Róbert Málik",
  brand: "RMD26",
  email: "rm26@rmd26.com",
  phone: "+421 951 324 534",
  phoneHref: "tel:+421951324534",
  web: "www.rmd26.com",
  webHref: "https://www.rmd26.com",
  address: "Sibírska 439/19, Želovce",
  cvHref: "/docs/robert-malik-cv.pdf",
};

export const copy = {
  en: {
    nav: {
      work: "Work",
      thesis: "Thesis",
      experience: "Experience",
      about: "About",
      contact: "Contact",
    },
    hero: {
      kicker: "RMD26  ·  2026 blueprint",
      title: "Róbert Málik",
      role: "Operations, quality, and the security of agentic systems.",
      lead: "Eighteen years across factories, warehouses, and quality desks in Slovakia, Czechia, Germany, and the UK — now building the cube that lets AI move fast without going ungoverned.",
      ctaWork: "View work",
      ctaCv: "Download CV",
      ctaContact: "Get in touch",
    },
    stats: [
      { value: "4", label: "Countries" },
      { value: "18+", label: "Years in operations" },
      { value: "4", label: "Working languages" },
      { value: "2026", label: "Agentic thesis" },
    ],
    thesis: {
      kicker: "The mark",
      title: "The sphere and the cube",
      sphereTitle: "The sphere",
      sphereBody:
        "Raw intelligence. Dark, powerful, opaque. It is dynamic, rapidly evolving, and inherently non-deterministic. It moves at breakneck velocity.",
      cubeTitle: "The wireframe cube",
      cubeBody:
        "Guardrails. Structured, transparent, rigid. Adaptive security and governance — visible boundaries, compliance parameters, control points.",
      closer: "We cannot slow down the sphere. We must build a stronger, smarter cube.",
    },
    work: {
      kicker: "Selected work",
      title: "From theory to practice",
      lead: "Thesis, products, and a streaming data platform — the same three ideas in every piece: velocity, trust, sovereignty.",
      open: "Open case",
    },
    experience: {
      kicker: "Career",
      title: "Shop floor to cloud",
      lead: "Quality, logistics, and automotive production in four countries. Precision is not a slogan — it is how the work was done.",
    },
    skills: {
      kicker: "Capabilities",
      title: "Tools, languages, craft",
      languages: "Languages",
      education: "Education",
      school: "SOŠ Želovce",
      schoolNote: "Complete secondary vocational education with maturita.",
    },
    about: {
      kicker: "Profile",
      title: "A reliable operator who is learning the stack",
      body: [
        "I am a responsible, versatile worker with deep international experience in logistics, quality control, and automotive manufacturing. Alongside the practical work I am actively studying modern IT — cloud platforms, Microsoft Fabric, Azure, and the foundations of data analysis and agentic systems.",
        "The through-line is the same on a press line and in a pipeline: flexibility, reliability, precision, and a willingness to learn the next tool. I work well in a team and I hold a CO₂ welding ticket.",
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let’s talk",
      lead: "Open to roles and collaborations in operations, quality, cloud, and agentic systems.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sent: "Message prepared. Your mail client should open with the draft.",
      error: "Please complete all fields with a valid email.",
      or: "Or reach me directly",
    },
    footer: {
      rights: "All rights reserved.",
      thesisLine: "The future of software is autonomous. The future of security is adaptive.",
    },
    project: {
      back: "All work",
      overview: "Overview",
      stack: "Stack",
    },
    notFound: {
      title: "Page not found",
      body: "That route is not on the map.",
      home: "Back home",
    },
  },
  sk: {
    nav: {
      work: "Práca",
      thesis: "Téza",
      experience: "Skúsenosti",
      about: "O mne",
      contact: "Kontakt",
    },
    hero: {
      kicker: "RMD26  ·  Plán 2026",
      title: "Róbert Málik",
      role: "Prevádzka, kvalita a bezpečnosť agentických systémov.",
      lead: "Osemnásť rokov vo fabrikách, skladoch a na kontrole kvality na Slovensku, v Česku, Nemecku a v Spojenom kráľovstve — teraz staviam kocku, v ktorej sa AI môže hýbať rýchlo, ale nie bez pravidiel.",
      ctaWork: "Pozrieť prácu",
      ctaCv: "Stiahnuť CV",
      ctaContact: "Napísať",
    },
    stats: [
      { value: "4", label: "Krajiny" },
      { value: "18+", label: "Rokov v prevádzke" },
      { value: "4", label: "Pracovné jazyky" },
      { value: "2026", label: "Agentická téza" },
    ],
    thesis: {
      kicker: "Značka",
      title: "Guľa a kocka",
      sphereTitle: "Guľa",
      sphereBody:
        "Surová inteligencia. Tmavá, silná, nepriehľadná. Je dynamická, rýchlo sa vyvíja a je vo svojej podstate nesto-chastická. Pohybuje sa extrémnou rýchlosťou.",
      cubeTitle: "Drôtená kocka",
      cubeBody:
        "Zábradlia. Štruktúrovaná, priehľadná, pevná. Adaptívna bezpečnosť a riadenie — viditeľné hranice, parametre súladu, kontrolné body.",
      closer: "Guľu nemôžeme spomaliť. Musíme postaviť silnejšiu a múdrejšiu kocku.",
    },
    work: {
      kicker: "Vybraná práca",
      title: "Od teórie k praxi",
      lead: "Téza, produkty a streamovacia dátová platforma — v každom kuse tie isté tri myšlienky: rýchlosť, dôvera, suverenita.",
      open: "Otvoriť prípad",
    },
    experience: {
      kicker: "Kariéra",
      title: "Z haly do cloudu",
      lead: "Kvalita, logistika a automobilová výroba v štyroch krajinách. Presnosť nie je slogan — tak sa práca robila.",
    },
    skills: {
      kicker: "Schopnosti",
      title: "Nástroje, jazyky, remeslo",
      languages: "Jazyky",
      education: "Vzdelanie",
      school: "SOŠ Želovce",
      schoolNote: "Úplné stredoškolské odborné vzdelanie s maturitou.",
    },
    about: {
      kicker: "Profil",
      title: "Spoľahlivý operátor, ktorý sa učí stack",
      body: [
        "Som zodpovedný a všestranný pracovník s bohatými medzinárodnými skúsenosťami v logistike, kontrole kvality a automobilovej výrobe. Popri praktickej práci sa aktívne vzdelávam v moderných IT — cloudové platformy, Microsoft Fabric, Azure a základy dátovej analýzy a agentických systémov.",
        "Spojovacia linka je rovnaká na lise aj v pipeline: flexibilita, spoľahlivosť, presnosť a ochota učiť sa ďalší nástroj. Som tímový hráč a mám zváračský preukaz na CO₂.",
      ],
    },
    contact: {
      kicker: "Kontakt",
      title: "Ozvite sa",
      lead: "Otvorený voči rolám a spolupráci v prevádzke, kvalite, cloude a agentických systémoch.",
      name: "Meno",
      email: "E-mail",
      message: "Správa",
      send: "Odoslať správu",
      sent: "Správa je pripravená. Mal by sa otvoriť váš e-mailový klient s konceptom.",
      error: "Vyplňte všetky polia s platným e-mailom.",
      or: "Alebo ma kontaktujte priamo",
    },
    footer: {
      rights: "Všetky práva vyhradené.",
      thesisLine: "Budúcnosť softvéru je autonómna. Budúcnosť bezpečnosti je adaptívna.",
    },
    project: {
      back: "Celá práca",
      overview: "Prehľad",
      stack: "Zásobník",
    },
    notFound: {
      title: "Stránka sa nenašla",
      body: "Táto cesta na mape nie je.",
      home: "Späť domov",
    },
  },
};

export function t<T>(value: { en: T; sk: T }, lang: Lang): T {
  return value[lang];
}

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
