"use client"

import React, { useEffect, useRef, useState } from 'react'

interface ConfettiOverlayProps {
  active: boolean
  duration?: number  // default 2000ms
}

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  color: string
  size: number
  gravity: number
}

const colors = {
  primary: '#7c6ff0',
  secondary: '#4fd1e8',
  success: '#10B981',
  tertiary: '#f59e0b'
}

export default function ConfettiOverlay({ active, duration = 2000 }: ConfettiOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const startTimeRef = useRef<number>(0)
  const [isRunning, setIsRunning] = useState(false)
  
  // Initialize particles
  const initParticles = () => {
    const canvas = canvasRef.current
    if (!canvas) return []
    
    const particles: Particle[] = []
    const particleCount = 50
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height, // Start above canvas
        vx: (Math.random() - 0.5) * 3, // Random horizontal velocity
        vy: Math.random() * 2 + 1, // Initial downward velocity
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 6,
        color: Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)],
        size: Math.random() * 6 + 3,
        gravity: 0.15 + Math.random() * 0.2
      })
    }
    
    particlesRef.current = particles
    return particles
  }
  
  // Animation loop
  const animate = (timestamp: number) => {
    const canvas = canvasRef.current
    if (!canvas || !isRunning) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // Initialize particles on first frame
    if (startTimeRef.current === 0) {
      startTimeRef.current = timestamp
      initParticles()
    }
    
    const particles = particlesRef.current
    const elapsed = timestamp - startTimeRef.current
    
    // Check if duration has passed
    if (elapsed >= duration) {
      setIsRunning(false)
      return
    }
    
    // Update and draw particles
    particles.forEach((particle, index) => {
      // Update position
      particle.x += particle.vx
      particle.y += particle.vy
      particle.vy += particle.gravity
      particle.rotation += particle.rotationSpeed
      
      // Draw particle
      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate((particle.rotation * Math.PI) / 180)
      ctx.fillStyle = particle.color
      ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size)
      ctx.restore()
    })
    
    // Continue animation
    animationRef.current = requestAnimationFrame(animate)
  }
  
  // Start animation
  const startAnimation = () => {
    if (isRunning) return
    setIsRunning(true)
    startTimeRef.current = 0
    animationRef.current = requestAnimationFrame(animate)
  }
  
  // Cleanup animation
  const cleanup = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    setIsRunning(false)
    startTimeRef.current = 0
  }
  
  // Handle active state changes
  useEffect(() => {
    if (active) {
      startAnimation()
    } else {
      cleanup()
    }
    
    return cleanup
  }, [active])
  
  // Handle resize
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      // Reinitialize particles on resize
      if (isRunning) {
        cleanup()
        startAnimation()
      }
    }
    
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(canvas)
    
    return () => {
      resizeObserver.disconnect()
    }
  }, [isRunning])
  
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50"
      style={{ width: '100vw', height: '100vh' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
