"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { markLessonCompleteAction } from "@/lib/actions"

interface Props {
  lessonId: string
  isCompleted: boolean
  moduleId: string
}

export default function LessonCompleteButton({ lessonId, isCompleted }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState<{
    xpGained: number
    leveledUp: boolean
    newLevel: number
  } | null>(null)

  async function handleClick() {
    setLoading(true)
    try {
      const result = await markLessonCompleteAction(lessonId)
      setFeedback({
        xpGained: result.xpGained,
        leveledUp: result.leveledUp,
        newLevel: result.newLevel,
      })
      router.refresh()
    } catch (e) {
      console.error("Failed to mark lesson complete:", e)
    } finally {
      setLoading(false)
    }
  }

  if (feedback) {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-4 bg-success-green/10 border border-success-green/20 rounded-xl">
          <span className="material-symbols-outlined text-success-green text-2xl">check_circle</span>
          <div>
            <p className="font-bold text-success-green">¡Lección completada!</p>
            <p className="text-sm text-on-surface-variant">+{feedback.xpGained} XP</p>
            {feedback.leveledUp && (
              <p className="text-sm font-bold text-primary">
                ⭐ ¡Subiste al nivel {feedback.newLevel}!
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (isCompleted) {
    return (
      <div className="flex items-center gap-3 p-4 bg-success-green/10 border border-success-green/20 rounded-xl">
        <span className="material-symbols-outlined text-success-green text-2xl">check_circle</span>
        <span className="font-bold text-success-green">Completada</span>
      </div>
    )
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary font-bold rounded-xl px-6 py-3 transition-all hover:bg-[#7c6ff0] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <span className="material-symbols-outlined animate-spin">progress_activity</span>
      ) : (
        <span className="material-symbols-outlined">check</span>
      )}
      {loading ? "Guardando..." : "Marcar como completada"}
    </button>
  )
}
