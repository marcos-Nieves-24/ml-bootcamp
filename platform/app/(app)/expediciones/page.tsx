import Link from "next/link"
import type { Metadata } from "next"
import StitchCard from "@/app/components/StitchCard"
import XPBar from "@/app/components/XPBar"
import { getModules } from "@/lib/repositories"
import { auth } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Expediciones · ML Expedition",
  description: "Ruta de aprendizaje de Machine Learning. Progreso, módulos y XP.",
}

const DIFFICULTY_LABELS: Record<string, string> = {
  beginner: "Principiante",
  intermediate: "Intermedio",
  advanced: "Avanzado",
  expert: "Experto",
}

const DIFFICULTY_COLORS: Record<string, string> = {
  beginner: "text-success-green bg-success-green/10",
  intermediate: "text-primary bg-primary/10",
  advanced: "text-warning bg-warning/10",
  expert: "text-error bg-error/10",
}

export default async function ExpedicionesPage() {
  const session = await auth()
  const userId = session?.user?.id
  const modules = await getModules(userId)
  const completedModules = modules.filter(m => m.progress === 100).length
  const totalModules = modules.length
  const totalXP = modules.reduce((sum, m) => sum + m.xpReward, 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold text-on-surface mb-2">Expediciones</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl">
          Tu ruta de aprendizaje en Machine Learning. Cada módulo te acerca más a convertirte en un investigador completo.
        </p>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StitchCard className="p-5 flex items-center gap-4" hover={false}>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">school</span>
          </div>
          <div>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Módulos</p>
            <p className="text-2xl font-bold text-on-surface">{completedModules}/{totalModules}</p>
          </div>
        </StitchCard>

        <StitchCard className="p-5 flex items-center gap-4" hover={false}>
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-2xl">stars</span>
          </div>
          <div>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">XP Total</p>
            <p className="text-2xl font-bold text-on-surface">{totalXP} XP</p>
          </div>
        </StitchCard>

        <StitchCard className="p-5 flex items-center gap-4" hover={false}>
          <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-2xl">flag</span>
          </div>
          <div>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Progreso Global</p>
            <p className="text-2xl font-bold text-on-surface">
              {totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0}%
            </p>
          </div>
        </StitchCard>
      </div>

      {/* Module List */}
      <div className="space-y-4">
        {modules.map((module, index) => (
          <Link key={module.id} href={`/expediciones/${module.id}`} className="block">
            <StitchCard className="p-6 hover:border-primary/50 transition-colors cursor-pointer glass-card">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Number */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-on-surface truncate">{module.title}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${DIFFICULTY_COLORS[module.difficulty] || "text-on-surface-variant bg-surface-container"}`}>
                      {DIFFICULTY_LABELS[module.difficulty] || `Nivel ${module.difficulty}`}
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-3">{module.description}</p>

                  {/* Progress */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <XPBar value={module.progress ?? 0} />
                    </div>
                    <span className="text-sm font-bold text-primary shrink-0">{module.progress ?? 0}%</span>
                    <span className="text-xs text-on-surface-variant shrink-0">+{module.xpReward} XP</span>
                  </div>
                </div>

                {/* Arrow */}
                <span className="material-symbols-outlined text-on-surface-variant shrink-0">chevron_right</span>
              </div>
            </StitchCard>
          </Link>
        ))}
      </div>
    </div>
  )
}
