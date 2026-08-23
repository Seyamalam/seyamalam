import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { PageTransition } from "@/components/page-transition";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the Touhidul Alam Seyam portfolio website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Privacy · Last reviewed August 23, 2026"
        title="A small site with a small data footprint."
        description="This portfolio publishes professional work and contact details. It does not ask visitors to create accounts, submit forms, or provide payment information."
      />
      <section className="shell page-section about-story" aria-labelledby="privacy-details">
        <div className="about-copy">
          <p className="eyebrow">What happens when you visit</p>
          <h2 id="privacy-details">Hosting logs, local preferences, and external links.</h2>
          <p>
            The site is hosted on Vercel. Like most web hosts, Vercel may process request details needed to deliver and protect the service, including an IP address, browser and device information, the requested URL, timestamps, and diagnostic or security events. I do not run a separate advertising tracker, sell visitor data, or build behavioral advertising profiles from visits to this portfolio.
          </p>
          <p>
            The light or dark theme choice is stored in your browser using local storage under the key <code>seyam-theme</code>. That value stays on your device and only controls this site&apos;s appearance. The site does not set an account or marketing cookie. Downloading a resume or opening a project uses an ordinary link request.
          </p>
          <p>
            Links to GitHub, LinkedIn, ORCID, Google Scholar, DOI records, and other external services take you to sites with their own privacy policies. Those services decide what they collect after you follow a link. Email messages sent to the published address are processed by the sender&apos;s and recipient&apos;s email providers and retained as needed to answer the inquiry.
          </p>
          <p>
            To ask about information connected to this site, request a correction, or report an accidental disclosure, email <a href={`mailto:${profile.email}`}>{profile.email}</a>. Include the page or record involved so I can investigate it. This notice will be updated when the site starts using a new data collection feature or service.
          </p>
          <p><Link href="/contact">Contact details</Link> · <Link href="/about">About the site owner</Link></p>
        </div>
      </section>
    </PageTransition>
  );
}
