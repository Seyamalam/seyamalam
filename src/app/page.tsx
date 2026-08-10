import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { profile, projects, publications } from "@/data/site";

const proofPoints = [
  { value: "10", label: "source-backed research works" },
  { value: "209", label: "tracked bun-scikit runtime exports" },
  { value: "2026", label: "latest Springer chapter" },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> {profile.location}</p>
          <h1>I build software that survives contact with the real world.</h1>
          <p className="hero-lede">
            Software engineer and applied AI researcher working where production systems,
            reproducible experiments, and useful interfaces meet.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">See selected work <span aria-hidden="true">→</span></Link>
            <Link className="button button-secondary" href="/research">Read the research</Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait and current focus">
          <div className="coordinate-label coordinate-label-top">22.3569° N</div>
          <div className="portrait-frame">
            <Image
              src="/profile.jpg"
              alt="Touhidul Alam Seyam"
              width={900}
              height={1200}
              sizes="(max-width: 760px) 84vw, 38vw"
              preload
              quality={75}
            />
          </div>
          <div className="signal-card">
            <span>Current signal</span>
            <strong>Fast systems / applied ML</strong>
          </div>
          <div className="coordinate-label coordinate-label-bottom">91.7832° E</div>
        </div>
      </section>

      <section className="proof-rail" aria-label="Evidence at a glance">
        <div className="shell proof-grid">
          <p className="proof-kicker">Evidence, not adjectives</p>
          {proofPoints.map((point) => (
            <div key={point.label} className="proof-point">
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell deferred-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected systems</p>
            <h2>Built to be inspected.</h2>
          </div>
          <p>
            Current work emphasizes explicit contracts, reproducible evaluation, and a small operational surface.
          </p>
        </div>
        <div className="project-list">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        <div className="section-action">
          <Link className="text-link" href="/projects">View all projects <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section research-band deferred-section">
        <div className="shell research-feature">
          <div>
            <p className="eyebrow eyebrow-light">Latest publication</p>
            <p className="research-year">{publications[0].year}</p>
          </div>
          <div>
            <h2>{publications[0].title}</h2>
            <p>{publications[0].venue}</p>
            <a className="button button-light" href={publications[0].href}>Open DOI <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="section shell split-section deferred-section">
        <div>
          <p className="eyebrow">How I work</p>
          <h2>Make the result reproducible, then make it fast.</h2>
        </div>
        <ol className="method-list">
          <li><span>01</span><div><strong>Define the contract</strong><p>Clarify the user, the boundary, and the evidence that would count as success.</p></div></li>
          <li><span>02</span><div><strong>Build the smallest complete path</strong><p>Prefer legible architecture and measured tradeoffs over framework ceremony.</p></div></li>
          <li><span>03</span><div><strong>Prove the behavior</strong><p>Use tests, benchmarks, replayable experiments, and production checks before promotion.</p></div></li>
        </ol>
      </section>
    </>
  );
}
