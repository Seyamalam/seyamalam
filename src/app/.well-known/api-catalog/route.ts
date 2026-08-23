export function GET() {
  return Response.json({
    linkset: [{
      anchor: "https://seyamalam.vercel.app/",
      item: [
        {
          href: "https://seyamalam.vercel.app/openapi.json",
          rel: "service-desc",
          type: "application/openapi+json",
          title: "Touhidul Alam Seyam Portfolio API",
        },
        {
          href: "https://seyamalam.vercel.app/.well-known/mcp/server-card.json",
          rel: "service-desc",
          type: "application/mcp-server-card+json",
          title: "Touhidul Alam Seyam Portfolio MCP",
        },
      ],
    }],
  }, {
    headers: {
      "Content-Type": "application/linkset+json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
