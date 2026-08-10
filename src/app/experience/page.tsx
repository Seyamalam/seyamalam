import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { experience } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional and research experience of Touhidul Alam Seyam across software engineering, applied AI, and full-stack development.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Experience · 2021—Present"
        title="From research bench to production release."
        description="Current software engineering work across agentic systems, web applications, backend services, and production delivery."
      />
      <section className="shell page-section timeline" aria-label="Professional experience">
        {experience.map((item, index) => (
          <article key={`${item.role}-${item.organization}`} className="timeline-item">
            <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-content">
              <h2>{item.role}</h2>
              <p className="timeline-org">{item.organization} · {item.location}</p>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </article>
        ))}
      </section>
      <section className="education-band deferred-section">
        <div className="shell education-grid">
          <div>
            <p className="eyebrow eyebrow-light">Education</p>
            <p className="education-year">2026</p>
          </div>
          <div>
            <h2>B.Sc. (Hons.) in Computer Science and Engineering</h2>
            <p>BGC Trust University Bangladesh · 8th semester · Expected December 2026</p>
            <p className="education-note">Focus: software systems, applied machine learning, computer vision, and research practice.</p>
          </div>
        </div>
      </section>
    </>
  );
}
