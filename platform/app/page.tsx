import type { Metadata } from "next"
import { learningSpaces, featureCards } from "@/lib/data"

export const metadata: Metadata = {
  title: "Inicio",
  description: "Plataforma interactiva de aprendizaje de Machine Learning. Cursos, laboratorios y talleres prácticos.",
}

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16" aria-labelledby="hero-title">
        <h1 id="hero-title" className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          ML Bootcamp Platform
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Transformando aprendizaje estático en experiencia interactiva. Desarrolla, prueba y despliega modelos ML utilizando una metodología integral que combina teoría, práctica y proyectos reales en un único currículo modular.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all" aria-label="Comenzar aprendizaje">
            Comenzar Aprendizaje
          </button>
          <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all" aria-label="Ver documentación del curso">
            Ver Documentación
          </button>
        </div>
      </section>

      {/* Learning Spaces */}
      <section aria-labelledby="spaces-title">
        <h2 id="spaces-title" className="text-3xl font-bold text-center mb-8">Espacios de Aprendizaje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningSpaces.map((space, index) => (
            <a
              key={index}
              href={space.href}
              className="block p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all group"
              aria-label={`Ir a ${space.title}: ${space.description}`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${space.color} mb-4`} aria-hidden="true"></div>
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
      <section aria-labelledby="features-title">
        <h2 id="features-title" className="text-3xl font-bold text-center mb-8">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg mb-3`} aria-hidden="true"></div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}