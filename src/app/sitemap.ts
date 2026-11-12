import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { projects } from "@/data/site";

const routes = ["", "/projects", "/research", "/experience", "/about", "/contact", "/privacy", "/developers"] as const;
const UPDATED = new Date("2026-11-12");

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes: MetadataRoute.Sitemap = routes.map((route, index) => ({
    url: `${siteConfig.origin}${route}`,
    lastModified: UPDATED,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
    images: [`${siteConfig.origin}${route}/opengraph-image`],
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.origin}/projects/${project.slug}`,
    lastModified: UPDATED,
    changeFrequency: "monthly",
    priority: 0.75,
    images: [`${siteConfig.origin}/projects/${project.slug}/opengraph-image`],
  }));

  return [...coreRoutes, ...projectRoutes];
}
