import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectArtifact } from "@/components/project-artifact";
import { siteConfig } from "@/config/site.config";
import { projectDetails } from "@/data/project-details";
import { profile, projects } from "@/data/site";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} case study`,
    description: `${project.summary} ${project.contribution}`,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — engineering case study`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  const detail = projectDetails[slug];

  if (!project || !detail) notFound();

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.summary,
    url: `${siteConfig.origin}/projects/${project.slug}`,
    codeRepository: project.href,
    author: { "@type": "Person", name: profile.name, url: siteConfig.origin },
    programmingLanguage: project.stack,
  };

  return (
    <article className={`case-study case-study-${detail.visual}`}>
      <header className="shell case-hero">
        <nav className="case-breadcrumb" aria-label="Breadcrumb">
          <Link href="/projects">Projects</Link><span aria-hidden="true">/</span><span>{project.title}</span>
        </nav>
        <div className="case-title-grid">
          <div>
            <p className="eyebrow">{project.status}</p>
            <h1>{project.title}</h1>
          </div>
          <div className="case-hero-copy">
            <p>{detail.thesis}</p>
            <div className="case-actions">
              <a className="button button-primary" href={project.href}>View source <span aria-hidden="true">↗</span></a>
              <Link className="button button-secondary" href="#case-notes">Read the build notes <span aria-hidden="true">↓</span></Link>
            </div>
          </div>
        </div>
        <ul className="case-stack" aria-label="Technology stack">
          {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </header>

      <section className="shell case-artifact-wrap" aria-label={`${project.title} visual demonstration`}>
        <ProjectArtifact project={project} detail={detail} />
      </section>

      <section className="case-proof" aria-label="Project evidence">
        <div className="shell case-proof-grid">
          {detail.proof.map((item) => (
            <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
          ))}
        </div>
      </section>

      {detail.recognition && (
        <section className="shell recognition-card">
          <div>
            <p className="eyebrow">{detail.recognition.kicker}</p>
            <h2>{detail.recognition.title}</h2>
          </div>
          <div>
            <p>{detail.recognition.note}</p>
            <a className="text-link" href={detail.recognition.href}>{detail.recognition.linkLabel ?? "Watch the event post"} <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      )}

      <section className="shell case-notes" id="case-notes">
        <p className="case-notes-label">Build notes / {String(projectIndex + 1).padStart(2, "0")}</p>
        <div className="case-story">
          <section><p className="eyebrow">The challenge</p><h2>What had to be true.</h2><p>{detail.challenge}</p></section>
          <section><p className="eyebrow">The response</p><h2>How I shaped it.</h2><p>{detail.response}</p></section>
          <section><p className="eyebrow">The outcome</p><h2>What exists now.</h2><p>{detail.outcome}</p></section>
        </div>
      </section>

      <section className="case-decisions">
        <div className="shell case-decisions-grid">
          <div className="case-decisions-heading">
            <p className="eyebrow">Engineering decisions</p>
            <h2>The choices behind the visible result.</h2>
          </div>
          <ol>
            {detail.decisions.map((decision, index) => (
              <li key={decision.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{decision.title}</h3><p>{decision.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell code-evidence">
        <div className="code-evidence-copy">
          <p className="eyebrow">Working artifact</p>
          <h2>{detail.codeTitle}</h2>
          <p>This is the project’s actual programming model, reduced to the smallest useful example.</p>
        </div>
        <div className="code-window">
          <div className="artifact-window-bar"><span /><span /><span /><b>{project.slug}</b></div>
          <pre><code>{detail.code}</code></pre>
        </div>
      </section>

      {detail.media && (
        <section className="shell case-gallery" aria-labelledby="gallery-title">
          <div className="case-gallery-heading">
            <p className="eyebrow">Interface evidence</p>
            <h2 id="gallery-title">The system in use.</h2>
          </div>
          <div className="case-gallery-grid">
            {detail.media.map((media, index) => (
              <figure className={index === 0 ? "gallery-feature" : ""} key={media.src}>
                <div className="gallery-image">
                  <Image src={media.src} alt={media.alt} width={media.width} height={media.height} sizes={index === 0 ? "(max-width: 760px) 94vw, 1180px" : "(max-width: 760px) 94vw, 570px"} />
                </div>
                <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{media.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <footer className="shell next-project">
        <p className="eyebrow">Next case study</p>
        <Link href={`/projects/${nextProject.slug}`}><span>{nextProject.status}</span><strong>{nextProject.title}</strong><b aria-hidden="true">→</b></Link>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </article>
  );
}
