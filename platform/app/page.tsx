import LandingHero from "@/app/components/LandingHero"
import LandingFeatures from "@/app/components/LandingFeatures"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface">
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
