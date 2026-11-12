import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";

export const alt = "Contact Seyam Alam — software engineer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpenGraphImage() {
  return ogImage({
    kicker: "CONTACT",
    title: "Start a conversation.",
    sub: "Projects, research collaboration, and engineering roles — open to remote.",
  });
}
