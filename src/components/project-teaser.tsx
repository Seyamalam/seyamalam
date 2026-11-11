import Image from "next/image";
import type { CSSProperties } from "react";

type ProjectTeaserProps = { slug: string };
type MediaPreviewProps = {
  src: string;
  alt: string;
  eyebrow: string;
  caption: string;
  fit?: "cover" | "contain";
};

const mediaPreviews: Record<string, MediaPreviewProps> = {
  robofusion: {
    src: "/project-media/robofusion/dashboard-critical.webp",
    alt: "RoboFusion incident command dashboard ranking critical events",
    eyebrow: "Command dashboard",
    caption: "Live incident ranking",
  },
  "huntrix-delta": {
    src: "/project-media/huntrix-delta/architecture.webp",
    alt: "Huntrix Delta offline-first mesh synchronization architecture",
    eyebrow: "System architecture",
    caption: "Offline → mesh → reconcile",
    fit: "contain",
  },
  "blood-league-kickoff": {
    src: "/project-media/blood-league/gameplay.webp",
    alt: "Blood League Kickoff football combat gameplay",
    eyebrow: "Playable build",
    caption: "Football-combat loop",
  },
  careerpath: {
    src: "/project-media/careerpath/dashboard.webp",
    alt: "CareerPath skill dashboard and job readiness interface",
    eyebrow: "Product surface",
    caption: "Profile → match → roadmap",
  },
  "asrro-portal": {
    src: "/project-media/asrro/dashboard-overview.webp",
    alt: "ASRRO organization operations dashboard",
    eyebrow: "Operations workspace",
    caption: "Role-aware workflows",
  },
  "paris-summit-platform": {
    src: "/project-media/paris/production-light.webp",
    alt: "Production interface for the Paris Summit platform",
    eyebrow: "Production system",
    caption: "10 directions → one launch",
  },
};

function MediaPreview({ src, alt, eyebrow, caption, fit = "cover" }: MediaPreviewProps) {
  return (
    <div className={`project-preview project-preview-media preview-fit-${fit}`}>
      <div className="preview-browser-bar" aria-hidden="true">
        <span /><span /><span /><small>working build</small>
      </div>
      <div className="preview-image-wrap">
        <Image src={src} alt={alt} fill sizes="(max-width: 920px) calc(100vw - 48px), 430px" />
      </div>
      <div className="preview-caption">
        <span>{eyebrow}</span>
        <strong>{caption}</strong>
      </div>
    </div>
  );
}

function BunScikitPreview() {
  return (
    <div className="project-preview project-preview-code preview-bun" role="img" aria-label="Bun-scikit Random Forest code sample with passing compatibility gates">
      <div className="preview-code-header"><span>random-forest.ts</span><strong>209 exports</strong></div>
      <pre><code><span className="code-muted">01</span> <b>const</b> model = <b>new</b> RandomForestClassifier({"{"}{"\n"}<span className="code-muted">02</span> {"  "}nEstimators: <em>25</em>, maxDepth: <em>4</em>,{"\n"}<span className="code-muted">03</span> {"  "}randomState: <em>42</em>,{"\n"}<span className="code-muted">04</span> {"}"});{"\n"}<span className="code-muted">05</span> model.fit(XTrain, yTrain);</code></pre>
      <div className="preview-proof-row"><span><i />34 / 34 snapshot gates</span><strong>PASS</strong></div>
    </div>
  );
}

function MicroOpsPreview() {
  return (
    <div className="project-preview project-preview-code preview-microops" role="img" aria-label="MicroOps asynchronous download job execution trace">
      <div className="preview-code-header"><span>job_7H3A.trace</span><strong>ASYNC</strong></div>
      <ol className="preview-trace">
        <li><time>12:04:01</time><span>POST /downloads</span><b>202</b></li>
        <li><time>12:04:01</time><span>queue.enqueue(job)</span><b>QUEUED</b></li>
        <li><time>12:04:03</time><span>worker.fetch(source)</span><b>RUNNING</b></li>
        <li><time>12:04:19</time><span>s3.putObject(result)</span><b>STORED</b></li>
      </ol>
      <div className="preview-proof-row"><span><i />API returned before processing</span><strong>18 ms</strong></div>
    </div>
  );
}

