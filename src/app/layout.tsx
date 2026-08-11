import type { Metadata, Viewport } from "next";
import { Archivo, Geist } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site.config";
import { profile } from "@/data/site";
import "@/styles/globals.css";

const bodyFont = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f7fa",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.origin }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: { google: "google63894ecf69747bfd" },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteConfig.origin,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteConfig.origin,
  image: `${siteConfig.origin}/profile.jpg`,
  jobTitle: "Software Engineer",
  description: siteConfig.description,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chattogram",
    addressCountry: "BD",
  },
  worksFor: [
    { "@type": "Organization", name: "Agentic Institute" },
    { "@type": "Organization", name: "Hello World Communications Ltd" },
  ],
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "BGC Trust University Bangladesh",
  },
  sameAs: [profile.github, profile.linkedin, profile.orcid, profile.scholar, profile.x],
  knowsAbout: [
    "Software engineering",
    "Next.js",
    "TypeScript",
    "Python",
    "Machine learning",
    "Computer vision",
    "Agentic systems",
    "Reproducible evaluation",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
