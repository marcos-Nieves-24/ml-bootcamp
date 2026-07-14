"use client"

import React, { useState } from 'react'
import { Mail, Lock, User } from 'lucide-react'
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
    <div className="w-full space-y-6">
      {/* Success Message */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2 headline-lg">
          🎉 ¡Investigador Creado!
        </h1>
        <p className="text-white/50 text-sm">Completá tu registro para entrar al campus</p>
      </div>

      {/* Profile Card */}
      <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl hover:scale-[1.02] transition-all duration-500">
        <div className="flex items-start gap-6 mb-6">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#24E3F2] to-[#8A2EFF] flex items-center justify-center shadow-lg shadow-[#8A2EFF]/20">
            <span className="text-white text-4xl font-bold">
              {alias.charAt(0).toUpperCase()}
            </span>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-2">
              {name}
            </h2>
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-sm font-medium">
                🌱 Nivel 1
              </span>
              <span className="text-sm text-white/50">
                {intentions.join(', ')}
              </span>
            </div>

            {/* Progress Ring */}
            <div className="flex items-center gap-4">
              <ProgressRing value={xpPercentage} size={64} strokeWidth={6} label={`${Math.round(xpPercentage)}%`} />
              <div className="text-sm text-white/50">
                <div>25 / 1000 XP</div>
                <div className="text-xs text-white/30">Nivel siguiente: 500 XP</div>
              </div>
            </div>
          </div>
        </div>

        {/* XP Message */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-white/70">
            Has ganado <span className="font-bold text-[#24E3F2]">{xpAwarded}</span> XP en tu primer día como Investigador.
          </p>
        </div>
      </div>

      {/* Registration Form Card */}
      <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl hover:scale-[1.02] transition-all duration-500">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username (pre-filled) */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2 label-lg">
              Nombre de usuario
            </label>
            <div className="flex items-center gap-3 bg-black/70 border border-white/10 rounded-2xl px-4 py-3 shadow-inner shadow-black/50">
              <User className="w-5 h-5 text-white/40 shrink-0" />
              <span className="text-white/60">{name}</span>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2 label-lg">
              Email
            </label>
            <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 shadow-inner shadow-black/50 transition-all
              ${emailError
                ? 'bg-black/70 border border-red-300/30'
                : 'bg-black/70 border border-white/10 focus-within:border-[#8A2EFF]/40'
              }
            `}>
              <Mail className="w-5 h-5 text-white/40 shrink-0" />
              <input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="tu@email.com"
                className="w-full bg-transparent text-white placeholder-white/30 outline-none text-base"
              />
            </div>
            {emailError && (
              <p className="text-sm text-red-300 mt-1 px-1">{emailError}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2 label-lg">
              Contraseña
            </label>
            <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 shadow-inner shadow-black/50 transition-all
              ${passwordError
                ? 'bg-black/70 border border-red-300/30'
                : 'bg-black/70 border border-white/10 focus-within:border-[#8A2EFF]/40'
              }
            `}>
              <Lock className="w-5 h-5 text-white/40 shrink-0" />
              <input
                type="password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="w-full bg-transparent text-white placeholder-white/30 outline-none text-base"
              />
            </div>
            {passwordError && (
              <p className="text-sm text-red-300 mt-1 px-1">{passwordError}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300
              ${isFormValid && !isLoading
                ? 'bg-gradient-to-r from-[#8A2EFF] to-[#24E3F2] text-white shadow-lg shadow-[#8A2EFF]/30 hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/5'
              }
            `}
          >
            {isLoading ? 'Creando investigador...' : '🚀 Entrar al Campus'}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-sm text-white/40">o</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Google OAuth */}
          <button
            type="button"
            onClick={onGoogleOAuth}
            className="w-full py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center gap-3 group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            <span className="font-medium text-white/70 group-hover:text-white transition-colors">
              Continuar con Google
            </span>
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <button
            onClick={onLogin}
            className="text-white/50 hover:text-[#24E3F2] font-medium text-sm transition-colors"
          >
            ¿Ya tienes cuenta? Inicíar Sesión
          </button>
        </div>
      </div>
    </div>
  )
}
