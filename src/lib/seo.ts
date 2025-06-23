import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  path?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title = siteConfig.title,
    description = siteConfig.description,
    keywords = siteConfig.keywords,
    image = siteConfig.og,
    path = "",
    type = "website",
    publishedTime,
    modifiedTime,
    author = siteConfig.name,
    section,
    tags = [],
  } = config;

  const url = `${siteConfig.origin}${path}`;
  const fullTitle = path ? `${title} | ${siteConfig.name}` : title;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, ...tags],
    authors: [{ name: author, url: siteConfig.origin }],
    creator: author,
    publisher: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/png",
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: "summary_large_image",
      site: "@seyamalam",
      creator: "@seyamalam",
      title: fullTitle,
      description,
      images: {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    },
    alternates: {
      canonical: url,
    },
    other: {
      "article:author": author,
      "article:section": section || "Technology",
      "article:tag": tags.join(", "),
    },
  };
}

// Generate structured data script tag
export function generateStructuredData(data: any): string {
  return JSON.stringify(data, null, 0);
}

// Common SEO keywords for different sections
export const seoKeywords = {
  personal: [
    "Touhidul Alam Seyam",
    "seyamalam",
    "Seyam",
    "touhidul alam seyam portfolio",
    "bangladesh developer",
    "chattogram developer",
    "full stack developer bangladesh",
    "software engineer bangladesh",
    "react developer bangladesh",
    "nextjs developer bangladesh",
    "typescript developer bangladesh",
    "nodejs developer bangladesh",
    "python developer bangladesh",
    "ai researcher bangladesh",
    "machine learning engineer bangladesh",
    "computer vision researcher bangladesh",
  ],
  
  technical: [
    "full stack development",
    "react development",
    "nextjs development",
    "typescript development",
    "nodejs development",
    "python development",
    "javascript development",
    "web development",
    "frontend development",
    "backend development",
    "api development",
    "database design",
    "cloud computing",
    "devops",
    "software architecture",
    "microservices",
    "rest api",
    "graphql",
    "mongodb",
    "postgresql",
    "redis",
    "docker",
    "aws",
    "vercel",
    "git",
    "github",
  ],
  
  research: [
    "ai research",
    "machine learning research",
    "computer vision research",
    "deep learning",
    "artificial intelligence",
    "data science",
    "big data analytics",
    "statistical analysis",
    "natural language processing",
    "tensorflow",
    "keras",
    "pytorch",
    "scikit-learn",
    "pandas",
    "numpy",
    "matplotlib",
    "jupyter",
    "research publications",
    "ieee publications",
    "springer publications",
    "academic research",
    "scientific research",
  ],
  
  domains: [
    "healthcare ai",
    "medical ai",
    "agricultural ai",
    "agricultural technology",
    "precision agriculture",
    "plant disease detection",
    "crop health monitoring",
    "smart farming",
    "digital agriculture",
    "agtech",
    "healthtech",
    "medical imaging",
    "diagnostic ai",
    "predictive analytics",
    "biomedical engineering",
    "telemedicine",
    "digital health",
  ],
  
  services: [
    "freelance developer",
    "remote developer",
    "software consultant",
    "ai consultant",
    "machine learning consultant",
    "web development services",
    "software development services",
    "technical consulting",
    "research collaboration",
    "project collaboration",
    "hire full stack developer",
    "hire ai developer",
    "hire react developer",
    "hire nodejs developer",
    "hire python developer",
    "outsource development",
    "offshore development",
    "remote work",
    "contract developer",
    "project-based work",
  ],
};

// Generate meta keywords based on page type
export function generateMetaKeywords(pageType: keyof typeof seoKeywords, additionalKeywords: string[] = []): string[] {
  return [
    ...seoKeywords.personal,
    ...seoKeywords[pageType],
    ...additionalKeywords,
  ];
}

// Generate page-specific meta description
export function generateMetaDescription(
  baseDescription: string,
  highlights: string[] = [],
  location: string = "Bangladesh"
): string {
  const highlightText = highlights.length > 0 ? ` Specializing in ${highlights.join(", ")}.` : "";
  const locationText = ` Based in ${location}, available for remote work and international collaborations.`;
  
  return `${baseDescription}${highlightText}${locationText}`;
} 