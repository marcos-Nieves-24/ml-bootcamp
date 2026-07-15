"use client"

import React from 'react'
import { Sparkles, FlaskConical, Users, BadgeCheck, Rocket } from 'lucide-react'

interface Step1BrandingProps {
  onStart: () => void
  onLogin: () => void
}

export default function Step1_Branding({ onStart, onLogin }: Step1BrandingProps) {
  return (
    <div
      className="w-full rounded-[32px] p-8 md:p-10 shadow-xl hover:scale-[1.02] transition-all duration-500"
      style={{
        background: 'linear-gradient(180deg, #14102b 0%, #0b0920 100%)',
        border: '1px solid #2a2454',
      }}
    >
      <div className="flex flex-col md:flex-row gap-10 items-center mx-auto">
        {/* Columna izquierda — mensaje de bienvenida (2/3) */}
        <div className="md:flex-[2]">
          {/* Nexus header */}
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-[#8b7bf0]" aria-hidden="true" />
            <span
              className="text-xl font-medium tracking-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: 'linear-gradient(90deg, #7c6ff0 0%, #4fd1e8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Nexus
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-medium text-[#f5f4fa] leading-snug mb-3">
            Convertí datos en descubrimientos
          </h3>
          <p className="text-sm text-[#a8a4c0] leading-relaxed mb-8 max-w-md">
            El campus virtual donde aprendés Machine Learning haciendo proyectos reales, no solo mirando videos.
          </p>

          {/* Feature items */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-start">
              <FlaskConical className="w-[18px] h-[18px] text-[#4fd1e8] mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-[#f5f4fa]">Laboratorios prácticos</p>
                <p className="text-xs text-[#726d94] mt-0.5">Código real, datasets reales</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Users className="w-[18px] h-[18px] text-[#4fd1e8] mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-[#f5f4fa]">Comunidad activa</p>
                <p className="text-xs text-[#726d94] mt-0.5">+1,200 investigadores</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <BadgeCheck className="w-[18px] h-[18px] text-[#4fd1e8] mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-[#f5f4fa]">Certificación al finalizar</p>
                <p className="text-xs text-[#726d94] mt-0.5">Avalada por Nexus Institute</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha — formulario */}
        <div
          className="w-full md:w-auto md:flex-[1] md:min-w-[280px] rounded-2xl p-6 md:p-7"
          style={{
            background: 'linear-gradient(180deg, #14102b 0%, #0b0920 100%)',
            border: '1px solid #2a2454',
          }}
        >
          <h4 className="text-base md:text-lg font-medium text-[#f5f4fa] text-center">
            Bienvenido, futuro investigador
          </h4>
          <p className="text-xs text-[#a8a4c0] text-center mb-5">
            Empezá tu camino en ML
          </p>

          {/* CTA button */}
          <button
            onClick={onStart}
            className="w-full py-3 rounded-xl font-medium text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mb-3"
            style={{
              background: 'linear-gradient(90deg, #7c6ff0 0%, #4fd1e8 100%)',
              color: '#0b0920',
              boxShadow: '0 4px 16px rgba(79, 209, 232, 0.2)',
            }}
          >
            <Rocket className="w-4 h-4" />
            Iniciar briefing
          </button>

          {/* Login button */}
          <button
            onClick={onLogin}
            className="w-full py-2.5 rounded-xl border border-[#3a3468] bg-transparent hover:border-[#4fd1e8]/50 transition-all text-xs"
          >
            <span className="text-[#a8a4c0]">¿Ya eres investigador? </span>
            <span className="text-[#4fd1e8] font-semibold">Iniciar Sesión</span>
          </button>
        </div>
      </div>
    </div>
  )
}
