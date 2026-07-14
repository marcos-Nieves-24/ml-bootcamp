"use client"

import React, { useState } from 'react'
import ProgressRing from '@/app/components/ProgressRing'

interface Step4ProfileProps {
  alias: string
  intentions: string[]
  xpAwarded: number
  onRegister: (data: { name: string; email: string; password: string }) => void
  onGoogleOAuth: () => void
  onLogin: () => void
}

export default function Step4_Profile({
  alias,
  intentions,
  xpAwarded,
  onRegister,
  onGoogleOAuth,
  onLogin
}: Step4ProfileProps) {
  const [name] = useState(alias)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const currentXP = 25
  const totalXP = 1000
  const xpPercentage = (currentXP / totalXP) * 100
  
  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('El email es requerido')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      setEmailError('Por favor ingresa un email válido')
      return false
    }
    setEmailError('')
    return true
  }
  
  const validatePassword = (value: string) => {
    if (!value) {
      setPasswordError('La contraseña es requerida')
      return false
    }
    if (value.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres')
      return false
    }
    setPasswordError('')
    return true
  }
  
  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (emailError) validateEmail(value)
  }
  
  const handlePasswordChange = (value: string) => {
    setPassword(value)
    if (passwordError) validatePassword(value)
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const isEmailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)
    
    if (isEmailValid && isPasswordValid) {
      setIsLoading(true)
      try {
        await onRegister({ name, email, password })
      } finally {
        setIsLoading(false)
      }
    }
  }
  
  const isFormValid = email && password.length >= 6
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-white p-6">
      <div className="max-w-2xl mx-auto">
        {/* Success Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-on-surface mb-4 headline-lg">
            🎉 ¡Investigador Creado!
          </h1>
        </div>
        
        {/* Profile Card */}
        <div className="glass rounded-[32px] p-8 mb-8">
          <div className="flex items-start gap-6 mb-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <span className="text-white text-4xl font-bold">
                {alias.charAt(0).toUpperCase()}
              </span>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-on-surface mb-2">
                {name}
              </h2>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  🌱 Nivel 1
                </span>
                <span className="text-sm text-on-surface-variant">
                  {intentions.join(', ')}
                </span>
              </div>
              
              {/* Progress Ring */}
              <div className="flex items-center gap-4">
                <ProgressRing value={xpPercentage} size={64} strokeWidth={6} label={`${Math.round(xpPercentage)}%`} />
                <div className="text-sm text-on-surface-variant">
                  <div>25 / 1000 XP</div>
                  <div className="text-xs">Nivel siguiente: 500 XP</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* XP Message */}
          <div className="bg-surface-container/50 rounded-xl p-4 mb-6">
            <p className="text-on-surface">
              Has ganado <span className="font-bold text-primary">{xpAwarded}</span> XP en tu primer día como Investigador.
            </p>
          </div>
        </div>
        
        {/* Registration Form */}
        <div className="glass rounded-[32px] p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username (pre-filled) */}
            <div>
              <label className="block text-sm font-medium text-on-surface mb-2 label-lg">
                Nombre de usuario
              </label>
              <div className="px-4 py-3 rounded-xl bg-surface-container/30 text-on-surface-variant border border-white/40">
                {name}
              </div>
            </div>
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-on-surface mb-2 label-lg">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="tu@email.com"
                className={`w-full px-4 py-3 rounded-xl border transition-all backdrop-blur-sm placeholder-on-surface-variant
                  ${emailError
                    ? 'border-error bg-error/5'
                    : 'border-white/40 bg-white/70 focus:ring-2 focus:ring-primary/30 focus:border-primary/30'
                  }
                `}
              />
              {emailError && (
                <p className="text-sm text-error mt-1">{emailError}</p>
              )}
            </div>
            
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-on-surface mb-2 label-lg">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className={`w-full px-4 py-3 rounded-xl border transition-all backdrop-blur-sm placeholder-on-surface-variant
                  ${passwordError
                    ? 'border-error bg-error/5'
                    : 'border-white/40 bg-white/70 focus:ring-2 focus:ring-primary/30 focus:border-primary/30'
                  }
                `}
              />
              {passwordError && (
                <p className="text-sm text-error mt-1">{passwordError}</p>
              )}
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className={`w-full py-4 rounded-xl font-semibold transition-all duration-300
                ${isFormValid && !isLoading
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:scale-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              {isLoading ? 'Creando investigador...' : '🚀 Entrar al Campus'}
            </button>
            
            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-border-muted" />
              <span className="text-sm text-on-surface-variant">o</span>
              <div className="flex-1 h-px bg-border-muted" />
            </div>
            
            {/* Google OAuth */}
            <button
              type="button"
              onClick={onGoogleOAuth}
              className="w-full py-4 rounded-xl border border-white/40 bg-white/70 hover:bg-white/90 transition-all backdrop-blur-sm flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              <span className="font-medium">Continuar con Google</span>
            </button>
          </form>
          
          {/* Login Link */}
          <div className="mt-6 text-center">
            <button
              onClick={onLogin}
              className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
            >
              ¿Ya tienes cuenta? Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
