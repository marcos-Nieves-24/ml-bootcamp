import type { Metadata } from "next"
import { workshops } from "@/lib/data"

export const metadata: Metadata = {
  title: "Taller",
  description: "Talleres prácticos de ML: proyectos guiados para aplicar conceptos de machine learning en contexto real.",
}

export default function TallerPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Talleres Prácticos</h1>
        <p className="text-gray-400">Proyectos guiados para aplicar conceptos ML en contexto real</p>
      </div>

      {/* Workshops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
        {workshops.map((workshop, index) => (
          <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-gray-600 transition-all" role="listitem">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${workshop.color} rounded-lg flex items-center justify-center text-white text-xl mb-3`} aria-hidden="true">
                {workshop.icon}
              </div>
              <span className="text-sm text-gray-400"> Duración: {workshop.duration }</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{workshop.title}</h2>
            <p className="text-gray-300 text-sm mb-4">{workshop.description}</p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  workshop.difficulty === 'Principiante' ? 'bg-green-900/30 text-green-400 border-green-800' :
                  workshop.difficulty === 'Intermedio' ? 'bg-yellow-900/30 text-yellow-400 border-yellow-800' :
                  'bg-purple-900/30 text-purple-400 border-purple-800'
                }`}>
                  {workshop.difficulty}
                </span>
                <span className="text-gray-400" aria-label={`${workshop.students} estudiantes inscritos`}> 👥 {workshop.students } estudiantes</span>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-blue-600 hover:to-purple-700 transition-all" aria-label={`Inscribirse en ${workshop.title}`}>
                Inscribirse
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-gray-700 p-8 text-center"
>
        <h2 className="text-2xl font-bold mb-2">¿Listo para Comenzar?</h2>
        <p className="text-gray-300 mb-4">Únete a nuestros talleres prácticos y aplica ML en proyectos reales</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
>
            Ver Todos los Talleres
          </button>
          <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
>
            Cuál es Mi Nivel?
          </button>
        </div>
      </div>
    </div>
  )
}