import type { Metadata, Viewport } from "next";
import { Archivo, Geist } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { NavigationTransitions } from "@/components/navigation-transitions";
import { SiteTools } from "@/components/site-tools";
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
  themeColor: "#e7e9e6",
  colorScheme: "light dark",
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
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      { url: "/favicon/mark.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico", sizes: "32x32" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

const personSchema = {
  "@type": "Person",
  "@id": `${siteConfig.origin}/#person`,
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

const practiceSchema = {
  "@type": "ProfessionalService",
  "@id": `${siteConfig.origin}/#professional-service`,
  name: "Seyam Alam Software Engineering",
  url: siteConfig.origin,
  founder: { "@id": `${siteConfig.origin}/#person` },
  email: profile.email,
  telephone: profile.phone,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "project and research inquiries",
    email: profile.email,
    telephone: profile.phone,
    availableLanguage: ["English", "Bengali"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chattogram",
    addressCountry: "BD",
  },
};

const identitySchema = {
  "@context": "https://schema.org",
  "@graph": [personSchema, practiceSchema],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`} data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('seyam-theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){document.documentElement.dataset.theme='light'}})()` }} />
      </head>
      <body className="site-v3">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <NavigationTransitions />
        <SiteTools />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(identitySchema).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
