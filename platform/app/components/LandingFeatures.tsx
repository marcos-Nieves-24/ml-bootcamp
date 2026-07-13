import StitchCard from "@/app/components/StitchCard"

export default function LandingFeatures() {
  const features = [
    {
      id: 1,
      icon: 'school',
      title: 'Laboratorios Interactivos',
      description: 'Aprende haciendo con laboratorios prácticos de ML'
    },
    {
      id: 2,
      icon: 'map',
      title: 'Ruta de Aprendizaje',
      description: 'Progresa desde novato hasta investigador con nuestro sistema de niveles'
    },
    {
      id: 3,
      icon: 'folder',
      title: 'Proyectos Reales',
      description: 'Aplica lo aprendido en proyectos del mundo real'
    },
    {
      id: 4,
      icon: 'people',
      title: 'Comunidad Activa',
      description: 'Conéctate con otros investigadores y resuelve desafíos en equipo'
    }
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature) => (
        <StitchCard key={feature.id} className="p-6 text-center">
          <span className="material-symbols-outlined text-4xl text-primary mb-4">
            {feature.icon}
          </span>
          <h3 className="font-bold text-lg text-on-surface mb-2">
            {feature.title}
          </h3>
          <p className="text-sm text-on-surface-variant">
            {feature.description}
          </p>
        </StitchCard>
      ))}
    </div>
  )
}
