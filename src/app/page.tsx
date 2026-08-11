import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { PageTransition } from "@/components/page-transition";
import { ProjectCard } from "@/components/project-card";
import { profile, projects, publications } from "@/data/site";

const proofPoints = [
  { value: "10", label: "published research works" },
  { value: "209", label: "bun-scikit runtime exports" },
  { value: "04", label: "hackathon podium results" },
] as const;

export default function HomePage() {
  return (
    <PageTransition>
      <section className="studio-hero shell">
        <div className="studio-hero-meta">
          <p><span className="status-dot" /> {profile.location}</p>
          <p>Software engineer · Agentic systems · Applied ML</p>
        </div>

        <div className="hero-name" aria-label="Seyam Alam">
          <span>SEYAM</span>
          <span>ALAM<BrandMark className="hero-mark" /></span>
        </div>

        <div className="hero-dossier">
          <figure className="hero-portrait">
            <Image
              src="/profile.jpg"
              alt="Touhidul Alam Seyam"
              width={900}
              height={1200}
              sizes="(max-width: 760px) 46vw, 260px"
              preload
              quality={75}
            />
            <figcaption><span>Profile / 2026</span><b>22.3569° N<br />91.7832° E</b></figcaption>
          </figure>

          <div className="hero-thesis">
            <p>I build software that survives contact with the real world.</p>
            <span>Production systems, agentic workflows, reproducible experiments, and useful interfaces.</span>
          </div>

          <aside className="hero-now" aria-label="Current work">
            <p>NOW / 08.2026</p>
            <strong>Software Engineer</strong>
            <span>Agentic Institute · building systems around intelligent behavior.</span>
            <Link href="/projects" data-transition="nav-forward">Enter the work <b aria-hidden="true">↗</b></Link>
          </aside>
        </div>

        <div className="hero-command-line" aria-hidden="true">
          <span>web</span><i>/</i><span>backend</span><i>/</i><span>agents</span><i>/</i><span>ml</span><b>↓</b>
        </div>
      </section>

      <section className="proof-rail" aria-label="Evidence at a glance">
        <div className="shell proof-grid">
          <p className="proof-kicker">Evidence index</p>
          {proofPoints.map((point) => (
            <div key={point.label} className="proof-point">
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell selected-work deferred-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected fieldwork</p>
            <h2>Systems with receipts.</h2>
          </div>
          <p>Open the interface, the architecture, the code, and the constraint behind it.</p>
        </div>
        <div className="project-list">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        <div className="section-action">
          <Link className="text-link" href="/projects" data-transition="nav-forward">All eleven systems <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="section research-band deferred-section">
        <div className="shell research-feature">
          <div>
            <p className="eyebrow eyebrow-light">Latest published work</p>
            <p className="research-year">{publications[0].year}</p>
          </div>
          <div>
            <h2>{publications[0].title}</h2>
            <p>{publications[0].venue}</p>
            <a className="text-link research-link" href={publications[0].href}>Read via DOI <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="section shell split-section deferred-section">
        <div>
          <p className="eyebrow">Operating method</p>
          <h2>Make it legible. Then make it fast.</h2>
        </div>
        <ol className="method-list">
          <li><span>Contract</span><div><strong>Define what must be true</strong><p>Name the user, the boundary, and the evidence that counts as success.</p></div></li>
          <li><span>Path</span><div><strong>Build one complete route</strong><p>Prefer visible system behavior over framework ceremony.</p></div></li>
          <li><span>Proof</span><div><strong>Measure before promotion</strong><p>Use tests, benchmarks, replays, and production checks.</p></div></li>
        </ol>
      </section>
    </PageTransition>
  );
}
