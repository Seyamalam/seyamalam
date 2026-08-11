"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/data/site";

const filters = ["All", "AI + agents", "Systems", "Products", "ML research"] as const;

function belongsTo(project: Project, filter: typeof filters[number]) {
  const text = `${project.title} ${project.summary} ${project.stack.join(" ")}`.toLowerCase();
  if (filter === "All") return true;
  if (filter === "AI + agents") return /agent|ai sdk|intelligence/.test(text);
  if (filter === "Systems") return /go|fastapi|node.js|docker|websocket|offline|esp32/.test(text);
  if (filter === "Products") return /next.js|convex|product|platform|expo/.test(text);
  return /machine-learning|ml pipeline|lightgbm|xgboost|catboost|bun-scikit/.test(text);
}

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<typeof filters[number]>("All");
  const visible = useMemo(() => projects.filter((project) => belongsTo(project, filter)), [filter, projects]);

  return (
    <>
      <div className="morphing-tabs" style={{ "--tab-index": filters.indexOf(filter), "--tab-count": filters.length } as CSSProperties} role="tablist" aria-label="Filter projects">
        <i aria-hidden="true" />
        {filters.map((item) => <button key={item} type="button" role="tab" aria-selected={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <p className="filter-count" aria-live="polite">Showing {String(visible.length).padStart(2, "0")} systems</p>
      <div className="project-list project-list-full">
        {visible.map((project) => <ProjectCard key={project.title} project={project} index={projects.indexOf(project)} />)}
      </div>
    </>
  );
}
