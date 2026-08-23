import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: '</sitemap.xml>; rel="sitemap"; type="application/xml", </llms.txt>; rel="describedby"; type="text/markdown", </.well-known/ai-catalog.json>; rel="ai-catalog"; type="application/ai-catalog+json", </.well-known/mcp>; rel="mcp", </.well-known/mcp/server-card.json>; rel="service-desc"; type="application/mcp-server-card+json"',
          },
        ],
      },
    ];
  },
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    deviceSizes: [640, 828, 1080, 1200, 1600],
    imageSizes: [32, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
