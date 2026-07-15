'use client'

import { Sparkles } from 'lucide-react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Dark gradient background */}
      <div
        className="fixed inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 50% 0%, rgba(124, 111, 240, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 80%, rgba(79, 209, 232, 0.10) 0%, transparent 50%),
            radial-gradient(ellipse 40% 40% at 20% 70%, rgba(124, 111, 240, 0.06) 0%, transparent 40%),
            linear-gradient(180deg, #0f0530 0%, #1a0a46 30%, #1e0e52 60%, #12062e 100%)
          `
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#8b7bf0]" aria-hidden="true" />
            <span
              className="text-xl font-medium tracking-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: 'linear-gradient(90deg, #7c6ff0 0%, #4fd1e8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Nexus
            </span>
          </div>
        </div>
        <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl hover:scale-[1.02] transition-all duration-500">
          {children}
        </div>
      </div>
    </div>
  )
}
