import GlassCard from "@/app/components/GlassCard"
import ProgressRing from "@/app/components/ProgressRing"
import XPBar from "@/app/components/XPBar"
import StreakIndicator from "@/app/components/StreakIndicator"
import Link from "next/link"
import { getModules, getUserById, getUserAchievements, getUserRecentActivity, getLabs } from "@/lib/repositories"
import { auth } from "@/lib/auth"

import { Play, Map, ArrowRight, MoreHorizontal, CheckCircle2, CircleDot, ChevronRight, Lock, History, MessageSquare, Star, Zap, Diamond, Rocket } from "lucide-react"

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

const PRIMARY = "#7c6ff0"
const XP_BLUE = "#3B82F6"
const SUCCESS = "#10B981"

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

  const [labs] = await Promise.all([
    getLabs(),
  ])

  const totalModules = modules.length
  const completedModules = modules.filter(m => m.progress != null && m.progress === 100).length
  const globalProgress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0
  const displayName = user?.name || "Investigador Nexus"
  const displayLevel = user?.level ?? 1
  const displayXP = user?.xp ?? 0
  const displayXPToNext = user?.xpToNextLevel ?? 1000
  const displayStreak = user?.streakDays ?? 0
  const displayRank = user?.rank ?? null
  const xpProgress = Math.min(100, Math.round((displayXP / displayXPToNext) * 100))

  const levelNames = ["Novato", "Analista", "Investigador Junior", "Investigador", "Especialista", "Machine Learning Engineer"]
  const levels = levelNames.map((label, i) => {
    const num = i + 1
    return {
      label,
      num,
      done: num < displayLevel,
      active: num === displayLevel,
      locked: num > displayLevel,
    }
  })

  const recentAchievements = achievements.slice(0, 3).map(a => ({
    label: a.title,
    desc: a.description,
    icon: a.icon || "🏆",
    xp: `+${a.xpReward || 0} XP`,
    xpColor: "#10B981",
  }))

  const activeModule = modules.find(m => m.progress != null && m.progress > 0 && m.progress < 100) || modules[0]

  return (
    <div className="max-w-[1400px] mx-auto space-y-8">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left / Center Column */}
        <div className="xl:col-span-8 space-y-8">

          {/* HERO */}
          <section className="rounded-[32px] p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-10 overflow-hidden relative glass">
            <div className="flex-1 space-y-6 z-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-[#f5f4fa] leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  ¡Bienvenido de vuelta, {displayName}! 👋
                </h2>
                <p className="text-[#a8a4c0] text-base leading-relaxed max-w-md">
                  Estás construyendo tu camino en Nexus Institute. Continúa tu investigación y descubre nuevas formas de aplicar la Inteligencia Artificial.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="text-[#0b0920] px-8 py-3.5 rounded-2xl font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95 gradient-primary">
                  <Play className="w-4 h-4 fill-white" />
                  Continuar Misión
                </button>
                <button className="px-8 py-3.5 rounded-2xl font-bold border border-[#2a2454] flex items-center gap-2 transition-all active:scale-95 hover:bg-white/5 text-[#f5f4fa]">
                  <Map className="w-4 h-4" />
                  Explorar Mapa
                </button>
              </div>
            </div>
            {/* Illustration */}
            <div className="w-full lg:w-[42%] relative flex items-center justify-center">
              <div className="relative z-10 w-full flex items-center justify-center">
                <div className="rounded-3xl p-8 text-center gradient-accent" style={{ border: "1px solid rgba(124,111,240,0.1)" }}>
                  <div className="text-6xl mb-3">🏛️</div>
                  <div className="font-bold text-sm" style={{ color: PRIMARY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Nexus Institute
                  </div>
                  <div className="text-xs text-[#a8a4c0] mt-1">Machine Learning Campus</div>
                  {/* XP bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <span className="text-[#a8a4c0]">Nivel {displayLevel} → {displayLevel + 1}</span>
                      <span style={{ color: XP_BLUE, fontWeight: 700 }}>{displayXP.toLocaleString()} / {displayXPToNext.toLocaleString()} XP</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(59,130,246,0.15)" }}>
                      <div className="h-full rounded-full" style={{ width: `${xpProgress}%`, background: "linear-gradient(90deg, #7c6ff0, #3B82F6)", boxShadow: "0 0 8px rgba(59,130,246,0.6)" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECT + MISSION (2 cols) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card */}
            <div className="rounded-[24px] p-6 space-y-6 glass">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-xl text-[#f5f4fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Proyecto Actual
                </h3>
                <button className="text-[#a8a4c0] hover:text-[#f5f4fa]">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-inner flex-shrink-0" style={{ background: "rgba(124,111,240,0.06)" }}>
                  🍷
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg text-[#f5f4fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Wine Quality
                  </h4>
                  <p className="text-[#a8a4c0] text-sm">
                    Analizando características químicas para predecir calidad.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-[#a8a4c0]">Progreso</span>
                  <span style={{ color: PRIMARY }}>68%</span>
                </div>
                <div className="h-2 w-full rounded-full overflow-hidden" style={{ background: "#191533" }}>
                  <div className="h-full rounded-full" style={{ width: "68%", background: PRIMARY }} />
                </div>
              </div>

              <button className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors hover:opacity-90" style={{ background: "rgba(124,111,240,0.06)", color: PRIMARY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Ver proyecto <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mission Card */}
            <div className="rounded-[24px] p-6 space-y-6 glass">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-xl text-[#f5f4fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Misión Actual
                </h3>
                <button className="text-[#a8a4c0] hover:text-[#f5f4fa]">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-inner flex-shrink-0" style={{ background: "rgba(59,130,246,0.06)" }}>
                  🔬
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg text-[#f5f4fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Correlación entre variables
                  </h4>
                  <p className="text-[#a8a4c0] text-sm">
                    Relación entre los componentes químicos del vino.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-1.5 font-bold text-sm" style={{ color: "#f59e0b" }}>
                  <Diamond className="w-3.5 h-3.5" />
                  +40 XP
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#a8a4c0] text-xs font-bold uppercase tracking-wider">Dificultad</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full" style={{ background: i < 3 ? "#3B82F6" : "#2a2454" }}></div>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors hover:opacity-90" style={{ background: "rgba(124,111,240,0.06)", color: PRIMARY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Continuar misión <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MODULOS GO HERE */}
          <section className="space-y-5">
            <div>
              <h3 className="font-semibold text-xl text-[#f5f4fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Módulos del Curso
              </h3>
              <p className="text-[#a8a4c0] text-sm mt-1">
                Machine Learning for Data Analysis and SaaS
              </p>
            </div>
            <div className="space-y-3">
              {modules.map((mod) => {
                const isActive = mod.progress != null && mod.progress > 0 && mod.progress < 100 || (mod === modules.find(m => m.progress != null && m.progress > 0 && m.progress < 100));
                const isDone = mod.progress != null && mod.progress === 100;
                const isActiveModule = isActive && !isDone;
                const isPendingModule = !isDone && !isActiveModule;
                return (
                  <button
                    key={mod.id}
                    className="w-full text-left rounded-2xl p-4 flex items-center gap-4 transition-all hover:shadow-sm glass"
                    style={
                      isActiveModule
                        ? { border: "1px solid rgba(124,111,240,0.25)", background: "rgba(124,111,240,0.05)" }
                        : isDone
                        ? { border: "1px solid rgba(16,185,129,0.2)", background: "rgba(16,185,129,0.02)" }
                        : {}
                    }
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={
                        isDone
                          ? { background: "rgba(16,185,129,0.12)", color: SUCCESS }
                          : isActiveModule
                          ? { background: "rgba(124,111,240,0.12)", color: PRIMARY }
                          : { background: "#191533", color: "#a8a4c0" }
                      }
                    >
                      {isDone ? <CheckCircle2 className="w-5 h-5" /> : <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{mod.order}</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-semibold text-sm text-[#f5f4fa] truncate"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        Módulo {mod.order}: {mod.title}
                      </div>
                      <div className="text-xs text-[#a8a4c0] mt-0.5">{mod.lessons || 0} lecciones</div>
                    </div>
                    {isActiveModule && (
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0"
                        style={{ background: "rgba(124,111,240,0.1)", color: PRIMARY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        En curso
                      </span>
                    )}
                    {isDone && (
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0"
                        style={{ background: "rgba(16,185,129,0.1)", color: SUCCESS, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        Completado
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-[#a8a4c0] flex-shrink-0" />
                  </button>
                );
              })}
            </div>
          </section>

          {/* LABS GO HERE */}
          <section className="space-y-5">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-semibold text-xl text-[#f5f4fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Laboratorios
                </h3>
                <p className="text-[#a8a4c0] text-sm">Explora y domina cada área del conocimiento.</p>
              </div>
              <Link href="/laboratorios" className="text-sm font-bold flex items-center gap-1 hover:underline" style={{ color: PRIMARY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Ver todos <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {labs.map((lab) => (
                <div
                  key={lab.id}
                  className={`rounded-[20px] p-4 text-center space-y-4 transition-transform cursor-pointer glass
                    ${lab.locked ? "opacity-50" : "hover:-translate-y-1"}`}
                >
                  <div className="mx-auto w-12 h-12 flex items-center justify-center text-3xl">
                    {lab.icon || "🧪"}
                  </div>
                  <div className="space-y-1">
                    <p
                      className="font-bold text-sm text-[#f5f4fa]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {lab.name || lab.title}
                    </p>
                    <p className="text-[10px] text-[#a8a4c0] font-medium">
                      {lab.locked ? <span className="flex items-center justify-center gap-1"><Lock className="w-2.5 h-2.5" /> Bloqueado</span> : lab.level || "Nivel 1"}
                    </p>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#191533" }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${lab.progress || 0}%`, background: lab.color || PRIMARY }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Right Column */}
          <div className="xl:col-span-4 space-y-8">
            {/* TU PROGRESO */}
            <section className="rounded-[32px] p-6 space-y-6 glass">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-xl text-[#f5f4fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Tu Progreso
                </h3>
                <Link href="/niveles" className="text-xs font-bold flex items-center gap-1 hover:underline" style={{ color: PRIMARY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Ver roadmap <ChevronRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Level illustration */}
              <div className="rounded-2xl p-5 flex items-center justify-center gradient-accent">
                <div className="text-center">
                  {/* Progress ring */}
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#191533" strokeWidth="8" />
                      <circle
                        cx="50" cy="50" r="40" fill="none"
                        stroke={PRIMARY} strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 40 * (xpProgress / 100)} ${2 * Math.PI * 40 * (1 - xpProgress / 100)}`}
                        transform="rotate(-90 50 50)"
                        style={{ filter: "drop-shadow(0 0 6px #7c6ff080)" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold" style={{ color: PRIMARY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {displayLevel}
                      </span>
                    </div>
                  </div>
                  <p className="font-bold text-sm" style={{ color: PRIMARY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {displayRank?.name || levelNames[Math.min(displayLevel - 1, levelNames.length - 1)]}
                  </p>
                  <p className="text-xs text-[#a8a4c0] mt-0.5">{xpProgress}% hacia Nivel {displayLevel + 1}</p>
                </div>
              </div>

              {/* Level ladder */}
              <div className="space-y-3">
                {levels.map((lv) => (
                  <div key={lv.label} className={`flex items-center gap-4 p-2.5 rounded-xl transition-opacity ${lv.locked ? "opacity-40" : lv.active ? "" : "opacity-75 hover:opacity-100"}`} style={lv.active ? { background: "rgba(124,111,240,0.06)", border: "1px solid rgba(124,111,240,0.2)", borderRadius: "12px" } : {}}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={lv.done ? { background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", color: "#10B981" } : lv.active ? { background: "rgba(124,111,240,0.15)", border: "1px solid rgba(124,111,240,0.4)", color: PRIMARY } : { background: "#191533", color: "#a8a4c0" }}>
                      {lv.done ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : lv.active ? (
                        <CircleDot className="w-4 h-4" />
                      ) : (
                        <span className="text-[10px] font-bold">{lv.num}</span>
                      )}
                    </div>
                    <span className="text-sm flex-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: lv.active ? 700 : 500, color: lv.active ? PRIMARY : "#f5f4fa" }}>
                      {lv.label}
                    </span>
                    {lv.done && (
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#10B981" }} />
                    )}
                    {lv.active && (
                      <Rocket className="w-4 h-4 flex-shrink-0" style={{ color: PRIMARY }} />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* LOGROS RECIENTES */}
            <section className="rounded-[32px] p-6 space-y-5 glass">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-xl text-[#f5f4fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Logros Recientes
                </h3>
                <Link href="/logros" className="text-xs font-bold hover:underline" style={{ color: PRIMARY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Ver todos
                </Link>
              </div>
              <div className="space-y-4">
                {recentAchievements.map((a) => (
                  <div key={a.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "rgba(16,185,129,0.1)" }}>
                      {a.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <p className="font-bold text-sm text-[#f5f4fa] truncate" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {a.label}
                        </p>
                        <span className="text-[10px] font-bold flex-shrink-0 ml-2" style={{ color: "#10B981", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {a.xp}
                        </span>
                      </div>
                      <p className="text-xs text-[#a8a4c0] mt-0.5">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>

      </div>

      {/* COMMUNITY GO HERE */}
      <section className="space-y-5">
        <div>
          <h3 className="font-semibold text-xl text-[#f5f4fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Actividad de la Comunidad
          </h3>
          <p className="text-[#a8a4c0] text-sm">Lo que está pasando ahora en Nexus Institute.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Static community data based on Figma */}
          {recentActivity.slice(0, 3).map((act, index) => {
            const activityIcons = [MessageSquare, Star, Zap] as const
            const activityColors = ["rgba(59,130,246,0.1)", "rgba(16,185,129,0.1)", "rgba(249,115,22,0.1)"] as const
            const activityFg = [XP_BLUE, SUCCESS, "#f97316"] as const
            const Icon = activityIcons[index] || MessageSquare
            return (
              <div key={act.id} className="rounded-2xl p-4 flex items-start gap-4 glass">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: activityColors[index] || activityColors[0], color: activityFg[index] || activityFg[0] }}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#f5f4fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {act.message || "Actividad reciente"}
                  </p>
                  <p className="text-xs text-[#a8a4c0] mt-0.5 mb-2">Lección completada</p>
                  <span className="text-[10px] text-[#a8a4c080]">{formatActivityTime(act.timestamp)}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ACTIVITY BAR GO HERE */}
      <section className="rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-5 overflow-hidden relative glass">
        <div className="absolute left-0 top-0 w-1.5 h-full rounded-l-3xl" style={{ background: XP_BLUE }}></div>
        <div className="flex items-center gap-4 pl-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#1f1840" }}>
            <History className="w-4 h-4 text-[#a8a4c0]" />
          </div>
          <div>
            <p className="text-[#a8a4c0] font-medium text-sm">Actividad Reciente</p>
            <p className="font-bold text-[#f5f4fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {recentActivity[0]?.message || "Completaste la misión &quot;Media y Mediana&quot;"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="text-center">
            <p className="text-xs text-[#a8a4c0] uppercase tracking-widest mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Ganancia
            </p>
            <p className="font-extrabold" style={{ color: SUCCESS, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              +XP
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-[#a8a4c0] uppercase tracking-widest mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Hace
            </p>
            <p className="font-bold text-[#f5f4fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {recentActivity[0] ? formatActivityTime(recentActivity[0].timestamp) : "—"}
            </p>
          </div>
        </div>
        <button className="px-6 py-2 rounded-xl text-sm font-bold transition-colors hover:opacity-80" style={{ background: "#191533", color: "#f5f4fa", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Ver historial completo
        </button>
      </section>
    </div>
  )
}