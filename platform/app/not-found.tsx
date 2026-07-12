export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl">
          404
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Página No Encontrada</h1>
        <p className="text-gray-300 mb-8">
          Lo sentimos, pero la página que estás buscando no existe o ha sido movida. 
          No encontrarás nada aquí salvo ganas de aprender.
        </p>
        
        <div className="space-y-4">
          <a
            href="/"
            className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            Volver al Inicio
          </a>
          <a
            href="/dashboard"
            className="block w-full bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all"
          >
            Ir al Dashboard
          </a>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Error 404 • ML Bootcamp Platform • Semilla Phase 1</p>
        </div>
      </div>
    </div>
  )
}