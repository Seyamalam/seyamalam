import Link from "next/link";
import { ApiTerminal } from "@/components/api-terminal";
import { LiquidType } from "@/components/liquid-type";
import { PageTransition } from "@/components/page-transition";
import { PinnedChapters } from "@/components/pinned-chapters";
import { ProjectCard } from "@/components/project-card";
import { siteConfig } from "@/config/site.config";
import { JsonLd, webPageSchema } from "@/lib/seo";
import { profile, projects, publications } from "@/data/site";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...webPageSchema({ name: siteConfig.title, path: "/", description: siteConfig.description }),
      "@type": "ProfilePage",
      mainEntity: { "@id": `${siteConfig.origin}/#person` },
    },
  ],
};

const proofPoints = [
  { value: String(projects.length), label: "systems with case studies" },
  { value: "10", label: "published research works" },
  { value: "87/87", label: "fasterapi byte-parity tests" },
  { value: "04", label: "hackathon podium results" },
] as const;

const labLinks = [
  { slug: "fasterapi", note: "FastAPI drop-in · Rust Hyper host" },
  { slug: "fulmen", note: "typed Python framework · no ASGI" },
  { slug: "trpc-rs-py", note: "Python tRPC · live types" },
  { slug: "wasmosaic", note: "WASM image ops · opencv parity" },
  { slug: "bun-nltk", note: "NLTK surface · Rust core" },
  { slug: "bun-panda", note: "pandas API · Bun runtime" },
] as const;

export default function HomePage() {
  const featured = projects.slice(0, 4);
  return (
    <PageTransition>
      <JsonLd data={homeSchema} />
      <section className="home-hero shell" id="overview" data-enter>
        <div className="home-hero-copy">
          <p className="eyebrow"><span className="status-dot" />{profile.location} · open to remote</p>
          <h1>Software with a Rust core — and receipts.</h1>
          <p className="hero-lede">
            I&apos;m {profile.name} — a software engineer shipping backend frameworks, developer
            tools, and agentic systems. Everything here links to a test, a benchmark, a DOI, or a repo.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects" data-transition="nav-forward">Open the systems <span aria-hidden="true">↗</span></Link>
            <Link className="button button-ghost" href="/contact" data-transition="nav-swap">Bring a real problem <span aria-hidden="true">→</span></Link>
          </div>
          <p className="hero-proof-line">Currently: Software Engineer · Agentic Institute</p>
        </div>
        <div className="home-hero-art">
          <ApiTerminal />
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

      <section className="section shell selected-work" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected fieldwork</p>
            <h2>Systems with receipts.</h2>
          </div>
          <p>Open the interface, the architecture, the code, and the constraint behind it.</p>
        </div>
        <div className="project-list">
          {featured.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        <div className="section-action">
          <Link className="text-link" href="/projects" data-transition="nav-forward">All {projects.length} systems <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="capability-marquee" aria-label="Technical capabilities">
        <div>{Array.from({ length: 2 }, (_, copy) => <p key={copy} aria-hidden={copy === 1}><span>RUST CORES</span><i>◆</i><span>PYTHON + TYPESCRIPT SURFACES</span><i>◆</i><span>WASM</span><i>◆</i><span>AGENT EVALUATION</span><i>◆</i><span>NEXT.JS 16</span><i>◆</i><span>OFFLINE SYSTEMS</span><i>◆</i></p>)}</div>
      </section>

      <section className="section lab-band" aria-label="Current focus">
        <div className="shell lab-grid">
          <div className="lab-copy">
            <p className="eyebrow">Current direction · 2026</p>
            <h2>One idea, shipped six ways: typed surfaces, Rust underneath.</h2>
            <p>
              The newest work in the index shares one bet — Python and TypeScript keep the
              ergonomics people already know, while Rust, PyO3, and WebAssembly take the hot
              path. Each project ships with parity tests and honest gap lists.
            </p>
            <ul className="lab-links" aria-label="Rust-core projects">
              {labLinks.map((item) => (
                <li key={item.slug}>
                  <Link href={`/projects/${item.slug}`} data-transition="nav-forward">
                    <b>{projects.find((p) => p.slug === item.slug)?.title}</b>
                    <span>{item.note}</span>
                    <i aria-hidden="true">↗</i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lab-diagram" aria-hidden="true">
            <div className="lab-lane lab-lane-surface">
              <span>surface</span>
              <b>Python · TypeScript</b>
              <i>the API people already know</i>
            </div>
            <div className="lab-beam"><em>pyo3 · napi · wasm</em><u /></div>
            <div className="lab-lane lab-lane-core">
              <span>core</span>
              <b>Rust</b>
              <i>routing · pixels · tokenizers · frames</i>
            </div>
            <div className="lab-outcomes">
              <p><b>6</b><span>packages</span></p>
              <p><b>1.3k+</b><span>passing checks</span></p>
              <p><b>0</b><span>silent gaps</span></p>
            </div>
          </div>
        </div>
      </section>

      <PinnedChapters />

      <section className="section research-band" id="research">
        <div className="shell research-feature">
          <div>
            <p className="eyebrow">Latest published work</p>
            <p className="research-year">{publications[0].year}</p>
          </div>
          <div>
            <h2>{publications[0].title}</h2>
            <p>{publications[0].venue}</p>
            <a className="text-link research-link" href={publications[0].href}>Read via DOI <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="liquid-wrap" aria-label="Statement">
        <LiquidType text="RECEIPTS, NOT ADJECTIVES." />
      </section>

      <section className="section shell home-cta">
        <div className="home-cta-inner">
          <p className="eyebrow">Contact</p>
          <h2>Bring a real problem.</h2>
          <p>Web, backend, agents, applied ML — or a system that should be faster than it is.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${profile.email}?subject=Project%20inquiry`}>Start an email <span aria-hidden="true">↗</span></a>
            <Link className="button button-ghost" href="/contact" data-transition="nav-swap">Resumes + profiles <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
