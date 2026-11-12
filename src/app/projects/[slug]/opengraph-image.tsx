import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";
import { projects } from "@/data/site";

export const alt = "Engineering case study — a project by Seyam Alam";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return ogImage({
    kicker: "CASE STUDY",
    title: project?.title ?? "Project",
    sub: project?.summary,
    chips: project?.stack,
    footer: `seyamalam.vercel.app/projects/${slug}`,
  });
}
