import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

const routes = ["", "/projects", "/research", "/experience", "/about", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${siteConfig.origin}${route}`,
    lastModified: new Date("2026-08-10"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
