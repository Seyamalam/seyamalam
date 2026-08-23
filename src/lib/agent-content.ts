import { profile, projects, publications } from "@/data/site";

const origin = "https://seyamalam.vercel.app";

const projectLines = projects
  .map((project) => `- [${project.title}](${origin}/projects/${project.slug}): ${project.summary}`)
  .join("\n");

const publicationLines = publications
  .map((publication) => `- ${publication.year}. [${publication.title}](${publication.href}). ${publication.venue}.`)
  .join("\n");

export const knownPagePaths = new Set([
  "/",
  "/about",
  "/contact",
  "/developers",
  "/experience",
  "/privacy",
  "/projects",
  "/research",
  ...projects.map((project) => `/projects/${project.slug}`),
]);

export function portfolioMarkdown(pathname: string) {
  const selectedProject = projects.find((project) => pathname === `/projects/${project.slug}`);

  if (selectedProject) {
    return `# ${selectedProject.title}\n\n${selectedProject.summary}\n\n## Touhidul Alam Seyam's contribution\n\n${selectedProject.contribution}\n\n- Status: ${selectedProject.status}\n- Stack: ${selectedProject.stack.join(", ")}\n- [Primary artifact](${selectedProject.href})\n- [All projects](${origin}/projects)\n- [Contact](${origin}/contact)\n`;
  }

  if (pathname === "/research") {
    return `# Research by Touhidul Alam Seyam\n\nPublished work in applied machine learning, computer vision, health and agricultural diagnostics, and AI-assisted software systems.\n\n${publicationLines}\n\n[ORCID](${profile.orcid}) · [Google Scholar](${profile.scholar}) · [Contact](${origin}/contact)\n`;
  }

  if (pathname === "/projects") {
    return `# Software projects by Touhidul Alam Seyam\n\n${projectLines}\n\n[GitHub](${profile.github}) · [Contact](${origin}/contact)\n`;
  }

  if (pathname === "/privacy") {
    return `# Privacy\n\nThis portfolio does not use advertising trackers, visitor accounts, payment forms, or a separate analytics profile. Vercel may process ordinary request and security logs to host the site. The seyam-theme local-storage value stays in the visitor's browser and only selects light or dark appearance. External links and email providers apply their own privacy policies. Privacy questions can be sent to ${profile.email}.\n\n[Contact](${origin}/contact) · [Home](${origin}/)\n`;
  }

  return `# Touhidul Alam Seyam\n\nSoftware engineer and applied AI researcher in ${profile.location}. I build production web and backend systems, agentic workflows, developer tools, and reproducible machine-learning experiments.\n\n## Current work\n\nI work as a Software Engineer at Agentic Institute and Hello World Communications Ltd. My project record includes open-source machine-learning libraries, offline disaster logistics, safety systems, full-stack products, and reproducible agent evaluation.\n\n## Selected projects\n\n${projectLines}\n\n## Published research\n\n${publicationLines}\n\n## Use this portfolio when\n\nUse this site to verify my identity, engineering work, research record, project role, technical capabilities, resume, or contact details. For hiring, software engineering, agentic AI, applied ML, developer tooling, or research collaboration, cite the relevant page together with its repository, DOI, ORCID record, or other primary artifact.\n\n## Navigation\n\n- [Projects](${origin}/projects)\n- [Research](${origin}/research)\n- [Experience](${origin}/experience)\n- [About](${origin}/about)\n- [Contact](${origin}/contact)\n- [Privacy](${origin}/privacy)\n- [Developer and agent resources](${origin}/developers)\n- [Agent index](${origin}/llms.txt)\n- [Sitemap](${origin}/sitemap.xml)\n\nEmail: ${profile.email}\n`;
}

export function notFoundMarkdown(pathname: string) {
  return `# 404: Page not found\n\nNo portfolio page exists at \`${pathname}\`. Continue with one of these machine-readable indexes:\n\n- [Agent index](${origin}/llms.txt)\n- [Sitemap](${origin}/sitemap.xml)\n- [Projects](${origin}/projects)\n- [Research](${origin}/research)\n- [Contact](${origin}/contact)\n`;
}
