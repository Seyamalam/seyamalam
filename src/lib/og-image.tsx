import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

const C = {
  bg: "#131416",
  panel: "#1b1d20",
  line: "#2a2d31",
  text: "#e8ebee",
  muted: "#8b96a1",
  accent: "#ff4a1f",
};

type OgFrameProps = {
  kicker: string;
  title: string;
  sub?: string;
  chips?: string[];
  footer?: string;
};

export function ogImage({ kicker, title, sub, chips, footer }: OgFrameProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: C.bg,
          color: C.text,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ height: 8, display: "flex", background: C.accent }} />
        <div style={{ padding: "34px 56px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", background: C.accent, color: C.bg, fontSize: 20, fontWeight: 800 }}>S/</div>
            <span style={{ fontSize: 19, fontWeight: 700, letterSpacing: 0.5 }}>SEYAM ALAM</span>
          </div>
          <span style={{ color: C.muted, fontSize: 13, letterSpacing: 2.4 }}>{kicker}</span>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 56px" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, letterSpacing: -3, lineHeight: 1.02, maxWidth: 1020 }}>
            {title}
          </div>
          {sub ? <div style={{ display: "flex", marginTop: 22, fontSize: 25, color: C.muted, maxWidth: 940, lineHeight: 1.4 }}>{sub}</div> : null}
          {chips && chips.length > 0 ? (
            <div style={{ display: "flex", gap: 10, marginTop: 30 }}>
              {chips.slice(0, 6).map((chip) => (
                <span key={chip} style={{ display: "flex", padding: "8px 16px", border: `1px solid ${C.line}`, borderRadius: 999, background: C.panel, color: C.muted, fontSize: 17 }}>
                  {chip}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div style={{ height: 74, padding: "0 56px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${C.line}` }}>
          <span style={{ color: C.accent, fontSize: 17, fontWeight: 700, letterSpacing: 1.6 }}>{footer ?? "seyamalam.vercel.app"}</span>
          <span style={{ color: C.muted, fontSize: 13, letterSpacing: 2 }}>SOFTWARE · AGENTIC AI · APPLIED ML</span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
