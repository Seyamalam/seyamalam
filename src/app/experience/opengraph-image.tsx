import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";

export const alt = "Experience — roles and timeline of Seyam Alam";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpenGraphImage() {
  return ogImage({
    kicker: "EXPERIENCE",
    title: "Roles, teams, shipped work.",
    sub: "Software engineering across web, backend, and agentic AI.",
  });
}
