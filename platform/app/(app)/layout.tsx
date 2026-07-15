import DashboardLayout from "@/app/components/DashboardLayout"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  let xp = 0
  let streakDays = 0
  let level = 1

  if (session?.user?.id) {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { xp: true, streakDays: true, level: true },
    })
    if (user) {
      xp = user.xp
      streakDays = user.streakDays
      level = user.level
    }
  }

  return (
    <DashboardLayout xp={xp} streakDays={streakDays} level={level}>
      {children}
    </DashboardLayout>
  )
}
