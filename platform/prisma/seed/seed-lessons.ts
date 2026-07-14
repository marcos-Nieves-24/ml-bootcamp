import matter from "gray-matter"
import { join } from "path"
import { readdirSync, existsSync } from "fs"
import { prisma } from "../../lib/prisma"

const LESSON_DIR_PATTERN = /^lesson\d+_.+/
const MODULE_DIR_PATTERN = /^module\d+_.+/

export async function seedLessons() {
  console.log("📝 Seeding lessons...")

  const contentRoot = join(__dirname, "../../../content")

  let moduleDirs: string[]
  try {
    moduleDirs = readdirSync(contentRoot).filter((d) => MODULE_DIR_PATTERN.test(d))
  } catch {
    console.log("  ⚠️  content/ directory not found, skipping lessons")
    return
  }

  let totalLessons = 0

  for (const moduleDirName of moduleDirs) {
    const modulePath = join(contentRoot, moduleDirName)
    const module = await prisma.module.findUnique({ where: { moduleId: moduleDirName } })

    if (!module) {
      console.log(`  ⚠️  Module ${moduleDirName} not found in DB, skipping...`)
      continue
    }

    let lessonDirs: string[] = []
    let lessonParentPath = modulePath
    try {
      // Try lessons/ subdirectory first, then module root
      const lessonsPath = join(modulePath, "lessons")
      if (existsSync(lessonsPath)) {
        lessonDirs = readdirSync(lessonsPath).filter((d) => LESSON_DIR_PATTERN.test(d))
        lessonParentPath = lessonsPath
      } else {
        lessonDirs = readdirSync(modulePath).filter((d) => LESSON_DIR_PATTERN.test(d))
      }
    } catch {
      continue
    }

    for (const lessonDirName of lessonDirs) {
      const lessonPath = join(lessonParentPath, lessonDirName)
      const lessonMdPath = join(lessonPath, "lesson.md")

      if (!existsSync(lessonMdPath)) {
        console.log(`  ⚠️  No lesson.md found in ${lessonDirName}`)
        continue
      }

      let matterResult: matter.GrayMatterFile<string>
      try {
        matterResult = matter.read(lessonMdPath)
      } catch (err) {
        console.log(`  ⚠️  Could not parse ${lessonMdPath}: ${err}`)
        continue
      }

      const data = matterResult.data

      // Read optional files
      const quizPath = join(lessonPath, "quiz.md")
      const labPath = join(lessonPath, "lab.md")
      const assignmentPath = join(lessonPath, "assignment.md")

      const quizContent = existsSync(quizPath) ? matter.read(quizPath).content : ""
      const labContent = existsSync(labPath) ? matter.read(labPath).content : ""
      const assignmentContent = existsSync(assignmentPath) ? matter.read(assignmentPath).content : ""

      const lessonNumber = data?.["Lesson Number"] || parseInt(lessonDirName.match(/lesson(\d+)/)?.[1] || "0")

      // Parse duration from frontmatter (e.g. "60 minutes" → 60)
      const rawDuration = data?.["Estimated Duration"]
      const duration = typeof rawDuration === "number" ? rawDuration : parseInt(String(rawDuration ?? ""), 10) || 45

      await prisma.lesson.upsert({
        where: { lessonId: lessonDirName },
        update: {
          moduleId: module.id,
          title: data?.["Lesson Title"] || `Lesson ${lessonNumber}`,
          content: matterResult.content,
          duration,
          order: lessonNumber,
          quizContent,
          labContent,
          assignmentContent,
        },
        create: {
          lessonId: lessonDirName,
          moduleId: module.id,
          title: data?.["Lesson Title"] || `Lesson ${lessonNumber}`,
          content: matterResult.content,
          duration,
          order: lessonNumber,
          quizContent,
          labContent,
          assignmentContent,
        },
      })

      console.log(`  ✅ ${lessonDirName}`)
      totalLessons++
    }
  }

  console.log(`✅ Seeded ${totalLessons} lessons`)
}
