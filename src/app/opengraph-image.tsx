import { ImageResponse } from "next/og";

export const alt = "Touhidul Alam Seyam — Software engineer building systems, agents, and applied ML";
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
          background: "#e7e9e6",
          color: "#101216",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -160, left: 735, width: 18, height: 950, display: "flex", background: "#5048ff", transform: "rotate(24deg)" }} />

        <div style={{ height: 76, padding: "0 44px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #101216" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
            <div style={{ width: 43, height: 43, display: "flex", alignItems: "center", justifyContent: "center", background: "#101216", color: "#e7e9e6", fontSize: 16, fontWeight: 800, letterSpacing: -1 }}>S/</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <b style={{ fontSize: 18, letterSpacing: -1 }}>SEYAM ALAM</b>
              <span style={{ color: "#60666e", fontSize: 9, letterSpacing: 2 }}>SYSTEMS / INTELLIGENCE</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 10, letterSpacing: 1.4 }}>
            <span style={{ width: 8, height: 8, display: "flex", borderRadius: 8, background: "#ff552e" }} />
            CHATTOGRAM · OPEN TO REMOTE
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", position: "relative" }}>
          <div style={{ width: 820, padding: "35px 42px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#ff552e", fontSize: 11, fontWeight: 700, letterSpacing: 2.3 }}>
              <span>SOFTWARE ENGINEER</span><span style={{ color: "#8b9198" }}>/</span><span>AGENTIC SYSTEMS</span><span style={{ color: "#8b9198" }}>/</span><span>APPLIED ML</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 132, fontWeight: 900, letterSpacing: -10, lineHeight: .72 }}>
              <span>SEYAM</span>
              <span style={{ color: "#5048ff" }}>ALAM<span style={{ color: "#ff552e" }}>/</span></span>
            </div>
            <div style={{ width: 680, paddingTop: 13, display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "2px solid #101216" }}>
              <span style={{ width: 460, fontSize: 14, fontWeight: 700 }}>I build software that survives contact with the real world.</span>
              <span style={{ color: "#60666e", fontSize: 9, letterSpacing: 1.2 }}>PORTFOLIO / 2026</span>
            </div>
          </div>

          <div style={{ width: 380, padding: "30px 38px 28px 40px", display: "flex", flexDirection: "column", background: "#101216", color: "#f2f3ef" }}>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#858c96", fontSize: 9, letterSpacing: 1.6 }}><span>EVIDENCE INDEX</span><span>08.2026</span></div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ marginBottom: 8, color: "#ff8063", fontSize: 10, letterSpacing: 1.5 }}>CURRENTLY</span>
              <b style={{ fontSize: 34, letterSpacing: -2, lineHeight: 1 }}>Software<br />Engineer</b>
              <span style={{ marginTop: 12, color: "#adb3bb", fontSize: 13 }}>Agentic Institute</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #4b5057" }}>
              <div style={{ padding: "11px 0", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #4b5057" }}><b style={{ color: "#ff8063", fontSize: 21 }}>11</b><span style={{ alignSelf: "center", color: "#adb3bb", fontSize: 9, letterSpacing: 1.2 }}>SYSTEM CASE STUDIES</span></div>
              <div style={{ padding: "11px 0", display: "flex", justifyContent: "space-between" }}><b style={{ color: "#a9a5ff", fontSize: 21 }}>10</b><span style={{ alignSelf: "center", color: "#adb3bb", fontSize: 9, letterSpacing: 1.2 }}>PUBLISHED WORKS</span></div>
            </div>
          </div>
        </div>

        <div style={{ height: 66, padding: "0 44px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#ff552e", color: "#101216", borderTop: "2px solid #101216" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}><b style={{ fontSize: 12, letterSpacing: 1.8 }}>ATS RESUMES READY</b><span style={{ fontSize: 10 }}>Software · Full-stack · ML/AI · Universal</span></div>
          <b style={{ fontSize: 15 }}>seyamalam.vercel.app ↗</b>
        </div>
      </div>
    ),
    size,
  );
}
