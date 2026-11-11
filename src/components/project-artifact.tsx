import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/data/site";
import type { ProjectDetail } from "@/data/project-details";

export function ProjectArtifact({ project, detail }: { project: Project; detail: ProjectDetail }) {
  if (detail.visual === "offline-delta") {
    return (
      <div className="artifact artifact-delta">
        <div className="artifact-window-bar"><span /><span /><span /><b>OFFLINE / MESH / RECONCILE</b></div>
        <Image
          src="/project-media/huntrix-delta/architecture.webp"
          alt="Huntrix Delta offline disaster logistics architecture"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 760px) 94vw, 1180px"
        />
        <div className="delta-signal" aria-hidden="true"><span>network</span><b>offline</b><i>field work continues</i></div>
      </div>
    );
  }

  if (detail.visual === "game-arena") {
    return (
      <div className="artifact artifact-game">
        <Image
          src="/project-media/blood-league/gameplay.webp"
          alt="Blood League Kickoff football-combat gameplay"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 760px) 94vw, 1180px"
        />
        <div className="game-score" aria-hidden="true"><span>first GameJam</span><b>05</b><i>place</i></div>
      </div>
    );
  }

  if (detail.visual === "career-map") {
    return (
      <div className="artifact artifact-career">
        <div className="artifact-window-bar"><span /><span /><span /><b>PROFILE → GAP → ROADMAP</b></div>
        <Image
          src="/project-media/careerpath/dashboard.webp"
          alt="CareerPath AI-assisted career dashboard"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 760px) 94vw, 1180px"
        />
        <div className="career-route" aria-hidden="true"><span>skills</span><i>→</i><span>match</span><i>→</i><span>next step</span></div>
      </div>
    );
  }

  if (detail.visual === "async-ops") {
    return (
      <div className="artifact artifact-ops" aria-label="MicroOps asynchronous file delivery flow">
        <div className="ops-flow" aria-hidden="true">
          <div><span>01</span><b>Accept</b><i>202 + job ID</i></div>
          <em>→</em>
          <div><span>02</span><b>Queue</b><i>durable state</i></div>
          <em>→</em>
          <div><span>03</span><b>Worker</b><i>10-120 sec</i></div>
          <em>→</em>
          <div><span>04</span><b>Store</b><i>S3-compatible</i></div>
        </div>
        <div className="ops-status"><span>job_7H3A</span><b>completed</b><i>signed result URL ready</i></div>
      </div>
    );
  }

  if (detail.visual === "incident-grid" && detail.video) {
    return (
      <div className="artifact artifact-incident">
        <div className="artifact-window-bar"><span /><span /><span /><b>SECURITY COMMAND / LIVE</b></div>
        <video autoPlay muted loop playsInline poster={detail.video.poster} aria-label={detail.video.label}>
          <source src={detail.video.src} type="video/webm" />
        </video>
        <div className="incident-beacon" aria-hidden="true"><span />Critical signal ranked</div>
      </div>
    );
  }

  if (detail.visual === "operations-portal") {
    return (
      <div className="artifact artifact-portal">
        <div className="artifact-window-bar"><span /><span /><span /><b>ROLE-AWARE OPERATIONS</b></div>
        <Image
          src="/project-media/asrro/dashboard-overview.webp"
          alt="ASRRO operations dashboard overview"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 760px) 94vw, 1180px"
        />
        <div className="portal-route" aria-hidden="true">public site → application → approval → member</div>
      </div>
    );
  }

  if (detail.visual === "concept-production") {
    return (
      <div className="artifact artifact-concept-production" aria-label="Paris summit design direction becoming the production platform">
        <div className="concept-frame concept-frame-source">
          <span>06 / selected direction</span>
          <Image
            src="/project-media/paris/concept-06.webp"
            alt="Selected Paris Assembly design direction"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 760px) 88vw, 560px"
          />
        </div>
        <div className="concept-transition" aria-hidden="true"><b>10</b><span>live directions</span><i>→</i></div>
        <div className="concept-frame concept-frame-production">
          <span>production / editorial system</span>
          <Image
            src="/project-media/paris/production-light.webp"
            alt="Production Paris summit platform"
            fill
            sizes="(max-width: 760px) 88vw, 560px"
          />
        </div>
      </div>
    );
  }

  if (detail.visual === "native-ml") {
    return (
      <div className="artifact artifact-native" aria-label="Animated bun-scikit training trace and benchmark comparison">
        <div className="artifact-code-head"><span>bun run train.ts</span><b>zig backend ✓</b></div>
        <pre><code>{`const model = new RandomForestClassifier({
  nEstimators: 25,
  maxDepth: 4,
  randomState: 42,
});

model.fit(XTrain, yTrain);`}</code></pre>
        <div className="native-bench" aria-hidden="true">
          <p><span>bun-scikit predict</span><i style={{ "--bar": "94%" } as CSSProperties} /><b>0.020 ms</b></p>
          <p><span>scikit-learn predict</span><i style={{ "--bar": "38%" } as CSSProperties} /><b>0.139 ms</b></p>
        </div>
      </div>
    );
  }

  if (detail.visual === "agent-replay") {
    const cells = ["soil", "wheat", "soil", "sheep", "soil", "market", "wheat", "soil", "barn", "soil", "sheep", "wheat"];
    return (
      <div className="artifact artifact-agent" aria-label="Seat-swapped farming simulation replay">
        <div className="agent-board" aria-hidden="true">
          {cells.map((cell, index) => <span className={`agent-cell agent-cell-${cell}`} key={`${cell}-${index}`} />)}
          <b className="agent-token agent-token-a">A</b><b className="agent-token agent-token-b">B</b>
        </div>
        <div className="agent-trace">
          <p><span>seed</span><b>20260804</b></p>
          <p><span>seat 0</span><b>candidate_v21</b></p>
          <p><span>seat 1</span><b>frozen baseline</b></p>
          <p className="trace-pass"><span>promotion gate</span><b>PASS</b></p>
        </div>
      </div>
    );
  }

  if (detail.visual === "fold-pipeline") {
    const rows = [
      ["Raw baseline", "0.96390", "52%"],
      ["Fold-safe TE", "0.96628", "69%"],
      ["Ratio + XGB", "0.96768", "82%"],
      ["Rank blend", "0.96791", "94%"],
    ];
    return (
      <div className="artifact artifact-fold" aria-label="Out-of-fold AUC experiment progression">
        <div className="fold-diagram" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((fold) => <span key={fold}><i />F{fold + 1}</span>)}
        </div>
        <div className="fold-results">
          {rows.map(([label, value, width]) => (
            <p key={label}><span>{label}</span><i style={{ "--bar": width } as CSSProperties} /><b>{value}</b></p>
          ))}
        </div>
        <small>target encoding fits inside each outer fold</small>
      </div>
    );
  }

  if (detail.visual === "rust-bridge") {
    return (
      <div className="artifact artifact-rust" aria-label="fasterapi request path crossing once from Python into the Rust host">
        <div className="artifact-window-bar"><span /><span /><span /><b>ONE GIL CROSSING</b></div>
        <div className="rust-lanes" aria-hidden="true">
          <div className="rust-lane rust-lane-py">
            <span>python</span>
            <b>@app.get</b>
            <i>your handler</i>
          </div>
          <div className="rust-beam">
            <em>~15µs</em>
            <u />
            <em>req → res</em>
          </div>
          <div className="rust-lane rust-lane-rs">
            <span>rust host</span>
            <b>hyper · tokio</b>
            <i>matchit · json · validate</i>
          </div>
        </div>
        <div className="rust-foot" aria-hidden="true"><p><span>diff suite</span><b>87/87</b></p><p><span>loopback</span><b>13k req/s</b></p><p><span>uvicorn fallback</span><b>ENV=1</b></p></div>
      </div>
    );
  }

  if (detail.visual === "framework-core") {
    return (
      <div className="artifact artifact-core" aria-label="Fulmen layered architecture with a Rust spine">
        <div className="artifact-window-bar"><span /><span /><span /><b>NO ASGI LAYER</b></div>
        <div className="core-stack" aria-hidden="true">
          <div className="core-layer core-py"><span>your code</span><b>def / async def handlers</b><i>type hints = contract</i></div>
          <div className="core-seam"><em>pyo3</em></div>
          <div className="core-layer core-rs"><span>fulmen core · rust</span><b>router · validate · serialize</b><i>security headers · CORS deny-by-default</i></div>
          <div className="core-layer core-io"><span>transport</span><b>hyper + tokio</b><i>limits · timeouts</i></div>
        </div>
      </div>
    );
  }

  if (detail.visual === "wasm-pixels") {
    const before = [214, 96, 34, 240, 180, 61, 22, 130, 255, 88, 156, 43];
    const after = before.map((v) => Math.round(v * 0.299 + 30 * 0.587 + 20 * 0.114));
    return (
      <div className="artifact artifact-wasm" aria-label="WASMosaic grayscale transform on pixel buffers inside WASM memory">
        <div className="artifact-window-bar"><span /><span /><span /><b>RUST OWNS THE LOOPS</b></div>
        <div className="wasm-grid-wrap" aria-hidden="true">
          <div className="wasm-grid">
            <span className="wasm-grid-label">ImageData.in</span>
            {before.map((v, i) => <i key={i} style={{ "--px": v } as CSSProperties} />)}
          </div>
          <div className="wasm-op"><b>cv.grayscale</b><em>wasm · memcpy 1×</em></div>
          <div className="wasm-grid">
            <span className="wasm-grid-label">ImageData.out</span>
            {after.map((v, i) => <i key={i} style={{ "--px": v } as CSSProperties} />)}
          </div>
        </div>
        <div className="rust-foot" aria-hidden="true"><p><span>npm</span><b>0.1.0</b></p><p><span>parity target</span><b>opencv.js 4.13</b></p><p><span>api</span><b>typed</b></p></div>
      </div>
    );
  }

  if (detail.visual === "nlp-surface") {
    const rows = [
      ["tokenize", "complete"], ["stem", "complete"], ["tag", "complete"],
      ["parse", "gated"], ["chunk", "complete"], ["corpus", "documented gap"],
    ];
    return (
      <div className="artifact artifact-nlp" aria-label="bun_nltk module surface checklist and fidelity counts">
        <div className="artifact-window-bar"><span /><span /><span /><b>241/241 SURFACES</b></div>
        <div className="nlp-board" aria-hidden="true">
          {rows.map(([name, state]) => (
            <div className="nlp-row" key={name} data-state={state === "documented gap" ? "gap" : state === "gated" ? "part" : "ok"}>
              <span>nltk.{name}</span><b>{state}</b>
            </div>
          ))}
        </div>
        <div className="rust-foot" aria-hidden="true"><p><span>mappings</span><b>2,983</b></p><p><span>bun tests</span><b>1,251</b></p><p><span>wasm</span><b>1.09 MB</b></p></div>
      </div>
    );
  }

  if (detail.visual === "dataframe-ops") {
    const rows = [["Dhaka", "12"], ["Sylhet", "7"], ["Rajshahi", "4"], ["Dhaka", "9"]];
    const totals = [["Dhaka", "21"], ["Sylhet", "7"], ["Rajshahi", "4"]];
    return (
      <div className="artifact artifact-df" aria-label="bun_panda dataframe groupby aggregation">
        <div className="artifact-window-bar"><span /><span /><span /><b>PANDAS-NAMED</b></div>
        <div className="df-wrap" aria-hidden="true">
          <table className="df-table">
            <thead><tr><th>region</th><th>orders</th></tr></thead>
            <tbody>{rows.map(([r, o], i) => <tr key={i}><td>{r}</td><td>{o}</td></tr>)}</tbody>
          </table>
          <div className="df-arrow"><code>.groupby(&quot;region&quot;).agg()</code><em>→</em></div>
          <table className="df-table df-out">
            <thead><tr><th>region</th><th>Σ orders</th></tr></thead>
            <tbody>{totals.map(([r, o]) => <tr key={r}><td>{r}</td><td>{o}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    );
  }

  if (detail.visual === "typed-rpc") {
    return (
      <div className="artifact artifact-rpc" aria-label="Python tRPC procedure producing a typed TypeScript client call">
        <div className="artifact-window-bar"><span /><span /><span /><b>LIVE TYPE SYNC</b></div>
        <div className="rpc-panes" aria-hidden="true">
          <div className="rpc-pane rpc-py">
            <span>server.py</span>
            <pre>{`@router.query\ndef greeting(name: str) -> str:\n    return f"Hello {name}!"`}</pre>
          </div>
          <div className="rpc-link"><em>trpc-py dev</em><u /></div>
          <div className="rpc-pane rpc-ts">
            <span>client.ts</span>
            <pre>{`const r = await trpc.greeting\n  .query({ name: "Ada" });`}</pre>
            <div className="rpc-hover">const r: <b>string</b></div>
          </div>
        </div>
      </div>
    );
  }

  if (detail.visual === "paper-share") {
    return (
      <div className="artifact artifact-paper" aria-label="Paper Amigo flow from project to labeled link to critique">
        <div className="artifact-window-bar"><span /><span /><span /><b>NO ACCOUNT WALLS</b></div>
        <div className="paper-flow" aria-hidden="true">
          <div className="paper-card"><span>project</span><b>swnet-v2.pdf</b><i>+ supplement</i></div>
          <em>→</em>
          <div className="paper-card paper-card-link"><span>labeled link</span><b>/s/committee-review</b><i>opens without signup</i></div>
          <em>→</em>
          <div className="paper-card"><span>critique</span><b>“table 2 n=?”</b><i>anchored to the file</i></div>
        </div>
        <div className="rust-foot" aria-hidden="true"><p><span>stack</span><b>next 16 · convex</b></p><p><span>uploads</span><b>uploadthing</b></p><p><span>live</span><b>vercel</b></p></div>
      </div>
    );
  }

  if (detail.visual === "workbench") {
    const tools = [["audit", "datasets"], ["eval", "runs"], ["xai", "inspect"], ["agent", "json out"]];
    return (
      <div className="artifact artifact-bench" aria-label="Vision Research Workbench tool grid in a native GPUI window">
        <div className="artifact-window-bar"><span /><span /><span /><b>GPUI · NATIVE</b></div>
        <div className="bench-grid" aria-hidden="true">
          {tools.map(([name, sub]) => (
            <div className="bench-cell" key={name}><span>{sub}</span><b>{name}</b></div>
          ))}
        </div>
        <p className="bench-foot" aria-hidden="true">one window · reproducible runs · agent-ready output</p>
      </div>
    );
  }

  return (
    <div className="artifact artifact-validation" aria-label="Zodic validation flow from payload to typed result">
      <div className="validation-input">
        <span>incoming payload</span>
        <pre>{`{
  "email": "seyam@dev",
  "age": 17,
  "role": "owner"
}`}</pre>
      </div>
      <div className="validation-gate" aria-hidden="true"><b>z</b><span>parse</span></div>
      <div className="validation-output">
        <span>structured issues</span>
        <p><i>email</i> invalid email</p>
        <p><i>age</i> must be ≥ 18</p>
        <p><i>role</i> invalid enum value</p>
      </div>
      <strong>{project.title} · zero dependencies</strong>
    </div>
  );
}
