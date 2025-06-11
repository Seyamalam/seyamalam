"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink, Briefcase, GraduationCap, Award, Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { experiences } from "@/data/portfolio"
import { useState } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const education = [
  {
    institution: "BGC Trust University Bangladesh",
    degree: "B.Sc (Hons) in Computer Science & Engineering",
    period: "2023 - 2026",
    description: "Currently pursuing Bachelor's degree in Computer Science & Engineering with focus on software engineering, AI/ML, and web technologies. Actively engaged in research projects and practical application development.",
    achievements: ["Research Publications", "Active in IT Club", "Academic Excellence in Programming"]
  },
  {
    institution: "Chattogram Cantonment Public College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2019 - 2021",
    description: "Completed higher secondary education with focus on science subjects, building foundation for computer science studies.",
    achievements: ["Science Group", "Strong Foundation in Mathematics", "Preparation for University Entrance"]
  },
  {
    institution: "Gomdandi Pilot Model High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2017 - 2019",
    description: "Completed secondary education with excellent academic performance, developing strong analytical and problem-solving skills.",
    achievements: ["Academic Excellence", "Strong Mathematics Foundation", "Leadership Skills Development"]
  }
]

const certifications = [
  // Programming & Development
  {
    name: "Cisco Python Essentials 1",
    issuer: "Cisco",
    date: "2024",
    credentialId: "CISCO-PY-ESS-1",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["python", "programming", "networking"]
  },
  {
    name: "Cisco Python Essentials 2",
    issuer: "Cisco",
    date: "2024",
    credentialId: "CISCO-PY-ESS-2",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["python", "programming", "networking"]
  },
  {
    name: "CS50 for Educators",
    issuer: "Harvard University",
    date: "2024",
    credentialId: "HARVARD-CS50-EDU",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["programming", "education", "computer-science"]
  },
  {
    name: "freeCodeCamp Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    credentialId: "FCC-RWD-2024",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["web-development", "html", "css", "responsive-design"]
  },
  {
    name: "HackerRank JavaScript Basic Certificate",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-JS-BASIC",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["javascript", "programming", "web-development"]
  },
  {
    name: "HackerRank Python Basic Certificate",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-PY-BASIC",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["python", "programming", "algorithms"]
  },
  {
    name: "HackerRank React Basic Certificate",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-REACT-BASIC",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["react", "javascript", "web-development", "frontend"]
  },
  {
    name: "HackerRank Node.js Basic Certificate",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-NODE-BASIC",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["nodejs", "javascript", "backend", "server-side"]
  },
  {
    name: "HackerRank Java Basic Certificate",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-JAVA-BASIC",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["java", "programming", "oop"]
  },
  {
    name: "HackerRank CSS Certificate",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-CSS-CERT",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["css", "web-development", "frontend", "styling"]
  },

  // Data Science & AI/ML
  {
    name: "IBM Applied Data Science with Python",
    issuer: "IBM (Credly)",
    date: "2024",
    credentialId: "IBM-ADS-PY",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["data-science", "python", "machine-learning", "analytics"]
  },
  {
    name: "IBM Data Science Foundations - Level 2 V2",
    issuer: "IBM (Credly)",
    date: "2024",
    credentialId: "IBM-DS-FOUND-L2",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["data-science", "analytics", "foundations"]
  },
  {
    name: "IBM Data Science Methodologies",
    issuer: "IBM (Credly)",
    date: "2024",
    credentialId: "IBM-DS-METHOD",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["data-science", "methodology", "analytics"]
  },
  {
    name: "IBM Deep Learning",
    issuer: "IBM (Credly)",
    date: "2024",
    credentialId: "IBM-DEEP-LEARN",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["deep-learning", "ai", "neural-networks", "machine-learning"]
  },
  {
    name: "IEEE Machine Learning Mastery",
    issuer: "IEEE Computer Society",
    date: "2024",
    credentialId: "IEEE-ML-MASTERY",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["machine-learning", "ai", "ieee", "professional"]
  },
  {
    name: "Kaggle Python",
    issuer: "Kaggle",
    date: "2024",
    credentialId: "KGL-PYTHON",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["python", "data-science", "kaggle", "programming"]
  },
  {
    name: "Kaggle Intro to Machine Learning",
    issuer: "Kaggle",
    date: "2024",
    credentialId: "KGL-ML-INTRO",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["machine-learning", "kaggle", "ai", "data-science"]
  },
  {
    name: "Kaggle Intermediate Machine Learning",
    issuer: "Kaggle",
    date: "2024",
    credentialId: "KGL-ML-INT",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["machine-learning", "kaggle", "ai", "advanced"]
  },
  {
    name: "Kaggle Machine Learning Explainability",
    issuer: "Kaggle",
    date: "2024",
    credentialId: "KGL-ML-EXPLAIN",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["machine-learning", "explainability", "ai", "interpretability"]
  },
  {
    name: "Kaggle Data Visualization",
    issuer: "Kaggle",
    date: "2024",
    credentialId: "KGL-DATA-VIZ",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["data-visualization", "analytics", "charts", "data-science"]
  },
  {
    name: "Kaggle Geospatial Analysis",
    issuer: "Kaggle",
    date: "2024",
    credentialId: "KGL-GEO-ANAL",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["geospatial", "analysis", "mapping", "data-science"]
  },
  {
    name: "MATLAB Deep Learning",
    issuer: "MATLAB",
    date: "2024",
    credentialId: "MATLAB-DL",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["matlab", "deep-learning", "ai", "neural-networks"]
  },
  {
    name: "MATLAB Machine Learning Onramp",
    issuer: "MATLAB",
    date: "2024",
    credentialId: "MATLAB-ML-ONRAMP",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["matlab", "machine-learning", "onramp", "ai"]
  },
  {
    name: "MATLAB Computer Vision Onramp",
    issuer: "MathWorks",
    date: "2024",
    credentialId: "MATLAB-CV-ONRAMP",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["matlab", "computer-vision", "image-processing", "ai"]
  },
  {
    name: "MATLAB Image Processing",
    issuer: "MATLAB",
    date: "2024",
    credentialId: "MATLAB-IMG-PROC",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["matlab", "image-processing", "computer-vision", "signal-processing"]
  },
  {
    name: "University of Helsinki Elements Of AI",
    issuer: "University of Helsinki",
    date: "2024",
    credentialId: "UH-ELEMENTS-AI",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["ai", "artificial-intelligence", "fundamentals", "university"]
  },
  {
    name: "LinkedIn Learning Introduction to Artificial Intelligence",
    issuer: "LinkedIn Learning",
    date: "2024",
    credentialId: "LI-AI-INTRO",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["ai", "artificial-intelligence", "introduction", "linkedin"]
  },
  {
    name: "Future Learn Digital Skills Artificial Intelligence",
    issuer: "Future Learn",
    date: "2024",
    credentialId: "FL-AI-SKILLS",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["ai", "digital-skills", "artificial-intelligence", "future-learn"]
  },

  // Big Data & Databases
  {
    name: "IBM Big Data Foundations - Level 2",
    issuer: "IBM (Credly)",
    date: "2024",
    credentialId: "IBM-BD-FOUND-L2",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["big-data", "hadoop", "analytics", "foundations"]
  },
  {
    name: "IBM Hadoop Programming - Level 2",
    issuer: "IBM (Credly)",
    date: "2024",
    credentialId: "IBM-HADOOP-L2",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["hadoop", "big-data", "programming", "distributed-computing"]
  },
  {
    name: "IBM Scala Programming for Data Science Level 2",
    issuer: "IBM (Credly)",
    date: "2024",
    credentialId: "IBM-SCALA-DS-L2",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["scala", "data-science", "programming", "functional-programming"]
  },
  {
    name: "Redis University RU102PY Redis for Python Developers",
    issuer: "Redis University",
    date: "2024",
    credentialId: "REDIS-RU102PY",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["redis", "python", "database", "caching", "nosql"]
  },
  {
    name: "HackerRank SQL Basic Certificate",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-SQL-BASIC",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["sql", "database", "queries", "data-management"]
  },
  {
    name: "HackerRank SQL Intermediate Certificate",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-SQL-INT",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["sql", "database", "advanced-queries", "data-management"]
  },
  {
    name: "Kaggle Advanced SQL",
    issuer: "Kaggle",
    date: "2024",
    credentialId: "KGL-SQL-ADV",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["sql", "database", "advanced", "data-analysis"]
  },
  {
    name: "Great Learning MySQL",
    issuer: "Great Learning",
    date: "2024",
    credentialId: "GL-MYSQL",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["mysql", "database", "relational-database", "sql"]
  },

  // Cloud & DevOps
  {
    name: "IBM Cloud Essentials Badge",
    issuer: "IBM (Credly)",
    date: "2024",
    credentialId: "IBM-CLOUD-ESS",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["cloud", "ibm-cloud", "cloud-computing", "infrastructure"]
  },
  {
    name: "Career Essentials in GitHub Professional Certificate",
    issuer: "LinkedIn Learning",
    date: "2024",
    credentialId: "LI-GITHUB-PROF",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["github", "git", "version-control", "collaboration", "devops"]
  },
  {
    name: "cPanel Professional Certification Exam CPP",
    issuer: "cPanel",
    date: "2024",
    credentialId: "CPANEL-CPP",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["cpanel", "web-hosting", "server-management", "linux"]
  },

  // Digital Marketing & Analytics
  {
    name: "Google Digital Marketing",
    issuer: "Google",
    date: "2024",
    credentialId: "GOOGLE-DM",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["digital-marketing", "google", "marketing", "seo", "sem"]
  },
  {
    name: "Google Analytics",
    issuer: "Google",
    date: "2024",
    credentialId: "GOOGLE-GA",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["google-analytics", "web-analytics", "data-analysis", "marketing"]
  },
  {
    name: "Google Ads Measurement",
    issuer: "Google",
    date: "2024",
    credentialId: "GOOGLE-ADS-MEAS",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["google-ads", "advertising", "measurement", "marketing"]
  },
  {
    name: "Google AI-Powered Shopping ads Certification",
    issuer: "Google",
    date: "2024",
    credentialId: "GOOGLE-AI-SHOP",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["google-ads", "ai", "shopping-ads", "e-commerce", "marketing"]
  },
  {
    name: "HubSpot Email Marketing",
    issuer: "HubSpot",
    date: "2024",
    credentialId: "HUBSPOT-EMAIL",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["email-marketing", "hubspot", "marketing-automation", "crm"]
  },
  {
    name: "Future Learn Digital Skills Web Analytics",
    issuer: "Future Learn",
    date: "2024",
    credentialId: "FL-WEB-ANALYTICS",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["web-analytics", "digital-skills", "data-analysis", "marketing"]
  },
  {
    name: "X (Twitter) Ad Managers Fundamentals",
    issuer: "X (Twitter)",
    date: "2024",
    credentialId: "X-AD-FUND",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["twitter", "social-media", "advertising", "marketing"]
  },

  // Networking & Security
  {
    name: "Simplilearn CCNA 200-301 Network Fundamentals",
    issuer: "Simplilearn",
    date: "2024",
    credentialId: "SL-CCNA-FUND",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["networking", "ccna", "cisco", "network-fundamentals"]
  },
  {
    name: "Saylor Academy CS402 Computer Communications and Networks",
    issuer: "Saylor Academy",
    date: "2024",
    credentialId: "SA-CS402",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["networking", "communications", "computer-networks", "protocols"]
  },
  {
    name: "Saylor Academy CS406 Information Security",
    issuer: "Saylor Academy",
    date: "2024",
    credentialId: "SA-CS406",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["security", "information-security", "cybersecurity", "privacy"]
  },
  {
    name: "Saylor Academy CS301 Computer Architecture",
    issuer: "Saylor Academy",
    date: "2024",
    credentialId: "SA-CS301",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["computer-architecture", "hardware", "systems", "processors"]
  },

  // Programming Languages & Frameworks
  {
    name: "Saylor Academy CS105 Introduction to Python",
    issuer: "Saylor Academy",
    date: "2024",
    credentialId: "SA-CS105",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["python", "programming", "introduction", "fundamentals"]
  },
  {
    name: "Saylor Academy CS250 Python for Data Science",
    issuer: "Saylor Academy",
    date: "2024",
    credentialId: "SA-CS250",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["python", "data-science", "analytics", "programming"]
  },
  {
    name: "InfoSys Programming Fundamentals using Python - Part 1",
    issuer: "InfoSys",
    date: "2024",
    credentialId: "INFOSYS-PY-FUND",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["python", "programming", "fundamentals", "infosys"]
  },
  {
    name: "Simplilearn Advanced C++",
    issuer: "Simplilearn",
    date: "2024",
    credentialId: "SL-CPP-ADV",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["cpp", "c++", "programming", "advanced", "object-oriented"]
  },
  {
    name: "Simplilearn HTML",
    issuer: "Simplilearn",
    date: "2024",
    credentialId: "SL-HTML",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["html", "web-development", "markup", "frontend"]
  },
  {
    name: "Great Learning CSS",
    issuer: "Great Learning",
    date: "2024",
    credentialId: "GL-CSS",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["css", "web-development", "styling", "frontend"]
  },
  {
    name: "Simplilearn Full-Stack Development 101",
    issuer: "Simplilearn",
    date: "2024",
    credentialId: "SL-FULLSTACK",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["full-stack", "web-development", "frontend", "backend"]
  },

  // Problem Solving & Algorithms
  {
    name: "HackerRank Problem Solving Basic Certificate",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-PS-BASIC",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["problem-solving", "algorithms", "data-structures", "programming"]
  },
  {
    name: "HackerRank Problem Solving Intermediate Certificate",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-PS-INT",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["problem-solving", "algorithms", "data-structures", "advanced"]
  },

  // IoT & Emerging Technologies
  {
    name: "Simplilearn Introduction to IoT",
    issuer: "Simplilearn",
    date: "2024",
    credentialId: "SL-IOT-INTRO",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["iot", "internet-of-things", "sensors", "embedded-systems"]
  },

  // Healthcare & Social Impact
  {
    name: "Workshop Speaker Certificate of Appreciation",
    issuer: "BGC Trust University Bangladesh",
    date: "2024",
    credentialId: "BGCTUB-WORKSHOP",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["speaking", "workshop", "education", "university", "teaching"]
  },
  {
    name: "BEC Conflict Related Injury Record Of Achievement",
    issuer: "WHO",
    date: "2024",
    credentialId: "WHO-BEC-CRI",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["healthcare", "who", "injury", "medical", "social-impact"]
  },
  {
    name: "UN An Introduction to Climate Change and Human Rights",
    issuer: "UN",
    date: "2024",
    credentialId: "UN-CLIMATE-HR",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["climate-change", "human-rights", "un", "sustainability", "social-impact"]
  },
  {
    name: "UN Gender Equality and Human Rights",
    issuer: "UN",
    date: "2024",
    credentialId: "UN-GENDER-HR",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md",
    tags: ["gender-equality", "human-rights", "un", "social-justice", "social-impact"]
  }
]

