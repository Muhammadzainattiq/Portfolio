"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Brain,
  Cpu,
  Zap,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Shield,
  Sparkles,
  Bot,
  MessageSquare,
  BarChart3,
  Workflow,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import InteractiveBackground from "@/components/InteractiveBackground"

export default function AISolutions() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  const solutions = [
    {
      id: 1,
      title: "AI Agent Development",
      description:
        "Build intelligent autonomous agents that can perform complex tasks, make decisions, and interact with users naturally.",
      icon: Bot,
      features: [
        "Multi-agent orchestration",
        "Natural language processing",
        "Decision-making algorithms",
        "Task automation",
        "Context awareness",
        "Learning capabilities",
      ],
      technologies: ["LangChain", "CrewAI", "AutoGPT", "Semantic Kernel"],
      pricing: "Starting at $15,000",
      timeline: "4-8 weeks",
      category: "AI Automation",
    },
    {
      id: 2,
      title: "LLM Fine-Tuning & Optimization",
      description:
        "Custom model training and optimization for specific business domains with enhanced performance and accuracy.",
      icon: Cpu,
      features: [
        "Domain-specific training",
        "Performance optimization",
        "Model compression",
        "Custom datasets",
        "Evaluation metrics",
        "Deployment strategies",
      ],
      technologies: ["Transformers", "LoRA", "QLoRA", "PEFT", "Weights & Biases"],
      pricing: "Starting at $25,000",
      timeline: "6-12 weeks",
      category: "Machine Learning",
    },
    {
      id: 3,
      title: "Conversational AI Systems",
      description:
        "Advanced chatbots and virtual assistants with context awareness, multi-language support, and enterprise integration.",
      icon: MessageSquare,
      features: [
        "Multi-language support",
        "Context preservation",
        "Voice integration",
        "Sentiment analysis",
        "Knowledge base integration",
        "Analytics dashboard",
      ],
      technologies: ["OpenAI API", "Anthropic", "FastAPI", "WebSocket", "Redis"],
      pricing: "Starting at $12,000",
      timeline: "3-6 weeks",
      category: "Conversational AI",
    },
    {
      id: 4,
      title: "Predictive Analytics Platform",
      description:
        "ML-powered forecasting and business intelligence with real-time anomaly detection and automated reporting.",
      icon: BarChart3,
      features: [
        "Real-time forecasting",
        "Anomaly detection",
        "Automated reporting",
        "Interactive dashboards",
        "Data visualization",
        "Alert systems",
      ],
      technologies: ["Scikit-learn", "TensorFlow", "Apache Spark", "Grafana", "InfluxDB"],
      pricing: "Starting at $20,000",
      timeline: "5-10 weeks",
      category: "Analytics",
    },
    {
      id: 5,
      title: "Computer Vision Solutions",
      description:
        "Advanced image and video analysis for object detection, facial recognition, and automated quality control.",
      icon: Target,
      features: [
        "Object detection",
        "Facial recognition",
        "Quality control",
        "Real-time processing",
        "Custom model training",
        "Edge deployment",
      ],
      technologies: ["OpenCV", "YOLO", "TensorFlow", "PyTorch", "CUDA"],
      pricing: "Starting at $18,000",
      timeline: "4-8 weeks",
      category: "Computer Vision",
    },
    {
      id: 6,
      title: "Workflow Automation",
      description:
        "Intelligent process automation with AI-driven decision making and seamless integration with existing systems.",
      icon: Workflow,
      features: [
        "Process optimization",
        "Decision automation",
        "System integration",
        "Workflow orchestration",
        "Performance monitoring",
        "Scalable architecture",
      ],
      technologies: ["LangGraph", "Apache Airflow", "Docker", "Kubernetes", "FastAPI"],
      pricing: "Starting at $22,000",
      timeline: "6-10 weeks",
      category: "Automation",
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and optimize workflows to boost productivity by up to 400%",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built-in security measures and compliance with industry standards for data protection",
    },
    {
      icon: Users,
      title: "Scalable Solutions",
      description: "Designed to grow with your business and handle increasing workloads seamlessly",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Quick implementation with minimal disruption to existing business operations",
    },
  ]

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
            AI Solutions
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
              AI Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Transform your business with cutting-edge AI solutions designed to automate processes, enhance
              decision-making, and drive unprecedented growth through intelligent innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center space-x-8 pt-8"
            >
              {[
                { icon: Brain, label: "AI Models", count: "50+", color: "text-green-400" },
                { icon: Users, label: "Clients Served", count: "200+", color: "text-violet-400" },
                { icon: TrendingUp, label: "Success Rate", count: "99%", color: "text-emerald-400" },
                { icon: Star, label: "Satisfaction", count: "5.0", color: "text-purple-400" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center space-y-2 group cursor-pointer"
                >
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 ${item.color} group-hover:shadow-lg transition-all duration-300`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-bold ${item.color}`}>{item.count}</div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our AI Solutions?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
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
                    <benefit.icon className="h-8 w-8 text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
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
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs and industry requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="p-8 backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 rounded-2xl hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 h-full">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mr-4 border border-green-400/30"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <solution.icon className="h-6 w-6 text-green-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{solution.title}</h3>
                      <Badge variant="outline" className="mt-1 border-violet-400/50 text-violet-400">
                        {solution.category}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{solution.description}</p>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-400 border border-violet-400/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Starting Price:</span>
                      <span className="font-semibold text-green-400">{solution.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Timeline:</span>
                      <span className="font-semibold text-violet-400">{solution.timeline}</span>
                    </div>
                  </div>

                  <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
                      asChild
                    >
                      <a href="mailto:alihaider372372@gmail.com?subject=AI Solution Inquiry - {solution.title}">
                        Get Started
                      </a>
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Let's discuss how our AI solutions can revolutionize your operations, increase efficiency, and drive
                unprecedented growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:alihaider372372@gmail.com?subject=AI Solutions Consultation">
                      Schedule Consultation
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
                    <a href="/">Back to Home</a>
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
