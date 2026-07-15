'use client'

import { useState, useCallback } from 'react'
import Sidebar from '@/app/components/Sidebar'
import TopBar from '@/app/components/TopBar'

export default function DashboardLayout({
  children,
  xp,
  streakDays,
  level,
}: {
  children: React.ReactNode
  xp: number
  streakDays: number
  level: number
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), [])
  const closeSidebar = useCallback(() => setSidebarOpen(false), [])

  return (
    <div className="min-h-screen">
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <div className="lg:ml-[280px] min-h-screen flex flex-col">
        <TopBar onToggleSidebar={toggleSidebar} xp={xp} streakDays={streakDays} level={level} />
        <main className="flex-1 w-full max-w-[1400px] mx-auto p-6 space-y-8">
          {children}
        </main>
      </div>
    </div>
  )
}
