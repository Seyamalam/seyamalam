import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Touhidul Alam Seyam about software engineering, applied AI, open-source, or research collaboration.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact · Open to focused conversations"
        title="Bring a real problem."
        description="The best first message explains what exists, what is not working, and what a successful outcome would change."
      />
      <section className="shell contact-grid page-section">
        <div className="contact-primary">
          <p className="eyebrow">Direct</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <p>
            For web, app, backend, ML/AI, agentic systems, or technical collaboration. I prefer remote opportunities and roles based in Chattogram or Dhaka.
          </p>
          <a className="button button-primary" href={`mailto:${profile.email}?subject=Project%20or%20research%20inquiry`}>Start an email <span aria-hidden="true">↗</span></a>
        </div>
        <aside className="contact-brief" aria-labelledby="brief-title">
          <p className="eyebrow">A useful brief</p>
          <h2 id="brief-title">Four details are enough.</h2>
          <ol>
            <li><span>01</span>What are you trying to make or learn?</li>
            <li><span>02</span>What already exists?</li>
            <li><span>03</span>What constraint matters most?</li>
            <li><span>04</span>What does “done” look like?</li>
          </ol>
        </aside>
      </section>
      <section className="resume-library" id="resumes" aria-labelledby="resumes-title">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ATS-ready resume library</p>
              <h2 id="resumes-title">Choose the version that fits the role.</h2>
            </div>
            <p>Four distinct, single-column designs with role-specific projects, visible competition results, and matching editable DOCX files in the complete pack.</p>
          </div>
          <div className="resume-grid">
            <a href="/resume/software-engineer-ats.pdf" download>
              <span>01 · Editorial</span><strong>Software engineer</strong><b aria-hidden="true">↓</b>
            </a>
            <a href="/resume/ml-research-ats.pdf" download>
              <span>02 · Blueprint</span><strong>ML, AI &amp; agents</strong><b aria-hidden="true">↓</b>
            </a>
            <a href="/resume/full-stack-compact-ats.pdf" download>
              <span>03 · Product sheet</span><strong>Full-stack compact</strong><b aria-hidden="true">↓</b>
            </a>
            <a href="/resume/universal-ats.pdf" download>
              <span>04 · Navy</span><strong>Universal</strong><b aria-hidden="true">↓</b>
            </a>
          </div>
          <a className="text-link resume-pack-link" href="/resume/ats-resume-pack.zip" download>
            Download all PDF + DOCX files <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section className="shell profile-links deferred-section" aria-label="Professional profiles">
        <a href={profile.github}><span>Code</span><strong>GitHub</strong><b aria-hidden="true">↗</b></a>
        <a href={profile.orcid}><span>Research identity</span><strong>ORCID</strong><b aria-hidden="true">↗</b></a>
        <a href={profile.scholar}><span>Citations</span><strong>Google Scholar</strong><b aria-hidden="true">↗</b></a>
        <a href={profile.linkedin}><span>Professional profile</span><strong>LinkedIn</strong><b aria-hidden="true">↗</b></a>
      </section>
    </>
  );
}
