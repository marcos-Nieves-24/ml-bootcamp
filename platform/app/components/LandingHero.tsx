"use client"
import React, { useRef, useEffect } from 'react'

export default function LandingHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let animationId: number
    let particles: Array<{x: number, y: number, vx: number, vy: number, radius: number}> = []
    
    // Initialize particles
    const initParticles = () => {
      const count = Math.min(Math.max(Math.floor((canvas.width * canvas.height) / 10000), 50), 80)
      particles = []
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: Math.random() * 2 + 1
        })
      }
    }
    
    // Animation loop
    const animate = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(79, 70, 229, 0.3)'
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.2)'
      ctx.lineWidth = 0.5
      
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Bounce off edges
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.vx = -particle.vx
        }
        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.vy = -particle.vy
        }
        
        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        initParticles()
      }
    }
    
    handleResize()
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(canvas)
    
    const animationFrameId = requestAnimationFrame(() => {
      animate()
    })
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      resizeObserver.disconnect()
    }
  }, [])
  
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #3525cd 50%, #1e3a8a 100%)' }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          ML Expedition
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Tu viaje hacia la maestría en Machine Learning comienza aquí
        </p>
        <StitchBtn size="lg" className="bg-white text-primary hover:bg-gray-50">
          Comenzar ahora
        </StitchBtn>
      </div>
    </div>
  )
}
