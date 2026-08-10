export type ProjectVisual =
  | "native-ml"
  | "incident-grid"
  | "operations-portal"
  | "agent-replay"
  | "fold-pipeline"
  | "validation-flow";

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
