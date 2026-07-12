export default function HomePage() {
  const learningSpaces = [
    {
      title: "Dashboard",
      description: "Panel de control con métricas de aprendizaje y progreso",
      href: "/dashboard",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Instituto",
      description: "Explora la arquitectura del conocimiento ML y patrones fundamentales",
      href: "/instituto",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Laboratorio",
      description: "Experimenta con notebooks interactivos y código ejecutable",
      href: "/laboratorio",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Taller",
      description: "Proyectos prácticos guiados para aplicar conceptos en contexto real",
      href: "/taller",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          ML Bootcamp Platform
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Transformando aprendizaje estático en experiencia interactiva. Desarrolla, prueba yDeploy modelos ML utilizando una metodología integral que combina teoría, práctica y proyectos reales en un único currículo modular.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
            Comenzar Aprendizaje
          </button>
          <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all">
            Ver Documentación
          </button>
        </div>
      </section>

      {/* Learning Spaces */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Espacios de Aprendizaje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningSpaces.map((space, index) => (
            <a
              key={index}
              href={space.href}
              className="block p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${space.color} mb-4`}></div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {space.title}
              </h3>
              <p className="text-gray-300">
                {space.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-3"></div>
            <h3 className="text-lg font-semibold mb-2">Aprendizaje Modular</h3>
            <p className="text-gray-300 text-sm">
              Estructura organizada por módulos con progresiones claras.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-3"></div>
            <h3 className="text-lg font-semibold mb-2">Laboratorio Interactivo</h3>
            <p className="text-gray-300 text-sm">
              Ejecuta notebooks directamente en el navegador sin configuraciones.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-3"></div>
            <h3 className="text-lg font-semibold mb-2">Proyectos Prácticos</h3>
            <p className="text-gray-300 text-sm">
              Talleres guiados para aplicar conceptos en proyectos realistas.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}