import type { Metadata } from "next"

const siteName = "ML Bootcamp Platform"
const siteDescription = "Transformando aprendizaje estático en experiencia interactiva. Cursos de Machine Learning y Data Science."

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    siteName,
    title: siteName,
    description: siteDescription,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-900 text-white">
        {/* Navigation Bar */}
        <nav className="bg-black/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50" aria-label="Navegación principal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  ML Bootcamp Platform
                </h1>
              </div>
              <div className="flex items-center space-x-8">
                <a href="/dashboard" className="text-gray-300 hover:text-white transition-colors" aria-label="Ir al Dashboard">Dashboard</a>
                <a href="/instituto" className="text-gray-300 hover:text-white transition-colors" aria-label="Ir al Instituto">Instituto</a>
                <a href="/laboratorio" className="text-gray-300 hover:text-white transition-colors" aria-label="Ir al Laboratorio">Laboratorio</a>
                <a href="/taller" className="text-gray-300 hover:text-white transition-colors" aria-label="Ir al Taller">Taller</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-black/80 backdrop-blur-md border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center text-gray-400">
              <p>&copy; 2026 ML Bootcamp Platform — Semilla Phase 1</p>
              <p className="text-sm mt-1">Transformando aprendizaje estático en experiencia interactiva</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}