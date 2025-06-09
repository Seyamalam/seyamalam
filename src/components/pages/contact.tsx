"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site.config"

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

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    subtitle: "Drop me a line",
    value: "seyamalam41@gmail.com",
    href: "mailto:seyamalam.41@gmail.com",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Github,
    title: "GitHub",
    subtitle: "Check out my code",
    value: "@Seyamalam",
    href: siteConfig.socials.github,
    color: "text-gray-600 dark:text-gray-400",
    bgColor: "bg-gray-500/10"
  },
  {
    icon: Twitter,
    title: "Twitter/X",
    subtitle: "Let's connect",
    value: "@seyamalam",
    href: siteConfig.socials.x,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "Professional network",
    value: "Touhidul Alam Seyam",
    href: "https://linkedin.com/in/seyamalam",
    color: "text-blue-600",
    bgColor: "bg-blue-600/10"
  }
]

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I offer full-stack web development, including frontend development with React/Next.js, backend development with Node.js, and complete web application solutions."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A simple website might take 1-2 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline after understanding your requirements."
  },
  {
    question: "Do you work with teams or just solo?",
    answer: "I work both solo and as part of teams. I'm comfortable collaborating with designers, project managers, and other developers to deliver the best results."
  },
  {
    question: "What's your availability?",
    answer: "I'm currently available for new projects and freelance work. I typically respond to inquiries within 24 hours and can start new projects within 1-2 weeks."
  }
]

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    
    // Show success message (you'd implement this with a toast)
    alert("Thank you for your message! I'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
            Get In{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:scale-105 transition-transform"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <motion.div variants={itemVariants}>
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Other Ways to Reach Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                    >
                      <div className={`p-2 rounded-lg ${method.bgColor}`}>
                        <method.icon className={`h-4 w-4 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {method.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {method.subtitle}
                        </div>
                        <div className="text-sm font-mono">
                          {method.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Info */}
            <motion.div variants={itemVariants}>
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Based in Bangladesh</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Available for Freelance</Badge>
                    <Badge variant="secondary">Remote Work</Badge>
                    <Badge variant="secondary">Full-time Opportunities</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Response time: Usually within 24 hours
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="space-y-2"
                  >
                    <h3 className="font-semibold text-primary">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
