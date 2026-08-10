import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { profile, publications } from "@/data/site";

export const metadata: Metadata = {
  title: "Research",
  description: "Published work by Touhidul Alam Seyam across applied AI, computer vision, healthcare, agriculture, cybersecurity, and systems.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <>
      <PageIntro
        eyebrow="Research record · 10 works"
        title="Applied questions. Reproducible answers."
        description="Research across computer vision, healthcare, agriculture, cybersecurity, LLM inference, and high-performance machine learning."
      />
      <section className="shell research-overview page-section">
        <div className="research-statement">
          <p className="eyebrow">Research position</p>
          <h2>Models matter. So do the systems around them.</h2>
        </div>
        <p>
          My work follows the whole path from data and evaluation to a usable interface. That has meant training custom CNNs, comparing classical and quantum approaches, studying implementation performance, and shipping a diagnosis workflow as a web application.
        </p>
      </section>
      <section className="publication-section deferred-section">
        <div className="shell">
          <div className="publication-header">
            <p>Year</p><p>Work</p><p>Type</p>
          </div>
          <ol className="publication-list">
            {publications.map((publication) => (
              <li key={publication.title}>
                <time>{publication.year}</time>
                <div>
                  <h2><a href={publication.href}>{publication.title}</a></h2>
                  <p>{publication.venue}</p>
                </div>
                <span className="publication-kind">{publication.kind}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="shell page-callout deferred-section">
        <p className="eyebrow">Full record</p>
        <h2>Use the canonical profiles.</h2>
        <p>Publication metadata changes. ORCID and Google Scholar are the maintained indexes for citations and co-author records.</p>
        <div className="inline-links">
          <a className="text-link" href={profile.orcid}>ORCID <span aria-hidden="true">↗</span></a>
          <a className="text-link" href={profile.scholar}>Google Scholar <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}
