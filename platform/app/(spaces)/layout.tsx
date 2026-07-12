export default function SpacesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-black/80 backdrop-blur-md border-r border-gray-800 sticky top-0 h-screen">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6 text-blue-400">Espacios de Aprendizaje</h2>
          <nav className="space-y-2">
            <a
              href="/dashboard"
              className="block px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
            >
              📊 Dashboard
            </a>
            <a
              href="/instituto"
              className="block px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
            >
              🏛️ Instituto
            </a>
            <a
              href="/laboratorio"
              className="block px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
            >
              🧪 Laboratorio
            </a>
            <a
              href="/taller"
              className="block px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
            >
              🛠️ Taller
            </a>
          </nav>
        </div>

        {/* Platform Info */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 border border-gray-700">
            <p className="text-xs text-gray-400">
              ML Bootcamp Platform — Semilla Phase 1<br/>
              DesarrollandoExperts en Aprendizaje Automático
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}