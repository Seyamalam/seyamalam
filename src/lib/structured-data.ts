import { siteConfig } from "@/config/site.config";
import { projects, publications, experiences } from "@/data/portfolio";

// Base organization schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.name,
  "url": siteConfig.origin,
  "logo": `${siteConfig.origin}/hero.png`,
  "description": siteConfig.description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": siteConfig.contact?.location?.split(", ")[0],
    "addressCountry": siteConfig.contact?.location?.split(", ")[1],
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": siteConfig.contact?.phone,
    "email": siteConfig.contact?.email,
    "contactType": "Professional",
    "availableLanguage": ["English", "Bengali"]
  },
  "sameAs": [
    siteConfig.socials.github,
    siteConfig.socials.x,
    siteConfig.socials.linkedin || "",
  ]
};

// Person schema for the portfolio owner
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": siteConfig.name,
  "alternateName": ["Seyam", "Touhidul Alam Seyam", "seyamalam"],
  "url": siteConfig.origin,
  "image": `${siteConfig.origin}/hero.png`,
  "description": siteConfig.description,
  "jobTitle": "Full Stack Developer & Research Scientist",
  "worksFor": {
    "@type": "Organization",
    "name": "Hello World Communications Ltd",
    "url": "https://helloworldcommunications.com"
  },
  "alumniOf": {
    "@type": "EducationalOrganization", 
    "name": "BGC Trust University Bangladesh",
    "url": "https://bgctub.ac.bd"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": siteConfig.contact?.location?.split(", ")[0],
    "addressCountry": siteConfig.contact?.location?.split(", ")[1],
  },
  "email": siteConfig.contact?.email,
  "telephone": siteConfig.contact?.phone,
  "sameAs": [
    siteConfig.socials.github,
    siteConfig.socials.x,
    siteConfig.socials.linkedin || "",
  ],
  "knowsAbout": [
    "Full Stack Development",
    "Machine Learning",
    "Computer Vision", 
    "Artificial Intelligence",
    "Research",
    "React.js",
    "Next.js",
    "Python",
    "TypeScript",
    "Node.js",
    "Data Science",
    "Deep Learning",
    "Agricultural Technology",
    "Healthcare AI"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Software Engineer",
    "occupationLocation": {
      "@type": "Country",
      "name": "Bangladesh"
    },
    "skills": "JavaScript, TypeScript, React, Next.js, Node.js, Python, Machine Learning, AI Research, Computer Vision, Data Science",
    "responsibilities": "Full-stack web development, AI/ML research, software architecture, database design, API development"
  },
  "awards": [
    "IEEE Conference Publication Author",
    "Springer Journal Publication Author",
    "Research Excellence in Computer Vision",
    "Agricultural AI Innovation"
  ]
};

// Website schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.title,
  "url": siteConfig.origin,
  "description": siteConfig.description,
  "author": {
    "@type": "Person",
    "name": siteConfig.name,
    "url": siteConfig.origin
  },
  "inLanguage": "en-US",
  "copyrightYear": new Date().getFullYear(),
  "copyrightHolder": {
    "@type": "Person",
    "name": siteConfig.name
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteConfig.origin}/?s={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

// Professional service schema
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Full Stack Development & AI Research Services",
  "provider": {
    "@type": "Person",
    "name": siteConfig.name,
    "url": siteConfig.origin
  },
  "serviceType": "Software Development",
  "description": "Professional full-stack web development, AI/ML research, and software consulting services",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full Stack Web Development",
          "description": "Complete web application development using React, Next.js, Node.js, and modern technologies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "AI/ML Research & Development",
          "description": "Machine learning model development, computer vision solutions, and AI research consultation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software Consulting",
          "description": "Technical consulting for software architecture, technology selection, and project planning"
        }
      }
    ]
  }
};

// Research publication schema generator
export function generatePublicationSchema(publication: typeof publications[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": publication.title,
    "author": publication.authors.map(author => ({
      "@type": "Person",
      "name": author
    })),
    "publisher": {
      "@type": "Organization",
      "name": publication.publisher
    },
    "datePublished": publication.year.toString(),
    "abstract": publication.abstract,
    "about": publication.researchArea,
    "keywords": publication.keywords || [],
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "PublicationIssue",
      "issueNumber": publication.number,
      "isPartOf": {
        "@type": "PublicationVolume",
        "volumeNumber": publication.volume,
        "isPartOf": {
          "@type": "Periodical",
          "name": publication.publication
        }
      }
    }
  };
}

// Project schema generator
export function generateProjectSchema(project: typeof projects[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.longDescription,
    "url": project.liveUrl,
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web Browser",
    "author": {
      "@type": "Person",
      "name": siteConfig.name,
      "url": siteConfig.origin
    },
    "programmingLanguage": project.technologies,
    "screenshot": project.image,
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
}

// Breadcrumb schema generator
export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// FAQ schema generator
export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
} 