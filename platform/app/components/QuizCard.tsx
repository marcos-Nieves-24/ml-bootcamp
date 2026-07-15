"use client"

import { useState } from "react"
import type { QuizData, QuizQuestion } from "@/lib/quiz"

interface Props {
  quiz: QuizData
}

export default function QuizCard({ quiz }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [revealed, setRevealed] = useState<Set<number>>(new Set())

  const mcQuestions = quiz.questions.filter(q => q.type === "multiple-choice")
  const otherQuestions = quiz.questions.filter(q => q.type !== "multiple-choice")

  function handleSelect(qNumber: number, label: string) {
    if (showResults) return
    setAnswers(prev => ({ ...prev, [qNumber]: label }))
  }

  function handleVerify() {
    setShowResults(true)
  }

  function handleReset() {
    setAnswers({})
    setShowResults(false)
    setRevealed(new Set())
  }

  function toggleReveal(qNumber: number) {
    setRevealed(prev => {
      const next = new Set(prev)
      if (next.has(qNumber)) next.delete(qNumber)
      else next.add(qNumber)
      return next
    })
  }

  function isCorrect(q: QuizQuestion): boolean {
    if (q.type !== "multiple-choice" || !q.correctAnswer) return false
    return answers[q.number] === q.correctAnswer
  }

  function isIncorrect(q: QuizQuestion): boolean {
    if (q.type !== "multiple-choice" || !q.correctAnswer) return false
    return showResults && answers[q.number] !== undefined && answers[q.number] !== q.correctAnswer
  }

  const mcAnswered = mcQuestions.filter(q => answers[q.number] !== undefined).length
  const allMcAnswered = mcAnswered === mcQuestions.length && mcQuestions.length > 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-on-surface">{quiz.title}</h2>
        <span className="text-sm text-on-surface-variant">
          {mcAnswered}/{mcQuestions.length} respondidas
        </span>
      </div>

      {/* Multiple choice questions */}
      {mcQuestions.map((q) => (
        <div
          key={q.number}
          className={`p-5 rounded-xl border transition-colors ${
            showResults
              ? isCorrect(q)
                ? "border-success-green bg-success-green/5"
                : isIncorrect(q)
                  ? "border-error bg-error/5"
                  : "border-border-muted"
              : "border-border-muted bg-surface-container/30"
          }`}
        >
          <p className="font-bold text-on-surface mb-3">
            {q.number}. {q.question}
          </p>
          <div className="space-y-2">
            {q.options?.map((opt) => {
              const selected = answers[q.number] === opt.label
              const correct = showResults && q.correctAnswer === opt.label
              const wrong = showResults && selected && opt.label !== q.correctAnswer

              return (
                <button
                  key={opt.label}
                  onClick={() => handleSelect(q.number, opt.label)}
                  disabled={showResults}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all
                    ${selected && !showResults
                      ? "bg-primary text-on-primary font-bold"
                      : correct
                        ? "bg-success-green text-white font-bold"
                        : wrong
                          ? "bg-error text-white font-bold"
                          : "bg-surface-container text-on-surface-variant hover:bg-surface-container-hover"
                    }
                    ${!showResults ? "cursor-pointer" : "cursor-default"}
                  `}
                >
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold
                    ${selected && !showResults
                      ? "bg-white/20 text-white"
                      : correct
                        ? "bg-white/20 text-white"
                        : wrong
                          ? "bg-white/20 text-white"
                          : "bg-surface text-on-surface-variant"
                    }`}>
                    {correct ? (
                      <span className="material-symbols-outlined text-sm">check</span>
                    ) : wrong ? (
                      <span className="material-symbols-outlined text-sm">close</span>
                    ) : (
                      opt.label.toUpperCase()
                    )}
                  </span>
                  <span>{opt.text}</span>
                </button>
              )
            })}
          </div>
          {showResults && isIncorrect(q) && q.correctAnswer && (
            <p className="mt-2 text-sm text-success-green font-bold">
              ✅ Respuesta correcta: {q.correctAnswer.toUpperCase()}
              {q.options?.find(o => o.label === q.correctAnswer)?.text
                ? ` — ${q.options.find(o => o.label === q.correctAnswer)!.text}`
                : ""}
            </p>
          )}
        </div>
      ))}

      {/* Short Answer / Coding questions */}
      {otherQuestions.map((q) => (
        <div key={q.number} className="p-5 rounded-xl border border-border-muted bg-surface-container/30">
          <p className="font-bold text-on-surface mb-3">
            {q.number}. {q.question}
          </p>
          {q.correctText && (
            <>
              <button
                onClick={() => toggleReveal(q.number)}
                className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  {revealed.has(q.number) ? "expand_less" : "expand_more"}
                </span>
                {revealed.has(q.number) ? "Ocultar respuesta" : "Mostrar respuesta"}
              </button>
              {revealed.has(q.number) && (
                <div className="mt-3 p-4 rounded-xl bg-surface-container border border-border-muted text-sm text-on-surface-variant whitespace-pre-wrap">
                  {q.correctText}
                </div>
              )}
            </>
          )}
        </div>
      ))}

      {/* Actions */}
      <div className="flex gap-3">
        {!showResults && allMcAnswered && (
          <button
            onClick={handleVerify}
            className="flex items-center gap-2 bg-primary text-on-primary font-bold rounded-xl px-6 py-3 transition-all hover:bg-[#7c6ff0] active:scale-95"
          >
            Verificar respuestas
          </button>
        )}
        {showResults && (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 bg-surface-container text-on-surface font-bold rounded-xl px-6 py-3 transition-all hover:bg-surface-container-hover"
          >
            Reintentar
          </button>
        )}
        {!showResults && !allMcAnswered && mcQuestions.length > 0 && (
          <p className="text-sm text-on-surface-variant self-center">
            Respondé todas las preguntas para verificar.
          </p>
        )}
      </div>
    </div>
  )
}
