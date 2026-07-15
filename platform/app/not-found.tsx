import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Página No Encontrada",
  description: "Error 404 — la página solicitada no existe en ML Bootcamp.",
}

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" role="alert" style={{
      background: 'linear-gradient(180deg, #0f0530 0%, #1a0a46 30%, #1e0e52 60%, #12062e 100%)'
    }}>
      <div className="text-center max-w-md bg-[#14102b]/90 backdrop-blur-xl border border-[#2a2454] rounded-2xl p-8">
        <div className="w-20 h-20 bg-[#7c6ff0] rounded-full mx-auto mb-6 flex items-center justify-center text-[#0b0920] text-3xl font-bold" aria-hidden="true">
          404
        </div>

        <h1 className="text-3xl font-bold text-[#f5f4fa] mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Página No Encontrada
        </h1>
        <p className="text-[#a8a4c0] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
          No hay nada aquí, investigador. Mejor vuelve al campamento base.
        </p>

        <nav className="space-y-3" aria-label="Opciones de navegación">
          <Link
            href="/"
            className="block w-full py-3 rounded-xl font-bold text-[#0b0920] transition-all"
            style={{ background: "linear-gradient(135deg, #7c6ff0, #4fd1e8)" }}
          >
            Volver al Inicio
          </Link>
        </nav>

        <p className="mt-6 text-xs text-[#a8a4c0]/50">Error 404 • ML Bootcamp</p>
      </div>
    </div>
  )
}
