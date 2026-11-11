export type ProjectVisual =
  | "native-ml"
  | "incident-grid"
  | "offline-delta"
  | "game-arena"
  | "career-map"
  | "async-ops"
  | "operations-portal"
  | "concept-production"
  | "agent-replay"
  | "fold-pipeline"
  | "validation-flow"
  | "rust-bridge"
  | "framework-core"
  | "wasm-pixels"
  | "nlp-surface"
  | "dataframe-ops"
  | "typed-rpc"
  | "paper-share"
  | "workbench";

export type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type ProjectDetail = {
  visual: ProjectVisual;
  thesis: string;
  challenge: string;
  response: string;
  outcome: string;
  proof: { value: string; label: string }[];
  decisions: { title: string; description: string }[];
  codeTitle: string;
  code: string;
  media?: ProjectMedia[];
  video?: { src: string; poster: string; label: string };
  recognition?: {
    kicker: string;
    title: string;
    note: string;
    href: string;
    linkLabel?: string;
  };
};

export const projectDetails: Record<string, ProjectDetail> = {
  "bun-scikit": {
    visual: "native-ml",
    thesis: "A familiar machine-learning API for TypeScript, with native acceleration where the hot paths justify it.",
    challenge: "JavaScript teams can train and evaluate models without leaving their runtime, but they rarely get the estimator conventions, reproducible splitting, metrics, and breadth expected from mature Python tooling.",
    response: "I built a scikit-learn-inspired surface for Bun, then treated parity as a measurable contract: runtime exports, API documentation, snapshot fixtures, CI gates, and benchmark artifacts all move together.",
    outcome: "The library now spans classical models, preprocessing, model selection, clustering, ensembles, metrics, and inspection—with Zig-backed training paths and prebuilt native binaries for supported platforms.",
    proof: [
      { value: "209 / 209", label: "tracked runtime exports" },
      { value: "470 / 470", label: "documented exported symbols" },
      { value: "34 / 34", label: "snapshot parity gates" },
      { value: "6.95×", label: "linear predict snapshot" },
    ],
    decisions: [
      { title: "Parity is a build artifact", description: "The public surface is inventoried and checked instead of being maintained as an aspirational list." },
      { title: "Native code stays optional", description: "Zig accelerates selected training paths while JavaScript implementations remain inspectable fallbacks." },
      { title: "Benchmarks include correctness", description: "Performance snapshots record metric deltas as well as timings so a faster wrong answer cannot pass." },
    ],
    codeTitle: "A complete train → predict loop",
    code: `import {
  StandardScaler,
  LogisticRegression,
  accuracyScore,
} from "bun-scikit";

const X = new StandardScaler().fitTransform(samples);
const model = new LogisticRegression({
  solver: "gd",
  learningRate: 0.8,
  maxIter: 100,
});

model.fit(X, labels);
console.log(accuracyScore(labels, model.predict(X)));`,
  },
  robofusion: {
    visual: "incident-grid",
    thesis: "Raw campus sensor readings become an authenticated, ranked response queue—without letting edge nodes declare their own risk.",
    challenge: "A useful safety prototype has to distinguish a real incident from sensor warm-up, disconnected hardware, stale packets, or simultaneous hazards across multiple labs.",
    response: "I designed ESP32 reference nodes, deterministic simulation, authenticated FastAPI ingestion, server-owned risk fusion, incident lifecycles, SQLite/WAL persistence, and a live WebSocket command dashboard.",
    outcome: "The working prototype covers three reference zones, scales through a 30-zone load scenario, survives reconnects with queued readings, and gives security staff a deterministic priority order.",
    proof: [
      { value: "Winner", label: "RoboFusion 1.0 Techathon" },
      { value: "30+", label: "zones in load testing" },
      { value: "10,000", label: "rows in database benchmark" },
      { value: "3", label: "reference lab nodes" },
    ],
    decisions: [
      { title: "The server owns truth", description: "Nodes submit raw readings; only the backend calculates risk, state, and actuator commands." },
      { title: "Offline is never safe", description: "Disconnected or unhealthy sensors become an explicit state instead of silently collapsing to green." },
      { title: "Ties are deterministic", description: "Critical incidents sort by risk, occupancy, critical time, then stable zone ID." },
    ],
    codeTitle: "Risk is explainable, not opaque",
    code: `risk = (
    fire_detected * 40
    + gas_detected * 25
    + water_detected * 20
    + occupied * 15
)

state = "CRITICAL" if risk >= 65 else (
    "WARNING" if risk >= 30 else "SAFE"
)`,
    video: {
      src: "/project-media/robofusion/dashboard-live.webm",
      poster: "/project-media/robofusion/dashboard-critical.webp",
      label: "Live command dashboard moving from safe readings to a critical incident",
    },
    media: [
      {
        src: "/project-media/robofusion/dashboard-critical.webp",
        alt: "RoboFusion command dashboard showing ranked critical incidents across campus labs",
        caption: "The dashboard keeps live zone state, priority, acknowledgement, and history in one response surface.",
        width: 1920,
        height: 1080,
      },
      {
        src: "/project-media/robofusion/wokwi-circuit.webp",
        alt: "Wokwi ESP32 circuit used to demonstrate a RoboFusion zone node",
        caption: "A reproducible Wokwi circuit lets judges exercise the hardware protocol without a physical ESP32.",
        width: 1920,
        height: 1080,
      },
    ],
    recognition: {
      kicker: "Competition result",
      title: "Winning Techathon project at RoboFusion 1.0",
      note: "Built and submitted by Team Huntrix for the smart-campus safety and response challenge.",
      href: "https://www.facebook.com/share/v/1HV2qN5JwV/",
    },
  },
  "huntrix-delta": {
    visual: "offline-delta",
    thesis: "A disaster logistics system that keeps authenticating people, reconciling inventory, and routing aid after the network disappears.",
    challenge: "The Digital Delta brief demanded more than an online dashboard: field teams needed useful state, identity, handoff, proof, and routing behaviour through outages, device-to-device sync, stale data, and hostile conditions.",
    response: "As a solo developer, I connected an Expo field app to Go and gRPC services, protobuf contracts, CRDT inventory state, per-device keys, tamper-evident logs, offline OSM tiles, BLE and Wi-Fi Direct handoff, signed proof of delivery, and a seeded chaos simulator.",
    outcome: "The prototype covers the field journey from authenticated intake to multimodal delivery and replay-resistant proof, with reproducible compliance runs and explicit conflict resolution instead of pretending connectivity is reliable.",
    proof: [
      { value: "Champion", label: "HackFusion InnoNation 2026" },
      { value: "Solo", label: "product and engineering build" },
      { value: "100k", label: "successful compliance requests" },
      { value: "46.36 MB", label: "Android Java heap snapshot" },
    ],
    decisions: [
      { title: "Offline is the primary path", description: "Local operations remain useful without a server, and synchronization is modelled as reconciliation rather than recovery from an exceptional state." },
      { title: "Every handoff leaves evidence", description: "Device keys, monotonic counters, signatures, and tamper-evident logs make proof of delivery verifiable after delayed synchronization." },
      { title: "Conflicts stay visible", description: "Vector clocks and a conflict interface preserve concurrent field changes instead of resolving scarce inventory with last-write-wins." },
    ],
    codeTitle: "Merge concurrent inventory without erasing either field update",
    code: `func Merge(local, remote Inventory) Inventory {
  switch CompareClock(local.Clock, remote.Clock) {
  case RemoteDominates:
    return remote
  case LocalDominates:
    return local
  default:
    return NewConflict(local, remote)
  }
}`,
    media: [
      {
        src: "/project-media/huntrix-delta/architecture.webp",
        alt: "Huntrix Delta architecture showing offline field clients, mesh synchronization, and logistics services",
        caption: "The repository architecture maps the offline field client, device-to-device transport, synchronization contracts, routing, and operational services.",
        width: 1800,
        height: 1080,
      },
      {
        src: "/project-media/huntrix-delta/model-card.webp",
        alt: "Huntrix Delta model card methodology for triage and route-decay decisions",
        caption: "A repository model card documents how autonomous triage and predictive route-decay behaviour should be evaluated and constrained.",
        width: 745,
        height: 983,
      },
    ],
    recognition: {
      kicker: "Competition result",
      title: "Champion of the 24-hour HackFusion InnoNation national hackathon",
      note: "Won as solo Team Huntrix in the Digital Delta challenge at HackFusion 2026, organized by IEEE Computer Society LU Student Branch Chapter at Leading University.",
      href: "https://hackfusion2026.pythonanywhere.com/details/1/",
      linkLabel: "View the event brief",
    },
  },
  "blood-league-kickoff": {
    visual: "game-arena",
    thesis: "A football is the weapon, the shield, and the risk-reward loop in a fast 3D horde-survival game.",
    challenge: "A short game-jam build had to turn the theme Kickoff into a complete, understandable run while keeping physics, enemies, effects, and camera work responsive across browsers and desktop builds.",
    response: "With teammate Abtahee Kabir, I built fixed-step Rapier simulation, six heroes, eleven enemy behaviours, charge and deflection mechanics, a final goalkeeper boss, guided onboarding, performance budgets, and Vite/Electron packaging.",
    outcome: "The frozen v0.18.1 jam build delivers an eight-to-ten-minute loop on web, macOS, Windows, and Linux, targeting stable 60 FPS with high-refresh support and a complete playable progression.",
    proof: [
      { value: "5th", label: "first-ever GameJam result" },
      { value: "6", label: "original playable heroes" },
      { value: "11", label: "enemy behaviours" },
      { value: "60 FPS", label: "performance target" },
    ],
    decisions: [
      { title: "One object drives the whole game", description: "The enchanted football connects attack, defence, positioning, charge timing, and the theme in one readable mechanic." },
      { title: "Physics advance on a fixed step", description: "Simulation timing stays deterministic while rendering can scale to different display refresh rates." },
      { title: "The jam build is frozen", description: "Version 0.18.1 remains a reproducible record of what the team actually submitted instead of silently absorbing later improvements." },
    ],
    codeTitle: "Keep the physics stable when a frame runs long",
    code: `accumulator += Math.min(frameDelta, MAX_FRAME_DELTA);

while (accumulator >= FIXED_STEP) {
  world.step();
  combat.update(FIXED_STEP);
  accumulator -= FIXED_STEP;
}

renderer.render(scene, camera);`,
    media: [
      {
        src: "/project-media/blood-league/gameplay.webp",
        alt: "Blood League Kickoff gameplay with the player fighting a large enemy wave using the football",
        caption: "The combat arena keeps the charged ball, enemy pressure, score, health, and upgrade loop visible without breaking the action.",
        width: 1728,
        height: 851,
      },
      {
        src: "/project-media/blood-league/guided-kickoff.webp",
        alt: "Blood League Kickoff guided opening sequence",
        caption: "The guided kickoff teaches the central weapon and movement vocabulary inside the match rather than through a detached manual.",
        width: 1728,
        height: 851,
      },
      {
        src: "/project-media/blood-league/boss.webp",
        alt: "Blood League Kickoff final goalkeeper boss encounter",
        caption: "The Count Goalkeeper encounter closes the run with a football-specific boss instead of a generic health sponge.",
        width: 1728,
        height: 851,
      },
    ],
    recognition: {
      kicker: "Competition result",
      title: "5th place in my first GameJam",
      note: "Built by two-person Team Huntrix for the 12th IUT ICT Fest 2026 GameJam and preserved as a playable jam release.",
      href: "https://seyamalam.itch.io/blood-league-kickoff",
      linkLabel: "Play on itch.io",
    },
  },
  careerpath: {
    visual: "career-map",
    thesis: "Turn a student profile into an explainable route from current skills to suitable jobs and the next useful course.",
    challenge: "Youth employment platforms often separate job browsing, learning, CV work, and skill gaps, leaving users with scores but no sequence of actions they can actually follow.",
    response: "I built a Next.js 16 product around authenticated profiles, skills, seeded jobs and courses, rule-based matching, AI-assisted CV analysis, gap explanations, and generated roadmaps backed by Neon Postgres and Drizzle.",
    outcome: "CareerPath brings job discovery, match evidence, learning recommendations, and roadmap generation into one responsive workflow designed around SDG 8 and deployable as a static-facing, database-backed product.",
    proof: [
      { value: "5th", label: "IIUC NextGen Hackathon" },
      { value: "20+", label: "seeded jobs" },
      { value: "20+", label: "curated courses" },
      { value: "SDG 8", label: "product focus" },
    ],
    decisions: [
      { title: "A score needs an explanation", description: "Matching surfaces show why a role fits and which missing skills reduce the result." },
      { title: "Rules remain a dependable baseline", description: "Deterministic matching provides useful output even when generative AI is unavailable or still being developed." },
      { title: "The roadmap links work to learning", description: "Recommended courses are attached to gaps and target roles instead of presented as an unrelated catalogue." },
    ],
    codeTitle: "Make the match score legible",
    code: `const matched = job.skills.filter(skill =>
  profile.skills.includes(skill)
);
const missing = job.skills.filter(skill =>
  !profile.skills.includes(skill)
);

return {
  score: Math.round((matched.length / job.skills.length) * 100),
  matched,
  missing,
};`,
    media: [
      {
        src: "/project-media/careerpath/dashboard.webp",
        alt: "CareerPath dashboard showing career progress, recommendations, and profile signals",
        caption: "The dashboard turns the profile into an action surface for job matches, gaps, learning, and roadmap progress.",
        width: 1919,
        height: 1080,
      },
      {
        src: "/project-media/careerpath/roadmap.webp",
        alt: "CareerPath generated career roadmap interface",
        caption: "Roadmap generation sequences skills and learning into practical stages instead of returning an isolated AI answer.",
        width: 1919,
        height: 1080,
      },
      {
        src: "/project-media/careerpath/match-score.webp",
        alt: "CareerPath job matching score with matched and missing skills",
        caption: "The match view exposes the evidence behind a score, including strengths and missing requirements.",
        width: 1919,
        height: 1080,
      },
    ],
    recognition: {
      kicker: "Competition result",
      title: "5th place at IIUC Tech Fest 2025 NextGen Hackathon",
      note: "Built as Team Huntrix for the Programming Hero-presented hackathon, with youth employment and decent work as the core problem.",
      href: "https://careerpath-vert.vercel.app",
      linkLabel: "Open the live product",
    },
  },
  microops: {
    visual: "async-ops",
    thesis: "A slow external download should become a durable job—not a request that blocks, times out, and loses its state.",
    challenge: "The CUET challenge imposed ten-to-120-second file downloads and asked for self-hosted object storage, asynchronous delivery, CI/CD, and operational visibility under hackathon time pressure.",
    response: "With teammate Abtahee Kabir, I shaped initiation, job state, workers, S3-compatible RustFS/MinIO storage, polling and streaming status paths, containerized services, automated checks, and deployment workflows around the failure modes.",
    outcome: "The winning submission decouples client latency from download time, preserves observable job state, and returns a storage-backed result without tying up the original HTTP request.",
    proof: [
      { value: "Champion", label: "CUET MicroOps Hackathon" },
      { value: "10-120s", label: "external task duration" },
      { value: "S3", label: "self-hosted object storage" },
      { value: "CI/CD", label: "automated delivery path" },
    ],
    decisions: [
      { title: "Initiation returns immediately", description: "The API creates a durable job identifier so the client is never coupled to the external download duration." },
      { title: "Binaries live outside the app", description: "S3-compatible object storage keeps file lifecycle and delivery independent from application containers." },
      { title: "Progress has more than one transport", description: "Polling remains the dependable baseline while streaming or webhook delivery can improve responsiveness without redefining job state." },
    ],
    codeTitle: "Turn a long request into a durable job",
    code: `app.post("/downloads", async (request, reply) => {
  const job = await queue.add("download", {
    sourceUrl: request.body.sourceUrl,
  });

  return reply.code(202).send({
    jobId: job.id,
    statusUrl: \`/downloads/\${job.id}\`,
  });
});`,
    recognition: {
      kicker: "Competition result",
      title: "Champion of the MicroOps Hackathon at CUET CSE IT Fest",
      note: "The two-person submission won the infrastructure-focused challenge presented by Delineate with technical support from Bongo.dev and cloud partnership from Brilliant Cloud Intercloud.",
      href: "https://github.com/Seyamalam/cuet-hackathon-1",
      linkLabel: "Inspect the winning system",
    },
  },
  "asrro-portal": {
    visual: "operations-portal",
    thesis: "One public identity and one role-aware operating system for a growing robotics research organization.",
    challenge: "Membership, events, attendance, publishing, files, notifications, reports, and finance had to coexist without exposing internal operations to public visitors or the wrong committee roles.",
    response: "I shaped the platform around explicit workflows and permissions, pairing a public editorial site with authenticated dashboards backed by Convex and Better Auth.",
    outcome: "The result is a broad but coherent organization platform with responsive public pages, applicant tracking, member operations, content tools, and restricted administrative workspaces.",
    proof: [
      { value: "20+", label: "purpose-built product surfaces" },
      { value: "3", label: "responsive capture sizes" },
      { value: "RBAC", label: "role-aware operations" },
      { value: "E2E", label: "membership lifecycle" },
    ],
    decisions: [
      { title: "Workflows before dashboards", description: "Each screen starts from a recognizable task—approve, attend, publish, report—not a generic admin widget." },
      { title: "Public and private share a language", description: "The organization’s visual identity carries through to operations without making internal tools ornamental." },
      { title: "Permissions remain visible", description: "Restricted finance and role-management surfaces make authority explicit rather than relying on hidden navigation." },
    ],
    codeTitle: "A permission check close to the operation",
    code: `const membership = await requireMember(ctx);
await requirePermission(membership, "members:approve");

await ctx.db.patch(applicationId, {
  status: "approved",
  reviewedBy: membership.userId,
  reviewedAt: Date.now(),
});`,
    media: [
      {
        src: "/project-media/asrro/dashboard-overview.webp",
        alt: "ASRRO role-aware operations dashboard in dark mode",
        caption: "The overview prioritizes current work, organizational signals, and the next operational action.",
        width: 1440,
        height: 1000,
      },
      {
        src: "/project-media/asrro/dashboard-members.webp",
        alt: "ASRRO member management dashboard with searchable records",
        caption: "Membership records and role-aware actions are designed as a working register, not a decorative card wall.",
        width: 1440,
        height: 1000,
      },
      {
        src: "/project-media/asrro/public-home.webp",
        alt: "ASRRO public homepage for the robotics research organization",
        caption: "The public system gives projects, programs, events, and membership a shared front door.",
        width: 1440,
        height: 1000,
      },
    ],
  },
  "paris-summit-platform": {
    visual: "concept-production",
    thesis: "A real client decision process—not one polished guess: ten working directions, one selected system, then a production editorial platform.",
    challenge: "The summit needed stakeholders to evaluate genuinely different identities while the eventual product still had to support a large information architecture, changing programme content, public participation, controlled team access, and a safe path toward donations.",
    response: "I built ten responsive React directions with complete content and interactions, then carried the selected Paris Assembly language into a Next.js 16 platform backed by Convex, Better Auth, file storage, structured editors, audit events, and protected operational tools.",
    outcome: "The result spans the design decision and the delivery system: stakeholders could compare live concepts instead of static moodboards, while editors received a production-shaped platform they can update without code changes.",
    proof: [
      { value: "10", label: "live design directions" },
      { value: "19", label: "production routes" },
      { value: "68", label: "editable brief records" },
      { value: "2", label: "persistent color modes" },
    ],
    decisions: [
      { title: "Concepts had to behave", description: "Every direction used real HTML, responsive layouts, navigation, forms, and concept-specific interactions so selection reflected an actual product experience." },
      { title: "Editorial work follows pages", description: "The admin system organizes controls around recognizable website pages, programmes, people, media, and enquiries instead of exposing a generic database console." },
      { title: "Sensitive operations fail closed", description: "Better Auth roles protect mutations, invitation-only access replaces public signup after bootstrap, and donation processing stays in demo mode until the chosen provider is fully verified." },
    ],
    codeTitle: "Authenticated settings with an audit trail",
    code: `export const save = mutation({
  args: settingsFieldsValidator.fields,
  returns: v.null(),
  handler: async (ctx, args) => {
    const actor = await getAdmin(ctx);
    const existing = await ctx.db
      .query("siteSettings")
      .withIndex("by_key", q => q.eq("key", "primary"))
      .unique();

    const value = { ...args, key: "primary", updatedAt: Date.now() };
    if (existing) await ctx.db.replace(existing._id, value);
    else await ctx.db.insert("siteSettings", value);
    await writeAudit(ctx, actor, {
      action: "save",
      entityType: "siteSettings",
      entityId: "primary",
      summary: "Updated global site settings",
    });
    return null;
  },
});`,
    media: [
      {
        src: "/project-media/paris/concept-01.webp",
        alt: "Witness Mosaic, the first live design direction for the Paris summit",
        caption: "Witness Mosaic explored a documentary, testimony-led identity as one of ten fully interactive directions.",
        width: 1440,
        height: 1024,
      },
      {
        src: "/project-media/paris/concept-06.webp",
        alt: "Paris Assembly, the selected sixth design direction",
        caption: "Paris Assembly established the selected civic system: cobalt structure, signal-red action, and institutional rhythm.",
        width: 1440,
        height: 1024,
      },
      {
        src: "/project-media/paris/production-light.webp",
        alt: "Production Paris summit homepage in light mode",
        caption: "The selected direction expanded into a responsive production homepage and a nineteen-route content system.",
        width: 1440,
        height: 1024,
      },
      {
        src: "/project-media/paris/production-dark.webp",
        alt: "Production Paris summit homepage in dark mode",
        caption: "The complete visual language supports persistent light and dark modes rather than treating dark mode as an afterthought.",
        width: 1440,
        height: 1024,
      },
    ],
    recognition: {
      kicker: "Design process",
      title: "Ten live directions preceded the production build",
      note: "The separate showcase preserves the full client selection process, including responsive demos, keyboard navigation, registration, donation, and concept-specific interactions.",
      href: "https://github.com/Seyamalam/paris-2026-design-showcase",
      linkLabel: "Explore all ten directions",
    },
  },
  "kaggriculture-agent": {
    visual: "agent-replay",
    thesis: "An autonomous farming policy improved through frozen evidence, paired seats, and loss attribution—not leaderboard guesswork.",
    challenge: "A two-player simulation can make a weak policy look strong when seats, seeds, market timing, or a changing opponent corpus are left uncontrolled.",
    response: "I built deterministic task assignment, seeded seat-swapped tournaments, digest-pinned replay corpora, promotion gates, and tools that attribute losses to market windows and committed actions.",
    outcome: "Every promoted strategy has an audit trail: exact agent hash, engine version, replay bytes, action trace, seat comparison, and regression thresholds.",
    proof: [
      { value: "2 seats", label: "every tournament pairing" },
      { value: "SHA-256", label: "replay and policy identity" },
      { value: "Frozen", label: "opponent replay corpora" },
      { value: "21", label: "documented candidate iterations" },
    ],
    decisions: [
      { title: "Promotions fail closed", description: "Trace errors, invalid simulations, seat regressions, or a negative mean delta block a candidate by default." },
      { title: "Replays are immutable evidence", description: "Manifests pin the engine, seed, configuration, bytes, and selected action stream before comparisons begin." },
      { title: "Attribution follows outcomes", description: "Market-window reports separate realized revenue, denial effects, rescued games, and harmed-to-loss cases." },
    ],
    codeTitle: "A promotion gate that swaps the seats",
    code: `for seed in frozen_seeds:
    for candidate_seat in (0, 1):
        result = play(
            candidate=challenger,
            baseline=incumbent,
            seed=seed,
            candidate_seat=candidate_seat,
        )
        gate.record(result)

gate.require_no_seat_regressions()
gate.require_non_negative_mean_delta()`,
  },
  "fold-safe-ml-pipelines": {
    visual: "fold-pipeline",
    thesis: "Competition gains that survive the fold boundary: nested target encoding, matched screening, and rank blending.",
    challenge: "Target encodings can leak labels into validation data, while mismatched folds make small experiment gains impossible to trust.",
    response: "I built five-fold out-of-fold training with inner-fold exact-value encoding, schema checks, shared splits across models, and percentile-rank blends evaluated against the same OOF view.",
    outcome: "The submitted XGBoost/LightGBM blend reached 0.96919 public ROC AUC and rank 6 after the competition’s first day, while the full pipeline remains reproducible from locked code.",
    proof: [
      { value: "0.96919", label: "best submitted public AUC" },
      { value: "0.96791", label: "five-fold OOF AUC" },
      { value: "#6", label: "after competition day one" },
      { value: "5 folds", label: "matched outer evaluation" },
    ],
    decisions: [
      { title: "Encoding happens inside the fold", description: "A validation row’s target never contributes to the feature values used to predict it." },
      { title: "Candidates share the same splits", description: "Small improvements are screened on matched folds before spending a full training run." },
      { title: "Blending uses ranks", description: "Percentile ranks align model scales before weighted predictions are combined." },
    ],
    codeTitle: "Nested encoding without validation leakage",
    code: `for outer_train, valid in outer_folds.split(X, y):
    encoder = FoldSafeTargetEncoder(inner_folds=10)
    X_train = encoder.fit_transform(
        X.iloc[outer_train], y.iloc[outer_train]
    )
    X_valid = encoder.transform(X.iloc[valid])

    model.fit(X_train, y.iloc[outer_train])
    oof[valid] = model.predict_proba(X_valid)[:, 1]`,
  },
  fasterapi: {
    visual: "rust-bridge",
    thesis: "Your FastAPI file stops changing; the server underneath becomes Rust.",
    challenge: "Python web teams pay for convenience with interpreter-bound request paths — ASGI dispatch, routing, JSON, and validation all execute in Python before the handler runs.",
    response: "I built a FastAPI-compatible surface — decorators, Path/Query/Body/Form, Pydantic v2 validation, Depends() DI, exception handlers, lifespan, middleware, TestClient, and OpenAPI — then moved the hot path into a PyO3 extension: a native Hyper/Tokio host, matchit routing, JSON helpers, scalar validators, token-bucket rate limiting, and a compiled dependency DAG.",
    outcome: "When the extension is built, app.serve() runs on the Rust host: one GIL crossing per request, ~15µs of bridge overhead, ~13k req/s serial keep-alive on loopback — roughly 2× the Python-driven path — verified by an 87-test byte-parity differential suite.",
    proof: [
      { value: "87/87", label: "byte-parity differential tests" },
      { value: "~15µs", label: "bridge overhead per request" },
      { value: "13k", label: "req/s on loopback" },
      { value: "1", label: "GIL crossing per request" },
    ],
    decisions: [
      { title: "Parity is measured in bytes", description: "Status, headers, and bodies are diffed against real FastAPI responses — compatibility is a test result, not a claim." },
      { title: "The fallback stays real", description: "FASTERAPI_UVICORN=1 returns the app to a Python-driven path, so the Rust host is an acceleration, not a trap." },
      { title: "Rust takes the primitives first", description: "Routing, JSON, scalar validation, rate limiting, and dependency graphs compile in Rust before the serving layer commits to them." },
    ],
    codeTitle: "Change the import, keep the file",
    code: `from fasterapi import FastAPI, Depends, Query

app = FastAPI()

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = Query(None)):
    return {"item_id": item_id, "q": q}

# Runs on the native Rust Hyper/Tokio host
# when the compiled extension is present.
app.serve()`,
  },
  fulmen: {
    visual: "framework-core",
    thesis: "A Python framework where the interpreter only meets your handler — Rust owns everything around it.",
    challenge: "Python frameworks inherit layers that each request must cross before business logic runs: ASGI plumbing, Python routing, Python validation, Python serialization.",
    response: "I designed Fulmen around a Rust spine: tokio + hyper for transport, type hints as the single contract for validation, OpenAPI, and typed clients, deny-by-default CORS and security headers, plugin features, swappable adapters, and a CLI that checks, diagnoses, and fixes projects.",
    outcome: "The project is pre-alpha by design: the skeleton, guardrails, local CI, and architecture decisions are published and tested while the framework core is built — honest about what exists rather than aspirational about what might.",
    proof: [
      { value: "0", label: "ASGI layers in the design" },
      { value: "3.12+", label: "Python target incl. free-threaded" },
      { value: "Local", label: "CI as the only CI/CD" },
      { value: "2", label: "handler shapes: def + async def" },
    ],
    decisions: [
      { title: "Type hints are the contract", description: "Validation, OpenAPI schemas, and generated clients all derive from one annotated signature instead of parallel definitions." },
      { title: "Secure by default", description: "Limits, timeouts, security headers, and deny-by-default CORS are the starting posture — looseness must be chosen, not inherited." },
      { title: "Small core, explicit seams", description: "Features arrive as plugins and infrastructure as adapters, keeping the core explainable and replaceable." },
    ],
    codeTitle: "Typed handlers, Rust underneath",
    code: `from fulmen import Fulmen

app = Fulmen()

@app.get("/health")
def health() -> dict:
    return {"status": "ok"}

@app.post("/items")
async def create_item(item: Item) -> Item:
    # Validation, serialization, and routing
    # happen in Rust — this runs once.
    return await store.save(item)`,
  },
  wasmosaic: {
    visual: "wasm-pixels",
    thesis: "Pixel loops belong in Rust; the browser just needs a typed door into them.",
    challenge: "Browser image processing usually means either slow JavaScript loops or shipping OpenCV.js wholesale — megabytes of runtime for a few operations.",
    response: "I wrote the pixel operations in Rust, compiled them to WebAssembly, and wrapped the module in strict TypeScript that validates inputs and speaks ImageData — with Rust-owned typed matrices for pipelines that should stay inside WASM memory.",
    outcome: "The published 0.1.0 provides four RGBA operations through a small typed API; current development adds core matrix operations and the first OpenCV.js-compatible cvtColor slice on the road to pinned 4.13.0 parity.",
    proof: [
      { value: "0.1.0", label: "published on npm" },
      { value: "4", label: "RGBA operations shipped" },
      { value: "4.13.0", label: "OpenCV.js parity target" },
      { value: "1 call", label: "initOpenCv() per client" },
    ],
    decisions: [
      { title: "Rust owns the loops", description: "Per-pixel work never leaves WASM linear memory — TypeScript marshals ImageData in and out at the boundary." },
      { title: "Matrices stay inside", description: "Rust-owned typed matrices let multi-step pipelines avoid repeated buffer copies until a shared-memory API arrives." },
      { title: "Parity is pinned", description: "The OpenCV.js 4.13.0 binding set is the measured target, followed by typed adapters OpenCV.js does not provide." },
    ],
    codeTitle: "ImageData in, ImageData out",
    code: `import { imageDataFromRgbaImage, initOpenCv, rgbaImageFromImageData } from "wasmosaic";

const cv = await initOpenCv();
const source = context.getImageData(0, 0, canvas.width, canvas.height);
const result = cv.grayscale(rgbaImageFromImageData(source));
context.putImageData(imageDataFromRgbaImage(result), 0, 0);`,
  },
  "bun-nltk": {
    visual: "nlp-surface",
    thesis: "The whole NLTK surface, typed for Bun — with a Rust core and a fidelity gate that reports gaps instead of hiding them.",
    challenge: "JavaScript has no equivalent of NLTK's breadth: tokenizers, taggers, chunkers, parsers, corpora, and model formats accumulated over two decades of Python.",
    response: "I ported the public surface family by family — migrated algorithms run in Rust behind a shared native/WASM core while TypeScript provides the typed API, marshaling, and remaining kernels — and built a compatibility inventory that resolves every discovered nltk.* name.",
    outcome: "All 241 public module surfaces across 46 families import, 2,983 reviewed mappings are tracked to evidence, the Rust crate passes 117 tests, the Bun suite passes 1,251, and the fidelity gate reports 43 of 46 groups green with the unsupported ones named.",
    proof: [
      { value: "241/241", label: "public nltk.* surfaces" },
      { value: "2,983", label: "reviewed compatibility mappings" },
      { value: "1,251", label: "passing Bun checks" },
      { value: "1.09 MB", label: "shipped WASM budget" },
    ],
    decisions: [
      { title: "A surface is not a behavior", description: "Importable shims and partial implementations are explicitly not counted as parity — the checklist diffs names and evidence separately." },
      { title: "Gaps are documented, not dropped", description: "Pickle-bound demos, external binaries, Tkinter GUIs, and unprovisioned corpora are recorded as explicit gaps in the inventory." },
      { title: "Budgets are owner decisions", description: "The WASM byte budget was raised by documented decisions when exact float round-tripping and recovered kernels exceeded the old limit." },
    ],
    codeTitle: "NLTK vocabulary, Bun runtime",
    code: `import { tokenize, tag, stem } from "bun_nltk";

const tokens = tokenize.word("Faster pipelines ship sooner.");
const tagged = tag.pos_tag(tokens);
const roots = tokens.map((t) => stem.porter(t));`,
  },
  "bun-panda": {
    visual: "dataframe-ops",
    thesis: "Dataframes for JavaScript that think like pandas — because the mental model is the hard part.",
    challenge: "JS developers who know pandas must relearn a foreign API shape for every data task, and most TS dataframe tools rename the concepts people already have.",
    response: "I built DataFrame and Series with pandas naming throughout — read_csv/json/parquet/excel, head/tail, iloc/loc, groupby/agg, merge, pivot_table, fillna, sort_values — plus pandas-style option objects like groupby({ dropna, sort }) and value_counts({ sort, ascending }).",
    outcome: "bun_panda gives Bun/JS runtimes a lightweight in-memory dataframe workflow where the code reads like the pandas people already write — familiarity first, then performance work.",
    proof: [
      { value: "40+", label: "pandas-named methods" },
      { value: "4", label: "file readers: csv, json, parquet, excel" },
      { value: "0", label: "new concepts to memorize" },
      { value: "Bun", label: "primary runtime target" },
    ],
    decisions: [
      { title: "Naming is the feature", description: "API familiarity is treated as a first-class requirement — a developer should port a pandas notebook without a translation table." },
      { title: "Options follow pandas", description: "Keyword-style option objects mirror pandas signatures where practical, including groupby({ as_index }) and sort flags." },
      { title: "Lightweight stays honest", description: "The library is in-memory and small by design rather than pretending to be a columnar engine." },
    ],
    codeTitle: "A groupby that needs no translation",
    code: `import { read_csv } from "bun_panda";

const df = read_csv("sales.csv");

const totals = df
  .groupby("region", { dropna: true, sort: true })
  .agg({ revenue: "sum", orders: "count" })
  .sort_values("revenue", { ascending: false });`,
  },
  "trpc-rs-py": {
    visual: "typed-rpc",
    thesis: "Python writes the procedures; TypeScript gets the types live — no codegen step in the inner loop.",
    challenge: "Teams that want a Python backend behind a tRPC frontend normally hand-maintain REST contracts or generate types as a separate build step that drifts.",
    response: "I built a tRPC server for Python frameworks — queries, mutations, batching, and SSE subscriptions with resumable tracked ids — plus trpc-py dev for live type sync into the TypeScript client, REST + OpenAPI output, and trpc-py init starter templates.",
    outcome: "Released at 0.2.0: a FastAPI-first server where the official @trpc/client calls Python procedures with full end-to-end types that update as the Python file is edited; 0.3.0 adds AI streaming helpers.",
    proof: [
      { value: "0.2.0", label: "released version" },
      { value: "3", label: "procedure kinds: query, mutation, subscription" },
      { value: "Live", label: "type sync, no codegen step" },
      { value: "SSE", label: "resumable tracked events" },
    ],
    decisions: [
      { title: "The client stays official", description: "Python procedures answer to the stock @trpc/client protocol — no forked client, no adapter library in the app." },
      { title: "Types follow edits", description: "trpc-py dev watches the Python surface and syncs client types continuously instead of regenerating at build time." },
      { title: "Subscriptions resume", description: "tracked() attaches resumable ids to SSE events so dropped connections pick up where they left off." },
    ],
    codeTitle: "Python procedure, TypeScript call",
    code: `@router.query
def greeting(name: str) -> str:
    return f"Hello {name}!"

# const greeting = await trpc.greeting
#   .query({ name: "Ada" });
#     ^? string`,
  },
  "vision-workbench": {
    visual: "workbench",
    thesis: "Image-AI research deserves a native surface, not a folder of scripts and a notebook tab.",
    challenge: "Dataset audits, evaluation runs, and explainability checks live in disconnected scripts, so results are hard to compare and harder to hand to an agent.",
    response: "I built a native Rust workbench on GPUI: dataset auditing, evaluation runs, XAI inspection, and structured agent-ready outputs inside one desktop-grade window.",
    outcome: "Research operations that used to be a pile of scripts share a fast native interface — reproducible, inspectable, and shaped for both human review and agent consumption.",
    proof: [
      { value: "1", label: "native window, no browser" },
      { value: "GPUI", label: "Rust UI framework" },
      { value: "4", label: "research ops in one surface" },
      { value: "Agents", label: "structured output target" },
    ],
    decisions: [
      { title: "Native beats scripted", description: "A GPUI surface keeps large image datasets and evaluation runs interactive without a browser layer." },
      { title: "Agents are a first-class reader", description: "Outputs are structured so agent workflows can consume audit and evaluation results directly." },
      { title: "Inspection sits beside metrics", description: "XAI views live next to the numbers that produced them rather than in a separate tool." },
    ],
    codeTitle: "One command, an auditable run",
    code: `workbench eval \\
  --dataset audits/crops-v4 \\
  --model swin-tiny-ft \\
  --xai gradcam \\
  --report agent-json`,
  },
  "paper-amigo": {
    visual: "paper-share",
    thesis: "Share a draft like you mean it: a labeled link, a private critique thread, no account walls.",
    challenge: "Circulating research drafts means email attachments with unlabeled feedback and no record of which file a comment actually meant.",
    response: "I built a private library on Next.js 16, React 19, Convex, and UploadThing: PDFs grouped into projects, each project shared through labeled links that recipients open without signing up, with critiques collected beside the file.",
    outcome: "Paper Amigo runs live at paper-amigo.vercel.app — a marketing surface at / and an owner workspace at /library with real upload, share, and critique flows.",
    proof: [
      { value: "0", label: "accounts needed to critique" },
      { value: "1 link", label: "per labeled project share" },
      { value: "Next.js 16", label: "with React 19 + Convex" },
      { value: "Live", label: "paper-amigo.vercel.app" },
    ],
    decisions: [
      { title: "Recipients never register", description: "A labeled link is the entire credential — critique friction is the enemy of critique volume." },
      { title: "Comments anchor to files", description: "Feedback attaches to the project file it refers to instead of a detached thread." },
      { title: "Private by default", description: "The library is for authors sharing drafts, not a public repository — nothing is discoverable without a link." },
    ],
    codeTitle: "Group, label, share, collect",
    code: `const project = await createProject({
  title: "SWNet v2 draft",
  files: ["manuscript.pdf", "supplement.pdf"],
});

const link = await shareLinks.create(project.id, {
  label: "committee-review",
});

// Recipients open link.url and critique beside the PDF — no signup.`,
  },
  zodic: {
    visual: "validation-flow",
    thesis: "Zod’s chainable validation ergonomics, rebuilt for Python with typed parsing and useful nested errors.",
    challenge: "Application boundaries need validation that is concise enough to use everywhere but precise enough to explain exactly where nested input failed.",
    response: "I published a zero-dependency schema library covering primitives, objects, arrays, unions, enums, transformations, dates, custom refinements, and safe parsing.",
    outcome: "Zodic is installable from PyPI, works across web frameworks, and keeps the same schema useful for parsing, defaults, transformations, and structured error output.",
    proof: [
      { value: "0", label: "runtime dependencies" },
      { value: "PyPI", label: "published package" },
      { value: "3.9+", label: "supported Python" },
      { value: "Typed", label: "nested error paths" },
    ],
    decisions: [
      { title: "Schemas compose", description: "Objects, arrays, unions, optional values, defaults, and transforms share one predictable chainable vocabulary." },
      { title: "Failure is structured data", description: "Safe parsing returns success or path-aware issues instead of forcing exception-driven application flow." },
      { title: "Frameworks stay optional", description: "The package does not depend on FastAPI, Django, or Flask, so domain schemas remain portable." },
    ],
    codeTitle: "One schema, parsed output, precise failure",
    code: `import zodic as z

user = z.object({
    "email": z.string().email(),
    "age": z.number().int().min(18),
    "role": z.enum(["admin", "member"]),
})

result = user.safe_parse(payload)
if not result["success"]:
    return {"issues": result["error"].flatten()}`, 
  },
};
