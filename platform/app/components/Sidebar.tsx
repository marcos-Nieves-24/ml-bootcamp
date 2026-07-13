'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Inicio", icon: "home" },
  { href: "/niveles", label: "Niveles", icon: "school" },
  { href: "/laboratorios", label: "Laboratorios", icon: "biotech" },
  { href: "/proyectos", label: "Proyectos", icon: "rocket_launch" },
  { href: "/logros", label: "Logros", icon: "military_tech" },
  { href: "/comunidad", label: "Comunidad", icon: "group" },
  { href: "/metricas", label: "Métricas", icon: "dashboard" },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] bg-white/70 backdrop-blur-xl border-r border-white/40 flex flex-col p-6 z-50 hidden lg:flex">
      {/* Brand */}
      <div className="mb-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#4f46e5] rounded-xl flex items-center justify-center text-white">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
            rocket_launch
          </span>
        </div>
        <h1 className="text-xl font-bold text-[#3525cd]">
          ML Expedition
        </h1>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? "bg-[#4f46e5] text-white shadow-md shadow-[#4f46e5]/20"
                  : "text-[#464555] hover:text-[#3525cd] hover:bg-gray-100"
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
      <div className="rounded-xl bg-white/70 backdrop-blur-sm border border-white/40 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-bold">
            N
          </div>
          <div>
            <p className="text-sm font-bold text-[#191c1e]">Investigador Nexus</p>
            <span className="text-xs font-bold text-[#3525cd]">Nivel 4</span>
          </div>
        </div>
      </div>

      {/* XP */}
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
        <div className="flex items-center gap-1 text-xs text-[#464555]">
          <span className="material-symbols-outlined text-sm text-orange-500">local_fire_department</span>
          12 días
        </div>
      </div>
    </aside>
  )
}
