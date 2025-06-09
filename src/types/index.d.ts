export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  origin: string;
  og: string;
  keywords: string[];
  creator: {
    name: string;
    url: string;
  }
  socials: {
    github: string;
    x: string;
    linkedin?: string;
    email?: string;
    resume?: string;
  }
  contact?: {
    email: string;
    phone?: string;
    location?: string;
  }
}

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export type Experience = {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string;
}

export type Skill = {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud' | 'ai';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Publication {
  id: string
  title: string
  authors: string[]
  publication: string
  year: number
  volume?: string
  number?: string
  pages?: string
  publisher: string
  doi?: string
  abstract?: string
  venue?: string
  keywords?: string[]
  arxivUrl?: string
  researchArea: "ai" | "healthcare" | "agriculture" | "cybersecurity" | "big-data" | "llm"
  featured?: boolean
}

export interface ResearchProject {
  id: string
  title: string
  description: string
  longDescription: string
  researchArea: "ai" | "healthcare" | "agriculture" | "cybersecurity" | "big-data" | "llm"
  technologies: string[]
  publications: string[] // IDs of related publications
  status: "ongoing" | "completed" | "published"
  duration?: string
  collaborators?: string[]
  relatedPublications?: number[]
  featured?: boolean
}
