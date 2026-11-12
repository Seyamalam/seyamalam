import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { profile } from "@/data/site";

type PageMetaOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  keywords?: string[];
  type?: "website" | "article" | "profile";
};

export function pageMeta({ title, description, path, keywords, type = "website" }: PageMetaOptions): Metadata {
  const url = `${siteConfig.origin}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    keywords: keywords ? [...siteConfig.keywords, ...keywords] : [...siteConfig.keywords],
    alternates: { canonical: path },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.origin}${item.path}`,
    })),
  };
}

export function webPageSchema({ name, path, description }: { name: string; path: string; description: string }) {
  return {
    "@type": "WebPage",
    "@id": `${siteConfig.origin}${path}#webpage`,
    url: `${siteConfig.origin}${path}`,
    name,
    description,
    isPartOf: { "@id": `${siteConfig.origin}/#website` },
    about: { "@id": `${siteConfig.origin}/#person` },
    inLanguage: "en",
  };
}

export const siteGraphExtras = {
  website: {
    "@type": "WebSite",
    "@id": `${siteConfig.origin}/#website`,
    url: siteConfig.origin,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.origin}/#person` },
    inLanguage: "en",
  },
  person: { "@id": `${siteConfig.origin}/#person` },
};

export function authorRef() {
  return { "@id": `${siteConfig.origin}/#person`, name: profile.name };
}
