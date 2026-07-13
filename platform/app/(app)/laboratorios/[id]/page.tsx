"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import StitchCard from "@/app/components/StitchCard"
import StitchBtn from "@/app/components/StitchBtn"
import XPBar from "@/app/components/XPBar"
import { MOCK_LABS, MOCK_ACHIEVEMENTS } from "@/lib/data"

const LAB_ICONS: Record<string, string> = {
  "python-lab": "code",
  "data-lab": "bar_chart",
  "stats-lab": "query_stats",
  "ml-lab": "account_tree",
  "deep-learning-lab": "neurology",
  "ethics-lab": "gavel",
}

const LAB_STEPS: Record<string, string[]> = {
  "python-lab": ["Introducción a Python", "Variables y Tipos de Datos", "Estructuras de Control", "Funciones", "Librerías Científicas"],
  "data-lab": ["Carga de Datos", "Limpieza de Datos", "Visualización", "Análisis Exploratorio"],
  "stats-lab": ["Estadística Descriptiva", "Probabilidad", "Distribuciones", "Test de Hipótesis"],
}

export default function LabDetailPage() {
  const params = useParams()
  const router = useRouter()
  const labId = params.id as string
  const lab = MOCK_LABS.find(l => l.id === labId)

  if (!lab) {
    return (
      <div className="text-center py-20">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">science</span>
        <h1 className="text-2xl font-bold text-on-surface mb-2">Laboratorio no encontrado</h1>
        <p className="text-on-surface-variant mb-6">El laboratorio que buscas no existe o ha sido eliminado.</p>
        <StitchBtn href="/laboratorios">Volver a Laboratorios</StitchBtn>
      </div>
    )
  }

  if (lab.locked) {
    return (
      <div className="text-center py-20">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">lock</span>
        <h1 className="text-2xl font-bold text-on-surface mb-2">{lab.name}</h1>
        <p className="text-on-surface-variant mb-2">Este laboratorio está bloqueado</p>
        {lab.requirement && (
          <p className="text-sm text-on-surface-variant mb-6">Requisito: {lab.requirement}</p>
        )}
        <StitchBtn href="/laboratorios">Volver a Laboratorios</StitchBtn>
      </div>
    )
  }

  const icon = LAB_ICONS[lab.id] || "science"
  const steps = LAB_STEPS[lab.id] || ["Paso 1", "Paso 2", "Paso 3"]
  const completedSteps = Math.round((lab.progress / 100) * steps.length)

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant">
        <Link href="/laboratorios" className="hover:text-primary transition-colors">Laboratorios</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary font-bold">{lab.name}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-4xl">{icon}</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-on-surface">{lab.name}</h1>
            <p className="text-on-surface-variant">Nivel {lab.level} · {lab.progress}% completado</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-on-surface-variant">Progreso</span>
          <div className="w-32">
            <XPBar value={lab.progress} />
          </div>
          <span className="text-sm font-bold text-primary">{lab.progress}%</span>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Steps */}
        <div className="lg:col-span-2 space-y-4">
          <StitchCard className="p-6" hover={false}>
            <h2 className="font-bold text-lg text-on-surface mb-4">Pasos del Laboratorio</h2>
            <div className="space-y-3">
              {steps.map((step, index) => {
                const isCompleted = index < completedSteps
                const isCurrent = index === completedSteps
                return (
                  <div
                    key={step}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${
                      isCurrent
                        ? "border-primary bg-primary/5"
                        : isCompleted
                        ? "border-success-green/30 bg-success-green/5"
                        : "border-border-muted"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                      isCompleted
                        ? "bg-success-green text-white"
                        : isCurrent
                        ? "bg-primary text-white"
                        : "bg-surface-container text-on-surface-variant"
                    }`}>
                      {isCompleted ? (
                        <span className="material-symbols-outlined text-sm">check</span>
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`font-bold text-sm ${isCompleted ? 'text-success-green' : isCurrent ? 'text-primary' : 'text-on-surface'}`}>
                        {step}
                      </p>
                      {isCurrent && (
                        <p className="text-xs text-primary mt-0.5">En progreso — Continúa tu aprendizaje</p>
                      )}
                      {isCompleted && (
                        <p className="text-xs text-success-green mt-0.5">Completado</p>
                      )}
                    </div>
                    {isCurrent && (
                      <StitchBtn size="sm" onClick={() => alert("Modo interactivo próximamente")}>
                        Continuar
                      </StitchBtn>
                    )}
                  </div>
                )
              })}
            </div>
          </StitchCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <StitchCard className="p-5" hover={false}>
            <h3 className="font-bold text-on-surface mb-4">Información del Lab</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Nivel</span>
                <span className="font-bold text-on-surface">{lab.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Progreso</span>
                <span className="font-bold text-primary">{lab.progress}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Pasos</span>
                <span className="font-bold text-on-surface">{completedSteps}/{steps.length}</span>
              </div>
            </div>
          </StitchCard>

          {/* Related achievements */}
          <StitchCard className="p-5" hover={false}>
            <h3 className="font-bold text-on-surface mb-4">Logros Relacionados</h3>
            <div className="space-y-3">
              {MOCK_ACHIEVEMENTS.slice(0, 2).map(a => (
                <div key={a.id} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">{a.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{a.title}</p>
                    <p className="text-xs text-on-surface-variant">+{a.xpReward} XP</p>
                  </div>
                </div>
              ))}
            </div>
          </StitchCard>

          <StitchBtn href="/laboratorios" variant="secondary" className="w-full">
            Volver a Laboratorios
          </StitchBtn>
        </div>
      </div>
    </div>
  )
}
