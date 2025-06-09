import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, FileText, Calendar, MapPin, Users, BookOpen, Award, Target } from "lucide-react";
import { publications, researchProjects } from "@/data/portfolio";
import { Publication, ResearchProject } from "@/types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const getResearchAreaIcon = (area: string) => {
  switch (area.toLowerCase()) {
    case 'ai/ml':
      return '🤖';
    case 'healthcare':
      return '🏥';
    case 'agriculture':
      return '🌱';
    case 'cybersecurity':
      return '🔐';
    case 'big data':
      return '📊';
    case 'computer vision':
      return '👁️';
    case 'nlp':
      return '💬';
    default:
      return '🔬';
  }
};

const getVenueColor = (venue: string) => {
  if (venue.includes('IEEE')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
  if (venue.includes('Springer')) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
  if (venue.includes('arXiv')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
  return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
};

export default function Research() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6 mb-16"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
              className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-3xl"
            >
              🔬
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Research Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advancing technology through interdisciplinary research in AI/ML, Healthcare, Agriculture, and Cybersecurity
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Badge variant="secondary" className="text-sm">
                <BookOpen className="w-3 h-3 mr-1" />
                8+ Publications
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Award className="w-3 h-3 mr-1" />
                IEEE & Springer Author
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Users className="w-3 h-3 mr-1" />
                Collaborative Research
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Target className="w-3 h-3 mr-1" />
                5 Active Projects
              </Badge>
            </div>
          </motion.div>
        </motion.div>

        {/* Research Areas Overview */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center">
            Research Areas
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from(new Set(publications.map(pub => pub.researchArea))).map((area, index) => {
              const pubCount = publications.filter(pub => pub.researchArea === area).length;
              return (
                <motion.div key={area} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-2">{getResearchAreaIcon(area)}</div>
                      <CardTitle className="text-xl">{area}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge variant="secondary" className="mb-2">
                        {pubCount} Publication{pubCount > 1 ? 's' : ''}
                      </Badge>
                      <p className="text-sm text-muted-foreground">                        {area === 'ai' && 'Machine Learning, Deep Learning, Computer Vision'}
                        {area === 'healthcare' && 'Medical AI, Risk Prediction, Clinical Decision Support'}
                        {area === 'agriculture' && 'Precision Agriculture, Plant Disease Detection, Crop Management'}
                        {area === 'cybersecurity' && 'Malware Detection, Security Analytics, Threat Intelligence'}
                        {area === 'big-data' && 'Data Analytics, Clustering, Performance Optimization'}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Publications Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center">
            Featured Publications
          </motion.h2>
          
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 leading-tight">
                          {publication.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {publication.authors}
                          </div>
                          <Separator orientation="vertical" className="h-4" />
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {publication.year}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">                        <Badge className={getVenueColor(publication.venue || publication.publication)}>
                          {publication.venue || publication.publication}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {getResearchAreaIcon(publication.researchArea)} {publication.researchArea}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {publication.abstract}
                    </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                      {publication.keywords?.map((keyword: string, keyIndex: number) => (
                        <Badge key={keyIndex} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {publication.doi && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={publication.doi} target="_blank" rel="noopener noreferrer">
                            <FileText className="w-3 h-3 mr-1" />
                            DOI
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                      )}
                      {publication.arxivUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={publication.arxivUrl} target="_blank" rel="noopener noreferrer">
                            <FileText className="w-3 h-3 mr-1" />
                            arXiv
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Projects Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center">
            Active Research Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {researchProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {project.duration}
                          <Separator orientation="vertical" className="h-4" />
                          <MapPin className="w-3 h-3" />
                          {project.status}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {getResearchAreaIcon(project.researchArea)} {project.researchArea}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {project.collaborators && project.collaborators.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Collaborators:</h4>                          <div className="flex flex-wrap gap-1">
                            {project.collaborators.map((collab: string, collabIndex: number) => (
                              <Badge key={collabIndex} variant="outline" className="text-xs">
                                {collab}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Related Publications:</h4>                        <div className="space-y-1">
                          {project.relatedPublications?.map((pubIndex: number, relIndex: number) => {
                            const pub = publications[pubIndex];
                            return pub ? (
                              <p key={relIndex} className="text-xs text-muted-foreground">
                                • {pub.title} ({pub.year})
                              </p>
                            ) : null;
                          })}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold">
              Interested in <span className="text-primary">Collaboration</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing research opportunities, collaborations, and innovative projects 
              that push the boundaries of AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:scale-105 transition-transform">
                <Users className="w-4 h-4 mr-2" />
                Collaborate with Me
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                <FileText className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
