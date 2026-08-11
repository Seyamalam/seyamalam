import { ImageResponse } from "next/og";

export const alt = "Touhidul Alam Seyam — Software Engineer · Web, App, Backend & Agentic AI";
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
          padding: "48px 58px",
          background: "#e7e9e6",
          color: "#101216",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 600, width: 1, display: "flex", background: "#c1c6c1" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 54, height: 54, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #101216", color: "#101216", fontSize: 18, fontWeight: 800 }}>S/</div>
          <div style={{ display: "flex", flexDirection: "column" }}><b style={{ fontSize: 22 }}>Seyam Alam</b><span style={{ marginTop: 3, color: "#4d535b", fontSize: 11, letterSpacing: 2 }}>SYSTEMS / INTELLIGENCE</span></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#ff552e", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 18 }}>Software systems · Agentic AI · Applied ML</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 126, lineHeight: 0.73, letterSpacing: -10, fontWeight: 800 }}>
            <div>SEYAM</div>
            <div style={{ alignSelf: "flex-end", color: "#5048ff" }}>ALAM/</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 18, borderTop: "2px solid #101216", fontSize: 15, color: "#4d535b" }}>
          <div>Chattogram, Bangladesh</div>
          <div style={{ color: "#101216", fontWeight: 700 }}>seyamalam.vercel.app ↗</div>
        </div>
      </div>
    ),
    size,
  );
}
