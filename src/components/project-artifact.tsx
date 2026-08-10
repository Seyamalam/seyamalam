import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/data/site";
import type { ProjectDetail } from "@/data/project-details";

export function ProjectArtifact({ project, detail }: { project: Project; detail: ProjectDetail }) {
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
