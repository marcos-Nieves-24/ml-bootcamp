export default function DashboardPage() {
  const mockCards = [
    {
      title: "Experiencia Actual",
      description: "Has completado 3 de 8 módulos del plan de aprendizaje",
      metric: "37.5%",
      icon: "📈",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Misión Actual",
      description: "Completar módulo 'Introducción al Machine Learning' y realizar laboratorio",
      progress: 70,
      icon: "🎯",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Nivel XP",
      description: "Nivel 2 - Aprendiz Activo. 1500 puntos XP ganados",
      points: 1500,
      level: 2,
      icon: "⭐",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Dashboard de Aprendizaje</h1>
        <p className="text-gray-400">Tu viaje hacia la maestría en ML - sigue el progreso y continúa aprendiendo</p>
      </div>

      {/* Mock Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockCards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-gray-600 transition-all"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} mb-4 flex items-center justify-center text-white text-xl`}
>
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-300 text-sm mb-3">{card.description}</p>
            {card.metric && (
              <div className="text-2xl font-bold text-blue-400">{card.metric}</div>
            )}
            {card.progress && (
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Progreso</span>
                  <span className="text-blue-400">{card.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    style={{ width: `${card.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
            {card.points && (
              <div className="mt-2 text-sm text-gray-400">
                <span className="text-yellow-400">📍 Nivel {card.level}</span> • {card.points} XP
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Current Module Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Módulo en Curso</h2>
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Módulo 03: Introducción al Machine Learning</h3>
            <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm border border-green-800">
              En Progreso
            </span>
          </div>
          <p className="text-gray-300 mb-4">
            Conceptos fundamentales de ML: comprensión del procesamiento de datos, tipos de modelos, métricas de evaluación y mejores prácticas de ingeniería.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                01
              </div>
               <p className="text-sm text-gray-400">Fundamentos</p>
            </div>
            <div className="text-center">
               <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                 02
               </div>
               <p className="text-sm text-gray-400">Modelos</p>
            </div>
            <div className="text-center">
               <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                 03
               </div>
               <p className="text-sm text-gray-400">Evaluación</p>
            </div>
            <div className="text-center">
               <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                 04
               </div>
               <p className="text-sm text-gray-400">Prácticas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Acciones Rápidas</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
             🎯 Continuar Módulo
           </button>
           <button className="bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all">
             📚 Ver Laboratorio
           </button>
           <button className="bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all">
             🏆 Ver Logros
           </button>
        </div>
      </section>
    </div>
  )
}