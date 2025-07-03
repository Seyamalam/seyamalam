"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Github, Mail, MapPin, Calendar } from "lucide-react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site.config"
import { projects, skills } from "@/data/portfolio"
import Image from "next/image"
import { OptimizedImage } from "@/components/optimized-image"
import { LazyImage } from "@/components/lazy-image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

const floatingVariants = {
  animate: {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)
  const topSkills = [
    ...skills.filter((s) => s.category === "frontend").slice(0, 2),
    ...skills.filter((s) => s.category === "backend").slice(0, 2),
    ...skills.filter((s) => s.category === "ai").slice(0, 2),
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "4s" }}
            className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-8 pb-20"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
              className="w-32 h-32 mx-auto mt-12 rounded-full bg-gradient-to-r from-primary to-blue-600 p-1"
            >
              <OptimizedImage
                src="/hero.JPG"
                alt="Touhidul Alam Seyam"
                width={128}
                height={128}
                className="h-full w-full rounded-full object-cover"
                priority={true}
                quality={85}
                sizes="128px"
                placeholder="blur"
              />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Touhidul Alam
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-foreground"
              >
                Seyam
              </motion.span>
            </motion.h1>            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-2 mb-6"
            >
              <Badge variant="secondary" className="text-sm">
                <MapPin className="w-3 h-3 mr-1" />
                Available for Remote Work
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Calendar className="w-3 h-3 mr-1" />
                Research Collaborations
              </Badge>
              <Badge variant="secondary" className="text-sm">
                📚 8+ Publications
              </Badge>
              <Badge variant="outline" className="text-sm">
                🏆 IEEE & Springer Author
              </Badge>
            </motion.div>
          </motion.div>          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-primary font-semibold">Full Stack Developer & Research Scientist</span>{" "}
            specializing in{" "}
            <span className="text-primary font-semibold">AI/ML Research</span>,{" "}
            <span className="text-primary font-semibold">Web & Mobile Development</span>,{" "}
            <span className="text-primary font-semibold">Healthcare AI</span>, and{" "}
            <span className="text-primary font-semibold">Agricultural Technology</span>. Published researcher in{" "}
            <span className="text-primary font-semibold">IEEE Conferences</span>,{" "}
            <span className="text-primary font-semibold">Springer Journals</span>, and{" "}
            <span className="text-primary font-semibold">arXiv</span> with expertise in{" "}
            <span className="text-primary font-semibold">Computer Vision</span>,{" "}
            <span className="text-primary font-semibold">LLMs</span>, and{" "}
            <span className="text-primary font-semibold">Big Data Analytics</span>.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-600 hover:scale-105 transition-transform group"
            >
              <Link to="/projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-transform group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:scale-110 transition-transform"
              >
                <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:scale-110 transition-transform"
              >
                <Link to="/contact">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Skills Overview */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Research & Development Stack
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies powering cutting-edge research and production applications
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >                <Card className="border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 bg-white dark:bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 group-hover:scale-110 transition-transform flex justify-center">
                      {getSkillIcon(skill.name)}
                    </div>
                    <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-800">{skill.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my latest work and innovations
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >                <Card className="overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20">
                  <div className="aspect-video relative overflow-hidden">
                    {project.image ? (
                      <LazyImage
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={225}
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        quality={80}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                        <div className="text-4xl opacity-50">🚀</div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-transform"
            >
              <Link to="/projects">
                View All Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

function getSkillIcon(skillName: string) {
  const iconMap: Record<string, string> = {
    "React": "/icon/react.svg",
    "Next.js": "/icon/nextjs.svg",
    "TypeScript": "/icon/typescript.svg",
    "JavaScript": "/icon/javascript.svg",
    "Node.js": "/icon/nodejs.svg",
    "Python": "/icon/python.svg",
    "Django": "/icon/django.svg",
    "Go": "/icon/golang.svg",
    "PostgreSQL": "/icon/postgresql.svg",
    "MongoDB": "/icon/mongodb.svg",
    "Redis": "/icon/redis.svg",
    "Prisma": "/icon/prisma.svg",
    "Drizzle": "/icon/drizzle.svg",
    "SQLite": "/icon/sqlite.svg",
    "Tailwind CSS": "/icon/tailwindcss.svg",
    "HTML5": "/icon/html5.svg",
    "CSS3": "/icon/css3.svg",
    "React Native": "/icon/reactnative.svg",
    "Express.js": "/icon/express.svg",
    "Machine Learning": "/icon/tensorflow.svg",
  }
  
  const iconPath = iconMap[skillName]
  
  if (iconPath) {
    return (
      <Image
        src={iconPath}
        alt={`${skillName} icon`}
        width={32}
        height={32}
        className="w-8 h-8 mx-auto"
      />
    )
  }
    // Fallback emoji icons for skills without SVG
  const fallbackIcons: Record<string, string> = {
    "Tailwind CSS": "🎨",
    "HTML5": "🌐",
    "CSS3": "🎨",
    "React Native": "📱",
    "Express.js": "🚀",
    "REST APIs": "🔗",
    "GraphQL": "📊",
    "Microservices": "🏗️",
    "PostgreSQL": "🐘",
    "MongoDB": "🍃",
    "Redis": "🔴",
    "Prisma": "⚡",
    "SQLite": "📄",
    "Machine Learning": "🤖",
    "Data Analysis": "📈",
    "TensorFlow": "🧠",
    "Pandas": "🐼",
    "NumPy": "🔢",
    "Git": "📝",
    "Docker": "🐳",
    "AWS": "☁️",
    "Vercel": "▲",
    "Linux": "🐧",
  }
  
  return <span className="text-2xl">{fallbackIcons[skillName] || "💻"}</span>
}
