import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Página No Encontrada",
  description: "Error 404 — la página solicitada no existe en ML Bootcamp.",
}

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] flex items-center justify-center p-4" role="alert">
      <div className="text-center max-w-md bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-8">
        <div className="w-20 h-20 bg-[#4f46e5] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold" aria-hidden="true">
          404
        </div>

        <h1 className="text-3xl font-bold text-[#191c1e] mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Página No Encontrada
        </h1>
        <p className="text-[#464555] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
          No hay nada aquí, investigador. Mejor vuelve al campamento base.
        </p>

        <nav className="space-y-3" aria-label="Opciones de navegación">
          <Link
            href="/"
            className="block w-full py-3 rounded-xl font-bold text-white transition-all"
            style={{ background: "linear-gradient(135deg, #3525cd, #4f46e5)" }}
          >
            Volver al Inicio
          </Link>
        </nav>

        <p className="mt-6 text-xs text-gray-400">Error 404 • ML Expedition</p>
      </div>
    </div>
  )
}
