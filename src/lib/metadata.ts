import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

interface PageMetadataProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage,
}: PageMetadataProps): Metadata {
  const url = `${siteConfig.origin}${path}`;
  const finalOgImage = ogImage || siteConfig.og;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: finalOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: "@seyamalam",
      creator: "@seyamalam",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: {
        url: finalOgImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    },
    alternates: {
      canonical: url,
    },
  };
}

// Pre-defined metadata for common pages
export const pageMetadata = {
  about: generatePageMetadata({
    title: "About Touhidul Alam Seyam",
    description: "Learn about Touhidul Alam Seyam, a passionate Full Stack Developer & Research Scientist from Bangladesh with 8+ publications in IEEE and Springer journals. Expert in AI/ML, web development, and research.",
    path: "/about",
    keywords: [
      "about seyam",
      "touhidul alam seyam biography",
      "bangladesh developer profile",
      "research scientist biography",
      "ieee author profile",
      "springer journal author",
      "computer vision researcher",
      "machine learning expert",
      "full stack developer story",
      "seyamalam about",
    ],
  }),

  projects: generatePageMetadata({
    title: "Projects by Touhidul Alam Seyam",
    description: "Explore innovative projects by Touhidul Alam Seyam including e-commerce platforms, AI applications, research projects, and full-stack web applications built with React, Next.js, and modern technologies.",
    path: "/projects",
    keywords: [
      "seyam projects",
      "touhidul alam seyam portfolio",
      "react projects",
      "nextjs applications",
      "ai projects",
      "machine learning applications",
      "web development portfolio",
      "full stack projects",
      "javascript projects",
      "typescript applications",
    ],
  }),

  research: generatePageMetadata({
    title: "Research Publications by Touhidul Alam Seyam",
    description: "Discover research publications by Touhidul Alam Seyam in AI, machine learning, computer vision, healthcare AI, and agricultural technology. Published in IEEE conferences and Springer journals.",
    path: "/research",
    keywords: [
      "seyam research",
      "touhidul alam seyam publications",
      "ieee publications",
      "springer journal papers",
      "computer vision research",
      "machine learning papers",
      "agricultural ai research",
      "healthcare ai publications",
      "plant disease detection research",
      "medical ai papers",
      "research scientist publications",
    ],
  }),

  experience: generatePageMetadata({
    title: "Professional Experience - Touhidul Alam Seyam",
    description: "Professional experience of Touhidul Alam Seyam as Software Engineer at Hello World Communications Ltd, freelance developer, and AI researcher with expertise in full-stack development and machine learning.",
    path: "/experience",
    keywords: [
      "seyam experience",
      "touhidul alam seyam career",
      "software engineer experience",
      "full stack developer experience",
      "freelance developer",
      "remote developer",
      "ai developer experience",
      "backend developer",
      "react developer experience",
      "nodejs developer",
    ],
  }),

  contact: generatePageMetadata({
    title: "Contact Touhidul Alam Seyam",
    description: "Get in touch with Touhidul Alam Seyam for collaboration, freelance projects, research opportunities, or software development inquiries. Available for remote work and research partnerships.",
    path: "/contact",
    keywords: [
      "contact seyam",
      "touhidul alam seyam contact",
      "hire seyam",
      "freelance developer contact",
      "research collaboration",
      "software development services",
      "ai consultant",
      "full stack developer hire",
      "remote developer contact",
      "bangladesh developer contact",
    ],
  }),
}; 