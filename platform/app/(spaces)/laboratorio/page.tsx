export default function LaboratorioPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Laboratorio ML</h1>
        <p className="text-gray-400">Espacio interactivo para experimentar con código ML y notebooks</p>
      </div>

      {/* Mock Editor */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mx-auto mb-4 flex items-center justify-center text-white text-3xl">
            🧪
          </div>
          <h2 className="text-2xl font-semibold mb-2">Laboratorio de Experimentación</h2>
          <p className="text-gray-300 mb-6">Acomoda los experimentos ML aquí.</p>

          {/* Mock Code Editor */}
          <div className="bg-black rounded-lg p-6 font-mono text-left max-w-2xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-purple-400">import</span> <span className="text-blue-400">torch</span> <span className="text-gray-500">from</span> <span className="text-green-400">'torch'</span>
              </div>
              <div>
                <span className="text-purple-400">import</span> <span className="text-blue-400">numpy</span> <span className="text-gray-500">as</span> <span className="text-green-400">np</span>
              </div>
              <div className="mt-4">
                <span className="text-gray-400"># Modelo de red neuronal</span>
              </div>
              <div>
                <span className="text-orange-400">model</span> <span className="text-gray-500">=</span> <span className="text-blue-400">torch</span>.<span className="text-yellow-400">nn</span>.<span className="text-yellow-400">Sequential</span>(
              </div>
              <div className="pl-4">
                <span className="text-blue-400">torch</span>.<span className="text-yellow-400">nn</span>.<span className="text-yellow-400">Linear</span>(784, 128)
              </div>
              <div className="pl-4">
                <span className="text-yellow-400">(),</span>
              </div>
              <div className="pl-4">
                <span className="text-yellow-400">torch</span>.<span className="text-yellow-400">nn</span>.<span className="text-yellow-400">ReLU</span>()
              </div>
              <div className="pl-4">
                <span className="text-yellow-400">(),</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">torch</span>.<span className="text-yellow-400">nn</span>.<span className="text-yellow-400">Linear</span>(128, 10)
              </div>
              <div>
                <span className="text-yellow-400">)</span>
              </div>
            </div>
          </div>

          <button className="mt-6 bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all">
            🧪 Abrir Notebook
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-3 flex items-center justify-center text-white">
            ⚡
          </div>
          <h3 className="text-lg font-semibold mb-2">Ejecución Rápida</h3>
          <p className="text-gray-300 text-sm">Papers notebooks con kernels de GPU acceleration</p>
        </div>
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-3 flex items-center justify-center text-white">
            🔬
          </div>
          <h3 className="text-lg font-semibold mb-2">Edición Colaborativa</h3>
          <p className="text-gray-300 text-sm">Varias personas pueden editar y compartir resultados</p>
        </div>
      </div>
    </div>
  )
}