function KaggriculturePreview() {
  return (
    <div className="project-preview project-preview-code preview-kaggriculture" role="img" aria-label="Kaggriculture deterministic candidate promotion manifest">
      <div className="preview-code-header"><span>promotion.manifest</span><strong>REPLAYABLE</strong></div>
      <div className="manifest-grid">
        <div><span>seed</span><b>20260804</b></div><div><span>candidate</span><b>v21</b></div>
        <div><span>seat 0</span><b>candidate</b></div><div><span>seat 1</span><b>baseline</b></div>
      </div>
      <div className="manifest-hash"><span>sha256</span><code>7f2c…91ad</code></div>
      <div className="preview-proof-row"><span><i />paired-seat evaluation</span><strong>PROMOTE</strong></div>
    </div>
  );
}

function FoldSafePreview() {
  const results = [["baseline", "0.96390", "68%"], ["fold-safe TE", "0.96628", "78%"], ["ratio + XGB", "0.96768", "87%"], ["rank blend", "0.96791", "92%"]];
  return (
    <div className="project-preview project-preview-code preview-fold-safe" role="img" aria-label="Fold-safe machine learning experiment with improving validation AUC scores">
      <div className="preview-code-header"><span>oof_evaluation.csv</span><strong>AUC ↑</strong></div>
      <div className="score-table">
        {results.map(([name, score, width]) => <div className="score-row" key={name}><span>{name}</span><i><u style={{ width }} /></i><b>{score}</b></div>)}
      </div>
      <div className="preview-proof-row"><span><i />public leaderboard</span><strong>0.96919</strong></div>
    </div>
  );
}

function ZodicPreview() {
  return (
    <div className="project-preview project-preview-code preview-zodic" role="img" aria-label="Zodic Python schema validation code and path-aware error output">
      <div className="preview-code-header"><span>schema.py</span><strong>0 deps</strong></div>
      <pre><code>user = z.object({"{"}{"\n"}{"  "}<b>&quot;email&quot;</b>: z.string().email(),{"\n"}{"  "}<b>&quot;age&quot;</b>: z.number().int().min(<em>18</em>),{"\n"}{"}"}){"\n"}result = user.safe_parse(payload)</code></pre>
      <div className="validation-error"><span>issues[0].path</span><strong>user.age</strong><b>Expected ≥ 18</b></div>
    </div>
  );
}

function FasterApiPreview() {
  return (
    <div className="project-preview project-preview-code preview-rust" role="img" aria-label="fasterapi Rust host serving a FastAPI app with byte-parity tests">
      <div className="preview-code-header"><span>serve.py</span><strong>rust host</strong></div>
      <pre><code><span className="code-muted">01</span> <b>from</b> fasterapi <b>import</b> FastAPI{"\n"}<span className="code-muted">02</span> app = FastAPI(){"\n"}<span className="code-muted">03</span> app.serve() <em># hyper/tokio</em></code></pre>
      <div className="preview-proof-row"><span><i />87/87 byte-parity</span><strong>~15µs</strong></div>
    </div>
  );
}

function FulmenPreview() {
  return (
    <div className="project-preview project-preview-code preview-layers" role="img" aria-label="Fulmen layered architecture from Python handlers to Rust transport">
      <div className="preview-code-header"><span>layers</span><strong>no asgi</strong></div>
      <div className="preview-layers-list">
        <div><span>handlers</span><b>def · async def</b></div>
        <div><span>fulmen core</span><b>rust</b></div>
        <div><span>transport</span><b>hyper+tokio</b></div>
      </div>
      <div className="preview-proof-row"><span><i />type hints = contract</span><strong>3.12+</strong></div>
    </div>
  );
}

function WasmosaicPreview() {
  return (
    <div className="project-preview project-preview-code preview-wasm" role="img" aria-label="WASMosaic pixel buffer transform through WebAssembly">
      <div className="preview-code-header"><span>pixels</span><strong>wasm</strong></div>
      <div className="preview-pixel-strip" aria-hidden="true">
        {[214, 96, 34, 240, 180, 61, 22, 130].map((v, i) => <i key={i} style={{ "--px": v } as CSSProperties} />)}
        <em>→</em>
        {[214, 96, 34, 240, 180, 61, 22, 130].map((v, i) => <i key={`g${i}`} className="px-gray" style={{ "--px": Math.round(v * 0.35 + 30) } as CSSProperties} />)}
      </div>
      <div className="preview-proof-row"><span><i />cv.grayscale</span><strong>0.1.0</strong></div>
    </div>
  );
}

