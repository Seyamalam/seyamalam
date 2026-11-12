import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";

export const alt = "Selected projects — engineering case studies by Seyam Alam";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpenGraphImage() {
  return ogImage({
    kicker: "PROJECTS",
    title: "Open the systems.",
    sub: "Case studies with real interfaces, working code, benchmarks, and reproducible evidence.",
    chips: ["Developer tools", "ML pipelines", "Web systems"],
  });
}
