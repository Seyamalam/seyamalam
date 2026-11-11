"use client";

import { useEffect, useRef } from "react";

export function LiquidType({ text }: { text: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const dispRef = useRef<SVGFEDisplacementMapElement>(null);
  const energy = useRef(0);
  const raf = useRef(0);
  const last = useRef<{ x: number; t: number } | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const target = textRef.current;
    const disp = dispRef.current;
    if (!root || !target || !disp) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let running = false;
    const tick = () => {
      energy.current *= 0.9;
      const scale = Math.min(34, energy.current * 34);
      disp.setAttribute("scale", String(scale));
      if (scale > 0.4) {
        target.style.filter = "url(#liquid-type-filter)";
        raf.current = requestAnimationFrame(tick);
      } else {
        disp.setAttribute("scale", "0");
        target.style.filter = "";
        running = false;
      }
    };

    const onMove = (event: PointerEvent) => {
      const now = { x: event.clientX, t: performance.now() };
      if (last.current) {
        const dt = Math.max(8, now.t - last.current.t);
        const speed = Math.abs(now.x - last.current.x) / dt;
        energy.current = Math.min(1, energy.current + speed * 0.55);
        if (!running) {
          running = true;
          raf.current = requestAnimationFrame(tick);
        }
      }
      last.current = now;
    };

    const onLeave = () => { last.current = null; };

    root.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="liquid-band" ref={rootRef}>
      <svg className="liquid-defs" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="liquid-type-filter" x="-10%" y="-40%" width="120%" height="180%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.14" numOctaves="1" seed="7" result="noise" />
          <feDisplacementMap ref={dispRef} in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <p className="eyebrow">Interactive · run your cursor through it</p>
      <h2 ref={textRef} className="liquid-text">{text}</h2>
    </div>
  );
}
