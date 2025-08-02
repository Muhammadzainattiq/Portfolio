"use client"

import { type ReactNode, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SkillTooltipProps {
  children: ReactNode
  skill: {
    name: string
    level: number
    description: string
    technologies: string[]
  }
}

export default function SkillTooltip({ children, skill }: SkillTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
          >
            <div className="bg-gray-900 dark:bg-gray-800 text-white p-4 rounded-lg shadow-xl border border-green-400/20 min-w-[280px]">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-green-400">{skill.name}</h4>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                <motion.div
                  className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>

              <p className="text-sm text-gray-300 mb-3">{skill.description}</p>

              <div className="flex flex-wrap gap-1">
                {skill.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded border border-green-400/30"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-800"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
