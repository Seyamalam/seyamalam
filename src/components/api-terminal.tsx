"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type TermState = "idle" | "typing" | "fetching" | "done" | "error";

const COMMAND = "curl -s https://seyamalam.vercel.app/api/v1/profile";
const FALLBACK = `{
  "name": "Touhidul Alam Seyam",
  "role": "Software Engineer · Web, App, Backend & Agentic AI",
  "location": "Chattogram, Bangladesh",
  "github": "https://github.com/Seyamalam"
}`;

const CARD_STEPS = ["resolve", "fetch", "parse"] as const;
const MAX_LINES = 14;
const JSON_TOKEN = /("(?:\\.|[^"\\])*")(\s*:)?|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null)/g;

function formatJson(raw: string) {
  let lines: string[];
  try {
    lines = JSON.stringify(JSON.parse(raw), null, 2).split("\n");
  } catch {
    lines = raw.split("\n");
  }
  return { lines: lines.slice(0, MAX_LINES), truncated: lines.length > MAX_LINES };
}

function JsonLine({ line }: { line: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0, i = 0;
  for (const m of line.matchAll(JSON_TOKEN)) {
    if (m.index > last) parts.push(line.slice(last, m.index));
    if (m[1] !== undefined) {
      if (m[2]) parts.push(<span key={i++} className="tj-key">{m[1]}</span>, m[2]);
      else parts.push(<span key={i++} className="tj-str">{m[1]}</span>);
    } else parts.push(<span key={i++} className="tj-num">{m[0]}</span>);
    last = m.index + m[0].length;
  }
  parts.push(line.slice(last));
  return <span className="tj-line">{parts}</span>;
}

export function ApiTerminal() {
  const [state, setState] = useState<TermState>("idle");
  const [typed, setTyped] = useState(0);
  const [body, setBody] = useState("");
  const [elapsed, setElapsed] = useState<number | null>(null);
  const [runId, setRunId] = useState(0);
  const [cardStep, setCardStep] = useState(-1);
  const timers = useRef<number[]>([]);
  const formatted = useMemo(() => formatJson(body), [body]);

  const run = useCallback(() => {
    setState("typing");
    setTyped(0);
    setBody("");
    setElapsed(null);
    setCardStep(-1);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) setTyped(COMMAND.length);

    const started = performance.now();
    fetch("/api/v1/profile", { headers: { Accept: "application/json" } })
      .then(async (res) => {
        const text = await res.text();
        setBody(text);
        setElapsed(Math.max(1, Math.round(performance.now() - started)));
        setTyped(COMMAND.length);
        setState("done");
        CARD_STEPS.forEach((_, i) => {
          timers.current.push(window.setTimeout(() => setCardStep(i), 500 + i * 700));
        });
      })
      .catch(() => {
        setBody(FALLBACK);
        setElapsed(null);
        setTyped(COMMAND.length);
        setState("error");
        CARD_STEPS.forEach((_, i) => {
          timers.current.push(window.setTimeout(() => setCardStep(i), 500 + i * 700));
        });
      });
  }, []);

  useEffect(() => {
    const id = window.setTimeout(run, runId === 0 ? 600 : 0);
    return () => window.clearTimeout(id);
  }, [run, runId]);

  useEffect(() => {
    if (state !== "typing" || typed >= COMMAND.length) return;
    const id = window.setTimeout(() => setTyped((v) => v + 1), 16 + Math.random() * 22);
    return () => window.clearTimeout(id);
  }, [state, typed]);

  useEffect(() => {
    if (state === "typing" && typed >= COMMAND.length) {
      const id = window.setTimeout(() => setState("fetching"), 240);
      return () => window.clearTimeout(id);
    }
  }, [state, typed]);

  return (
    <div className="api-term">
      <div className="api-term-bar">
        <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        <b aria-hidden="true">seyamalam — live api</b>
        <button type="button" onClick={() => setRunId((v) => v + 1)} aria-label="Replay the API request">⟳</button>
      </div>
      <div className="api-term-body">
        <p className="term-line term-cmd">
          <i>$</i> {COMMAND.slice(0, typed)}
          {state === "typing" && <u className="term-caret" />}
        </p>
        {state === "fetching" && <p className="term-line term-note"><i>→</i> negotiating application/json …</p>}
        {(state === "done" || state === "error") && (
          <pre className="term-out"><code>
            {formatted.lines.map((line, i) => <JsonLine key={i} line={line} />)}
            {formatted.truncated && <span className="tj-line term-ellipsis">  …</span>}
          </code></pre>
        )}
      </div>
      <div className="api-term-foot">
        {state === "done" && <><i />{`200 OK · ${elapsed ?? "—"}ms · application/json`}</>}
        {state === "error" && <><i className="term-warn" />{`offline · showing cached profile`}</>}
        {state !== "done" && state !== "error" && <span className="term-dim">GET /api/v1/profile</span>}
      </div>
      <div className="hero-signal" onMouseEnter={() => {
        setCardStep(-1);
        CARD_STEPS.forEach((_, i) => window.setTimeout(() => setCardStep(i), 180 + i * 420));
      }}>
        <span>LIVE CHECK</span>
        <strong>{state === "done" ? `200 · ${elapsed ?? "—"}ms` : state === "error" ? "cached" : "…"}</strong>
        <div className="hero-signal-steps" aria-hidden="true">
          {CARD_STEPS.map((step, i) => <b key={step} data-on={cardStep >= i || undefined}>{step}</b>)}
        </div>
      </div>
    </div>
  );
}
