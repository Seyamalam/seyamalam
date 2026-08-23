import { portfolioMcpHandler } from "@/lib/portfolio-mcp";

const serverCard = {
  name: "seyam-alam-portfolio",
  displayName: "Touhidul Alam Seyam Portfolio",
  description: "Read-only access to Touhidul Alam Seyam's published profile, software projects, research, and contact links.",
  version: "1.0.0",
  serverUrl: "https://seyamalam.vercel.app/.well-known/mcp",
  endpoint: "https://seyamalam.vercel.app/.well-known/mcp",
  transport: "streamable-http",
  tools: [
    { name: "get_profile", description: "Get the published professional profile and contact links." },
    { name: "list_projects", description: "List published software projects and their primary evidence URLs." },
    { name: "list_research", description: "List published research with DOI or primary-record URLs." },
  ],
};

export function GET() {
  return Response.json(serverCard, { headers: { "Cache-Control": "public, max-age=3600" } });
}

export { portfolioMcpHandler as POST };
