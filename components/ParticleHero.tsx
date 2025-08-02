"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 400
    canvas.height = 400

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
    }> = []

    const createParticle = (x: number, y: number) => {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 0,
        maxLife: Math.max(30, 60 + Math.random() * 60), // Ensure minimum life
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create new particles
      if (Math.random() < 0.1) {
        createParticle(canvas.width / 2 + (Math.random() - 0.5) * 100, canvas.height / 2 + (Math.random() - 0.5) * 100)
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        const alpha = 1 - particle.life / particle.maxLife
        const size = Math.max(0.5, 2 * alpha) // Ensure minimum positive size

        ctx.fillStyle = `rgba(34, 197, 94, ${alpha * 0.6})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fill()

        if (particle.life >= particle.maxLife) {
          particles.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  )
}
