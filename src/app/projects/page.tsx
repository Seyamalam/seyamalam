import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PageTransition } from "@/components/page-transition";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software systems, developer tools, and reproducible machine-learning projects by Touhidul Alam Seyam.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Selected work · 2025—2026"
        title="Open the systems."
        description="Dedicated case studies combining real interfaces, working code, architecture decisions, benchmarks, and reproducible evidence."
      />
      <section className="shell page-section">
        <div className="project-list project-list-full">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </section>
      <section className="shell page-callout deferred-section">
        <p className="eyebrow">Older web work</p>
        <h2>The archive still exists. The shortlist changed.</h2>
        <p>
          Earlier commerce, editorial, academic, and event sites are available on GitHub. This page prioritizes current work with stronger technical depth and reproducible evidence.
        </p>
        <a className="text-link" href="https://github.com/Seyamalam?tab=repositories">Browse the repository archive <span aria-hidden="true">↗</span></a>
      </section>
    </PageTransition>
  );
}
