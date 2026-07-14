import { prisma } from "../../lib/prisma"

interface CaseStudy {
  id: string
  title: string
  description: string
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "biotech-diagnosis",
    title: "Diagnóstico de Enfermedades Genéticas",
    description: "Construye un modelo de ML para diagnosticar enfermedades genéticas a partir de datos de expresión génica. Análisis de 20 genes candidatos en 100 pacientes.",
  },
  {
    id: "saas-churn-prediction",
    title: "Predicción de Churn en SaaS",
    description: "Predice qué clientes están en riesgo de cancelar su suscripción usando datos históricos de 1,000 clientes. Impacto directo en retención y revenue.",
  },
]

export async function seedProjects() {
  console.log("📦 Seeding projects...")

  const user = await prisma.user.findFirst()
  if (!user) {
    console.log("  ⚠️  No default user found, skipping projects")
    return
  }

  let seededCount = 0

  for (const cs of CASE_STUDIES) {
    await prisma.project.upsert({
      where: { id: cs.id },
      update: {
        title: cs.title,
        description: cs.description,
        status: "in-progress",
        userId: user.id,
      },
      create: {
        id: cs.id,
        title: cs.title,
        description: cs.description,
        status: "in-progress",
        userId: user.id,
      },
    })

    console.log(`  ✅ ${cs.id} — ${cs.title}`)
    seededCount++
  }

  console.log(`✅ Seeded ${seededCount} projects`)
}
