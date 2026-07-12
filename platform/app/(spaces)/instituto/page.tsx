export default function InstitutoPage() {
  const knowledgeMap = [
    {
      title: "Fundamentos de ML",
      description: "Conceptos básicos: algoritmos, pipeline, estrategias de entrenamiento",
      status: "Completado",
      progress: 100,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Modelos y Algoritmos",
      description: "Aprendizaje supervisado, no supervisado, reforzamiento y híbrido",
      status: "En Progreso",
      progress: 45,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Ingeniería de Datos",
      description: "Preprocesamiento, feature engineering, manejo de datos a gran escala",
      status: "Pendiente",
      progress: 0,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Ética y Responsabilidad",
      description: "Principios de ML ético, sesgos, privacidad y seguridad",
      status: "Pendiente",
      progress: 0,
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Instituto del Conocimiento ML</h1>
        <p className="text-gray-400">Mapa del conocimiento - Explora la arquitectura completa del aprendizaje automático</p>
      </div>

      {/* Knowledge Map */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30"></div>
        
        <div className="space-y-8 relative">
          {knowledgeMap.map((area, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
>
              <div className="w-1/2 p-6">
                <div className={`bg-gradient-to-r ${area.color} p-1 rounded-lg`}
>
                  <div className="bg-gray-900 rounded-lg p-6"
>
                    <div className="flex justify-between items-start mb-4"
>
                      <h3 className="text-xl font-semibold">{area.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                area.status === 'Completado' ? 'bg-green-900/30 text-green-400 border-green-800' :
                        area.status === 'En Progreso' ? 'bg-yellow-900/30 text-yellow-400 border-yellow-800' :
                        'bg-gray-900/30 text-gray-400 border-gray-700'
                      }`}
>
                {area.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{area.description}</p>
                    <div className="space-y-2"
>
                      <div className="flex justify-between text-sm"
>
                        <span className="text-gray-400">Progreso</span>
                        <span className="text-blue-400">{area.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2"
>
                        <div
                          className={`bg-gradient-to-r ${area.color} h-2 rounded-full`}
                          style={{ width: `${area.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex justify-center"
>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${area.color} flex items-center justify-center text-white font-bold text-xl border-4 border-gray-900`}
>
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-12 bg-gray-800 rounded-lg border border-gray-700 p-6"
>
        <h2 className="text-2xl font-bold mb-4">Leyenda del Mapa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"
>
          <div className="flex items-center space-x-3"
>
            <div className="w-4 h-4 bg-green-500 rounded-full"
></div>
            <span className="text-sm text-gray-300">Completado - Dominas este tema</span>
          </div>
          <div className="flex items-center space-x-3"
>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"
></div>
            <span className="text-sm text-gray-300">En Progreso - Trabajando actualmente</span>
          </div>
          <div className="flex items-center space-x-3"
>
            <div className="w-4 h-4 bg-gray-500 rounded-full"
></div>
            <span className="text-sm text-gray-300">Pendiente - Próximo en la lista</span>
          </div>
        </div>
      </div>
    </div>
  )
}