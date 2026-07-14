import { prisma } from "../lib/prisma"
import { seedRanks } from "./seed/seed-ranks"
import { seedAchievements } from "./seed/seed-achievements"
import { seedUsers } from "./seed/seed-users"
import { seedModules } from "./seed/seed-modules"
import { seedLessons } from "./seed/seed-lessons"
import { seedProjects } from "./seed/seed-projects"

async function main() {
  console.log("🚀 Starting seed...")

  try {
    await seedRanks()
    await seedAchievements()
    await seedUsers()
    await seedModules()
    await seedLessons()
    await seedProjects()
    console.log("\n✅ Seed completed successfully!")
  } catch (error) {
    console.error("\n❌ Seed failed:", error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
