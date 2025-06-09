"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/portfolio"

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

const filterCategories = [
  "All",
  "Featured",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "E-commerce",
  "Portfolio",
]

export function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = 
      selectedFilter === "All" ||
      (selectedFilter === "Featured" && project.featured) ||
      project.technologies.some(tech => 
        tech.toLowerCase().includes(selectedFilter.toLowerCase())
      ) ||
      project.title.toLowerCase().includes(selectedFilter.toLowerCase()) ||
      project.description.toLowerCase().includes(selectedFilter.toLowerCase())

    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => 
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )

    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills and passion for web development
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <Filter className="h-4 w-4 text-muted-foreground mr-2 mt-2" />
              {filterCategories.map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter)}
                  className="hover:scale-105 transition-transform"
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter + searchTerm}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 h-full flex flex-col">
                  {/* Project Image/Preview */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-600/20 relative overflow-hidden">
                    {project.featured && (
                      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-primary to-blue-600">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-6xl opacity-50">
                        {getProjectIcon(project.title)}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            asChild
                            className="bg-white text-black hover:bg-white/90"
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Live
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="bg-white/10 border-white text-white hover:bg-white/20"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3 w-3 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <CardHeader className="flex-grow">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 hover:scale-105 transition-transform"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className={`hover:scale-105 transition-transform ${
                            project.liveUrl ? "flex-none" : "flex-1"
                          }`}
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters
            </p>
          </motion.div>
        )}

        {/* Project Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-16 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {projects.length}
              </div>
              <div className="text-muted-foreground">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-muted-foreground">Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {Array.from(new Set(projects.flatMap(p => p.technologies))).length}
              </div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {projects.filter(p => p.liveUrl).length}
              </div>
              <div className="text-muted-foreground">Live Demos</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

function getProjectIcon(title: string) {
  if (title.toLowerCase().includes("ecommerce") || title.toLowerCase().includes("e-commerce")) return "🛒"
  if (title.toLowerCase().includes("news") || title.toLowerCase().includes("barta")) return "📰"
  if (title.toLowerCase().includes("professor") || title.toLowerCase().includes("portfolio")) return "👨‍🏫"
  if (title.toLowerCase().includes("luxury") || title.toLowerCase().includes("luxe")) return "🏨"
  if (title.toLowerCase().includes("task") || title.toLowerCase().includes("manager")) return "📋"
  if (title.toLowerCase().includes("weather")) return "🌤️"
  if (title.toLowerCase().includes("ai") || title.toLowerCase().includes("content")) return "🤖"
  return "🚀"
}
