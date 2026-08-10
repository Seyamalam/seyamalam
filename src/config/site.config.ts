import { profile } from "@/data/site";

export const siteConfig = {
  name: profile.name,
  title: "Touhidul Alam Seyam — Software Engineer · Web, App, Backend & Agentic AI",
  description:
    "Software engineer and applied AI researcher building fast web systems, open-source developer tools, reproducible ML pipelines, and published research.",
  origin: "https://seyamalam.vercel.app",
  og: "https://seyamalam.vercel.app/opengraph-image",
  keywords: [
    "Touhidul Alam Seyam",
    "Seyamalam",
    "Software Engineer Bangladesh",
    "Full-Stack Engineer",
    "Applied AI Researcher",
    "Machine Learning Engineer",
    "Agentic Systems Engineer",
    "React Native Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Python Developer",
    "Computer Vision Researcher",
  ],
  socials: {
    github: profile.github,
    orcid: profile.orcid,
    scholar: profile.scholar,
    linkedin: profile.linkedin,
    x: profile.x,
  },
  contact: {
    email: profile.email,
    phone: profile.phone,
    location: profile.location,
  },
} as const;
