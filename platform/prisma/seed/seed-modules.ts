import matter from "gray-matter"
import { join } from "path"
import { readFileSync, readdirSync, existsSync } from "fs"
import { prisma } from "../../lib/prisma"

const MODULE_DIR_PATTERN = /^module\d+_.+/

// Extract title from README.md: "# Módulo X: <Title>"
function parseReadmeTitle(readmePath: string): string | null {
  try {
    const firstLine = readFileSync(readmePath, "utf-8").split("\n")[0]
    const match = firstLine.match(/^#\s*Módulo\s+\d+:\s*(.+)/i)
    if (match) return match[1].trim()
    // Also try generic "# <Title>" as fallback
    const genericMatch = firstLine.match(/^#\s+(.+)/)
    if (genericMatch) return genericMatch[1].trim()
  } catch {
    // ignore
  }
  return null
}

// Extract description from README.md after "## Objetivo de Aprendizaje"
function parseReadmeDescription(readmePath: string): string {
  try {
    const lines = readFileSync(readmePath, "utf-8").split("\n")
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].match(/^##\s*Objetivo de Aprendizaje/i)) {
        if (i + 1 < lines.length && lines[i + 1].trim() && !lines[i + 1].startsWith("#")) {
          return lines[i + 1].trim()
        }
      }
    }
  } catch {
    // ignore
  }
  return ""
}

// Map module order to difficulty
const DIFFICULTY_BY_ORDER: Record<number, string> = {
  1: "beginner",
  2: "intermediate",
  3: "advanced",
  4: "expert",
  5: "intermediate",
}

export async function seedModules() {
  console.log("📚 Seeding modules...")

  const contentRoot = join(__dirname, "../../../content")

  let entries: string[]
  try {
    entries = readdirSync(contentRoot)
  } catch {
    console.log("  ⚠️  content/ directory not found, skipping modules")
    return
  }

  let seededCount = 0

  for (const dirName of entries) {
    if (!MODULE_DIR_PATTERN.test(dirName)) continue

    const modulePath = join(contentRoot, dirName)

    // Find the first lesson dir
    let lessonDirs: string[] = []
    try {
      const lessonsPath = join(modulePath, "lessons")
      if (existsSync(lessonsPath)) {
        lessonDirs = readdirSync(lessonsPath).filter((d) => /^lesson\d+/.test(d))
      } else {
        lessonDirs = readdirSync(modulePath).filter((d) => /^lesson\d+/.test(d))
      }
    } catch {
      continue
    }

    if (lessonDirs.length === 0) continue

    const order = parseInt(dirName.match(/module(\d+)/)?.[1] || "0")

    // Read title from README.md first, then fallback to first lesson frontmatter, then dir name
    const readmePath = join(modulePath, "README.md")
    let moduleTitle: string
    let description = ""
    let difficulty = DIFFICULTY_BY_ORDER[order] || "beginner"

    if (existsSync(readmePath)) {
      moduleTitle = parseReadmeTitle(readmePath) || dirName
      description = parseReadmeDescription(readmePath)
    } else {
      moduleTitle = dirName
    }

    // Fallback: try first lesson frontmatter for title/description/difficulty
    if (moduleTitle === dirName || !description) {
      const hasLessonsDir = existsSync(join(modulePath, "lessons"))
      const firstLessonPath = hasLessonsDir
        ? join(modulePath, "lessons", lessonDirs[0], "lesson.md")
        : join(modulePath, lessonDirs[0], "lesson.md")

      if (existsSync(firstLessonPath)) {
        try {
          const frontmatter = matter.read(firstLessonPath)
          const fileModuleTitle = frontmatter.data?.["Module Title"]
          const fileDifficulty = frontmatter.data?.["Module Difficulty"]
          const fileDescription = frontmatter.data?.["Module Description"]

          if (fileModuleTitle && moduleTitle === dirName) moduleTitle = fileModuleTitle
          if (fileDifficulty) difficulty = fileDifficulty
          if (fileDescription && !description) description = fileDescription
        } catch {
          // fallback to defaults
        }
      }
    }

    const xpReward = { beginner: 100, intermediate: 300, advanced: 500, expert: 800 }[difficulty] || 100

    await prisma.module.upsert({
      where: { moduleId: dirName },
      update: { title: moduleTitle, description, order, difficulty, xpReward },
      create: { moduleId: dirName, title: moduleTitle, description, order, difficulty, xpReward },
    })

    console.log(`  ✅ ${dirName} — ${moduleTitle}`)
    seededCount++
  }

  // If no modules found in content/, seed from MOCK_MODULES data
  if (seededCount === 0) {
    console.log("  ⚠️  No modules found in content/, seeding from defaults...")
    const defaultModules = [
      { moduleId: "module01_introduction-to-ai", title: "Introducción a la IA", order: 1, difficulty: "beginner", description: "Fundamentos de Inteligencia Artificial", xpReward: 500 },
      { moduleId: "module02_python-programming", title: "Python Programming Fundamentals", order: 2, difficulty: "intermediate", description: "Programación en Python para ML", xpReward: 700 },
      { moduleId: "module03_statistics-for-ml", title: "Estadística para Machine Learning", order: 3, difficulty: "advanced", description: "Estadística aplicada a ML", xpReward: 900 },
      { moduleId: "module04_intro-to-ml", title: "Introducción al Machine Learning", order: 4, difficulty: "expert", description: "Conceptos fundamentales de ML", xpReward: 1200 },
      { moduleId: "module05_ai-ethics", title: "Ética en Inteligencia Artificial", order: 5, difficulty: "intermediate", description: "Ética y responsabilidad en IA", xpReward: 600 },
    ]

    for (const mod of defaultModules) {
      await prisma.module.upsert({
        where: { moduleId: mod.moduleId },
        update: mod,
        create: mod,
      })
      console.log(`  ✅ (default) ${mod.title}`)
    }
    seededCount = defaultModules.length
  }

  // Clean up orphan modules (only when seeded from file-based directories)
  if (seededCount > 0) {
    const validModuleIds = new Set(
      entries.filter((d) => MODULE_DIR_PATTERN.test(d))
    )
    if (validModuleIds.size > 0) {
      const orphanModules = await prisma.module.findMany({
        where: { moduleId: { notIn: [...validModuleIds] } },
        select: { moduleId: true, id: true },
      })
      if (orphanModules.length > 0) {
        for (const om of orphanModules) {
          // Delete lessons first (UserProgress cascades), then the module
          await prisma.lesson.deleteMany({ where: { moduleId: om.id } })
          await prisma.module.delete({ where: { id: om.id } })
        }
        console.log(`  🗑️  Removed ${orphanModules.length} orphan modules: ${orphanModules.map((m) => m.moduleId).join(", ")}`)
      }
    }
  }

  console.log(`✅ Seeded ${seededCount} modules`)
}
