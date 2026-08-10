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

export const profile = {
  name: "Touhidul Alam Seyam",
  shortName: "Seyam",
  role: "Software Engineer & Applied AI Researcher",
  location: "Chattogram, Bangladesh",
  email: "seyamalam41@gmail.com",
  phone: "+880 1311-104804",
  github: "https://github.com/Seyamalam",
  orcid: "https://orcid.org/0009-0007-7512-1893",
  scholar: "https://scholar.google.com/citations?user=gRkTVYEAAAAJ&hl=en",
  x: "https://x.com/seyamalam1",
};

export const projects: Project[] = [
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
    period: "Jul 2023 — 2025",
    role: "Research Assistant",
    organization: "BGC Trust University Bangladesh",
    location: "Chattogram, Bangladesh",
    points: [
      "Supported machine-learning experiments, data analysis, implementation, technical figures, and manuscript preparation.",
      "Worked across agricultural diagnostics, healthcare risk prediction, malware classification, LLM inference, and clustering.",
      "Contributed to student mentoring, technical workshops, and academic project execution.",
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

export const skillGroups = [
  {
    label: "Product engineering",
    skills: ["TypeScript", "React", "Next.js", "Node.js", "REST APIs", "System design"],
  },
  {
    label: "Applied machine learning",
    skills: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Computer vision"],
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
