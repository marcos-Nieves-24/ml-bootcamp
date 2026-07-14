import GlassCard from "@/app/components/GlassCard"
import ProgressRing from "@/app/components/ProgressRing"
import XPBar from "@/app/components/XPBar"
import StreakIndicator from "@/app/components/StreakIndicator"
import Link from "next/link"
import { getModules, getUserById, getUserAchievements, getUserRecentActivity } from "@/lib/repositories"
import { auth } from "@/lib/auth"

const DIFFICULTY_COLORS: Record<string, string> = {
  beginner: "text-success-green bg-success-green/10",
  intermediate: "text-primary bg-primary/10",
  advanced: "text-warning bg-warning/10",
  expert: "text-error bg-error/10",
}

const DIFFICULTY_LABELS: Record<string, string> = {
  beginner: "Principiante",
  intermediate: "Intermedio",
  advanced: "Avanzado",
  expert: "Experto",
}

const MODULE_ICONS: Record<string, string> = {
  "module01_ai": "psychology",
  "module02_python": "code",
  "module03_statistics": "query_stats",
  "module04_machine_learning": "account_tree",
  "module05_ethics": "gavel",
}

const ACTIVITY_MESSAGES: Record<string, (m: string) => string> = {
  lesson_complete: () => "Completaste una lección",
}

function formatActivityTime(date: Date): string {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return "Ahora"
  if (mins < 60) return `Hace ${mins} min`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `Hace ${hours}h`
  return `Hace ${Math.floor(hours / 24)}d`
}

export default async function DashboardPage() {
  const session = await auth()
  const userId = session?.user?.id
  const [user, modules] = await Promise.all([
    userId ? getUserById(userId) : null,
    getModules(userId),
  ])

  const [achievements, recentActivity] = userId
    ? await Promise.all([
        getUserAchievements(userId),
        getUserRecentActivity(userId),
      ])
    : [[], []]

  const totalModules = modules.length
  const completedModules = modules.filter(m => m.progress === 100).length
  const globalProgress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0
  const displayName = user?.name || "Investigador Nexus"
  const displayLevel = user?.level ?? 1
  const displayXP = user?.xp ?? 0
  const displayXPToNext = user?.xpToNextLevel ?? 1000
  const displayStreak = user?.streakDays ?? 0
  const displayRank = user?.rank ?? null
  const totalLessonsCompleted = modules.reduce((sum, m) => {
    const pct = m.progress ?? 0
    // Estimate lessons completed from module progress (rough)
    return sum
  }, 0)

  return (
    <div className="space-y-8">
      {/* Hero / User Profile */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-surface p-6 md:p-8 border border-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-6">
          <div className="space-y-2">
            <h1 className="font-headline-lg text-headline-lg text-deep-navy">
              Bienvenido, {displayName}
            </h1>
            <div className="flex items-center gap-4">
              <StreakIndicator days={displayStreak} />
              <span className="text-label-md text-on-surface-variant font-medium">
                {completedModules}/{totalModules} módulos completados
              </span>
              {displayRank && (
                <span className="text-label-md text-on-surface-variant font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">{displayRank.icon || "military_tech"}</span>
                  {displayRank.name}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ProgressRing value={globalProgress} size={64} strokeWidth={5} label={globalProgress.toString()} />
            <div>
              <p className="text-label-md text-on-surface-variant uppercase tracking-wider">Nivel {displayLevel}</p>
              <p className="font-headline-sm text-headline-sm text-deep-navy">{displayXP.toLocaleString()} XP</p>
              <p className="text-label-md text-on-surface-variant">{displayXPToNext.toLocaleString()} XP para nivel {displayLevel + 1}</p>
            </div>
          </div>
        </div>
      </div>

      {!userId && (
        <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <span className="material-symbols-outlined text-primary">info</span>
          <p className="text-sm text-on-surface-variant">
            <Link href="/login" className="text-primary font-bold hover:underline">Inicia sesión</Link> para ver tu progreso real y estadísticas.
          </p>
        </div>
      )}

      {/* Stats Grid */}
      {userId && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <GlassCard className="p-5 flex items-center gap-4" hover={false}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Progreso Global</p>
              <p className="text-2xl font-bold text-on-surface">{globalProgress}%</p>
            </div>
          </GlassCard>

          <GlassCard className="p-5 flex items-center gap-4" hover={false}>
            <div className="w-12 h-12 rounded-xl bg-success-green/10 flex items-center justify-center text-success-green">
              <span className="material-symbols-outlined text-2xl">stars</span>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Experiencia</p>
              <p className="text-2xl font-bold text-on-surface">{displayXP.toLocaleString()} XP</p>
            </div>
          </GlassCard>

          <GlassCard className="p-5 flex items-center gap-4" hover={false}>
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center text-warning">
              <span className="material-symbols-outlined text-2xl">local_fire_department</span>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Racha</p>
              <p className="text-2xl font-bold text-on-surface">{displayStreak} días</p>
            </div>
          </GlassCard>

          <GlassCard className="p-5 flex items-center gap-4" hover={false}>
            <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-2xl">emoji_events</span>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Logros</p>
              <p className="text-2xl font-bold text-on-surface">{achievements.length}</p>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Recent Activity + Achievements */}
      {userId && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="font-headline-md text-headline-md text-deep-navy">Actividad Reciente</h2>
            {recentActivity.length === 0 ? (
              <GlassCard className="p-6 text-center" hover={false}>
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">history</span>
                <p className="text-on-surface-variant">Todavía no tenés actividad. Completá tu primera lección para empezar.</p>
              </GlassCard>
            ) : (
              <div className="space-y-3">
                {recentActivity.map(activity => (
                  <GlassCard key={activity.id} className="p-4 flex items-center gap-4" hover={false}>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">
                        {activity.type === "lesson_complete" ? "check_circle" : "notifications"}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-on-surface">
                        {ACTIVITY_MESSAGES[activity.type]?.(activity.message) || activity.type}
                      </p>
                      <p className="text-sm text-on-surface-variant">{formatActivityTime(activity.timestamp)}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            )}
          </div>

          {/* Achievements */}
          <div className="space-y-4">
            <h2 className="font-headline-md text-headline-md text-deep-navy">Logros</h2>
            {achievements.length === 0 ? (
              <GlassCard className="p-6 text-center" hover={false}>
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">emoji_events</span>
                <p className="text-on-surface-variant">Completá lecciones para desbloquear logros.</p>
              </GlassCard>
            ) : (
              <div className="space-y-3">
                {achievements.map(achievement => (
                  <GlassCard key={achievement.id} className="p-4 flex items-center gap-4" hover={false}>
                    <div className="w-10 h-10 rounded-xl bg-success-green/10 flex items-center justify-center text-success-green shrink-0">
                      <span className="material-symbols-outlined">{achievement.icon || "emoji_events"}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-on-surface">{achievement.title}</p>
                      <p className="text-sm text-on-surface-variant">{achievement.description}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

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
        {modules.map((module, index) => (
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
              <XPBar value={module.progress ?? 0} className="h-2 mb-4" />

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
