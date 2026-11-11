export type Project = {
  slug: string;
  title: string;
  summary: string;
  contribution: string;
  stack: string[];
  href: string;
  status: string;
};

export type Publication = {
  year: number;
  title: string;
  venue: string;
  href: string;
  kind: "Journal" | "Conference" | "Chapter" | "Preprint";
};

export type Achievement = {
  result: string;
  title: string;
  organizer: string;
  note: string;
  href?: string;
};

export const profile = {
  name: "Touhidul Alam Seyam",
  shortName: "Seyam",
  role: "Software Engineer · Web, App, Backend & Agentic AI",
  location: "Chattogram, Bangladesh",
  email: "seyamalam41@gmail.com",
  phone: "+880 1311-104804",
  github: "https://github.com/Seyamalam",
  orcid: "https://orcid.org/0009-0007-7512-1893",
  scholar: "https://scholar.google.com/citations?user=gRkTVYEAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/touhidulalamseyam",
  x: "https://x.com/seyamalam1",
};

export const projects: Project[] = [
  {
    slug: "fasterapi",
    title: "fasterapi",
    summary: "FastAPI drop-in powered by Rust — a native Hyper/Tokio host serves your app with one GIL crossing per request.",
    contribution:
      "Built decorators, Pydantic v2 validation, dependency injection, exception handlers, middleware, TestClient, and OpenAPI to an 87-test byte-parity differential suite against FastAPI, plus Rust primitives for routing, JSON, scalar validation, rate limiting, and a compiled dependency DAG.",
    stack: ["Python", "Rust", "PyO3", "Hyper/Tokio"],
    href: "https://github.com/Seyamalam/fasterapi",
    status: "v0.1 · Open source",
  },
  {
    slug: "fulmen",
    title: "Fulmen",
    summary: "A hyper-fast, type-safe Python backend framework with a Rust core — most of the request never touches the interpreter.",
    contribution:
      "Designed the no-ASGI architecture: typed def/async def handlers while Rust owns the server, routing, validation, serialization, and security checks, with deny-by-default CORS, plugin features, swappable adapters, and a CLI that checks, diagnoses, and fixes projects.",
    stack: ["Python", "Rust", "Tokio", "PyO3"],
    href: "https://github.com/Seyamalam/fulmen",
    status: "Pre-alpha · Open source",
  },
  {
    slug: "wasmosaic",
    title: "WASMosaic",
    summary: "Browser image-processing primitives written in Rust, WebAssembly, and strict TypeScript.",
    contribution:
      "Published the 0.1.0 package where Rust owns the pixel loops and WASM carries them into the browser — four RGBA operations, Rust-owned typed matrices in development, and a roadmap toward OpenCV.js 4.13.0 parity plus typed browser adapters.",
    stack: ["Rust", "WebAssembly", "TypeScript"],
    href: "https://github.com/Seyamalam/wasmosaic",
    status: "0.1.0 · npm package",
  },
  {
    slug: "bun-nltk",
    title: "bun_nltk",
    summary: "Rust-first NLP for Bun, Node.js, and browsers — the NLTK 3.10.3 surface behind a shared native/WASM core.",
    contribution:
      "Ported all 241 public nltk.* module surfaces across 46 families with 2,983 reviewed compatibility mappings, a Rust crate passing 117 tests, a Bun suite of 1,251 passing checks, and a 1.09 MB WASM budget — every gap documented instead of silently dropped.",
    stack: ["TypeScript", "Bun", "Rust", "WASM"],
    href: "https://github.com/Seyamalam/bun_nltk",
    status: "1.1.0 · Open source",
  },
  {
    slug: "bun-panda",
    title: "bun_panda",
    summary: "A pandas-inspired DataFrame library for Bun and JS runtimes — familiar API first, no new mental model.",
    contribution:
      "Built DataFrame and Series with read_csv/json/parquet/excel, groupby, merge, pivot_table, and pandas-style options like groupby({ dropna, sort }) and value_counts({ sort, ascending }), so JS developers keep their dataframe intuition.",
    stack: ["TypeScript", "Bun", "DataFrames"],
    href: "https://github.com/Seyamalam/bun_panda",
    status: "Open source · 2026",
  },
  {
    slug: "trpc-rs-py",
    title: "trpc-rs-py",
    summary: "The Python backend for your tRPC app — procedures in Python, called from the official @trpc/client with live end-to-end types.",
    contribution:
      "Built queries, mutations, batching, SSE subscriptions with resumable tracked ids, live type sync via `trpc-py dev`, REST + OpenAPI output, and starter templates — shipped at 0.2.0 with a FastAPI-first adapter story.",
    stack: ["Python", "Rust", "tRPC", "SSE"],
    href: "https://github.com/Seyamalam/trpc-rs-py",
    status: "0.2.0 · Open source",
  },
  {
    slug: "bun-scikit",
    title: "bun-scikit",
    summary: "Machine-learning primitives for Bun and TypeScript, shaped after scikit-learn.",
    contribution:
      "Built the library around a tested estimator API, native Zig acceleration for core training paths, benchmark gates, parity contracts, and documented model-selection, preprocessing, ensemble, clustering, and metrics surfaces.",
    stack: ["TypeScript", "Bun", "Zig", "CI"],
    href: "https://github.com/Seyamalam/bun-scikit",
    status: "Open source · 2026",
  },
  {
    slug: "vision-workbench",
    title: "Vision Research Workbench",
    summary: "A native Rust GPUI workbench for image-AI research — dataset audits, evaluation, XAI, and agent-ready workflows.",
    contribution:
      "Built a desktop-grade research surface in Rust: dataset auditing, evaluation runs, explainability inspection, and structured outputs that agents can consume, without leaving a single native window.",
    stack: ["Rust", "GPUI", "Computer vision", "XAI"],
    href: "https://github.com/Seyamalam/vision-research-workbench",
    status: "Research tooling · 2026",
  },
  {
    slug: "robofusion",
    title: "RoboFusion",
    summary: "A multi-hazard smart-campus safety and response grid.",
    contribution:
      "Designed authenticated FastAPI services, SQLite/WAL persistence, WebSocket dashboards, role-based access, incident lifecycles, automated tests, and load tooling around ESP32 reference firmware and simulation.",
    stack: ["Python", "FastAPI", "WebSockets", "ESP32"],
    href: "https://github.com/Seyamalam/Robofusion",
    status: "Techathon winner · 2026",
  },
  {
    slug: "huntrix-delta",
    title: "Huntrix Delta",
    summary: "Offline-first disaster logistics for the moment networks and power disappear.",
    contribution:
      "Built the solo HackFusion entry across an Expo field app, Go and gRPC services, CRDT inventory sync, signed proof of delivery, offline maps, mesh handoff, route decay, and a reproducible chaos harness.",
    stack: ["Expo", "Go", "gRPC", "Offline-first"],
    href: "https://github.com/Seyamalam/hackfusion_huntrix",
    status: "HackFusion champion · 2026",
  },
  {
    slug: "blood-league-kickoff",
    title: "Blood League: Kickoff",
    summary: "A 3D football-combat horde-survival roguelite built for the browser and desktop.",
    contribution:
      "Co-built the first-game-jam entry with fixed-step Rapier physics, six original heroes, eleven enemy behaviours, an eight-to-ten-minute run loop, performance budgets, and multi-platform packaging.",
    stack: ["Three.js", "TypeScript", "Rapier", "Electron"],
    href: "https://github.com/Seyamalam/blood-league-kickoff",
    status: "GameJam 5th place · 2026",
  },
  {
    slug: "careerpath",
    title: "CareerPath",
    summary: "An AI-assisted employment and career-roadmap platform designed around SDG 8.",
    contribution:
      "Built job discovery, profile and skill modelling, course recommendations, match scoring, skill-gap analysis, CV assistance, authentication, and a PostgreSQL-backed product surface in Next.js 16.",
    stack: ["Next.js", "PostgreSQL", "AI SDK", "Drizzle"],
    href: "https://careerpath-vert.vercel.app",
    status: "NextGen 5th place · 2025",
  },
  {
    slug: "microops",
    title: "MicroOps",
    summary: "A resilient asynchronous file-delivery service for long-running, failure-prone work.",
    contribution:
      "Co-built the winning CUET system around job orchestration, self-hosted S3-compatible storage, non-blocking status delivery, containerized local infrastructure, CI/CD, and observable failure handling.",
    stack: ["Node.js", "Docker", "S3", "CI/CD"],
    href: "https://github.com/Seyamalam/cuet-hackathon-1",
    status: "MicroOps champion · 2025",
  },
  {
    slug: "paper-amigo",
    title: "Paper Amigo",
    summary: "A private research-paper library for authors who share drafts — labeled links, private critiques, no accounts.",
    contribution:
      "Built the product on Next.js 16, React 19, Convex, and UploadThing: PDFs grouped into projects, labeled share links that recipients open without signing up, and critiques collected beside the file they mean.",
    stack: ["Next.js", "React 19", "Convex", "UploadThing"],
    href: "https://paper-amigo.vercel.app",
    status: "Live product · 2026",
  },
  {
    slug: "asrro-portal",
    title: "ASRRO Portal",
    summary: "Public site and operations workspace for a robotics research organization.",
    contribution:
      "Built membership application and approval, role-aware dashboards, events and attendance, content publishing, reports, notifications, and restricted finance views.",
    stack: ["Next.js", "TypeScript", "Convex", "Better Auth"],
    href: "https://github.com/Seyamalam/asrro",
    status: "Product platform · 2026",
  },
  {
    slug: "paris-summit-platform",
    title: "Paris Summit Platform",
    summary: "A client brief taken through ten live design directions into a production event and editorial platform.",
    contribution:
      "Designed ten responsive, interactive concepts, translated the selected civic direction into a 19-route production site, and built Convex-backed editorial tools, protected team access, forms, files, programme management, and launch-safe donation flows.",
    stack: ["Next.js", "TypeScript", "Convex", "Better Auth"],
    href: "https://github.com/Seyamalam/paris-hindu-summit-2026",
    status: "Client platform · 2026",
  },
  {
    slug: "kaggriculture-agent",
    title: "Kaggriculture Agent",
    summary: "A reproducible autonomous policy for a two-player farming simulation.",
    contribution:
      "Engineered deterministic task assignment, seeded seat-swapped tournaments, frozen replay corpora, manifest hashing, regression gates, and loss-attribution tooling for disciplined agent iteration.",
    stack: ["Python", "Agents", "Simulation", "Evaluation"],
    href: "https://github.com/Seyamalam/Kaggriculture",
    status: "Agent research · 2026",
  },
  {
    slug: "fold-safe-ml-pipelines",
    title: "Fold-safe ML Pipelines",
    summary: "Reproducible tabular classification for Kaggle Playground Series S6E8.",
    contribution:
      "Created nested target encoding, matched-fold screening, five-fold out-of-fold evaluation, schema checks, and percentile-rank blends across LightGBM, XGBoost, and CatBoost.",
    stack: ["Python", "LightGBM", "XGBoost", "CatBoost"],
    href: "https://github.com/Seyamalam/playground-series-s6e8",
    status: "ML pipeline · 2026",
  },
  {
    slug: "zodic",
    title: "Zodic",
    summary: "A Zod-inspired, zero-dependency data validation library for Python.",
    contribution:
      "Published a chainable validation API with typed parsing, nested error paths, transformations, unions, enums, date handling, and framework-agnostic integration.",
    stack: ["Python", "PyPI", "Validation", "Open source"],
    href: "https://pypi.org/project/zodic/",
    status: "Package · 2025",
  },
];

