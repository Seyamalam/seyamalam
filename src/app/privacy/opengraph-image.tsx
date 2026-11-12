import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";

export const alt = "Privacy policy — seyamalam.vercel.app";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpenGraphImage() {
  return ogImage({
    kicker: "PRIVACY",
    title: "No trackers. No dark patterns.",
    sub: "What this site collects, what it never does, and where the data lives.",
  });
}
