'use client'

import { useSession } from "next-auth/react"
import { Search, Bell, Settings, Diamond, Flame, LayoutDashboard, LogOut } from "lucide-react"
import { usePathname } from "next/navigation"

export default function TopBar() {
  const { data: session } = useSession()
  const userName = session?.user?.name || "Investigador"
  const initials = userName.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2)

  return (
    <header className="sticky top-0 z-40 glass shadow-sm border-b border-white/40 flex items-center justify-between px-6 py-4">
      {/* Mobile hamburger */}
      <button className="lg:hidden mr-4 text-[#464555]">
        <LayoutDashboard className="w-5 h-5" />
      </button>

      {/* Search */}
      <div className="relative flex-1 max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#464555]" />
        <input
          type="text"
          placeholder="Buscar misiones, laboratorios, conceptos..."
          className="w-full rounded-xl pl-10 pr-16 py-2.5 text-sm outline-none transition-all"
          style={{ backgroundColor: "rgba(242,244,246,0.8)", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#191c1e" }}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#46455580] border border-[#46455530] px-1.5 py-0.5 rounded-md" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          ⌘K
        </span>
      </div>

      {/* Right items */}
      <div className="flex items-center gap-5 ml-4">
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-bold text-sm" style={{ color: "#3B82F6" }}>
            <Diamond className="w-4 h-4 fill-current" />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>1,260 XP</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-sm text-orange-500">
            <Flame className="w-4 h-4 fill-current" />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>12 días</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-white/60 transition-colors relative">
            <Bell className="w-4 h-4 text-[#464555]" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-white/60 transition-colors">
            <Settings className="w-4 h-4 text-[#464555]" />
          </button>
          <div
            className="w-9 h-9 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold ml-1 cursor-pointer"
            style={{ background: "linear-gradient(135deg, #3525cd, #39b8fd)" }}
          >
            IN
          </div>
        </div>
      </div>
    </header>
  )
}
