"use client"

import React from 'react'
import Logo from '@/app/components/Logo'

interface Step1BrandingProps {
  onStart: () => void     // clicks "Iniciar Briefing"
  onLogin: () => void     // clicks "Ya soy investigador"
}

export default function Step1_Branding({ onStart, onLogin }: Step1BrandingProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-surface to-white">
      {/* Logo */}
      <div className="mb-6">
        <Logo size={96} showText={false} />
      </div>
      <h2
        className="text-3xl font-bold mb-6"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          background: 'linear-gradient(135deg, #24E3F2, #8A2EFF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Nexus
      </h2>
      
      {/* Main headline */}
      <h1 className="text-3xl font-bold text-on-surface text-center mb-4 headline-lg">
        Bienvenido, Futuro Investigador
      </h1>
      
      {/* Subtitle */}
      <p className="text-on-surface-variant body-md text-center max-w-[380px] mx-auto mb-8">
        Estás por ingresar al campus virtual de Machine Learning. Preparate para convertir datos en descubrimientos.
      </p>
      
      {/* Start Briefing Button */}
      <button
        onClick={onStart}
        className="w-full max-w-xs px-6 py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white font-semibold shadow-glow hover:scale-105 transition-all duration-300 mb-4"
      >
        🚀 Iniciar Briefing
      </button>
      
      {/* Divider */}
      <div className="flex items-center gap-4 w-full max-w-xs my-4">
        <div className="flex-1 h-px bg-border-muted" />
        <span className="text-sm text-on-surface-variant">─── o ───</span>
        <div className="flex-1 h-px bg-border-muted" />
      </div>
      
      {/* Login section */}
      <div className="flex items-center gap-3 w-full max-w-xs">
        <span className="text-sm text-on-surface-variant">¿Ya eres investigador?</span>
        <button
          onClick={onLogin}
          className="px-5 py-3 glass border border-white/40 rounded-2xl text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all backdrop-blur-sm"
        >
          Iniciar Sesión
        </button>
      </div>
      
      {/* Terms and conditions */}
      <p className="text-xs text-on-surface-variant mt-8 text-center max-w-xs">
        Al continuar, aceptas los términos y condiciones de Nexus Institute
      </p>
    </div>
  )
}
