import { prisma } from "../../lib/prisma"

const achievements = [
  {
    title: "Primer Módulo",
    description: "Completa tu primer módulo",
    icon: "🎯",
    xpReward: 100,
    triggerCondition: "module.1.completed",
  },
  {
    title: "Rayo de Consistencia",
    description: "Mantén 7 días de racha",
    icon: "🔥",
    xpReward: 200,
    triggerCondition: "streak.7.days",
  },
  {
    title: "Coleccionista",
    description: "Completa todos los módulos",
    icon: "🏆",
    xpReward: 500,
    triggerCondition: "all.modules.completed",
  },
  {
    title: "Leyenda del Nexus",
    description: "Alcanza el rango máximo",
    icon: "👑",
    xpReward: 1000,
    triggerCondition: "rank.maximum.reached",
  },
]

export async function seedAchievements() {
  console.log("🏆 Seeding achievements...")

  for (const achievement of achievements) {
    await prisma.achievement.upsert({
      where: { title: achievement.title },
      update: achievement,
      create: achievement,
    })
    console.log(`  ✅ ${achievement.title} (${achievement.xpReward} XP)`)
  }

  console.log(`✅ Seeded ${achievements.length} achievements`)
}
