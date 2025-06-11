"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Coffee, Code, Heart, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { skills } from "@/data/portfolio"

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

const stats = [
  { icon: Code, label: "Projects Completed", value: "20+" },
  { icon: Trophy, label: "Research Papers", value: "8+" },
  { icon: Calendar, label: "Years Experience", value: "3+" },
  { icon: Heart, label: "Research Collaborations", value: "10+" },
]

const skillCategories = [
  { name: "Frontend", skills: skills.filter(s => s.category === "frontend") },
  { name: "Backend", skills: skills.filter(s => s.category === "backend") },
  { name: "AI & Machine Learning", skills: skills.filter(s => s.category === "ai") },
  { name: "Database", skills: skills.filter(s => s.category === "database") },
  { name: "Tools & Cloud", skills: skills.filter(s => s.category === "tools" || s.category === "cloud") },
]

const getSkillLevel = (level: string) => {
  switch (level) {
    case "expert": return 95
    case "advanced": return 80
    case "intermediate": return 65
    case "beginner": return 40
    default: return 50
  }
}

export function AboutPage() {
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
            About{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer & Research Scientist passionate about AI/ML research, data analysis, and innovative solutions
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Personal Story */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  My Journey
                </CardTitle>
              </CardHeader>              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Hi! I'm <strong className="text-foreground">Touhidul Alam Seyam</strong>, 
                  a passionate <strong className="text-primary">Full Stack Developer & Research Scientist</strong> with extensive experience in 
                  AI/ML research, data analysis, and web development. My journey spans from building scalable web applications 
                  to conducting cutting-edge research in artificial intelligence and machine learning.
                </p>
                <p>
                  As a <strong className="text-primary">published researcher</strong> with <strong className="text-primary">8+ publications</strong> in 
                  prestigious venues like <strong className="text-foreground">IEEE conferences</strong>, <strong className="text-foreground">Springer journals</strong>, and 
                  <strong className="text-foreground">arXiv</strong>, I bridge the gap between academic research and practical applications. 
                  My research focuses on <strong className="text-primary">Computer Vision</strong>, <strong className="text-primary">Healthcare AI</strong>, 
                  <strong className="text-primary">Agricultural Technology</strong>, and <strong className="text-primary">Big Data Analytics</strong>.
                </p>
                <p>
                  My technical expertise includes <strong className="text-primary">data scraping and automation</strong>, 
                  <strong className="text-primary">machine learning model development</strong>, and <strong className="text-primary">statistical analysis</strong>. 
                  I've worked on diverse projects from plant disease detection using CNNs to tuberculosis risk prediction 
                  and LLM optimization techniques. I'm proficient in Python libraries like TensorFlow, Pandas, NumPy, 
                  and web scraping tools.
                </p>
                <p>
                  When I'm not researching or coding, you'll find me exploring new AI technologies, 
                  contributing to open-source projects, or collaborating with fellow researchers. 
                  I'm passionate about applying AI/ML solutions to solve real-world problems in healthcare, 
                  agriculture, and technology.
                </p>                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    Based in Bangladesh
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Available for Research Collaborations
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Trophy className="h-3 w-3" />
                    8+ Published Papers
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <stat.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* What I Do */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle>What I Do</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="font-medium">Frontend Development</div>
                  <div className="text-sm text-muted-foreground">
                    React, Next.js, TypeScript
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Backend Development</div>
                  <div className="text-sm text-muted-foreground">
                    Node.js, Express, APIs
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">UI/UX Design</div>
                  <div className="text-sm text-muted-foreground">
                    Figma, Responsive Design
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              >
                <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + skillIndex * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <Badge 
                            variant={
                              skill.level === "expert" ? "default" :
                              skill.level === "advanced" ? "secondary" : "outline"
                            }
                            className="text-xs"
                          >
                            {skill.level}
                          </Badge>
                        </div>
                        <Progress 
                          value={getSkillLevel(skill.level)} 
                          className="h-2"
                        />
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Interests */}
        <motion.div variants={itemVariants}>
          <Card className="border-2 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-center">Beyond Coding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-2"
                >
                  <div className="text-4xl">🚀</div>
                  <h3 className="font-semibold">Tech Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Always exploring cutting-edge technologies and frameworks
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-2"
                >
                  <div className="text-4xl">🌱</div>
                  <h3 className="font-semibold">Open Source</h3>
                  <p className="text-sm text-muted-foreground">
                    Contributing to the developer community through open source
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-2"
                >
                  <div className="text-4xl">📚</div>
                  <h3 className="font-semibold">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Constantly learning new skills and improving existing ones
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
