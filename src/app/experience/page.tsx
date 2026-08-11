import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { achievements, experience, leadership } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Software engineering experience, hackathon results, leadership, and education of Touhidul Alam Seyam.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Experience · 2021—Present"
        title="Build, compete, ship, repeat."
        description="Software engineering across agentic systems, web, apps, and backend delivery—tested further through national hackathons and student leadership."
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
      <section className="competition-section deferred-section" aria-labelledby="competition-title">
        <div className="shell competition-heading">
          <p className="eyebrow">Competition ledger</p>
          <h2 id="competition-title">The result matters. The system behind it matters more.</h2>
          <p>Each linked result opens the project, architecture, code model, and repository-sourced product evidence—not a certificate wall.</p>
        </div>
        <div className="shell competition-ledger">
          {achievements.map((achievement, index) => {
            const content = (
              <>
                <span className="competition-index">{String(index + 1).padStart(2, "0")}</span>
                <strong>{achievement.result}</strong>
                <div>
                  <h3>{achievement.title}</h3>
                  <p className="competition-organizer">{achievement.organizer}</p>
                  <p>{achievement.note}</p>
                </div>
                <b className="competition-arrow" aria-hidden="true">{achievement.href ? "↗" : "—"}</b>
              </>
            );

            return achievement.href ? (
              <Link className="competition-row" href={achievement.href} key={achievement.title}>{content}</Link>
            ) : (
              <article className="competition-row" key={achievement.title}>{content}</article>
            );
          })}
        </div>
      </section>
      <section className="leadership-band deferred-section" aria-labelledby="leadership-title">
        <div className="shell leadership-grid">
          <div>
            <p className="eyebrow eyebrow-light">Leadership · {leadership.period}</p>
            <span className="leadership-mark" aria-hidden="true">IT</span>
          </div>
          <div>
            <h2 id="leadership-title">{leadership.role}</h2>
            <p className="leadership-org">{leadership.organization}</p>
            <p>{leadership.note}</p>
          </div>
        </div>
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
