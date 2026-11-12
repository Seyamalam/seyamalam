import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";

export const alt = "Research — publications and applied ML work by Seyam Alam";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpenGraphImage() {
  return ogImage({
    kicker: "RESEARCH",
    title: "Published work, reproducible methods.",
    sub: "Applied machine learning, evaluation, and agentic systems research.",
  });
}
