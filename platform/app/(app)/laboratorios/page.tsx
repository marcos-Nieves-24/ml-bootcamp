"use client"

import Link from "next/link"
import StitchCard from "@/app/components/StitchCard"
import XPBar from "@/app/components/XPBar"
import ProgressRing from "@/app/components/ProgressRing"
import StitchBtn from "@/app/components/StitchBtn"
import { MOCK_LABS, MOCK_ACTIVITIES } from "@/lib/data"

const SIDEBAR_LAB_ICONS: Record<string, string> = {
  "python-lab": "code",
  "data-lab": "bar_chart",
  "stats-lab": "query_stats",
  "ml-lab": "account_tree",
  "deep-learning-lab": "neurology",
  "ethics-lab": "gavel",
}

export default function LaboratoriosPage() {
  const completed = MOCK_LABS.filter(l => !l.locked && l.progress > 0).length
  const total = MOCK_LABS.length
  const progress = (completed / total) * 100

  const labActivities = MOCK_ACTIVITIES.filter(a => a.type === "lab" || a.type === "achievement").slice(0, 3)

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Laboratorios
        </h1>
        <p className="text-on-surface-variant text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
          Explora y domina cada área del conocimiento a través de laboratorios prácticos e interactivos.
        </p>
      </section>

      {/* Grid + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Lab Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {MOCK_LABS.map((lab) => (
            <StitchCard key={lab.id} hover={!lab.locked} className={`p-5 flex flex-col ${lab.locked ? 'opacity-60' : ''}`}>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">{SIDEBAR_LAB_ICONS[lab.id] || "science"}</span>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  Nivel {lab.level}
                </span>
              </div>

              <h3 className="font-bold text-on-surface mb-1">{lab.name}</h3>

              {lab.locked && lab.requirement && (
                <p className="text-xs text-on-surface-variant mb-3">🔒 {lab.requirement}</p>
              )}

              {/* Progress */}
              {lab.locked ? (
                <div className="mt-auto">
                  <span className="material-symbols-outlined text-on-surface-variant text-3xl block text-center">lock</span>
                </div>
              ) : (
                <div className="mt-auto">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-on-surface-variant">Progreso</span>
                    <span className="text-primary font-bold">{lab.progress}%</span>
                  </div>
                  <XPBar value={lab.progress} className="mb-3" />
                  <StitchBtn href={`/laboratorios/${lab.id}`} className="w-full text-sm py-2.5">
                    Entrar al Lab
                  </StitchBtn>
                </div>
              )}
            </StitchCard>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          {/* Stats */}
          <StitchCard className="p-5" hover={false}>
            <h4 className="font-bold text-primary mb-4">Estadísticas de Lab</h4>
            <div className="flex flex-col items-center mb-4">
              <ProgressRing value={progress} size={100} strokeWidth={6} label={`${completed}/${total}`} />
              <p className="text-xs text-on-surface-variant mt-2">Laboratorios completados</p>
            </div>

            <div className="bg-primary/10 rounded-xl p-3 mb-3">
              <p className="text-xs uppercase tracking-wider text-primary font-bold mb-1">Total XP Labs</p>
              <p className="text-xl font-bold text-on-surface">12,450 XP</p>
            </div>

            {/* Next Achievement */}
            <div className="bg-warning/10 rounded-xl p-3 mb-3">
              <p className="text-xs uppercase tracking-wider text-warning font-bold mb-1">Siguiente Logro</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-on-surface">Master Coder</span>
                <span className="text-xs font-bold text-warning">85%</span>
              </div>
              <div className="h-1.5 bg-warning/20 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-warning rounded-full" style={{ width: "85%" }} />
              </div>
            </div>

            {/* Last Activity */}
            <div className="bg-surface-container-low rounded-xl p-3">
              <p className="text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2">Última Actividad</p>
              <div className="space-y-2">
                {labActivities.map(a => (
                  <div key={a.id} className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm text-primary">
                      {a.type === "achievement" ? "emoji_events" : "science"}
                    </span>
                    <span>{a.message}</span>
                  </div>
                ))}
              </div>
            </div>
          </StitchCard>
        </aside>
      </div>
    </div>
  )
}
