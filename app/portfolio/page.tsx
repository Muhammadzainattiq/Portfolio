"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ExternalLink,
  Star,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Sparkles,
  Filter,
  Search,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import InteractiveBackground from "@/components/InteractiveBackground"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  const portfolioProjects = [
    {
      id: 1,
      title: "ExamineAI",
      description:
        "Revolutionary AI-powered examination and assessment platform with intelligent grading, real-time analytics, adaptive learning capabilities, and automated question generation.",
      category: "ai",
      image: "/images/examine-ai.png",
      tech: ["FastAPI", "LangChain", "Next.js", "Docker", "PostgreSQL", "Redis"],
      link: "https://examini-ai-804.vercel.app",
      github: "https://github.com/alihaider/examine-ai",
      stars: 245,
      featured: true,
      year: "2024",
      client: "Educational Institutions",
      impact: "10,000+ students assessed",
      status: "Live",
    },
    {
      id: 2,
      title: "PersonaAgent 2",
      description:
        "Advanced AI-powered personality discovery platform featuring conversational assessment, insightful analysis, and quick personality type identification through natural dialogue with intelligent AI agents.",
      category: "ai",
      image: "/images/persona-agent-2.png",
      tech: ["LangGraph", "CrewAI", "FastAPI", "OpenAI", "Redis"],
      link: "https://persona-agent.vercel.app/",
      github: "https://github.com/zainattiq/persona-agent",
      stars: 189,
      featured: true,
      year: "2024",
      client: "Psychology & HR Firms",
      impact: "5,000+ personality assessments completed",
      status: "Live",
    },
    {
      id: 3,
      title: "Headline AI",
      description:
        "Advanced content generation system using state-of-the-art NLP models for creating compelling headlines, marketing copy, and social media content with A/B testing capabilities.",
      category: "ai",
      image: "/images/headline-ai.png",
      tech: ["LangChain", "FastAPI", "React", "OpenAI", "Redis", "MongoDB"],
      link: "https://headline-ai-fe.vercel.app",
      github: "https://github.com/alihaider/headline-ai",
      stars: 156,
      featured: true,
      year: "2024",
      client: "Marketing Agencies",
      impact: "500% content efficiency",
      status: "Live",
    },
    {
      id: 4,
      title: "E-Commerce AI",
      description:
        "Comprehensive AI-driven e-commerce solution featuring personalized product recommendations, automated customer service chatbots, inventory optimization, and predictive analytics.",
      category: "ai",
      image: "/images/ecommerce-ai.webp",
      tech: ["LangGraph", "FastAPI", "Next.js", "Kafka", "MongoDB", "Stripe"],
      link: "#",
      github: "https://github.com/alihaider/ecommerce-ai",
      stars: 312,
      featured: false,
      year: "2023",
      client: "E-commerce Platforms",
      impact: "40% sales increase",
      status: "Live",
    },
    {
      id: 5,
      title: "Agentic AI Workflows",
      description:
        "Sophisticated multi-agent systems for business process automation, featuring collaborative AI agents, workflow orchestration, and intelligent task delegation.",
      category: "ai",
      image: "/images/agentic-workflows.webp",
      tech: ["LangChain", "LangGraph", "Python", "Docker", "Celery", "PostgreSQL"],
      link: "#",
      github: "https://github.com/alihaider/agentic-workflows",
      stars: 156,
      featured: false,
      year: "2023",
      client: "Enterprise Clients",
      impact: "60% process automation",
      status: "Live",
    },
    {
      id: 6,
      title: "Conversational Personality Analyzer",
      description:
        "Intelligent AI system that engages users in natural conversations to analyze personality types, providing detailed insights into behavioral patterns, communication styles, and personal growth recommendations.",
      category: "ai",
      image: "/images/ai-personality-app.png",
      tech: ["GPT-4", "Psychology Models", "React", "Node.js", "MongoDB", "WebSocket"],
      link: "#",
      github: "https://github.com/zainattiq/personality-analyzer",
      stars: 198,
      featured: false,
      year: "2024",
      client: "Coaching & Development",
      impact: "3,000+ users analyzed",
      status: "Live",
    },
    {
      id: 7,
      title: "AI-Powered Healthcare Assistant",
      description: "Virtual assistant for healthcare providers, automating tasks and improving patient care.",
      category: "ai",
      image: "/images/healthcare-ai.jpg",
      tech: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
      link: "#",
      github: "#",
      stars: 98,
      featured: false,
      year: "2022",
      client: "Hospitals",
      impact: "25% reduction in administrative tasks",
      status: "Live",
    },
    {
      id: 8,
      title: "Smart City Traffic Management",
      description: "AI-based system for optimizing traffic flow and reducing congestion in urban areas.",
      category: "ai",
      image: "/images/traffic-ai.jpg",
      tech: ["Java", "Spark", "Kafka", "Cassandra"],
      link: "#",
      github: "#",
      stars: 145,
      featured: false,
      year: "2022",
      client: "City Governments",
      impact: "15% improvement in traffic flow",
      status: "Live",
    },
    {
      id: 9,
      title: "Financial Fraud Detection",
      description: "Machine learning model for detecting fraudulent transactions in real-time.",
      category: "ml",
      image: "/images/fraud-detection.jpg",
      tech: ["Python", "Scikit-learn", "Pandas", "AWS"],
      link: "#",
      github: "#",
      stars: 210,
      featured: true,
      year: "2023",
      client: "Financial Institutions",
      impact: "30% reduction in fraud losses",
      status: "Live",
    },
    {
      id: 10,
      title: "Predictive Maintenance for Manufacturing",
      description: "AI-driven system for predicting equipment failures and optimizing maintenance schedules.",
      category: "ml",
      image: "/images/predictive-maintenance.jpg",
      tech: ["R", "Azure ML", "SQL Server"],
      link: "#",
      github: "#",
      stars: 120,
      featured: false,
      year: "2022",
      client: "Manufacturing Plants",
      impact: "20% reduction in maintenance costs",
      status: "Live",
    },
    {
      id: 11,
      title: "AI-Enhanced Customer Support Chatbot",
      description: "Intelligent chatbot providing instant customer support and resolving queries efficiently.",
      category: "ai",
      image: "/images/chatbot-ai.jpg",
      tech: ["Node.js", "Dialogflow", "MongoDB", "React"],
      link: "#",
      github: "#",
      stars: 175,
      featured: false,
      year: "2023",
      client: "Various Businesses",
      impact: "40% reduction in support tickets",
      status: "Live",
    },
    {
      id: 12,
      title: "Personalized Education Platform",
      description: "Adaptive learning platform providing personalized educational content to students.",
      category: "ai",
      image: "/images/education-ai.jpg",
      tech: ["Python", "Django", "PostgreSQL", "React"],
      link: "#",
      github: "#",
      stars: 250,
      featured: true,
      year: "2024",
      client: "Educational Institutions",
      impact: "35% improvement in student performance",
      status: "Live",
    },
    {
      id: 13,
      title: "AI-Driven Agricultural Optimization",
      description: "System for optimizing crop yields and resource utilization in agriculture.",
      category: "ai",
      image: "/images/agriculture-ai.jpg",
      tech: ["Python", "TensorFlow", "AWS", "Satellite Imagery"],
      link: "#",
      github: "#",
      stars: 110,
      featured: false,
      year: "2022",
      client: "Farms",
      impact: "18% increase in crop yields",
      status: "Live",
    },
    {
      id: 14,
      title: "Supply Chain Optimization with AI",
      description: "AI-based system for optimizing supply chain operations and reducing costs.",
      category: "ai",
      image: "/images/supply-chain-ai.jpg",
      tech: ["Java", "Spark", "Hadoop", "Cassandra"],
      link: "#",
      github: "#",
      stars: 130,
      featured: false,
      year: "2023",
      client: "Logistics Companies",
      impact: "22% reduction in supply chain costs",
      status: "Live",
    },
    {
      id: 15,
      title: "AI-Powered Cybersecurity Threat Detection",
      description: "Real-time threat detection system using machine learning to identify and prevent cyberattacks.",
      category: "ml",
      image: "/images/cybersecurity-ai.jpg",
      tech: ["Python", "Scikit-learn", "Kafka", "Elasticsearch"],
      link: "#",
      github: "#",
      stars: 190,
      featured: true,
      year: "2024",
      client: "Security Firms",
      impact: "28% reduction in security breaches",
      status: "Live",
    },
    {
      id: 16,
      title: "AI-Driven Drug Discovery Platform",
      description: "Platform accelerating drug discovery using AI and machine learning techniques.",
      category: "ai",
      image: "/images/drug-discovery-ai.jpg",
      tech: ["Python", "TensorFlow", "Keras", "AWS"],
      link: "#",
      github: "#",
      stars: 160,
      featured: false,
      year: "2023",
      client: "Pharmaceutical Companies",
      impact: "15% acceleration in drug discovery process",
      status: "Live",
    },
    {
      id: 17,
      title: "Smart Home Automation System",
      description: "AI-powered system for automating and optimizing home functions.",
      category: "ai",
      image: "/images/smart-home-ai.jpg",
      tech: ["Node.js", "MQTT", "Raspberry Pi", "React"],
      link: "#",
      github: "#",
      stars: 140,
      featured: false,
      year: "2022",
      client: "Homeowners",
      impact: "20% reduction in energy consumption",
      status: "Live",
    },
    {
      id: 18,
      title: "AI-Based Image Recognition System",
      description: "System for recognizing and classifying images using deep learning.",
      category: "ml",
      image: "/images/image-recognition-ai.jpg",
      tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
      link: "#",
      github: "#",
      stars: 220,
      featured: true,
      year: "2023",
      client: "Various Industries",
      impact: "30% improvement in image recognition accuracy",
      status: "Live",
    },
    {
      id: 19,
      title: "AI-Powered Legal Assistant",
      description: "Virtual assistant for legal professionals, automating tasks and improving efficiency.",
      category: "ai",
      image: "/images/legal-ai.jpg",
      tech: ["Python", "LangChain", "FastAPI", "PostgreSQL"],
      link: "#",
      github: "#",
      stars: 105,
      featured: false,
      year: "2024",
      client: "Law Firms",
      impact: "25% reduction in administrative tasks",
      status: "Live",
    },
    {
      id: 20,
      title: "AI-Driven Content Recommendation System",
      description: "System for recommending personalized content to users based on their preferences.",
      category: "ai",
      image: "/images/content-recommendation-ai.jpg",
      tech: ["Python", "Spark", "Kafka", "MongoDB"],
      link: "#",
      github: "#",
      stars: 155,
      featured: false,
      year: "2023",
      client: "Media Companies",
      impact: "20% increase in user engagement",
      status: "Live",
    },
    {
      id: 21,
      title: "AI-Enhanced Voice Assistant",
      description: "Intelligent voice assistant providing instant support and resolving queries efficiently.",
      category: "ai",
      image: "/images/voice-assistant-ai.jpg",
      tech: ["Node.js", "Dialogflow", "MongoDB", "React"],
      link: "#",
      github: "#",
      stars: 180,
      featured: false,
      year: "2024",
      client: "Various Businesses",
      impact: "40% reduction in support tickets",
      status: "Live",
    },
    {
      id: 22,
      title: "Personalized Fitness Platform",
      description: "Adaptive platform providing personalized fitness content to users.",
      category: "ai",
      image: "/images/fitness-ai.jpg",
      tech: ["Python", "Django", "PostgreSQL", "React"],
      link: "#",
      github: "#",
      stars: 260,
      featured: true,
      year: "2024",
      client: "Fitness Centers",
      impact: "35% improvement in user performance",
      status: "Live",
    },
    {
      id: 23,
      title: "AI-Driven Environmental Monitoring",
      description: "System for monitoring environmental conditions and optimizing resource utilization.",
      category: "ai",
      image: "/images/environmental-ai.jpg",
      tech: ["Python", "TensorFlow", "AWS", "Satellite Imagery"],
      link: "#",
      github: "#",
      stars: 115,
      featured: false,
      year: "2023",
      client: "Environmental Agencies",
      impact: "18% increase in resource efficiency",
      status: "Live",
    },
    {
      id: 24,
      title: "AI-Based Financial Trading System",
      description: "System for optimizing financial trading operations and reducing costs.",
      category: "ai",
      image: "/images/trading-ai.jpg",
      tech: ["Java", "Spark", "Hadoop", "Cassandra"],
      link: "#",
      github: "#",
      stars: 135,
      featured: false,
      year: "2024",
      client: "Financial Institutions",
      impact: "22% reduction in trading costs",
      status: "Live",
    },
    {
      id: 25,
      title: "AI-Powered Cybersecurity Incident Response",
      description: "Real-time incident response system using machine learning to identify and prevent cyberattacks.",
      category: "ml",
      image: "/images/incident-response-ai.jpg",
      tech: ["Python", "Scikit-learn", "Kafka", "Elasticsearch"],
      link: "#",
      github: "#",
      stars: 195,
      featured: true,
      year: "2024",
      client: "Security Firms",
      impact: "28% reduction in security incidents",
      status: "Live",
    },
    {
      id: 26,
      title: "AI-Driven Materials Discovery Platform",
      description: "Platform accelerating materials discovery using AI and machine learning techniques.",
      category: "ai",
      image: "/images/materials-discovery-ai.jpg",
      tech: ["Python", "TensorFlow", "Keras", "AWS"],
      link: "#",
      github: "#",
      stars: 165,
      featured: false,
      year: "2024",
      client: "Materials Science Companies",
      impact: "15% acceleration in materials discovery process",
      status: "Live",
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: "26+ AI Projects",
      description: "Successfully delivered across various industries",
    },
    {
      icon: Users,
      title: "20+ Clients",
      description: "Served globally with 99.5% satisfaction rate",
    },
    {
      icon: TrendingUp,
      title: "$1M+ Revenue",
      description: "Generated for clients through AI solutions",
    },
    {
      icon: Star,
      title: "4.9/5 Rating",
      description: "Average client satisfaction score",
    },
  ]

  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      <InteractiveBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-gray-900/10 border-b border-white/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <Button variant="ghost" size="sm" asChild className="text-gray-700 dark:text-gray-300 hover:text-green-400">
              <a href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-green-400 to-violet-400 bg-clip-text text-transparent"
          >
            <Sparkles className="inline w-6 h-6 mr-2 text-green-400" />
            Portfolio
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
                filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))",
              }}
            >
              Portfolio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Explore our comprehensive portfolio showcasing 26+ innovative AI solutions that have transformed
              businesses, automated processes, and delivered exceptional results across diverse industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 rounded-xl hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 text-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <achievement.icon className="h-8 w-8 text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-10 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full md:w-96"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 focus:border-green-400 rounded-xl"
              />
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-2"
            >
              {[
                { key: "all", label: "All Projects", icon: Filter },
                { key: "ai", label: "AI Solutions", icon: Sparkles },
                { key: "ml", label: "ML Models", icon: TrendingUp },
                { key: "web", label: "Web Apps", icon: ExternalLink },
              ].map((filter) => (
                <motion.div key={filter.key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={activeFilter === filter.key ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`rounded-full px-4 py-2 transition-all duration-300 flex items-center space-x-2 ${
                      activeFilter === filter.key
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25"
                        : "backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-green-400/30 hover:border-green-400/50 hover:text-green-400"
                    }`}
                  >
                    <filter.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{filter.label}</span>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-violet-400 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of AI solutions that have delivered measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => {
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <Card className="overflow-hidden backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 rounded-2xl transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-400/50 h-full">
                      <div className="relative overflow-hidden">
                        <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                            style={{
                              objectFit: project.image?.includes("agentic-workflows") ? "contain" : "cover",
                              objectPosition: project.image?.includes("agentic-workflows") ? "center" : "center top",
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-green-500/20 text-green-400 border border-green-400/30">
                            {project.status}
                          </Badge>
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white">
                              <Star className="inline w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}

                        {/* Project Stats */}
                        <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white">
                          {project.stars && (
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{project.stars}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{project.year}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 hover:text-green-400 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Client:</span>
                            <span className="font-medium text-green-400">{project.client}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Impact:</span>
                            <span className="font-medium text-violet-400">{project.impact}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-400/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge variant="outline" className="border-gray-400/30 text-gray-400">
                              +{project.tech.length - 3} more
                            </Badge>
                          )}
                        </div>

                        {/* Only Review Button */}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                            asChild={project.link && project.link !== "#"}
                            disabled={!project.link || project.link === "#"}
                          >
                            {project.link && project.link !== "#" ? (
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <Eye className="h-4 w-4 mr-2" />
                                Review
                              </a>
                            ) : (
                              <span className="flex items-center justify-center">
                                <Eye className="h-4 w-4 mr-2" />
                                Review
                              </span>
                            )}
                          </Button>
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400">No projects found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-12 backdrop-blur-md bg-gradient-to-r from-green-500/10 to-violet-500/10 border border-green-400/20 rounded-2xl shadow-xl">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-violet-400 bg-clip-text text-transparent mb-6">
                Let's Create Something Amazing
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Ready to join our portfolio of successful AI implementations? Let's discuss your project and create the
                next breakthrough solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:alihaider372372@gmail.com?subject=Project Collaboration Inquiry">
                      Start Your Project
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-violet-400/30 hover:border-violet-400/50 hover:text-violet-400 transition-all duration-300"
                    asChild
                  >
                    <a href="/ai-solutions">Explore Solutions</a>
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
