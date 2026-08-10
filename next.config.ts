import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    deviceSizes: [640, 828, 1080, 1200, 1600],
    imageSizes: [32, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
