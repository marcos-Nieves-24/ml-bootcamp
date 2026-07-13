import GlassCard from "@/app/components/GlassCard"
import XPBar from "@/app/components/XPBar"
import GradientBtn from "@/app/components/GradientBtn"
import { MOCK_PROJECTS } from "@/lib/data"

const CATEGORY_COLORS: Record<string, string> = {
  SaaS: "bg-blue-50 text-blue-700",
  "Biotecnología": "bg-emerald-50 text-emerald-700",
}

const STATUS_ICONS: Record<string, string> = {
  "En Progreso": "autorenew",
  Completado: "check_circle",
  Bloqueado: "lock",
  "No iniciado": "radio_button_unchecked",
}

export default function ProyectosPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold text-[#191c1e] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Proyectos
        </h1>
        <p className="text-[#464555] text-lg max-w-2xl" style={{ fontFamily: "Inter, sans-serif" }}>
          Aplica tus conocimientos en casos de estudio reales de Biotecnología y SaaS. Supera desafíos para ascender en el rango de investigador.
        </p>
      </section>

      {/* Project Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {MOCK_PROJECTS.map((project) => {
          const statusIcon = STATUS_ICONS[project.status] || "radio_button_unchecked"
          const isLocked = project.status === "Bloqueado"

          return (
            <GlassCard key={project.id} className={`p-6 flex flex-col ${isLocked ? 'opacity-60' : ''}`}>
              {/* Header: category + status */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[project.category] || "bg-gray-100 text-gray-700"}`}>
                  {project.category}
                </span>
                <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">{statusIcon}</span>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#191c1e] mb-2">{project.title}</h3>
              <p className="text-sm text-[#464555] mb-4">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techTags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Progress */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">Progreso</span>
                  <span className="text-xs font-bold text-[#3B82F6]">{project.progress}%</span>
                </div>
                <XPBar value={project.progress} className="mb-4" />

                <GradientBtn className="w-full text-sm py-2.5">
                  {project.status === "Completado" ? "Ver detalles" :
                   project.status === "En Progreso" ? "Continuar" :
                   isLocked ? "🔒 Bloqueado" : "Comenzar Misión"}
                </GradientBtn>
              </div>
            </GlassCard>
          )
        })}
      </div>
    </div>
  )
}
