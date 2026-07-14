import StitchCard from "@/app/components/StitchCard"
import XPBar from "@/app/components/XPBar"
import StitchBtn from "@/app/components/StitchBtn"
import { getProjects } from "@/lib/repositories"

const CATEGORY_COLORS: Record<string, string> = {
  SaaS: "bg-surface-container-low text-primary",
  "Biotecnología": "bg-surface-container-low text-tertiary",
}

const STATUS_ICONS: Record<string, string> = {
  "En Progreso": "autorenew",
  "in-progress": "autorenew",
  Completado: "check_circle",
  completed: "check_circle",
  Bloqueado: "lock",
  blocked: "lock",
  "No iniciado": "radio_button_unchecked",
  "not-started": "radio_button_unchecked",
}

export default async function ProyectosPage() {
  const projects = await getProjects()
  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold text-on-surface mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Proyectos
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl" style={{ fontFamily: "Inter, sans-serif" }}>
          Aplica tus conocimientos en casos de estudio reales de Biotecnología y SaaS. Supera desafíos para ascender en el rango de investigador.
        </p>
      </section>

      {/* Project Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {projects.map((project) => {
          const statusIcon = STATUS_ICONS[project.status] || "radio_button_unchecked"
          const isLocked = project.status === "Bloqueado"

          return (
            <StitchCard key={project.id} className={`p-6 flex flex-col ${isLocked ? 'opacity-60' : ''}`} hover={!isLocked}>
              {/* Header: category + status */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${(project.category && CATEGORY_COLORS[project.category]) || "bg-surface-container-low text-on-surface-variant"}`}>
                  {project.category ?? 'Proyecto'}
                </span>
                <span className="text-xs font-bold text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">{statusIcon}</span>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-on-surface mb-2">{project.title}</h3>
              <p className="text-sm text-on-surface-variant mb-4">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                  {(project.techTags ?? []).map(tag => (
                  <span key={tag} className="text-xs bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full font-medium">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Progress */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-on-surface-variant">Progreso</span>
                  <span className="text-xs font-bold text-primary">{project.progress ?? 0}%</span>
                </div>
                <XPBar value={project.progress ?? 0} className="mb-4" />

                <StitchBtn
                  href={isLocked ? "#" : `/proyectos/${project.id}`}
                  className="w-full text-sm py-2.5"
                >
                  {project.status === "Completado" ? "Ver detalles" :
                   project.status === "En Progreso" ? "Continuar" :
                   isLocked ? "🔒 Bloqueado" : "Comenzar Misión"}
                </StitchBtn>
              </div>
            </StitchCard>
          )
        })}
      </div>
    </div>
  )
}
