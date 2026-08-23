import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { projects } from "@/data/site";

const routes = ["", "/projects", "/research", "/experience", "/about", "/contact", "/privacy"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes: MetadataRoute.Sitemap = routes.map((route, index) => ({
    url: `${siteConfig.origin}${route}`,
    lastModified: new Date("2026-08-10"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.origin}/projects/${project.slug}`,
    lastModified: new Date("2026-08-10"),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...coreRoutes, ...projectRoutes];
}
