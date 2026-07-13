import Link from "next/link"
import LandingHero from "@/app/components/LandingHero"
import LandingFeatures from "@/app/components/LandingFeatures"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Top Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>rocket_launch</span>
          </div>
          <h1 className="text-xl font-bold text-primary tracking-wide">ML EXPEDITION</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="px-5 py-2 text-sm font-bold text-on-surface hover:text-primary transition-colors">
            Iniciar sesión
          </Link>
          <Link
            href="/register"
            className="px-5 py-2 text-sm font-bold bg-primary text-on-primary rounded-xl hover:bg-[#3525cd] transition-all active:scale-95"
          >
            Registrarse
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-4 py-8 md:px-8 lg:px-16">
        <LandingHero />
      </div>
      
      {/* Features Section */}
      <div className="px-4 py-12 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-on-surface mb-12">
          Descubre ML Expedition
        </h2>
        <LandingFeatures />
      </div>
      
      {/* Footer */}
      <footer className="bg-white border-t border-border-muted py-8">
        <div className="px-4 md:px-8 lg:px-16 text-center">
          <p className="text-sm text-on-surface-variant">
            © 2026 ML Expedition
          </p>
        </div>
      </footer>
    </div>
  )
}
