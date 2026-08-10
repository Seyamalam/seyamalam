import Link from "next/link";
import type { Project } from "@/data/site";
import { ProjectTeaser } from "@/components/project-teaser";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
      <div className="project-card-body">
        <div className="project-heading">
          <div>
            <p className="project-status">{project.status}</p>
            <h2>{project.title}</h2>
          </div>
          <Link className="icon-link" href={`/projects/${project.slug}`} aria-label={`Read the ${project.title} case study`}>→</Link>
        </div>
        <div className="project-card-grid">
          <div>
            <p className="project-summary">{project.summary}</p>
            <p className="project-contribution">{project.contribution}</p>
            <ul className="tag-list" aria-label="Technologies">
              {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <div className="project-card-actions">
              <Link className="text-link" href={`/projects/${project.slug}`}>View case study <span aria-hidden="true">→</span></Link>
              <a className="source-link" href={project.href}>Source <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <ProjectTeaser slug={project.slug} />
        </div>
      </div>
    </article>
  );
}
