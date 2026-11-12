import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";

export const alt = "Developers — API, MCP server, and machine-readable endpoints for seyamalam.vercel.app";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpenGraphImage() {
  return ogImage({
    kicker: "FOR DEVELOPERS & AGENTS",
    title: "A portfolio you can curl.",
    sub: "REST API, MCP server, OpenAPI spec, llms.txt, and markdown mirrors for every page.",
    chips: ["/api/v1", "/mcp", "/openapi.json", "/llms.txt"],
  });
}
