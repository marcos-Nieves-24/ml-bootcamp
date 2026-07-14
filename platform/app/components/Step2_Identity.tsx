"use client"

import React, { useState, useEffect } from 'react'
import { User } from 'lucide-react'

interface Step2IdentityProps {
  alias: string
  intentions: string[]
  onAliasChange: (value: string) => void
  onIntentionsChange: (value: string[]) => void
  onBack: () => void
  onContinue: () => void
}

export default function Step2_Identity({
  alias,
  intentions,
  onAliasChange,
  onIntentionsChange,
  onBack,
  onContinue
}: Step2IdentityProps) {
  const [selectedIntention, setSelectedIntention] = useState<string[]>(intentions)
  const [isAliasValid, setIsAliasValid] = useState(alias.length >= 2)

  const intentionOptions = [
    { icon: '🤔', label: 'Curiosidad', value: 'Curiosidad' },
    { icon: '💼', label: 'Carrera', value: 'Carrera' },
    { icon: '📚', label: 'Trabajo', value: 'Trabajo' },
    { icon: '👨‍🏫', label: 'Docencia', value: 'Docencia' },
    { icon: '🎯', label: 'Otro', value: 'Otro' }
  ]

  useEffect(() => {
    setSelectedIntention(intentions)
  }, [intentions])

  const handleAliasChange = (value: string) => {
    onAliasChange(value)
    setIsAliasValid(value.length >= 2)
  }

  const handleIntentionToggle = (intention: string) => {
    const newSelected = selectedIntention.includes(intention)
      ? selectedIntention.filter(i => i !== intention)
      : [...selectedIntention, intention]

    setSelectedIntention(newSelected)
    onIntentionsChange(newSelected)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isAliasValid && selectedIntention.length > 0 && onContinue) {
      e.preventDefault()
      onContinue()
    }
  }

  const isFormValid = isAliasValid && selectedIntention.length > 0

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

      {/* Dark glass card */}
      <div className="relative z-10 w-full max-w-md bg-black/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl hover:scale-[1.02] transition-all duration-500">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2 headline-sm">
            ¿Cómo te llamas, investigador?
          </h1>
          <p className="text-sm text-white/50">Elegí tu identidad en el campus</p>
        </div>

        {/* Alias Input */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-white/70 mb-2 label-lg">
            Alias Investigador
          </label>
          <div className="relative">
            <div className="flex items-center gap-3 bg-black/70 border border-white/10 rounded-2xl px-4 py-3 shadow-inner shadow-black/50">
              <User className="w-5 h-5 text-white/40 shrink-0" />
              <input
                type="text"
                value={alias}
                onChange={(e) => handleAliasChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tu alias, investigador..."
                maxLength={30}
                className="w-full bg-transparent text-white placeholder-white/30 outline-none text-base"
              />
              {alias && (
                <button
                  onClick={() => handleAliasChange('')}
                  className="text-white/40 hover:text-white/80 transition-colors shrink-0"
                >
                  ×
                </button>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center mt-2 px-1">
            <span className="text-xs text-white/40">Máx 30 caracteres</span>
            {isAliasValid && (
              <span className="text-xs text-emerald-400">✓ Válido</span>
            )}
          </div>
        </div>

        {/* Intentions Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white/70 mb-4 label-lg text-center">
            ¿Qué te trae al Nexus Institute?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {intentionOptions.map((option) => {
              const isSelected = selectedIntention.includes(option.value)
              return (
                <button
                  key={option.value}
                  onClick={() => handleIntentionToggle(option.value)}
                  className={`p-4 rounded-2xl border transition-all duration-300 transform hover:scale-[1.05]
                    ${isSelected
                      ? 'bg-gradient-to-r from-[#24E3F2]/20 to-[#8A2EFF]/20 border-[#8A2EFF]/40 text-white shadow-lg shadow-[#8A2EFF]/10'
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white/80'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.icon}</span>
                    <span className="font-medium text-sm">{option.label}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="flex-1 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
          >
            Atrás
          </button>
          <button
            onClick={onContinue}
            disabled={!isFormValid}
            className={`flex-1 px-6 py-3 rounded-2xl font-semibold transition-all duration-300
              ${isFormValid
                ? 'bg-gradient-to-r from-[#8A2EFF] to-[#24E3F2] text-white shadow-lg shadow-[#8A2EFF]/30 hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/5'
              }
            `}
          >
            Continuar →
          </button>
        </div>
      </div>
    </div>
  )
}
