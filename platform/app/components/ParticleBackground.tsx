"use client"
import React, { useRef, useEffect, useState, useCallback } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const [fps, setFps] = useState(60)
  const lastFrameTime = useRef(0)
  const frameCount = useRef(0)
  const fallbackToStatic = useRef(false)
  
  const colors = {
    primary: '#7c6ff0',    // 8% opacity
    secondary: '#4fd1e8',  // 5% opacity
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Handle resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
      }
    }

    handleResize()
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(canvas)

    let particles: Array<{x: number, y: number, vx: number, vy: number, radius: number, type: 'primary' | 'secondary'}> = []

    const initParticles = () => {
      const count = Math.min(Math.max(Math.floor((canvas.width * canvas.height) / 10000), 50), 80)
      particles = []
      for (let i = 0; i < count; i++) {
        const isPrimary = Math.random() > 0.5
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: Math.random() * 2 + 1,
          type: isPrimary ? 'primary' : 'secondary'
        })
      }
    }

    // FPS calculation
    const calculateFPS = (currentTime: number) => {
      frameCount.current++
      const delta = currentTime - lastFrameTime.current
      
      if (delta >= 1000) {
        setFps(Math.round((frameCount.current * 1000) / delta))
        frameCount.current = 0
        lastFrameTime.current = currentTime
        
        // FPS fallback
        if (fps < 30) {
          fallbackToStatic.current = true
        } else {
          fallbackToStatic.current = false
        }
      }
    }

    // Animation loop
    const animate = (currentTime: number) => {
      if (fallbackToStatic.current) {
        // Static gradient fallback
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        // Create gradient background
        const gradient = ctx.createRadialGradient(
          canvas.width * 0.1, canvas.height * 0.0, 0,
          canvas.width * 0.1, canvas.height * 0.0, canvas.width * 0.4
        )
        gradient.addColorStop(0, `rgba(77, 44, 227, 0.08)`)  // rgba(77,44,227,0.08)
        gradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        const gradient2 = ctx.createRadialGradient(
          canvas.width * 0.9, canvas.height * 0.8, 0,
          canvas.width * 0.9, canvas.height * 0.8, canvas.width * 0.3
        )
        gradient2.addColorStop(0, `rgba(57, 184, 253, 0.07)`)  // rgba(57,184,253,0.07)
        gradient2.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient2
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connections
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.2)'
      ctx.lineWidth = 0.5
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            const opacity = 1 - (distance / 150)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = particles[i].type === 'primary' ? `rgba(124, 111, 240, ${0.08 * opacity})` : `rgba(79, 209, 232, ${0.05 * opacity})`
            ctx.stroke()
          }
        }
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Mouse interaction
        const mouseX = canvas.width / 2
        const mouseY = canvas.height / 2
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distToMouse = Math.sqrt(dx * dx + dy * dy)
        
        if (distToMouse < 200) {
          const angle = Math.atan2(dy, dx)
          particle.vx += Math.cos(angle) * 0.02
          particle.vy += Math.sin(angle) * 0.02
        }
        
        // Bounce off edges
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.vx = -particle.vx
        }
        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.vy = -particle.vy
        }
        
        // Draw particle
        ctx.beginPath()
        const particleColor = particle.type === 'primary' ? colors.primary : colors.secondary
        const opacity = particle.type === 'primary' ? 0.08 : 0.05
        ctx.fillStyle = particleColor
        ctx.globalAlpha = opacity
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      })
      
      calculateFPS(currentTime)
      animationRef.current = requestAnimationFrame(animate)
    }

    const animationFrameId = requestAnimationFrame(animate)
    
    // Mouse hover effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      
      particles.forEach(particle => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 150) {
          const brightness = 1 + (150 - dist) / 150
          ctx.save()
          ctx.globalCompositeOperation = 'screen'
          ctx.fillStyle = particle.type === 'primary' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.3)'
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius * brightness, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      })
    }
    
    canvas.addEventListener('mousemove', handleMouseMove)

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      resizeObserver.disconnect()
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 10% 0%, rgba(77,44,227,0.08) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 90% 80%, rgba(57,184,253,0.07) 0%, transparent 50%)' }}
      />
    </div>
  )
}
