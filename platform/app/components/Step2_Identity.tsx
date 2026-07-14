"use client"

import React, { useState, useEffect } from 'react'

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
  
  // Sync selectedIntention with intentions prop
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
    <div className="min-h-screen bg-gradient-to-b from-surface to-white p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-on-surface mb-2 headline-sm">
            ¿Cómo te llamas, investigador?
          </h1>
        </div>
        
        {/* Alias Input */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-on-surface mb-2 label-lg">
            Alias Investigador
          </label>
          <div className="relative">
            <input
              type="text"
              value={alias}
              onChange={(e) => handleAliasChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tu alias, investigador..."
              maxLength={30}
              className="w-full px-4 py-3 glass border rounded-xl focus:ring-2 ring-primary/30 focus:border-primary/30 transition-all backdrop-blur-sm placeholder-on-surface-variant"
            />
            {alias && (
              <button
                onClick={() => handleAliasChange('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
              >
                ×
              </button>
            )}
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-on-surface-variant">
              Máx 30 caracteres
            </span>
            {isAliasValid && (
              <span className="text-xs text-success-green">✓ Válido</span>
            )}
          </div>
        </div>
        
        {/* intentions Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-on-surface mb-4 label-lg">
            ¿Qué te trae al Nexus Institute?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {intentionOptions.map((option) => {
              const isSelected = selectedIntention.includes(option.value)
              return (
                <button
                  key={option.value}
                  onClick={() => handleIntentionToggle(option.value)}
                  className={`p-4 rounded-xl border transition-all duration-300 transform hover:scale-105
                    ${isSelected
                      ? 'bg-primary/10 border-primary/30 text-primary shadow-lg scale-105'
                      : 'bg-white/70 border-white/40 text-on-surface-variant hover:bg-white/90 hover:border-primary/20'
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
            className="flex-1 px-6 py-3 glass border border-white/40 rounded-xl text-on-surface-variant hover:text-on-surface hover:border-white/60 transition-all backdrop-blur-sm"
          >
            Atrás
          </button>
          <button
            onClick={onContinue}
            disabled={!isFormValid}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300
              ${isFormValid
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
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
