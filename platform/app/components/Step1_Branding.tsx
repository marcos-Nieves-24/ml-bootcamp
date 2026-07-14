"use client"

import React from 'react'
import Logo from '@/app/components/Logo'

interface Step1BrandingProps {
  onStart: () => void
  onLogin: () => void
}

export default function Step1_Branding({ onStart, onLogin }: Step1BrandingProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Deep gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 50% 0%, rgba(36, 227, 242, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 80%, rgba(138, 46, 255, 0.10) 0%, transparent 50%),
            radial-gradient(ellipse 40% 40% at 20% 70%, rgba(36, 227, 242, 0.06) 0%, transparent 40%),
            linear-gradient(180deg, #0f0530 0%, #1a0a46 30%, #1e0e52 60%, #12062e 100%)
          `
        }}
      />

      {/* Glass card */}
      <div className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] p-8 md:p-10 shadow-xl">
        {/* Hero section: Logo + Nexus title */}
        <div className="flex items-center justify-center gap-5 mb-8">
          <div className="shrink-0">
            <Logo size={100} showText={false} />
          </div>
          <h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              background: 'linear-gradient(135deg, #24E3F2 0%, #8A2EFF 60%, #b86aff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Nexus
          </h1>
        </div>

        {/* Tagline */}
        <div className="text-center mb-8">
          <p className="text-xl font-bold text-on-surface mb-2 headline-lg">
            Bienvenido, Futuro Investigador
          </p>
          <p className="text-sm text-on-surface-variant body-md leading-relaxed max-w-sm mx-auto">
            Estás por ingresar al campus virtual de Machine Learning. Preparate para convertir datos en descubrimientos.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onStart}
          className="w-full py-4 rounded-2xl font-bold text-base text-white tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group mb-6"
          style={{
            background: 'linear-gradient(135deg, #8A2EFF 0%, #24E3F2 100%)',
            boxShadow: '0 8px 32px rgba(138, 46, 255, 0.35)',
          }}
        >
          <span className="relative z-10">🚀 Iniciar Briefing</span>
          {/* Shimmer effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
              transform: 'skewX(-20deg)',
            }}
          />
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-border-muted" />
          <span className="text-sm text-on-surface-variant">o</span>
          <div className="flex-1 h-px bg-border-muted" />
        </div>

        {/* Login section */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm text-on-surface-variant">¿Ya eres investigador?</span>
          <button
            onClick={onLogin}
            className="px-5 py-2.5 rounded-2xl text-sm font-semibold text-on-surface-variant border border-white/40 bg-white/70 hover:bg-white hover:text-primary hover:border-primary/30 transition-all backdrop-blur-sm"
          >
            Iniciar Sesión
          </button>
        </div>

        {/* Terms */}
        <p className="text-xs text-on-surface-variant/60 mt-8 text-center">
          Al continuar, aceptas los términos y condiciones de Nexus Institute
        </p>
      </div>
    </div>
  )
}
