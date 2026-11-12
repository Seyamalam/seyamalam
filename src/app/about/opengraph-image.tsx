import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";

export const alt = "About Touhidul Alam Seyam — software engineer and applied AI researcher";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpenGraphImage() {
  return ogImage({
    kicker: "ABOUT",
    title: "The person behind the systems.",
    sub: "Chattogram, Bangladesh — engineering, research, and open source.",
  });
}
