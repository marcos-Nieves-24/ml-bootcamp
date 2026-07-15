'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { Home, GraduationCap, FlaskConical, Rocket, Trophy, Users, BarChart3, Medal, LogOut, X } from "lucide-react"
import Logo from "@/app/components/Logo"

const NAV_ITEMS = [
  { href: "/dashboard", label: "Inicio", icon: Home },
  { href: "/expediciones", label: "Expediciones", icon: GraduationCap },
  { href: "/niveles", label: "Niveles", icon: Medal },
  { href: "/laboratorios", label: "Laboratorios", icon: FlaskConical },
  { href: "/proyectos", label: "Proyectos", icon: Rocket },
  { href: "/logros", label: "Logros", icon: Trophy },
  { href: "/metricas", label: "Métricas", icon: BarChart3 },
  { href: "/comunidad", label: "Comunidad", icon: Users },
]

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  const navLink = (item: typeof NAV_ITEMS[0]) => {
    const active = isActive(item.href)
    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={onClose}
        className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-sm
          ${active
            ? "bg-[#7c6ff0] text-[#0b0920] shadow-md"
            : "text-[#a8a4c0] hover:text-[#7c6ff0] hover:bg-white/5"
          }`}
        style={active ? { backgroundColor: "#7c6ff0", color: "#0b0920" } : {}}
      >
        <item.icon className="w-5 h-5 flex-shrink-0" />
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.label}</span>
      </Link>
    )
  }

  return (
    <>
      {/* Desktop — fixed sidebar */}
      <aside className="fixed left-0 top-0 h-full w-[280px] z-50 bg-[#0b0920]/95 backdrop-blur-md border-r border-[#2a2454] flex flex-col p-6 hidden lg:flex">
        <div className="mb-10">
          <Logo />
        </div>

        <nav className="flex-1 space-y-1">
          {NAV_ITEMS.map(navLink)}
        </nav>

        <div className="mt-auto pt-6" style={{ borderTop: "1px solid #2a2454" }}>
          <div className="p-4 rounded-xl bg-[#14102b]/80 backdrop-blur-md flex items-center gap-3 mb-2 border border-[#2a2454]">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg, #7c6ff0, #4fd1e8)" }}>
              IN
            </div>
            <div>
              <p className="font-semibold text-sm text-[#f5f4fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Investigador Nexus
              </p>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                style={{ backgroundColor: "rgba(124,111,240,0.15)", color: "#7c6ff0" }}
              >
                Nivel 4
              </span>
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-4 px-4 py-2 text-[#a8a4c0] hover:text-red-400 transition-colors text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Mobile — slide-in drawer */}
      <aside
        className={`fixed inset-y-0 left-0 w-[280px] z-50 bg-[#0b0920]/98 backdrop-blur-md border-r border-[#2a2454] flex flex-col p-6 transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="text-[#a8a4c0] hover:text-[#f5f4fa] p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-8">
          <Logo />
        </div>

        <nav className="flex-1 space-y-1">
          {NAV_ITEMS.map(navLink)}
        </nav>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-4 px-4 py-2 text-[#a8a4c0] hover:text-red-400 transition-colors text-sm"
        >
          <LogOut className="w-4 h-4" />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Cerrar Sesión</span>
        </button>
      </aside>
    </>
  )
}
