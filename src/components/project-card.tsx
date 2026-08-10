import type { Project } from "@/data/site";

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
          <a className="icon-link" href={project.href} aria-label={`Open ${project.title}`}>
            ↗
          </a>
        </div>
        <p className="project-summary">{project.summary}</p>
        <p className="project-contribution">{project.contribution}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </article>
  );
}