function BunNltkPreview() {
  return (
    <div className="project-preview project-preview-code preview-nlp" role="img" aria-label="bun_nltk module surface checklist">
      <div className="preview-code-header"><span>nltk.*</span><strong>241/241</strong></div>
      <div className="preview-nlp-list">
        <p><span>tokenize</span><b>✓</b></p><p><span>stem</span><b>✓</b></p>
        <p><span>tag</span><b>✓</b></p><p><span>corpus</span><b className="nlp-gap">doc’d gap</b></p>
      </div>
      <div className="preview-proof-row"><span><i />1,251 bun checks</span><strong>PASS</strong></div>
    </div>
  );
}

function BunPandaPreview() {
  return (
    <div className="project-preview project-preview-code preview-df" role="img" aria-label="bun_panda groupby aggregation code">
      <div className="preview-code-header"><span>frame.ts</span><strong>pandas-api</strong></div>
      <pre><code>df.<b>groupby</b>(<em>&quot;region&quot;</em>){"\n"}{"  "}.agg({"{"} revenue: <em>&quot;sum&quot;</em> {"}"}){"\n"}{"  "}.sort_values(<em>&quot;revenue&quot;</em>)</code></pre>
      <div className="preview-proof-row"><span><i />read_csv → to_excel</span><strong>40+ ops</strong></div>
    </div>
  );
}

function TrpcPyPreview() {
  return (
    <div className="project-preview project-preview-code preview-rpc" role="img" aria-label="Python procedure called through a typed TypeScript client">
      <div className="preview-code-header"><span>py → ts</span><strong>0.2.0</strong></div>
      <pre><code>@router.query{"\n"}<b>def</b> greeting(name: <em>str</em>):{"\n"}<span className="code-muted"># trpc.greeting.query() → string</span></code></pre>
      <div className="preview-proof-row"><span><i />live type sync</span><strong>SSE ✓</strong></div>
    </div>
  );
}

function PaperAmigoPreview() {
  return (
    <div className="project-preview project-preview-code preview-paper" role="img" aria-label="Paper Amigo labeled share link flow">
      <div className="preview-code-header"><span>share</span><strong>live</strong></div>
      <div className="preview-paper-flow">
        <span>draft.pdf</span><em>→</em><span>/s/committee</span><em>→</em><span>critique ✓</span>
      </div>
      <div className="preview-proof-row"><span><i />no recipient accounts</span><strong>vercel</strong></div>
    </div>
  );
}

function WorkbenchPreview() {
  return (
    <div className="project-preview project-preview-code preview-bench" role="img" aria-label="Vision workbench tool grid">
      <div className="preview-code-header"><span>workbench</span><strong>gpui</strong></div>
      <div className="preview-bench-grid">
        <b>audit</b><b>eval</b><b>xai</b><b>agent</b>
      </div>
      <div className="preview-proof-row"><span><i />native window</span><strong>rust</strong></div>
    </div>
  );
}

export function ProjectTeaser({ slug }: ProjectTeaserProps) {
  const media = mediaPreviews[slug];
  if (media) return <MediaPreview {...media} />;
  if (slug === "bun-scikit") return <BunScikitPreview />;
  if (slug === "microops") return <MicroOpsPreview />;
  if (slug === "kaggriculture-agent") return <KaggriculturePreview />;
  if (slug === "fold-safe-ml-pipelines") return <FoldSafePreview />;
  if (slug === "zodic") return <ZodicPreview />;
  if (slug === "fasterapi") return <FasterApiPreview />;
  if (slug === "fulmen") return <FulmenPreview />;
  if (slug === "wasmosaic") return <WasmosaicPreview />;
  if (slug === "bun-nltk") return <BunNltkPreview />;
  if (slug === "bun-panda") return <BunPandaPreview />;
  if (slug === "trpc-rs-py") return <TrpcPyPreview />;
  if (slug === "paper-amigo") return <PaperAmigoPreview />;
  if (slug === "vision-workbench") return <WorkbenchPreview />;
  return null;
}
