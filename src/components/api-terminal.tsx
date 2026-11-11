"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type TermState = "idle" | "typing" | "fetching" | "done" | "error";

const COMMAND = "curl -s https://seyamalam.vercel.app/api/v1/profile";
const FALLBACK = `{
  "name": "Touhidul Alam Seyam",
  "role": "Software Engineer · Web, App, Backend & Agentic AI",
  "location": "Chattogram, Bangladesh",
  "github": "https://github.com/Seyamalam"
}`;

const CARD_STEPS = ["resolve", "fetch", "parse"] as const;

export function ApiTerminal() {
  const [state, setState] = useState<TermState>("idle");
  const [typed, setTyped] = useState(0);
  const [body, setBody] = useState("");
  const [elapsed, setElapsed] = useState<number | null>(null);
  const [runId, setRunId] = useState(0);
  const [cardStep, setCardStep] = useState(-1);
  const timers = useRef<number[]>([]);

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
        setBody(text.length > 720 ? `${text.slice(0, 720)}\n  …` : text);
        setElapsed(Math.max(1, Math.round(performance.now() - started)));
        setState("done");
        CARD_STEPS.forEach((_, i) => {
          timers.current.push(window.setTimeout(() => setCardStep(i), 500 + i * 700));
        });
      })
      .catch(() => {
        setBody(FALLBACK);
        setElapsed(null);
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
          <pre className="term-out"><code>{body}</code></pre>
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
