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
