import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { PageTransition } from "@/components/page-transition";
import { skillGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Touhidul Alam Seyam: software engineer, CSE student, open-source builder, and applied AI researcher in Chattogram, Bangladesh.",
  alternates: { canonical: "/about" },
};

const principles = [
  ["Evidence over theater", "A benchmark, test, DOI, or inspectable repository is more useful than a superlative."],
  ["The interface is part of the system", "A technically correct result still fails when people cannot understand or operate it."],
  ["Constraints improve the work", "Runtime, data, deployment, and maintenance limits belong in the design from the beginning."],
] as const;

export default function AboutPage() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="About · Chattogram, Bangladesh"
        title="Engineering practice, research discipline."
        description="I build software products and applied AI systems, with a bias toward clear contracts, measurable behavior, and work that can be inspected."
      />
      <section className="shell about-story page-section">
        <div className="about-image">
          <Image
            src="/profile.jpg"
            alt="Touhidul Alam Seyam"
            width={900}
            height={1200}
            sizes="(max-width: 760px) 92vw, 36vw"
            quality={75}
          />
          <p>Software engineer · CSE, expected Dec 2026</p>
        </div>
        <div className="about-copy">
          <p className="eyebrow">The short version</p>
          <h2>I like the seam between an experiment and a product.</h2>
          <p>
            My work moves between full-stack application engineering and applied machine learning. The same habit matters in both: define what success means, expose assumptions, and make the result easy to verify.
          </p>
          <p>
            At Agentic Institute and Hello World Communications, I work across agentic systems, application layers, backend services, and production delivery. My publication record covers agricultural diagnostics, health-risk prediction, malware classification, model implementation, and AI-assisted software systems.
          </p>
          <p>
            I am currently in the 8th semester of a B.Sc. (Hons.) in Computer Science and Engineering at BGC Trust University Bangladesh, expected December 2026.
          </p>
        </div>
      </section>

      <section className="section shell deferred-section">
        <div className="section-heading">
          <div><p className="eyebrow">Working principles</p><h2>What stays constant.</h2></div>
        </div>
        <div className="principle-grid">
          {principles.map(([title, description]) => (
            <article key={title}><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="section skills-band deferred-section">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">Capabilities</p><h2>Useful combinations.</h2></div>
            <p>No percentage bars. These are the tools and practices that appear repeatedly in current work.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3>{group.label}</h3>
                <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
