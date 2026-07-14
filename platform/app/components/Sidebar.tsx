'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { Rocket, Home, GraduationCap, FlaskConical, Rocket as RocketIcon, Trophy, LayoutDashboard, Users, LogOut } from "lucide-react"

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
    <aside className="fixed left-0 top-0 h-full w-[280px] z-50 transition-transform duration-300 bg-white/80 backdrop-blur-md border-r border-white/40 flex flex-col p-6 hidden lg:flex">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(53,37,205,0.12)" }}>
          <Rocket className="w-5 h-5" style={{ color: "#3525cd" }} />
        </div>
        <h1 className="text-xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#3525cd" }}>
          ML Expedition
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
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-sm
                ${isActive
                  ? "bg-[rgba(79,70,229,1)] text-white shadow-md"
                  : "text-[#464555] hover:text-[#3525cd] hover:bg-white/40"
                }`}
              style={isActive ? { backgroundColor: "rgba(79,70,229,1)", color: "#fff" } : {}}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* User profile */}
      <div className="mt-auto pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.4)" }}>
        <div className="p-4 rounded-xl bg-white/80 backdrop-blur-md flex items-center gap-3 mb-2 border border-white/40">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg, #3525cd, #006591)" }}>
            IN
          </div>
          <div>
            <p className="font-semibold text-sm text-[#191c1e]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Investigador Nexus
            </p>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-bold"
              style={{ backgroundColor: "rgba(53,37,205,0.1)", color: "#3525cd" }}
            >
              Nivel 4
            </span>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-4 px-4 py-2 text-[#464555] hover:text-red-500 transition-colors text-sm"
        >
          <LogOut className="w-4 h-4" />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  )
}
