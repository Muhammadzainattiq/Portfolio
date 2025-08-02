"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTransform } from "framer-motion"

interface TimelineItem {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

interface TimelineParallaxProps {
  items: TimelineItem[]
  title: string
}

export default function TimelineParallax({ items, title }: TimelineParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const dotY = useTransform(scrollYProgress, [0, 1], [0, -20])

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-violet-400 bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {title === "Professional Experience"
              ? "Journey through cutting-edge AI development and technical leadership roles"
              : "Academic foundation and specialized training in AI and computer science"}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-violet-400"
            style={{ y }}
          />

          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-start ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="relative z-10 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  style={{ y: dotY }}
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div className={`flex-1 ${index % 2 === 0 ? "ml-8" : "mr-8"} max-w-2xl`} whileHover={{ y: -5 }}>
                  <Card className="p-8 backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
                    <div className="mb-4">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-2">
                        {item.period}
                      </Badge>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{item.title}</h3>
                      <p className="text-lg text-green-400 font-semibold">{item.company}</p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{item.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Achievements:</h4>
                      {item.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achievementIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
