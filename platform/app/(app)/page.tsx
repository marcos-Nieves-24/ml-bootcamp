import type { Metadata } from "next"
import GlassCard from "@/app/components/GlassCard"
import XPBar from "@/app/components/XPBar"
import ProgressRing from "@/app/components/ProgressRing"
import StreakIndicator from "@/app/components/StreakIndicator"
import GradientBtn from "@/app/components/GradientBtn"
import {
  MOCK_PROJECTS,
  MOCK_LABS,
  MOCK_RANKS,
  MOCK_ACHIEVEMENTS,
  MOCK_ACTIVITIES,
} from "@/lib/data"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Panel de control del investigador. Progreso, misiones y actividad en ML Expedition.",
}

function RankLadder() {
  const currentXp = 1260
  return (
    <div className="space-y-3">
      <h2 className="font-bold text-[#191c1e]">Rangos</h2>
      {MOCK_RANKS.map((rank, index) => {
        const isCurrent = rank.xpRequired <= currentXp && (index + 1 >= MOCK_RANKS.length || MOCK_RANKS[index + 1].xpRequired > currentXp)
        const isEarned = rank.xpRequired <= currentXp
        return (
          <div key={rank.id} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              isEarned ? "bg-[#4f46e5] text-white" : "bg-gray-200 text-gray-400"
            }`}>
              {index + 1}
            </div>
            <div className="flex-1">
              <p className={`font-bold text-sm ${isEarned ? "text-[#191c1e]" : "text-gray-400"}`}>{rank.name}</p>
              <p className="text-xs text-gray-500">
                {isEarned ? `${rank.xpRequired} XP` : `Requisito: ${rank.xpRequired} XP`}
              </p>
            </div>
            {isCurrent && <span className="text-white text-xs bg-[#4f46e5] px-2 py-0.5 rounded-full font-bold">ACTUAL</span>}
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
      <GlassCard className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#191c1e]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Bienvenido, Investigador
            </h1>
            <p className="text-[#464555] mt-2 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
              Continúa tu expedición de Machine Learning
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ProgressRing value={63} size={70} strokeWidth={5} label="4" />
            <div>
              <p className="text-xs text-gray-500">Nivel Actual</p>
              <p className="text-xl font-bold text-[#3B82F6]">1,260 XP</p>
              <p className="text-xs text-gray-500">740 XP para nivel 5</p>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Current Project */}
          {MOCK_PROJECTS.filter(p => p.id === 'wine-quality').map(project => (
            <GlassCard key={project.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg text-[#191c1e]">Proyecto actual</h2>
                <span className="text-xs font-bold text-[#684000] bg-[#684000]/10 px-3 py-1 rounded-full">{project.difficultyBadge}</span>
              </div>
              <p className="font-bold text-xl text-[#191c1e] mb-1">{project.title}</p>
              <p className="text-[#464555] text-sm mb-4">{project.description}</p>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-gray-500">Progreso</span>
                <span className="font-bold text-[#3B82F6]">{project.progress}%</span>
              </div>
              <XPBar value={project.progress} className="mb-4" />
              <GradientBtn>Continuar proyecto</GradientBtn>
            </GlassCard>
          ))}

          {/* Lab Grid */}
          <div>
            <h2 className="font-bold text-lg text-[#191c1e] mb-3">Laboratorios</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {MOCK_LABS.map(lab => (
                <GlassCard key={lab.id} hover={!lab.locked} className="p-4 flex flex-col items-center text-center">
                  <span className={`material-symbols-outlined text-3xl mb-2 ${lab.locked ? 'text-gray-400' : 'text-[#4f46e5]'}`}>
                    {lab.locked ? 'lock' : (lab.icon || 'science')}
                  </span>
                  <p className={`font-bold text-sm ${lab.locked ? 'text-gray-400' : 'text-[#191c1e]'} mb-1`}>{lab.name}</p>
                  {lab.locked ? (
                    <span className="text-xs text-gray-400">Nivel {lab.level}</span>
                  ) : (
                    <div className="w-full">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">Nv.{lab.level}</span>
                        <span className="text-[#3B82F6]">{lab.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-[#3B82F6]" style={{ width: `${lab.progress}%` }} />
                      </div>
                    </div>
                  )}
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Progress / Ranks */}
          <GlassCard className="p-6">
            <RankLadder />
          </GlassCard>

          {/* Recent Achievements */}
          <GlassCard className="p-6">
            <h2 className="font-bold text-[#191c1e] mb-3">Logros recientes</h2>
            <div className="space-y-3">
              {MOCK_ACHIEVEMENTS.slice(0, 3).map(a => (
                <div key={a.id} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-2xl text-[#684000]">{a.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-[#191c1e]">{a.title}</p>
                    <p className="text-xs text-gray-500">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Activity Feed */}
      <GlassCard className="p-6">
        <h2 className="font-bold text-lg text-[#191c1e] mb-4">Actividad reciente</h2>
        <div className="space-y-3">
          {MOCK_ACTIVITIES.slice(0, 4).map(a => (
            <div key={a.id} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
              <span className="material-symbols-outlined text-[#3B82F6]">
                {a.type === 'achievement' ? 'emoji_events' : a.type === 'community' ? 'forum' : 'trending_up'}
              </span>
              <p className="text-sm text-[#464555]">{a.message}</p>
              {a.user && <span className="text-xs text-gray-400 ml-auto">{a.user}</span>}
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
