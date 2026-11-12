import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PageTransition } from "@/components/page-transition";
import { ProjectExplorer } from "@/components/project-explorer";
import { siteConfig } from "@/config/site.config";
import { breadcrumbSchema, JsonLd, pageMeta, webPageSchema } from "@/lib/seo";
import { projects } from "@/data/site";

const description = "Selected software systems, developer tools, and reproducible machine-learning projects by Touhidul Alam Seyam.";

export const metadata: Metadata = pageMeta({
  title: "Projects",
  description,
  path: "/projects",
  keywords: ["engineering case studies", "developer tools", "Rust TypeScript projects", "open source portfolio"],
});

const projectsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...webPageSchema({ name: "Projects — Touhidul Alam Seyam", path: "/projects", description }),
      "@type": "CollectionPage",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: `${siteConfig.origin}/projects/${project.slug}`,
        })),
      },
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ]),
  ],
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <JsonLd data={projectsSchema} />
      <PageIntro
        eyebrow="Selected work · 2025—2026"
        title="Open the systems."
        description="Dedicated case studies combining real interfaces, working code, architecture decisions, benchmarks, and reproducible evidence."
      />
      <section className="shell page-section">
        <ProjectExplorer projects={projects} />
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
