'use client'

import { useRouter } from 'next/navigation'
import { markLessonCompleteAction } from '@/lib/actions'

interface Props {
  lessonId: string
  isCompleted: boolean
  moduleId: string
}

export default function LessonCompleteButton({ lessonId, isCompleted }: Props) {
  const router = useRouter()

  async function handleClick() {
    try {
      await markLessonCompleteAction(lessonId)
      router.refresh()
    } catch (e) {
      console.error('Failed to mark lesson complete:', e)
    }
  }

  if (isCompleted) {
    return (
      <div className="flex items-center gap-3 p-4 bg-success-green/10 border border-success-green/20 rounded-xl">
        <span className="material-symbols-outlined text-success-green">check_circle</span>
        <span className="font-bold text-success-green">Completada</span>
      </div>
    )
  }

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary font-bold rounded-xl px-6 py-3 transition-all hover:bg-[#3525cd] active:scale-95"
    >
      <span className="material-symbols-outlined">check</span>
      Marcar como completada
    </button>
  )
}
