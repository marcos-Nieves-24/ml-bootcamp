"use client"

import GlassCard from "@/app/components/GlassCard"
import ProgressRing from "@/app/components/ProgressRing"
import XPBar from "@/app/components/XPBar"
import StreakIndicator from "@/app/components/StreakIndicator"
import Link from "next/link"
import { MOCK_MODULES, MOCK_USERS } from "@/lib/data"

const DIFFICULTY_COLORS: Record<number, string> = {
  1: "text-success-green bg-success-green/10",
  2: "text-primary bg-primary/10",
  3: "text-warning bg-warning/10",
  4: "text-error bg-error/10",
}

const DIFFICULTY_LABELS: Record<number, string> = {
  1: "Principiante",
  2: "Intermedio",
  3: "Avanzado",
  4: "Experto",
}

const MODULE_ICONS: Record<string, string> = {
  "module01_ai": "psychology",
  "module02_python": "code",
  "module03_statistics": "query_stats",
  "module04_machine_learning": "account_tree",
  "module05_ethics": "gavel",
}

export default function DashboardPage() {
  const user = MOCK_USERS[0]
  const completedModules = MOCK_MODULES.filter(m => m.progress === 100).length
  const totalModules = MOCK_MODULES.length
  const globalProgress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-surface p-6 md:p-8 border border-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-6">
          <div className="space-y-2">
            <h1 className="font-headline-lg text-headline-lg text-deep-navy">
              Bienvenido, {user.name}
            </h1>
            <div className="flex items-center gap-4">
              <StreakIndicator days={user.streakDays} />
              <span className="text-label-md text-on-surface-variant font-medium">
                {completedModules}/{totalModules} módulos completados
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ProgressRing value={globalProgress} size={64} strokeWidth={5} label={globalProgress.toString()} />
            <div>
              <p className="text-label-md text-on-surface-variant uppercase tracking-wider">Nivel {user.level}</p>
              <p className="font-headline-sm text-headline-sm text-deep-navy">{user.xp.toLocaleString()} XP</p>
              <p className="text-label-md text-on-surface-variant">{user.xpToNextLevel.toLocaleString()} XP para nivel {user.level + 1}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Module Grid Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-headline-md text-headline-md text-deep-navy">Tus Expediciones</h2>
          <p className="font-body-md text-on-surface-variant">{totalModules} módulos para dominar ML</p>
        </div>
        <Link href="/expediciones" className="text-label-lg font-bold text-primary hover:text-primary/80 transition-colors">
          Ver todas →
        </Link>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {MOCK_MODULES.map((module, index) => (
          <Link key={module.id} href={`/expediciones/${module.id}`} className="group block">
            <GlassCard className="p-5 h-full flex flex-col transition-all duration-200 hover:shadow-lg hover:border-primary/50 hover:-translate-y-0.5">
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl">
                      {MODULE_ICONS[module.id]}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="text-label-md text-on-surface-variant font-medium">Módulo {index + 1}</span>
                    <h3 className="font-label-lg text-deep-navy leading-tight truncate">{module.title}</h3>
                  </div>
                </div>
                <span className={`shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-full ${DIFFICULTY_COLORS[module.difficulty]}`}>
                  {DIFFICULTY_LABELS[module.difficulty]}
                </span>
              </div>

              {/* Description */}
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                {module.description}
              </p>

              {/* Progress bar */}
              <XPBar value={module.progress} className="h-2 mb-4" />

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-border-muted">
                <span className="text-label-md text-on-surface-variant font-medium">{module.xpReward} XP</span>
                <span className="text-label-md font-bold text-primary group-hover:text-primary/80 transition-colors flex items-center gap-0.5">
                  {module.progress === 0 ? "Comenzar" : "Continuar"}
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </span>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  )
}
