import Link from "next/link"
import StitchCard from "@/app/components/StitchCard"
import StitchBtn from "@/app/components/StitchBtn"
import XPBar from "@/app/components/XPBar"
import { getProjects, getDeliverables } from "@/lib/repositories"

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

const STATUS_COLORS: Record<string, string> = {
  "En Progreso": "text-primary bg-primary/10",
  "in-progress": "text-primary bg-primary/10",
  Completado: "text-success-green bg-success-green/10",
  completed: "text-success-green bg-success-green/10",
  Bloqueado: "text-on-surface-variant bg-surface-container",
  blocked: "text-on-surface-variant bg-surface-container",
  "No iniciado": "text-on-surface-variant bg-surface-container",
  "not-started": "text-on-surface-variant bg-surface-container",
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const projects = await getProjects()
  const project = projects.find(p => p.id === id)
  const deliverables = await getDeliverables(id)

  if (!project) {
    return (
      <div className="text-center py-20">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">architecture</span>
        <h1 className="text-2xl font-bold text-on-surface mb-2">Proyecto no encontrado</h1>
        <p className="text-on-surface-variant mb-6">El proyecto que buscas no existe.</p>
        <StitchBtn href="/proyectos">Volver a Proyectos</StitchBtn>
      </div>
    )
  }

  const isLocked = project.status === "Bloqueado"

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant">
        <Link href="/proyectos" className="hover:text-primary transition-colors">Proyectos</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary font-bold">{project.title}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-on-surface">{project.title}</h1>
            <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${STATUS_COLORS[project.status] || "bg-surface-container text-on-surface-variant"}`}>
              {project.status}
            </span>
          </div>
          <p className="text-on-surface-variant max-w-2xl">{project.description}</p>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-surface-container text-on-surface-variant shrink-0">
          {project.category}
        </span>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress */}
          <StitchCard className="p-6 glass-card" hover={false}>
            <h2 className="font-bold text-lg text-on-surface mb-4">Progreso</h2>
            <div className="flex items-center gap-4 mb-2">
              <XPBar value={project.progress ?? 0} className="flex-1" />
              <span className="text-lg font-bold text-primary">{project.progress ?? 0}%</span>
            </div>
            <p className="text-sm text-on-surface-variant">
              {project.status === "Completado" ? "¡Proyecto completado!" :
               project.status === "En Progreso" ? "Continúa donde lo dejaste" :
               isLocked ? "Completa los requisitos para desbloquear" :
               "Este proyecto está listo para comenzar"}
            </p>

            {!isLocked && project.status !== "Completado" && (
              <StitchBtn className="mt-6" onClick={() => alert("Entorno de desarrollo próximamente")}>
                {project.status === "En Progreso" ? "Continuar proyecto" : "Comenzar proyecto"}
              </StitchBtn>
            )}
          </StitchCard>

          {/* Tech Stack */}
          <StitchCard className="p-6 glass-card" hover={false}>
            <h2 className="font-bold text-lg text-on-surface mb-4">Stack Tecnológico</h2>
            <div className="flex flex-wrap gap-2">
              {(project.techTags ?? []).map(tag => (
                <span key={tag} className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg text-sm font-medium border border-border-muted">
                  {tag}
                </span>
              ))}
            </div>
          </StitchCard>

          {/* Objectives */}
          <StitchCard className="p-6 glass-card" hover={false}>
            <h2 className="font-bold text-lg text-on-surface mb-4">Entregables del Proyecto</h2>
            <div className="space-y-3">
              {(() => {
                const items = deliverables.length > 0 ? deliverables : [
                  { id: "default-1", projectId: project.id, title: "Análisis y comprensión del problema", description: "Define el alcance y los objetivos del proyecto", estimatedHours: 2 },
                  { id: "default-2", projectId: project.id, title: "Análisis exploratorio de datos", description: "Explora y visualiza los datos disponibles", estimatedHours: 3 },
                  { id: "default-3", projectId: project.id, title: "Implementación de modelos", description: "Entrena y ajusta modelos de ML", estimatedHours: 5 },
                  { id: "default-4", projectId: project.id, title: "Evaluación y optimización", description: "Mide y mejora el rendimiento", estimatedHours: 3 },
                  { id: "default-5", projectId: project.id, title: "Documentación final", description: "Resultados y conclusiones", estimatedHours: 2 },
                ]
                const completedDeliverables = deliverables.filter(d => d.isCompleted).length
                return (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-bold text-lg text-on-surface">Entregables del Proyecto</h2>
                      <span className="text-sm text-on-surface-variant">{completedDeliverables}/{deliverables.length}</span>
                    </div>
                    <div className="space-y-3">
                      {deliverables.map((deliverable, index) => (
                        <div key={deliverable.id} className="flex items-center gap-3 p-3 rounded-xl border border-border-muted">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                            deliverable.isCompleted ? "bg-success-green text-white" : "bg-surface-container text-on-surface-variant"
                          }`}>
                            {deliverable.isCompleted ? (
                              <span className="material-symbols-outlined text-sm">check</span>
                            ) : (
                              index + 1
                            )}
                          </div>
                          <div className="flex-1">
                            <span className={`text-sm font-medium ${deliverable.isCompleted ? "text-success-green" : "text-on-surface"}`}>
                              {deliverable.title}
                            </span>
                            <p className="text-xs text-on-surface-variant">{deliverable.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })()}
            </div>
          </StitchCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <StitchCard className="p-5 glass-card" hover={false}>
            <h3 className="font-bold text-on-surface mb-4">Detalles</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Categoría</span>
                <span className="font-bold text-on-surface">{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Dificultad</span>
                <span className="font-bold text-on-surface">{project.difficultyBadge}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Estado</span>
                <span className="font-bold text-on-surface">{project.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Progreso</span>
                <span className="font-bold text-primary">{project.progress ?? 0}%</span>
              </div>
            </div>
          </StitchCard>

          <StitchBtn href="/proyectos" variant="secondary" className="w-full">
            Volver a Proyectos
          </StitchBtn>
        </div>
      </div>
    </div>
  )
}