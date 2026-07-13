import type { Metadata } from "next"
import StitchCard from "@/app/components/StitchCard"
import StitchBtn from "@/app/components/StitchBtn"
import XPBar from "@/app/components/XPBar"
import ProgressRing from "@/app/components/ProgressRing"
import StreakIndicator from "@/app/components/StreakIndicator"
import Link from "next/link"
import {
  MOCK_PROJECTS,
  MOCK_LABS,
  MOCK_RANKS,
  MOCK_ACHIEVEMENTS,
  MOCK_ACTIVITIES,
  MOCK_MODULES,
} from "@/lib/data"

export const metadata: Metadata = {
  title: "Dashboard | ML Expedition",
  description: "Panel de control del investigador. Progreso, misiones y actividad en ML Expedition.",
}

function RankLadder() {
  const currentXp = 1260
  return (
    <div className="space-y-3">
      <h2 className="font-bold text-on-surface">Rangos</h2>
      {MOCK_RANKS.map((rank, index) => {
        const isCurrent = rank.xpRequired <= currentXp && (index + 1 >= MOCK_RANKS.length || MOCK_RANKS[index + 1].xpRequired > currentXp)
        const isEarned = rank.xpRequired <= currentXp
        return (
          <div key={rank.id} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              isEarned ? "bg-primary text-white" : "bg-surface-container text-on-surface-variant"
            }`}>
              {index + 1}
            </div>
            <div className="flex-1">
              <p className={`font-bold text-sm ${isEarned ? "text-on-surface" : "text-on-surface-variant"}`}>{rank.name}</p>
              <p className="text-xs text-on-surface-variant">
                {isEarned ? `${rank.xpRequired} XP` : `Requisito: ${rank.xpRequired} XP`}
              </p>
            </div>
            {isCurrent && <span className="text-white text-xs bg-primary px-2 py-0.5 rounded-full font-bold">ACTUAL</span>}
          </div>
        )
      })}
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-surface p-6 md:p-8 border border-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface">
              Bienvenido, Investigador
            </h1>
            <p className="text-on-surface-variant mt-2 text-lg">
              Continúa tu expedición de Machine Learning
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ProgressRing value={63} size={70} strokeWidth={5} label="4" />
            <div>
              <p className="text-xs text-on-surface-variant">Nivel Actual</p>
              <p className="text-xl font-bold text-primary">1,260 XP</p>
              <p className="text-xs text-on-surface-variant">740 XP para nivel 5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/expediciones" className="group block">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[#3525cd] p-6 text-on-primary transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <span className="material-symbols-outlined text-3xl mb-2 block">school</span>
              <h3 className="font-bold text-lg text-white">Expediciones</h3>
              <p className="text-sm text-white/80 mt-1">Ruta de aprendizaje completa</p>
              <span className="inline-block mt-3 text-sm font-bold text-white/90 group-hover:text-white transition-colors">
                Explorar rutas →
              </span>
            </div>
          </div>
        </Link>
        <Link href="/laboratorios" className="group block">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-[#7c3aed] p-6 text-white transition-all hover:shadow-lg hover:shadow-secondary/25 active:scale-[0.98]">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="relative z-10">
              <span className="material-symbols-outlined text-3xl mb-2 block">science</span>
              <h3 className="font-bold text-lg">Laboratorios</h3>
              <p className="text-sm text-white/80 mt-1">Practica con ejercicios interactivos</p>
              <span className="inline-block mt-3 text-sm font-bold text-white/90 group-hover:text-white transition-colors">
                Entrar a laboratorios →
              </span>
            </div>
          </div>
        </Link>
        <Link href="/proyectos" className="group block">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-tertiary to-[#0891b2] p-6 text-white transition-all hover:shadow-lg hover:shadow-tertiary/25 active:scale-[0.98]">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="relative z-10">
              <span className="material-symbols-outlined text-3xl mb-2 block">architecture</span>
              <h3 className="font-bold text-lg">Proyectos</h3>
              <p className="text-sm text-white/80 mt-1">Casos de estudio reales</p>
              <span className="inline-block mt-3 text-sm font-bold text-white/90 group-hover:text-white transition-colors">
                Ver proyectos →
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Current Project */}
          {MOCK_PROJECTS.filter(p => p.id === 'wine-quality').map(project => (
            <StitchCard key={project.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg text-on-surface">Proyecto actual</h2>
                <span className="text-xs font-bold text-[#684000] bg-[#684000]/10 px-3 py-1 rounded-full">{project.difficultyBadge}</span>
              </div>
              <p className="font-bold text-xl text-on-surface mb-1">{project.title}</p>
              <p className="text-on-surface-variant text-sm mb-4">{project.description}</p>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-on-surface-variant">Progreso</span>
                <span className="font-bold text-primary">{project.progress}%</span>
              </div>
              <XPBar value={project.progress} className="mb-4" />
              <StitchBtn href={`/proyectos/${project.id}`}>Continuar proyecto</StitchBtn>
            </StitchCard>
          ))}

          {/* Lab Grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-lg text-on-surface">Laboratorios</h2>
              <Link href="/laboratorios" className="text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                Ver todos →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {MOCK_LABS.slice(0, 3).map(lab => (
                <Link key={lab.id} href={lab.locked ? "#" : `/laboratorios/${lab.id}`} className="block group">
                  <StitchCard hover={!lab.locked} className="p-4 flex flex-col items-center text-center">
                    <span className={`material-symbols-outlined text-3xl mb-2 ${lab.locked ? 'text-on-surface-variant' : 'text-primary'}`}>
                      {lab.locked ? 'lock' : (lab.icon || 'science')}
                    </span>
                    <p className={`font-bold text-sm ${lab.locked ? 'text-on-surface-variant' : 'text-on-surface'} mb-1`}>{lab.name}</p>
                    {lab.locked ? (
                      <span className="text-xs text-on-surface-variant">Nivel {lab.level}</span>
                    ) : (
                      <div className="w-full">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-on-surface-variant">Nv.{lab.level}</span>
                          <span className="text-primary">{lab.progress}%</span>
                        </div>
                        <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${lab.progress}%` }} />
                        </div>
                      </div>
                    )}
                  </StitchCard>
                </Link>
              ))}
            </div>
            <div className="mt-3 text-center">
              <Link href="/laboratorios" className="text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                Ver todos los laboratorios →
              </Link>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Progress / Ranks */}
          <StitchCard className="p-6">
            <RankLadder />
          </StitchCard>

          {/* Recent Achievements */}
          <StitchCard className="p-6">
            <h2 className="font-bold text-on-surface mb-3">Logros recientes</h2>
            <div className="space-y-3">
              {MOCK_ACHIEVEMENTS.slice(0, 3).map(a => (
                <div key={a.id} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-2xl text-warning">{a.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{a.title}</p>
                    <p className="text-xs text-on-surface-variant">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </StitchCard>
        </div>
      </div>

      {/* Activity Feed */}
      <StitchCard className="p-6">
        <h2 className="font-bold text-lg text-on-surface mb-4">Actividad reciente</h2>
        <div className="space-y-3">
          {MOCK_ACTIVITIES.slice(0, 4).map(a => (
            <div key={a.id} className="flex items-center gap-3 py-2 border-b border-border-muted last:border-0">
              <span className="material-symbols-outlined text-primary">
                {a.type === 'achievement' ? 'emoji_events' : a.type === 'community' ? 'forum' : 'trending_up'}
              </span>
              <p className="text-sm text-on-surface-variant">{a.message}</p>
              {a.user && <span className="text-xs text-on-surface-variant ml-auto">{a.user}</span>}
            </div>
          ))}
        </div>
      </StitchCard>
    </div>
  )
}