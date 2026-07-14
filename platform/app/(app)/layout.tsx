import Sidebar from "@/app/components/Sidebar"
import TopBar from "@/app/components/TopBar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="lg:ml-[280px] min-h-screen flex flex-col">
        <TopBar />
        <main className="flex-1 w-full max-w-[1400px] mx-auto p-6 space-y-8">
          {children}
        </main>
      </div>
    </div>
  )
}