export const publications: Publication[] = [
  {
    year: 2026,
    title:
      "Architectures for AI-Driven Visual Assistance: Evaluating Server-Mediated Mobile and Direct Access Desktop Client Implementations",
    venue: "Lecture Notes in Networks and Systems",
    href: "https://doi.org/10.1007/978-3-032-15764-5_45",
    kind: "Chapter",
  },
  {
    year: 2025,
    title:
      "Enhancing Agricultural Diagnostics: Advanced Training of Pre-Trained CNN Models for Paddy Leaf Disease Detection",
    venue: "Machine Learning Research",
    href: "https://doi.org/10.11648/j.mlr.20251001.11",
    kind: "Journal",
  },
  {
    year: 2025,
    title: "Next-Generation K-Means Clustering: Mojo-Driven Performance for Big Data",
    venue: "International Journal of Intelligent Information Systems",
    href: "https://doi.org/10.11648/j.ijiis.20251401.12",
    kind: "Journal",
  },
  {
    year: 2025,
    title: "Efficient Malware Classification Using Multiprocessing and Bag-of-Words Vectorization",
    venue: "Advances in Networks",
    href: "https://doi.org/10.11648/j.net.20251201.12",
    kind: "Journal",
  },
  {
    year: 2025,
    title:
      "Fine-tuning LLaMA 2 interference: a comparative study of language implementations for optimal efficiency",
    venue: "arXiv:2502.01651",
    href: "https://arxiv.org/abs/2502.01651",
    kind: "Preprint",
  },
  {
    year: 2025,
    title:
      "Comparative Performance Evaluation of Classical Machine Learning and Quantum SVM for Heart Disease Prediction using a Quantum-Featured Dataset",
    venue: "Sonargaon University Journal",
    href: "https://su.edu.bd/web_assets/journal/journal_five/journal3.pdf",
    kind: "Journal",
  },
  {
    year: 2024,
    title:
      "AgriScan: Next.js powered cross-platform solution for automated plant disease diagnosis and crop health management",
    venue: "Journal of Electrical Systems and Information Technology",
    href: "https://doi.org/10.1186/s43067-024-00169-7",
    kind: "Journal",
  },
  {
    year: 2024,
    title:
      "Application of Machine Learning K-Means Clustering and Linear Regression in Determining the Risk Level of Pulmonary Tuberculosis",
    venue: "IEEE COMPAS",
    href: "https://doi.org/10.1109/COMPAS60761.2024.10796963",
    kind: "Conference",
  },
  {
    year: 2024,
    title:
      "Enhancing Cardiovascular Risk Prediction Using Support Vector Machines and Advanced Machine Learning Algorithms",
    venue: "IEEE COMPAS",
    href: "https://doi.org/10.1109/COMPAS60761.2024.10796805",
    kind: "Conference",
  },
  {
    year: 2024,
    title: "Comparing pre-trained models for efficient leaf disease detection: a study on custom CNN",
    venue: "Journal of Electrical Systems and Information Technology",
    href: "https://doi.org/10.1186/s43067-024-00137-1",
    kind: "Journal",
  },
];

