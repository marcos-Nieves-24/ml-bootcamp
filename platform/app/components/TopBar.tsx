'use client'

export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-surface-container-lowest/80 backdrop-blur-md border-b border-border-muted">
      <div className="flex items-center justify-between px-6 py-3 max-w-[1440px] mx-auto">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-on-surface-variant text-lg">search</span>
            </div>
            <input
              type="text"
              placeholder="Buscar..."
              className="block w-full pl-10 pr-3 py-2 bg-surface-container-low border border-border-muted rounded-lg text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <span className="text-xs text-on-surface-variant bg-surface-container px-2 py-0.5 rounded font-mono">⌘K</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* XP badge */}
          <div className="flex items-center gap-1.5 text-xp-gold font-bold text-sm">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>
              diamond
            </span>
            1,260 XP
          </div>

          {/* Streak badge */}
          <div className="flex items-center gap-1.5 text-streak-orange font-bold text-sm">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>
              local_fire_department
            </span>
            12 Días
          </div>

          {/* Notification Bell */}
          <button className="relative p-1.5 text-on-surface-variant hover:text-on-surface transition-colors" aria-label="Notificaciones">
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full" />
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