// Certificate categories for filtering
const certificateCategories = [
  "all",
  "programming",
  "data-science",
  "machine-learning",
  "web-development",
  "database",
  "cloud",
  "networking",
  "security",
  "marketing",
  "ai",
  "big-data",
  "social-impact"
]

export function ExperiencePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredCertifications = certifications.filter(cert => 
    selectedCategory === "all" || cert.tags.includes(selectedCategory)
  )

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A timeline of my professional journey and achievements in software development
          </p>
        </motion.div>

        {/* Professional Experience */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Professional Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
                )}
                
                <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ml-12">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{exp.position}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {exp.company}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </Badge>
                        </div>
                      </div>
                      {/* Timeline Dot */}
                      <div className="absolute -left-3 top-6 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <GraduationCap className="h-3 w-3" />
                            {edu.institution}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {edu.period}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>        {/* Certifications */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {certificateCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs capitalize"
                >
                  {category.replace("-", " ")}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index % 12) * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-2 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">{cert.name}</CardTitle>
                    <div className="space-y-2">
                      <Badge variant="secondary">{cert.issuer}</Badge>
                      <Badge variant="outline">{cert.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {cert.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag.replace("-", " ")}
                          </Badge>
                        ))}
                        {cert.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{cert.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        ID: {cert.credentialId}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full hover:scale-105 transition-transform"
                      >
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-2" />
                          View Certificate
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCertifications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No certificates found for the selected category.</p>
            </div>
          )}
        </motion.div>

        {/* Skills Summary */}
        <motion.div variants={itemVariants}>
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-r from-primary/5 to-blue-600/5">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Ready for New Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  With 3+ years of experience and a passion for learning, I'm always excited 
                  to take on new challenges and collaborate on innovative projects.
                </p>                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-blue-600 hover:scale-105 transition-transform"
                    asChild
                  >
                    <a href="/resume/Seyam.pdf" download="Seyam_Resume.pdf">
                      Download Resume
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:scale-105 transition-transform"
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
