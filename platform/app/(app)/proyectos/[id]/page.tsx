"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import StitchCard from "@/app/components/StitchCard"
import StitchBtn from "@/app/components/StitchBtn"
import XPBar from "@/app/components/XPBar"
import { MOCK_PROJECTS } from "@/lib/data"

const STATUS_ICONS: Record<string, string> = {
  "En Progreso": "autorenew",
  Completado: "check_circle",
  Bloqueado: "lock",
  "No iniciado": "radio_button_unchecked",
}

const STATUS_COLORS: Record<string, string> = {
  "En Progreso": "text-primary bg-primary/10",
  Completado: "text-success-green bg-success-green/10",
  Bloqueado: "text-on-surface-variant bg-surface-container",
  "No iniciado": "text-on-surface-variant bg-surface-container",
}

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = MOCK_PROJECTS.find(p => p.id === projectId)

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
          <StitchCard className="p-6" hover={false}>
            <h2 className="font-bold text-lg text-on-surface mb-4">Progreso</h2>
            <div className="flex items-center gap-4 mb-2">
              <XPBar value={project.progress} className="flex-1" />
              <span className="text-lg font-bold text-primary">{project.progress}%</span>
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
          <StitchCard className="p-6" hover={false}>
            <h2 className="font-bold text-lg text-on-surface mb-4">Stack Tecnológico</h2>
            <div className="flex flex-wrap gap-2">
              {project.techTags.map(tag => (
                <span key={tag} className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg text-sm font-medium border border-border-muted">
                  {tag}
                </span>
              ))}
            </div>
          </StitchCard>

          {/* Objectives */}
          <StitchCard className="p-6" hover={false}>
            <h2 className="font-bold text-lg text-on-surface mb-4">Objetivos del Proyecto</h2>
            <div className="space-y-3">
              {[
                "Analizar y comprender el problema de negocio",
                "Realizar análisis exploratorio de datos",
                "Implementar modelos de Machine Learning",
                "Evaluar y optimizar el rendimiento",
                "Documentar resultados y conclusiones",
              ].map((objective, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    index < Math.floor(project.progress / 20) ? "bg-success-green text-white" : "bg-surface-container text-on-surface-variant"
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`text-sm ${index < Math.floor(project.progress / 20) ? "text-success-green" : "text-on-surface"}`}>
                    {objective}
                  </span>
                </div>
              ))}
            </div>
          </StitchCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <StitchCard className="p-5" hover={false}>
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
                <span className="font-bold text-primary">{project.progress}%</span>
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
