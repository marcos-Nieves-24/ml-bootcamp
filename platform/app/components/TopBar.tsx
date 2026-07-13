'use client'

import SearchBar from "./SearchBar"
import StreakIndicator from "./StreakIndicator"

export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-white/40">
      <div className="flex items-center justify-between px-6 py-3 max-w-[1280px] mx-auto">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <SearchBar />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* XP */}
          <div className="hidden md:flex items-center gap-1.5 text-[#3B82F6] font-bold text-sm">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>
              diamond
            </span>
            1,260 XP
          </div>

          {/* Streak */}
          <div className="hidden md:block">
            <StreakIndicator days={12} />
          </div>

          {/* Notification Bell */}
          <button className="relative p-1.5 text-[#464555] hover:text-[#191c1e] transition-colors" aria-label="Notificaciones">
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Avatar */}
          <button className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-bold" aria-label="Perfil">
            N
          </button>
        </div>
      </div>
    </header>
  )
}
