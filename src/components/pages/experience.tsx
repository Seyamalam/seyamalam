"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink, Briefcase, GraduationCap, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { experiences } from "@/data/portfolio"

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
    institution: "Computer Science & Engineering",
    degree: "Bachelor's Degree",
    period: "2019 - 2023",
    description: "Focused on software engineering, algorithms, and web technologies. Graduated with honors.",
    achievements: ["Dean's List", "Web Development Club President", "Final Year Project Excellence Award"]
  }
]

const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-DEV-2024",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md"
  },
  {
    name: "React Professional Certificate",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-REACT-2023",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md"
  },
  {
    name: "Node.js Application Development",
    issuer: "IBM",
    date: "2023",
    credentialId: "IBM-NODE-2023",
    link: "https://github.com/Seyamalam/Certificates/blob/main/README.md"
  }
]

export function ExperiencePage() {
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
        </motion.div>

        {/* Certifications */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-2 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <div className="space-y-2">
                      <Badge variant="secondary">{cert.issuer}</Badge>
                      <Badge variant="outline">{cert.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        Credential ID: {cert.credentialId}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full hover:scale-105 transition-transform"
                      >
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-2" />
                          View Credential
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-blue-600 hover:scale-105 transition-transform"
                  >
                    Download Resume
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
