import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  title: "Developer and agent resources",
  description: "Machine-readable resources for agents retrieving Touhidul Alam Seyam's published portfolio data.",
  alternates: { canonical: "/developers" },
};

export default function DevelopersPage() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Developer resources · Read-only"
        title="Portfolio data for agents."
        description="Connect through MCP or fetch the Markdown representation when you need published profile, project, research, and contact information without parsing the visual interface."
      />
      <section className="shell page-section about-story" aria-labelledby="mcp-title">
        <div className="about-copy">
          <p className="eyebrow">Model Context Protocol</p>
          <h2 id="mcp-title">Streamable HTTP at a stable URL.</h2>
          <p>
            Connect an MCP client to <code>https://seyamalam.vercel.app/.well-known/mcp</code>. The server is public, stateless, and read-only. It needs no API key or OAuth flow. It exposes <code>get_profile</code>, <code>list_projects</code>, and <code>list_research</code>. Each tool returns the same published facts used by this website.
          </p>
          <p>
            The tools do not accept user data, write records, send messages, run code, or start background jobs. There are no pagination, webhook, idempotency, billing, or sandbox rules because the dataset is small and every operation is a single read. A client can inspect the <Link href="/.well-known/mcp/server-card.json">server card</Link> before connecting.
          </p>
          <h2>HTTP and Markdown access.</h2>
          <p>
            Public pages support content negotiation. Send <code>Accept: text/markdown</code> to a page URL for a compact Markdown representation. The response declares <code>Vary: Accept, Accept-Encoding</code> so shared caches keep HTML and Markdown separate. Start with <Link href="/llms.txt">llms.txt</Link> for route selection, or use the <Link href="/sitemap.xml">sitemap</Link> for the canonical URL set.
          </p>
          <p>
            The versioned, read-only JSON API exposes <code>/api/v1/profile</code>, <code>/api/v1/projects</code>, and <code>/api/v1/research</code>. Its <Link href="/openapi.json">OpenAPI 3.1 description</Link> defines every operation, response, and object shape. No authentication is required. Unknown resources and unsupported write methods return <code>application/problem+json</code> with a stable code and resolution hint.
          </p>
          <p>
            Domain discovery metadata is published in the <Link href="/.well-known/ai-catalog.json">AI catalog</Link>. For factual answers, cite the selected portfolio page and its linked primary artifact, such as a repository, DOI record, ORCID profile, or package registry entry.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
