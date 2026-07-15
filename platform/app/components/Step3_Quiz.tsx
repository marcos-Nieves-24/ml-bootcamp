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
    "C. Un modelo predice precios"
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

    onAnswer({
      answerIndex: index,
      isCorrect: correct,
      xpAwarded: correct ? correctXP : incorrectXP
    })
  }

  const handleContinue = () => {
    setState('SELECTING')
    setSelectedOption(null)
    setShowFeedback(false)
    setIsCorrect(false)
  }

  return (
    <div className="w-full bg-black/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl hover:scale-[1.02] transition-all duration-500">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white mb-2 headline-sm">
          Calentamiento
        </h1>
        <p className="text-sm text-white/50">Respondé bien y sumá XP extra</p>
      </div>

      {state === 'SELECTING' ? (
        <>
          <div className="mb-8">
            <p className="text-lg text-white/90 mb-6 text-center">
              {quizQuestion}
            </p>

            <div className="space-y-3">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`w-full p-5 rounded-2xl border transition-all duration-300 transform hover:scale-[1.02]
                    ${selectedOption === index
                      ? 'border-[#7c6ff0]/40 bg-white/10 text-white shadow-lg'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:border-white/20 hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={onBack}
              className="flex-1 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
            >
              Atrás
            </button>
            <button
              disabled={selectedOption === null}
              className={`flex-1 px-6 py-3 rounded-2xl font-semibold transition-all duration-300
                ${selectedOption !== null
                  ? 'bg-gradient-to-r from-[#7c6ff0] to-[#4fd1e8] text-white shadow-lg shadow-[#7c6ff0]/30 hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/5'
                }
              `}
            >
              Responder
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-8">
            {isCorrect ? (
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">
                  ¡Bien hecho!
                </h2>
                <p className="text-white/60">Sabés de lo que hablamos. Vamos por más.</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">😅</div>
                <h2 className="text-2xl font-bold text-red-300 mb-4">
                  ¡Buen intento!
                </h2>
                <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-white/80 font-medium mb-2">
                    Explicación:
                  </p>
                  <p className="text-white/50 text-sm">
                    El Machine Learning permite que los modelos aprendan patrones de datos para hacer predicciones.
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-[#4fd1e8]/20 to-[#7c6ff0]/20 border border-[#7c6ff0]/30 rounded-full px-6 py-3">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#4fd1e8] to-[#7c6ff0] bg-clip-text text-transparent">
                  +{isCorrect ? correctXP : incorrectXP} XP
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleContinue}
              className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7c6ff0] to-[#4fd1e8] text-white font-semibold shadow-lg shadow-[#7c6ff0]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Siguiente paso →
            </button>
          </div>
        </>
      )}
    </div>
  )
}
