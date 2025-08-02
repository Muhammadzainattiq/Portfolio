"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Eye } from "lucide-react"

interface Project3DProps {
  project: {
    id: number
    title: string
    description: string
    category: string
    image: string
    tech: string[]
    link: string
    featured?: boolean
    github?: string
    stars?: number
  }
  index: number
}

export default function Project3D({ project, index }: Project3DProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getImageClass = (imagePath: string | undefined) => {
    if (!imagePath) return "project-image"

    // New images with enhanced styling
    if (imagePath.includes("gift-suggestion-llm")) return "project-image gift-ai-image"
    if (imagePath.includes("ai-invoice-extractor")) return "project-image invoice-workspace-image"
    if (imagePath.includes("ai-powered-dynamic-quiz")) return "project-image dynamic-quiz-image"
    if (imagePath.includes("youtube-video-to-article")) return "project-image robot-creative-image"
    if (imagePath.includes("blog-post-generator")) return "project-image blog-ai-image"
    if (imagePath.includes("custom-qa-gemini-chatbot")) return "project-image business-chatbot-image"

    // Existing images
    if (imagePath.includes("ai-error-solver")) return "project-image ai-brain-image"
    if (imagePath.includes("ai-student-examiner")) return "project-image classroom-image"
    if (imagePath.includes("youtube-video-summarizer")) return "project-image tech-logo-image"
    if (imagePath.includes("ai-image-to-story")) return "project-image creative-art-image"
    if (imagePath.includes("number-guessing-game")) return "project-image colorful-game-image"
    if (imagePath.includes("gemini-talk-images")) return "project-image sleek-device-image"
    if (imagePath.includes("gemini-rag-pdf")) return "project-image ai-robot-image"
    if (imagePath.includes("web-article-summarizer")) return "project-image workspace-image"
    if (imagePath.includes("world-cup-2024-eda")) return "project-image sports-trophy-image"
    if (imagePath.includes("usa-housing-ml")) return "project-image housing-image"
    if (imagePath.includes("titanic-survival-ml")) return "project-image titanic-image"
    if (imagePath.includes("salary-prediction-ml")) return "project-image ml-network-image"
    if (imagePath.includes("agentic-workflows")) return "project-image workflow-image"

    return "project-image screenshot-image"
  }

  const getObjectFit = (imagePath: string | undefined): "cover" | "contain" => {
    if (!imagePath) return "cover"

    // Use contain for images that need to show full content without cropping
    if (
      imagePath.includes("salary-prediction-ml") ||
      imagePath.includes("agentic-workflows") ||
      imagePath.includes("youtube-video-summarizer") ||
      imagePath.includes("number-guessing-game") ||
      imagePath.includes("gemini-talk-images") ||
      imagePath.includes("ai-powered-dynamic-quiz") ||
      imagePath.includes("youtube-video-to-article")
    ) {
      return "contain"
    }

    return "cover"
  }

  const getObjectPosition = (imagePath: string | undefined) => {
    if (!imagePath) return "center"
    return "center"
  }

  const getHoverScale = (imagePath: string | undefined) => {
    if (!imagePath) return 1.05

    // Subtle scaling for contain images to avoid distortion
    if (
      imagePath.includes("salary-prediction-ml") ||
      imagePath.includes("agentic-workflows") ||
      imagePath.includes("youtube-video-summarizer") ||
      imagePath.includes("gemini-talk-images") ||
      imagePath.includes("ai-powered-dynamic-quiz") ||
      imagePath.includes("youtube-video-to-article")
    ) {
      return 1.02
    }

    return 1.05
  }

  const getHoverFilter = (imagePath: string | undefined) => {
    if (!imagePath) return "brightness(1.1)"

    // New images with specific filters
    if (imagePath.includes("gift-suggestion-llm")) return "brightness(1.1) contrast(1.05) saturate(1.2)"
    if (imagePath.includes("ai-invoice-extractor")) return "brightness(1.1) contrast(1.05)"
    if (imagePath.includes("ai-powered-dynamic-quiz")) return "brightness(1.05) contrast(1.02) saturate(1.1)"
    if (imagePath.includes("youtube-video-to-article")) return "brightness(1.1) contrast(1.05) saturate(1.15)"
    if (imagePath.includes("blog-post-generator")) return "brightness(1.1) contrast(1.05) saturate(1.1)"
    if (imagePath.includes("custom-qa-gemini-chatbot")) return "brightness(1.1) contrast(1.05)"

    // Existing images
    if (imagePath.includes("ai-error-solver")) return "brightness(1.1) contrast(1.05) saturate(1.1)"
    if (imagePath.includes("ai-student-examiner")) return "brightness(1.1) contrast(1.05)"
    if (imagePath.includes("youtube-video-summarizer")) return "brightness(1.05) contrast(1.02) saturate(1.05)"
    if (imagePath.includes("ai-image-to-story")) return "brightness(1.15) contrast(1.1) saturate(1.2)"
    if (imagePath.includes("number-guessing-game")) return "brightness(1.1) contrast(1.05) saturate(1.15)"
    if (imagePath.includes("gemini-talk-images")) return "brightness(1.05) contrast(1.02) saturate(1.1)"
    if (imagePath.includes("gemini-rag-pdf")) return "brightness(1.1) contrast(1.05) saturate(1.1)"
    if (imagePath.includes("web-article-summarizer")) return "brightness(1.1) contrast(1.05)"
    if (imagePath.includes("world-cup-2024-eda")) return "brightness(1.15) contrast(1.1) saturate(1.2)"
    if (imagePath.includes("usa-housing-ml")) return "brightness(1.1) contrast(1.05)"
    if (imagePath.includes("titanic-survival-ml")) return "brightness(1.2) contrast(1.1) sepia(0.1)"
    if (imagePath.includes("salary-prediction-ml")) return "brightness(1.05) contrast(1.02) saturate(1.1)"

    return "brightness(1.1) contrast(1.05)"
  }

  const getBackgroundGradient = (imagePath: string | undefined) => {
    if (!imagePath) return "from-purple-500/10 to-blue-500/10"

    // Special gradients for new images
    if (imagePath.includes("gift-suggestion-llm")) return "from-pink-500/10 to-purple-500/10"
    if (imagePath.includes("ai-invoice-extractor")) return "from-blue-500/10 to-cyan-500/10"
    if (imagePath.includes("ai-powered-dynamic-quiz")) return "from-indigo-500/10 to-purple-500/10"
    if (imagePath.includes("youtube-video-to-article")) return "from-orange-500/10 to-red-500/10"
    if (imagePath.includes("blog-post-generator")) return "from-violet-500/10 to-purple-500/10"
    if (imagePath.includes("custom-qa-gemini-chatbot")) return "from-teal-500/10 to-cyan-500/10"

    // Existing gradients
    if (imagePath.includes("ai-error-solver")) return "from-blue-500/10 to-cyan-500/10"
    if (imagePath.includes("ai-student-examiner")) return "from-green-500/10 to-emerald-500/10"
    if (imagePath.includes("youtube-video-summarizer")) return "from-red-500/10 to-orange-500/10"
    if (imagePath.includes("ai-image-to-story")) return "from-purple-500/10 to-pink-500/10"
    if (imagePath.includes("number-guessing-game")) return "from-yellow-500/10 to-orange-500/10"
    if (imagePath.includes("gemini-talk-images")) return "from-purple-500/10 to-violet-500/10"

    return "from-purple-500/10 to-blue-500/10"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -15,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card className="overflow-hidden backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 rounded-2xl transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-400/50 transform-gpu">
        <div className="relative overflow-hidden">
          <motion.div
            className={`relative w-full h-48 overflow-hidden bg-gradient-to-br ${getBackgroundGradient(project.image)}`}
          >
            <motion.img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className={`w-full h-full transition-transform duration-700 ${getImageClass(project.image)}`}
              style={{
                objectFit: getObjectFit(project.image),
                objectPosition: getObjectPosition(project.image),
              }}
              animate={{
                scale: isHovered ? getHoverScale(project.image) : 1,
                filter: isHovered ? getHoverFilter(project.image) : "brightness(1)",
              }}
              onLoad={(e) => {
                const img = e.target as HTMLImageElement
                img.style.opacity = "1"
              }}
              onError={(e) => {
                const img = e.target as HTMLImageElement
                img.src = "/placeholder.svg?height=300&width=400&text=" + encodeURIComponent(project.title)
              }}
            />

            {/* Enhanced gradient overlay */}
            <div
              className={`absolute inset-0 ${
                project.image?.includes("agentic-workflows") ||
                project.image?.includes("youtube-video-summarizer") ||
                project.image?.includes("youtube-video-to-article") ||
                project.image?.includes("ai-powered-dynamic-quiz")
                  ? "bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"
                  : "bg-gradient-to-t from-black/60 via-transparent to-transparent"
              } opacity-60`}
            />
          </motion.div>

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg z-20"
            >
              <Star className="inline w-3 h-3 mr-1" />
              Featured
            </motion.div>
          )}

          {/* Action Button - Always show Review button */}
          <motion.div
            className="absolute top-4 right-4 z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Button
              size="sm"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 text-white shadow-lg"
              asChild={project.link && project.link !== "#"}
              disabled={!project.link || project.link === "#"}
            >
              {project.link && project.link !== "#" ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Eye className="h-4 w-4" />
                </a>
              ) : (
                <span className="flex items-center justify-center">
                  <Eye className="h-4 w-4" />
                </span>
              )}
            </Button>
          </motion.div>

          {/* Project Stats */}
          {project.stars && (
            <motion.div
              className="absolute bottom-4 left-4 flex items-center space-x-1 text-white z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{project.stars}</span>
            </motion.div>
          )}
        </div>

        <div className="p-6">
          <motion.h3
            className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-green-400 transition-colors duration-300"
            animate={{ y: isHovered ? -2 : 0 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
            animate={{ y: isHovered ? -2 : 0 }}
            transition={{ delay: 0.05 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            animate={{ y: isHovered ? -2 : 0 }}
            transition={{ delay: 0.1 }}
          >
            {project.tech.map((tech, techIndex) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-400/30 hover:border-green-400/50 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>

          {/* Bottom Action Button - Always show Review button */}
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
}
