'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/dashboard", label: "Inicio", icon: "home" },
  { href: "/expediciones", label: "Expediciones", icon: "explore" },
  { href: "/laboratorios", label: "Laboratorios", icon: "biotech" },
  { href: "/proyectos", label: "Proyectos", icon: "architecture" },
  { href: "/misiones", label: "Misiones", icon: "assignment" },
  { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/logros", label: "Logros", icon: "military_tech" },
  { href: "/comunidad", label: "Comunidad", icon: "groups" },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] bg-surface-container-lowest border-r border-border-muted flex flex-col p-6 z-50 hidden lg:flex">
      {/* Brand */}
      <div className="mb-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
            rocket_launch
          </span>
        </div>
        <h1 className="text-xl font-bold text-primary tracking-wide">
          ML EXPEDITION
        </h1>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? "border-l-4 border-primary bg-primary/10 text-primary"
                  : "text-on-surface-variant hover:bg-surface-container-low"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="material-symbols-outlined text-xl">{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="rounded-2xl bg-surface-container-low p-4 border border-border-muted">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-bold">
            N
          </div>
          <div>
            <p className="text-sm font-bold text-on-surface">Investigador Nexus</p>
            <span className="text-xs font-bold text-primary">Nivel 4</span>
          </div>
        </div>
        {/* XP bar */}
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 text-[#3B82F6] font-bold text-sm">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>
              diamond
            </span>
            1,260 XP
          </div>
          <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
            <div className="h-full rounded-full bg-[#3B82F6]" style={{ width: "63%" }} />
          </div>
          <div className="flex items-center gap-1 text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-sm text-orange-500">local_fire_department</span>
            12 días
          </div>
        </div>
      </div>

      {/* Continuar proyecto */}
      <div className="mt-4">
        <button className="w-full py-3 bg-primary text-on-primary font-bold rounded-xl transition-all active:scale-95">
          Continuar proyecto
        </button>
      </div>

      {/* Ajustes y Cerrar sesión */}
      <div className="mt-2 space-y-2">
        <button className="w-full text-left px-4 py-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors">
          Ajustes
        </button>
        <button className="w-full text-left px-4 py-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors">
          Cerrar sesión
        </button>
      </div>
    </aside>
  )
}
