"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import StitchCard from "@/app/components/StitchCard"
import StitchBtn from "@/app/components/StitchBtn"
import { MOCK_MODULES } from "@/lib/data"
import { MOCK_LESSONS } from "@/lib/content"

export default function ModuleDetailPage() {
  const params = useParams()
  const moduleId = params.id as string
  const mod = MOCK_MODULES.find(m => m.id === moduleId)
  const lessons = MOCK_LESSONS.filter(l => l.moduleId === moduleId).sort((a, b) => a.order - b.order)

  if (!mod) {
    return (
      <div className="text-center py-20">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">school</span>
        <h1 className="text-2xl font-bold text-on-surface mb-2">Módulo no encontrado</h1>
        <p className="text-on-surface-variant mb-6">El módulo que buscas no existe.</p>
        <StitchBtn href="/expediciones">Volver a Expediciones</StitchBtn>
      </div>
    )
  }

  const completedLessons = lessons.filter(l => l.isCompleted).length

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant">
        <Link href="/expediciones" className="hover:text-primary transition-colors">Expediciones</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary font-bold">{mod.title}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-on-surface mb-2">{mod.title}</h1>
          <p className="text-on-surface-variant max-w-2xl">{mod.description}</p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <div className="text-right">
            <p className="text-xs text-on-surface-variant">Progreso</p>
            <p className="text-xl font-bold text-primary">{mod.progress}%</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-on-surface-variant">Lecciones</p>
            <p className="text-xl font-bold text-on-surface">{completedLessons}/{lessons.length}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-on-surface-variant">XP Total</p>
            <p className="text-xl font-bold text-xp-gold">{mod.xpReward}</p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-surface-container rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${mod.progress}%` }} />
      </div>

      {/* Lesson list */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-on-surface">Lecciones</h2>
        {lessons.map((lesson, index) => {
          const isCompleted = lesson.isCompleted || index < Math.floor((mod.progress / 100) * lessons.length)
          const isCurrent = index === Math.floor((mod.progress / 100) * lessons.length)

          return (
            <StitchCard key={lesson.id} className={`p-6 ${isCurrent ? 'border-primary ring-1 ring-primary/20' : ''}`}>
              <div className="flex items-start gap-4">
                {/* Status indicator */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  isCompleted
                    ? "bg-success-green text-white"
                    : isCurrent
                    ? "bg-primary text-white"
                    : "bg-surface-container text-on-surface-variant"
                }`}>
                  {isCompleted ? (
                    <span className="material-symbols-outlined">check</span>
                  ) : (
                    <span className="font-bold">{index + 1}</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`font-bold text-lg ${isCompleted ? 'text-success-green' : 'text-on-surface'}`}>
                      {lesson.title}
                    </h3>
                    {isCurrent && (
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        En progreso
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-on-surface-variant line-clamp-2 mb-3">
                    {lesson.content.split('\n')[0].replace(/^#+\s*/, '').trim() || 'Contenido educativo'}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      {lesson.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">menu_book</span>
                      {isCompleted ? 'Completada' : isCurrent ? 'En progreso' : 'Pendiente'}
                    </span>
                  </div>
                </div>

                {/* Action */}
                <div className="shrink-0">
                  {isCompleted ? (
                    <span className="text-success-green">
                      <span className="material-symbols-outlined">check_circle</span>
                    </span>
                  ) : isCurrent ? (
                    <StitchBtn size="sm" onClick={() => alert("Modo lectura próximamente")}>
                      Leer
                    </StitchBtn>
                  ) : (
                    <span className="material-symbols-outlined text-on-surface-variant">lock</span>
                  )}
                </div>
              </div>
            </StitchCard>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <StitchBtn href="/expediciones" variant="secondary">
          Volver a Expediciones
        </StitchBtn>
        {lessons.some(l => !l.isCompleted) && (
          <StitchBtn onClick={() => alert("Modo lectura próximamente")}>
            Continuar aprendizaje
          </StitchBtn>
        )}
      </div>
    </div>
  )
}
