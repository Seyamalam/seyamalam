import type { ProjectDetail } from "@/data/project-details";
import type { Project } from "@/data/site";

export function ProjectEvidence({ project, detail }: { project: Project; detail: ProjectDetail }) {
  const before = detail.challenge.split(/[.—]/)[0].trim();
  const after = detail.outcome.split(/[.—]/)[0].trim();
  return (
    <section className="shell evidence-console" aria-label="Project evidence and change summary">
      <div className="evidence-diff">
        <div className="evidence-bar"><span>CHANGESET</span><strong>{project.slug}.system</strong><b>+1 −1</b></div>
        <p className="diff-line diff-remove"><span>−</span>{before}</p>
        <p className="diff-line diff-add"><span>+</span>{after}</p>
      </div>
      <div className="citation-stack">
        <p className="eyebrow">Evidence trail</p>
        <a href={project.href}><sup>1</sup><span><strong>{project.href.includes("github.com") ? "Source repository" : "Live product"}</strong><small>Primary build artifact and implementation evidence</small></span><b>↗</b></a>
        {detail.recognition && <a href={detail.recognition.href}><sup>2</sup><span><strong>{detail.recognition.title}</strong><small>{detail.recognition.kicker}</small></span><b>↗</b></a>}
      </div>
    </section>
  );
}
