"use client"

import React from 'react'
import Logo from '@/app/components/Logo'

interface Step1BrandingProps {
  onStart: () => void
  onLogin: () => void
}

export default function Step1_Branding({ onStart, onLogin }: Step1BrandingProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
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

      {/* Floating nodes decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: '#24E3F2',
            boxShadow: '0 0 8px 2px rgba(36, 227, 242, 0.4)',
            top: '15%', left: '12%',
            opacity: 0.5
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: '#8A2EFF',
            boxShadow: '0 0 10px 3px rgba(138, 46, 255, 0.4)',
            top: '25%', right: '18%',
            opacity: 0.4
          }}
        />
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: '#24E3F2',
            boxShadow: '0 0 8px 2px rgba(36, 227, 242, 0.3)',
            bottom: '30%', left: '20%',
            opacity: 0.3
          }}
        />
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: '#8A2EFF',
            boxShadow: '0 0 14px 4px rgba(138, 46, 255, 0.3)',
            bottom: '20%', right: '25%',
            opacity: 0.3
          }}
        />
      </div>

      {/* Hero section: Logo + Nexus title */}
      <div className="relative z-10 flex items-center gap-6 mb-10">
        <div className="shrink-0">
          <Logo size={120} showText={false} />
        </div>
        <h1
          className="text-6xl md:text-7xl font-extrabold tracking-tight leading-none"
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
      <div className="relative z-10 text-center max-w-lg mx-auto mb-12">
        <p className="text-2xl font-semibold text-white/90 mb-3">
          Bienvenido, Futuro Investigador
        </p>
        <p className="text-base text-white/60 leading-relaxed">
          Estás por ingresar al campus virtual de Machine Learning. Preparate para convertir datos en descubrimientos.
        </p>
      </div>

      {/* CTA */}
      <div className="relative z-10 w-full max-w-sm mx-auto">
        <button
          onClick={onStart}
          className="w-full py-5 rounded-2xl font-bold text-lg text-white tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] relative overflow-hidden group"
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
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-sm text-white/40 font-medium">o</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Login section */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm text-white/50">¿Ya eres investigador?</span>
          <button
            onClick={onLogin}
            className="px-6 py-3 rounded-2xl text-sm font-semibold text-white/80 border border-white/15 bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all backdrop-blur-sm"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>

      {/* Terms */}
      <p className="relative z-10 text-xs text-white/30 mt-10 text-center">
        Al continuar, aceptas los términos y condiciones de Nexus Institute
      </p>
    </div>
  )
}
