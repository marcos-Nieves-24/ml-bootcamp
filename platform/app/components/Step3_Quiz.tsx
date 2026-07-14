"use client"

import React, { useState } from 'react'

interface Step3QuizProps {
  onAnswer: (result: { answerIndex: number; isCorrect: boolean; xpAwarded: number }) => void
  onBack: () => void
}

type QuizState = 'SELECTING' | 'ANSWERED'

export default function Step3_Quiz({ onAnswer, onBack }: Step3QuizProps) {
  const [state, setState] = useState<QuizState>('SELECTING')
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  
  const quizQuestion = "¿Cuál de estos es un ejemplo de Machine Learning?"
  const options = [
    "A. Un termómetro mide temperatura",
    "B. Un sitio web muestra HTML", 
    "C. Un modelo predice precios ✓"
  ]
  const correctIndex = 2
  const correctXP = 15
  const incorrectXP = 10
  
  const handleOptionSelect = (index: number) => {
    if (state !== 'SELECTING') return
    
    setSelectedOption(index)
    setState('ANSWERED')
    
    const correct = index === correctIndex
    setIsCorrect(correct)
    setShowFeedback(true)
    
    // Call onAnswer with the result
    onAnswer({
      answerIndex: index,
      isCorrect: correct,
      xpAwarded: correct ? correctXP : incorrectXP
    })
  }
  
  const handleContinue = () => {
    // Reset state for next quiz (could be part of a flow)
    setState('SELECTING')
    setSelectedOption(null)
    setShowFeedback(false)
    setIsCorrect(false)
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-white p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-on-surface mb-2 headline-sm">
            Calentamiento 🧠
          </h1>
        </div>
        
        {state === 'SELECTING' ? (
          // Selecting phase
          <>
            <div className="mb-8">
              <p className="text-lg text-on-surface mb-6">
                {quizQuestion}
              </p>
              
              <div className="space-y-4">
                {options.map((option, index) => {
                  const isSelected = selectedOption === index
                  // Inside SELECTING branch, we never show result styling
                  const showResult = false
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(index)}
                      disabled={showResult && !isSelected}
                      className={`w-full p-5 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02]
                        ${showResult
                          ? isSelected
                            ? isCorrect
                              ? 'border-success-green bg-success-green/10 text-success-green'
                              : 'border-error bg-error/10 text-error'
                            : 'border-border-muted bg-surface-container/30 opacity-60'
                          : isSelected
                            ? 'border-primary/30 bg-primary/10 text-primary shadow-lg scale-[1.02]'
                            : 'border-border-muted bg-white/70 hover:border-primary/20 hover:bg-white/90'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">
                          {option}
                        </span>
                        {showResult && isSelected && (
                          <span className="text-2xl ml-4">
                            {isCorrect ? '✅' : '❌'}
                          </span>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <button
                onClick={onBack}
                className="px-6 py-3 glass border border-white/40 rounded-xl text-on-surface-variant hover:text-on-surface hover:border-white/60 transition-all backdrop-blur-sm"
              >
                Atrás
              </button>
              
              <button
                disabled={selectedOption === null}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300
                  ${selectedOption === null
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:scale-105'
                  }
                `}
              >
                Responder
              </button>
            </div>
          </>
        ) : (
          // Answered phase
          <>
            <div className="mb-8">
              {isCorrect ? (
                <div className="text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold text-success-green mb-4">
                    ¡Bien hecho!
                  </h2>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">😅</div>
                  <h2 className="text-2xl font-bold text-error mb-4">
                    ¡Buen intento!
                  </h2>
                </div>
              )}
              
              {!isCorrect && (
                <div className="mb-6 p-4 bg-surface-container/50 rounded-xl">
                  <p className="text-on-surface font-medium mb-2">
                    Explicación:
                  </p>
                  <p className="text-on-surface-variant">
                    El Machine Learning permite que los modelos aprendan patrones de datos para hacer predicciones.
                  </p>
                </div>
              )}
              
              <div className="flex items-center justify-center mb-8">
                <div className="bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
                  <span className="text-2xl font-bold text-primary">
                    +{isCorrect ? correctXP : incorrectXP} XP
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={handleContinue}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold shadow-glow hover:scale-105 transition-all duration-300"
              >
                Continuar →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
