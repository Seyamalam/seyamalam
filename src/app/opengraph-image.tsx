import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";

export const alt = "Touhidul Alam Seyam — Software engineer building systems, agents, and applied ML";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpenGraphImage() {
  return ogImage({
    kicker: "PORTFOLIO",
    title: "Software that survives contact with the real world.",
    sub: "Touhidul Alam Seyam — software engineer, applied AI researcher. Web, app, backend & agentic AI.",
    chips: ["Next.js", "TypeScript", "Python", "Agentic AI", "Applied ML"],
  });
}
