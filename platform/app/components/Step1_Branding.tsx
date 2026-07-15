"use client"

import React from 'react'
import Logo from '@/app/components/Logo'
import { GraduationCap, Route, Rocket, Clock } from 'lucide-react'

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
        <p className="text-xl font-bold text-[#f5f4fa] mb-2 headline-lg">
          Bienvenido, Futuro Investigador
        </p>
        <p className="text-sm text-[#a8a4c0] body-md leading-relaxed max-w-sm mx-auto">
          Estás por ingresar al campus virtual de Machine Learning. Preparate para convertir datos en descubrimientos.
        </p>
      </div>

      {/* Preview de pasos */}
      <div className="bg-[#191533] rounded-xl p-4 mb-6">
        <div className="flex items-center justify-around flex-wrap gap-2 sm:gap-0">
          <div className="flex flex-col items-center gap-1.5 px-2">
            <GraduationCap className="w-5 h-5 text-[#a8a4c0]" />
            <span className="text-[11px] text-[#a8a4c0]">Tu nivel</span>
          </div>
          <div className="w-px h-8 bg-[#3a3468] hidden sm:block" />
          <div className="flex flex-col items-center gap-1.5 px-2">
            <Route className="w-5 h-5 text-[#a8a4c0]" />
            <span className="text-[11px] text-[#a8a4c0]">Tu ruta</span>
          </div>
          <div className="w-px h-8 bg-[#3a3468] hidden sm:block" />
          <div className="flex flex-col items-center gap-1.5 px-2">
            <Rocket className="w-5 h-5 text-[#a8a4c0]" />
            <span className="text-[11px] text-[#a8a4c0]">Empezar</span>
          </div>
        </div>
      </div>

      {/* Timer */}
      <div className="flex items-center justify-center gap-1.5 mb-6">
        <Clock className="w-3.5 h-3.5 text-[#726d94]" />
        <span className="text-[11px] text-[#726d94]">Toma menos de 2 minutos</span>
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
        <span className="relative z-10 text-[#0b0920]">Iniciar Briefing</span>
        {/* Shimmer effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
            transform: 'skewX(-20deg)',
          }}
        />
      </button>

      {/* Login section */}
      <button
        onClick={onLogin}
        className="w-full py-3 rounded-2xl border border-[#3a3468] bg-transparent hover:border-[#4fd1e8]/50 transition-all text-sm mb-6"
      >
        <span className="text-[#a8a4c0]">¿Ya eres investigador? </span>
        <span className="text-[#4fd1e8] font-semibold">Iniciar Sesión</span>
      </button>

      {/* Terms */}
        <p className="text-[10px] md:text-[11px] text-[#5c5880] mt-8 text-center">
          Al continuar, aceptas los términos y condiciones de Nexus Institute
        </p>
    </div>
  )
}
