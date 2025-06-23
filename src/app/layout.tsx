import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import RootProviders from "@/components/providers";

const fontSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontHeading = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    ...siteConfig.keywords,
    // Personal name variations for better discoverability
    "Seyam",
    "Touhidul",
    "Alam",
    "seyamalam",
    "touhidul alam seyam",
    "seyam portfolio",
    "bangladesh developer",
    "chattogram developer",
    // Academic keywords
    "research scientist",
    "ieee publications",
    "springer journal author",
    "computer vision researcher",
    "machine learning researcher",
    "agricultural ai",
    "healthcare ai",
    "plant disease detection",
    "medical ai research",
    // Technical keywords
    "full stack engineer",
    "react expert",
    "nextjs developer",
    "typescript specialist",
    "node.js backend",
    "python data scientist",
    "tensorflow developer",
    "web application developer",
    // Location and availability
    "remote developer",
    "freelance developer",
    "software consultant",
    "research collaborator",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.origin,
    }
  ],
  creator: siteConfig.name,
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
  alternates: {
    canonical: siteConfig.origin,
  },
  verification: {
    google: 'google63894ecf69747bfd', // Google Search Console verification
  },
  category: 'Portfolio',
  classification: 'Business',
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-512x512.png", 
        sizes: "512x512",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.origin,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.og,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full Stack Developer & Research Scientist`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@seyamalam",
    creator: "@seyamalam",
    title: siteConfig.title,
    description: siteConfig.description,
    images: {
      url: siteConfig.og,
      width: 1200,
      height: 630,
      alt: `${siteConfig.name} - Full Stack Developer & Research Scientist`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
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
      "name": "Hello World Communications Ltd"
    },
    "alumniOf": {
      "@type": "EducationalOrganization", 
      "name": "BGC Trust University Bangladesh"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chattogram",
      "addressCountry": "Bangladesh"
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
      "Node.js"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Bangladesh"
      },
      "skills": "JavaScript, TypeScript, React, Next.js, Node.js, Python, Machine Learning, AI Research"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          fontMono.variable
        )}
      >
        <RootProviders>
          {children}
        </RootProviders>
      </body>
    </html>
  );
}
