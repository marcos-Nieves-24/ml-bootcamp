import { prisma } from "../../lib/prisma"

const ranks = [
  { name: "Investigador Novato", level: 1, minXP: 0 },
  { name: "Explorador", level: 2, minXP: 200 },
  { name: "Científico de Datos", level: 3, minXP: 500 },
  { name: "Ingeniero de ML", level: 4, minXP: 1000 },
  { name: "Arquitecto de IA", level: 5, minXP: 2000 },
  { name: "Leyenda del Nexus", level: 6, minXP: 5000 },
]

export async function seedRanks() {
  console.log("🌱 Seeding ranks...")

  for (const rank of ranks) {
    await prisma.rank.upsert({
      where: { name: rank.name },
      update: rank,
      create: rank,
    })
    console.log(`  ✅ ${rank.name} (Level ${rank.level})`)
  }

  console.log(`✅ Seeded ${ranks.length} ranks`)
}
