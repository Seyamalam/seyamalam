"use client";

import { useEffect, useRef, useState } from "react";

const CHAPTERS = [
  {
    step: "01",
    title: "Define what must be true",
    label: "Contract",
    body: "Name the user, the boundary, and the evidence that counts as success before a line of code is justified.",
    frame: (
      <div className="chapter-frame chapter-frame-contract" aria-hidden="true">
        <div className="frame-doc">
          <span>contract.md</span>
          <p><i>✓</i> response shape pinned</p>
          <p><i>✓</i> byte-parity suite defined</p>
          <p><i>✓</i> fallback path named</p>
          <p className="frame-dim"><i>·</i> implementation after this</p>
        </div>
      </div>
    ),
  },
  {
    step: "02",
    title: "Build one complete route",
    label: "Path",
    body: "Prefer visible system behavior over framework ceremony — one route end to end proves more than ten scaffolds.",
    frame: (
      <div className="chapter-frame chapter-frame-path" aria-hidden="true">
        <div className="frame-flow">
          <div><span>req</span><b>accept</b></div><em>→</em>
          <div><span>rust</span><b>route</b></div><em>→</em>
          <div><span>core</span><b>work</b></div><em>→</em>
          <div><span>res</span><b>verify</b></div>
        </div>
        <p className="frame-foot">one lane, no dead ends</p>
      </div>
    ),
  },
  {
    step: "03",
    title: "Measure before promotion",
    label: "Proof",
    body: "Tests, benchmarks, replays, and production checks — a result you can re-run beats a result you can quote.",
    frame: (
      <div className="chapter-frame chapter-frame-proof" aria-hidden="true">
        <div className="frame-test">
          <p><span>parity.rs</span><b>87/87</b></p>
          <p><span>bun tests</span><b>1,251</b></p>
          <p><span>diff suite</span><b>0 drift</b></p>
          <p className="frame-pass"><span>gate</span><b>PROMOTE</b></p>
        </div>
      </div>
    ),
  },
];

export function PinnedChapters() {
  const wrapRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) return;
        const progress = Math.min(1, Math.max(0, -rect.top / total));
        setActive(Math.min(CHAPTERS.length - 1, Math.floor(progress * CHAPTERS.length)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="chapters" ref={wrapRef} aria-label="Operating method">
      <div className="chapters-sticky shell">
        <div className="chapters-copy">
          <p className="eyebrow">Operating method</p>
          <h2>Make it legible.<br />Then make it fast.</h2>
          <ol>
            {CHAPTERS.map((chapter, index) => (
              <li key={chapter.step} data-active={index === active || undefined}>
                <span>{chapter.step}</span>
                <div>
                  <strong>{chapter.title}</strong>
                  <p>{chapter.body}</p>
                </div>
                <div className="chapter-mobile-frame" aria-hidden="true">{chapter.frame}</div>
              </li>
            ))}
          </ol>
        </div>
        <div className="chapters-stage" aria-hidden="true">
          <div className="chapters-stage-bar"><span>method/{CHAPTERS[active].label.toLowerCase()}</span><b>{active + 1} / {CHAPTERS.length}</b></div>
          {CHAPTERS.map((chapter, index) => (
            <div className="chapters-slide" key={chapter.step} data-active={index === active || undefined}>
              {chapter.frame}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
