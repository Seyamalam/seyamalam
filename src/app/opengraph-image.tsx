import { ImageResponse } from "next/og";

export const alt = "Touhidul Alam Seyam — Software Engineer & Applied AI Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#f4f7fa",
          color: "#0c1b2a",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, display: "flex", opacity: 0.13, backgroundImage: "linear-gradient(#174ea6 1px, transparent 1px), linear-gradient(90deg, #174ea6 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "14px 3px 14px 3px", background: "#174ea6", color: "white", fontSize: 15, fontWeight: 700 }}>S/</div>
          <div style={{ fontSize: 24, fontWeight: 700 }}>Touhidul Alam Seyam</div>
        </div>
        <div style={{ maxWidth: 980, display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#174ea6", fontSize: 18, letterSpacing: 3, textTransform: "uppercase", marginBottom: 22 }}>Software engineering · Applied AI</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 0.98, letterSpacing: -4.5, fontWeight: 760 }}>
            <div>Build carefully.</div>
            <div>Measure honestly.</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 18, color: "#425466" }}>
          <div>Chattogram, Bangladesh</div>
          <div style={{ padding: "10px 16px", borderRadius: 10, background: "#e4542f", color: "white", fontWeight: 700 }}>seyamalam.vercel.app</div>
        </div>
      </div>
    ),
    size,
  );
}