export const experience = [
  {
    period: "Dec 2025 — Present",
    role: "Software Engineer",
    organization: "Agentic Institute",
    location: "Remote",
    points: [
      "Contribute to application development and AI-enabled, agentic software systems.",
      "Work across implementation, integration, testing, and delivery using modern web and backend technologies.",
    ],
  },
  {
    period: "Aug 2024 — Present",
    role: "Software Engineer",
    organization: "Hello World Communications Ltd",
    location: "Chattogram, Bangladesh",
    points: [
      "Build, review, deploy, and maintain full-stack applications across frontend, backend, and database layers.",
      "Work with TypeScript, React, Next.js, Node.js, Python, PostgreSQL, and applied AI integrations.",
      "Collaborate on requirements, implementation, releases, and production support.",
    ],
  },
  {
    period: "Mar 2021 — 2025",
    role: "Freelance Developer",
    organization: "Independent",
    location: "Remote",
    points: [
      "Delivered web applications from requirements and interface design through backend development, deployment, and support.",
      "Built for business, nonprofit, academic, and event use with modern JavaScript and Python stacks.",
    ],
  },
] as const;

export const achievements: Achievement[] = [
  {
    result: "Champion · 2026",
    title: "HackFusion InnoNation",
    organizer: "IEEE Computer Society LU Student Branch Chapter · Leading University",
    note: "Won the 24-hour national inter-university hackathon as solo Team Huntrix with Huntrix Delta.",
    href: "/projects/huntrix-delta",
  },
  {
    result: "Champion · 2025",
    title: "MicroOps Hackathon",
    organizer: "CUET CSE IT Fest",
    note: "Built the winning resilient file-delivery system with teammate Abtahee Kabir.",
    href: "/projects/microops",
  },
  {
    result: "Winner · 2026",
    title: "RoboFusion 1.0 Techathon",
    organizer: "RoboFusion 1.0",
    note: "Built a multi-hazard smart-campus response grid as Team Huntrix.",
    href: "/projects/robofusion",
  },
  {
    result: "5th place · 2026",
    title: "IUT ICT Fest GameJam",
    organizer: "12th IUT ICT Fest",
    note: "First game jam; co-built Blood League: Kickoff with Abtahee Kabir.",
    href: "/projects/blood-league-kickoff",
  },
  {
    result: "5th place · 2025",
    title: "NextGen Hackathon",
    organizer: "IIUC Tech Fest · Programming Hero",
    note: "Team Huntrix built CareerPath, an AI-assisted youth employment and career-roadmap platform.",
    href: "/projects/careerpath",
  },
  {
    result: "Finalist",
    title: "The Infinity AI BuildFest",
    organizer: "AI BuildFest",
    note: "Selected as a finalist in the AI product-building competition.",
  },
  {
    result: "Best Campus Ambassador",
    title: "SciBlitz 2.0",
    organizer: "SheSTEM · IEEE CUET Student Branch · IEEE Bangladesh Section",
    note: "Recognized for campus leadership and community outreach.",
  },
];

export const leadership = {
  period: "Present",
  role: "Assistant General Secretary",
  organization: "BGCTUB IT Club",
  note: "Help lead student technology activities, community programs, and club operations.",
} as const;

export const skillGroups = [
  {
    label: "Web, app and backend",
    skills: ["TypeScript", "React", "Next.js", "React Native", "Node.js", "REST APIs"],
  },
  {
    label: "ML, AI and agents",
    skills: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "Agent evaluation", "Computer vision"],
  },
  {
    label: "Data and infrastructure",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Convex", "Docker", "Git"],
  },
  {
    label: "Research practice",
    skills: ["Reproducible evaluation", "Benchmark design", "Data pipelines", "Academic writing"],
  },
] as const;
