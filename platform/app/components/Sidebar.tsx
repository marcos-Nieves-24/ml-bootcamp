'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { Home, GraduationCap, FlaskConical, Rocket as RocketIcon, Trophy, LayoutDashboard, Users, LogOut } from "lucide-react"
import Logo from "@/app/components/Logo"

const navItems = [
  { href: "/dashboard", label: "Inicio", icon: Home },
  { href: "/expediciones", label: "Expediciones", icon: GraduationCap },
  { href: "/laboratorios", label: "Laboratorios", icon: FlaskConical },
  { href: "/proyectos", label: "Proyectos", icon: RocketIcon },
  { href: "/logros", label: "Logros", icon: Trophy },
  { href: "/comunidad", label: "Comunidad", icon: Users },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] z-50 transition-transform duration-300 bg-[#0b0920]/95 backdrop-blur-md border-r border-[#2a2454] flex flex-col p-6 hidden lg:flex">
      {/* Logo */}
      <div className="mb-10">
        <Logo />
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-sm
                ${isActive
                  ? "bg-[#7c6ff0] text-[#0b0920] shadow-md"
                  : "text-[#a8a4c0] hover:text-[#7c6ff0] hover:bg-white/5"
                }`}
              style={isActive ? { backgroundColor: "#7c6ff0", color: "#0b0920" } : {}}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* User profile */}
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
  )
}
