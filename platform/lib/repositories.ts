// Real data layer using Prisma
import { prisma } from "./prisma"
import type { Module, Lesson, Lab, LabStep, Project, Deliverable, UserProfile, Achievement, Rank, Activity, MetricPoint } from "./data"

export class DatabaseError extends Error {
  constructor(message: string, public cause?: unknown) {
    super(message)
    this.name = "DatabaseError"
  }
}

export async function getModules(userId?: string): Promise<Module[]> {
  try {
    const modules = await prisma.module.findMany({ orderBy: { order: "asc" } })
    if (!userId) return modules

    const moduleIds = modules.map(m => m.id)
    const [lessonCounts, completedProgress] = await Promise.all([
      prisma.lesson.groupBy({
        by: ["moduleId"],
        where: { moduleId: { in: moduleIds } },
        _count: { id: true },
      }),
      prisma.userProgress.findMany({
        where: { userId, completed: true, lesson: { moduleId: { in: moduleIds } } },
        include: { lesson: { select: { moduleId: true } } },
      }),
    ])

    const totalMap = new Map(lessonCounts.map(l => [l.moduleId, l._count.id]))
    const completedMap = new Map<string, number>()
    for (const p of completedProgress) {
      completedMap.set(p.lesson.moduleId, (completedMap.get(p.lesson.moduleId) ?? 0) + 1)
    }

    return modules.map(m => {
      const total = totalMap.get(m.id) ?? 0
      const completed = completedMap.get(m.id) ?? 0
      return { ...m, progress: total > 0 ? Math.round((completed / total) * 100) : 0 }
    })
  } catch (e) {
    throw new DatabaseError("Failed to fetch modules", e)
  }
}

export async function getLessons(moduleId: string, userId?: string): Promise<Lesson[]> {
  try {
    const dbLessons = await prisma.lesson.findMany({
      where: { moduleId },
      orderBy: { order: "asc" },
    })

    const lessons: Lesson[] = dbLessons.map(l => ({
      id: l.id,
      moduleId: l.moduleId,
      title: l.title,
      content: l.content,
      duration: l.duration,
      order: l.order,
      quizContent: l.quizContent,
    }))

    if (userId) {
      const progress = await prisma.userProgress.findMany({
        where: { userId, lesson: { moduleId } },
        select: { lessonId: true, completed: true }
      })
      const progressMap = new Map(progress.map(p => [p.lessonId, p.completed]))
      return lessons.map(lesson => ({
        ...lesson,
        isCompleted: progressMap.get(lesson.id) ?? false,
      }))
    }

    return lessons
  } catch (e) {
    throw new DatabaseError("Failed to fetch lessons", e)
  }
}

export async function getLabs(): Promise<Lab[]> {
  try {
    return await prisma.lab.findMany({ orderBy: { title: "asc" } })
  } catch (e) {
    throw new DatabaseError("Failed to fetch labs", e)
  }
}

export async function getLabSteps(labId: string): Promise<LabStep[]> {
  try {
    return await prisma.labStep.findMany({
      where: { labId },
      orderBy: { stepNumber: "asc" }
    })
  } catch (e) {
    throw new DatabaseError("Failed to fetch lab steps", e)
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    return await prisma.project.findMany({ orderBy: { title: "asc" } })
  } catch (e) {
    throw new DatabaseError("Failed to fetch projects", e)
  }
}

export async function getDeliverables(projectId: string): Promise<Deliverable[]> {
  try {
    return await prisma.deliverable.findMany({
      where: { projectId },
      orderBy: { title: "asc" }
    })
  } catch (e) {
    throw new DatabaseError("Failed to fetch deliverables", e)
  }
}

export async function getUsers(): Promise<UserProfile[]> {
  try {
    const users = await prisma.user.findMany({ include: { rank: true } })
    return users.map(user => ({
      id: user.id,
      name: user.name || user.email || "",
      avatar: user.image || "",
      level: user.level,
      xp: user.xp,
      xpToNextLevel: user.xpToNextLevel,
      streakDays: user.streakDays,
      rank: user.rank ? {
        id: user.rank.id,
        name: user.rank.name,
        order: user.rank.level,
        xpRequired: user.rank.minXP,
        icon: "",
      } : null
    }))
  } catch (e) {
    throw new DatabaseError("Failed to fetch users", e)
  }
}

export async function getUserById(userId: string): Promise<UserProfile | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { rank: true }
    })
    if (!user) return null
    return {
      id: user.id,
      name: user.name || user.email || "",
      avatar: user.image || "",
      level: user.level,
      xp: user.xp,
      xpToNextLevel: user.xpToNextLevel,
      streakDays: user.streakDays,
      rank: user.rank ? {
        id: user.rank.id,
        name: user.rank.name,
        order: user.rank.level,
        xpRequired: user.rank.minXP,
        icon: "",
      } : null
    }
  } catch (e) {
    throw new DatabaseError("Failed to fetch user", e)
  }
}

export async function getAchievements(): Promise<Achievement[]> {
  try {
    const achievements = await prisma.achievement.findMany()
    return achievements.map(achievement => ({
      id: achievement.id,
      title: achievement.title,
      description: achievement.description,
      icon: achievement.icon,
      xpReward: achievement.xpReward,
      unlockedAt: undefined
    }))
  } catch (e) {
    throw new DatabaseError("Failed to fetch achievements", e)
  }
}

export async function getRanks(): Promise<Rank[]> {
  try {
    const ranks = await prisma.rank.findMany({ orderBy: { level: "asc" } })
    return ranks.map(rank => ({
      id: rank.id,
      name: rank.name,
      order: rank.level,
      xpRequired: rank.minXP,
      icon: rank.name.toLowerCase() + "-icon"
    }))
  } catch (e) {
    throw new DatabaseError("Failed to fetch ranks", e)
  }
}

export async function getUserAchievements(userId: string): Promise<Achievement[]> {
  try {
    const userAchievements = await prisma.userAchievement.findMany({
      where: { userId },
      include: { achievement: true }
    })
    return userAchievements.map(ua => ({
      id: ua.achievement.id,
      title: ua.achievement.title,
      description: ua.achievement.description,
      icon: ua.achievement.icon,
      xpReward: ua.achievement.xpReward,
      unlockedAt: ua.unlockedAt || undefined
    }))
  } catch (e) {
    throw new DatabaseError("Failed to fetch user achievements", e)
  }
}

export async function getActivities(): Promise<Activity[]> {
  try {
    const activities = await prisma.activity.findMany({
      orderBy: { createdAt: "desc" },
      take: 20
    })
    return activities.map(activity => ({
      id: activity.id,
      type: activity.type,
      message: activity.metadata || "",
      user: activity.userId || undefined,
      timestamp: activity.createdAt
    }))
  } catch (e) {
    throw new DatabaseError("Failed to fetch activities", e)
  }
}

export async function getMetricPoints(): Promise<MetricPoint[]> {
  try {
    const metricPoints = await prisma.metricPoint.findMany({
      orderBy: { recordedAt: "desc" }
    })
    return metricPoints.map(point => ({
      date: point.recordedAt.toISOString(),
      value: point.value
    }))
  } catch (e) {
    throw new DatabaseError("Failed to fetch metric points", e)
  }
}

export async function getUserRecentActivity(userId: string, limit = 5): Promise<Activity[]> {
  try {
    const activities = await prisma.activity.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: limit,
    })
    return activities.map(a => ({
      id: a.id,
      type: a.type,
      message: a.metadata || "",
      user: a.userId,
      timestamp: a.createdAt,
    }))
  } catch (e) {
    throw new DatabaseError("Failed to fetch recent activity", e)
  }
}

// ─── Progress Tracking ───────────────────────────────────────────────────

export async function getUserModuleProgress(userId: string, moduleId: string): Promise<Record<string, boolean>> {
  try {
    const progress = await prisma.userProgress.findMany({
      where: { userId, lesson: { moduleId } },
      select: { lessonId: true, completed: true }
    })
    return Object.fromEntries(progress.map(p => [p.lessonId, p.completed]))
  } catch (e) {
    throw new DatabaseError("Failed to fetch module progress", e)
  }
}

export async function getLessonProgress(userId: string, lessonId: string): Promise<boolean> {
  try {
    const record = await prisma.userProgress.findUnique({
      where: { userId_lessonId: { userId, lessonId } },
      select: { completed: true }
    })
    return record?.completed ?? false
  } catch (e) {
    throw new DatabaseError("Failed to fetch lesson progress", e)
  }
}

export interface LessonCompleteResult {
  xpGained: number
  leveledUp: boolean
  newLevel: number
  totalXp: number
  xpToNext: number
}

const XP_PER_LESSON = 15

/** Pure function to calculate XP, level, and level-up. Exported for testing. */
export function calculateXpAfterAward(
  currentXp: number,
  currentLevel: number,
  currentXpToNext: number,
  xpGained: number,
): { xp: number; level: number; xpToNextLevel: number; leveledUp: boolean } {
  let newXp = currentXp + xpGained
  let newLevel = currentLevel
  let newXpToNext = currentXpToNext
  let leveledUp = false

  while (newXp >= newXpToNext) {
    newXp -= newXpToNext
    newLevel += 1
    newXpToNext = Math.round(newXpToNext * 1.25)
    leveledUp = true
  }

  return { xp: newXp, level: newLevel, xpToNextLevel: newXpToNext, leveledUp }
}

export async function markLessonComplete(userId: string, lessonId: string): Promise<LessonCompleteResult> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { level: true, xp: true, xpToNextLevel: true }
    })
    if (!user) throw new DatabaseError("User not found")

    const { xp: newXp, level: newLevel, xpToNextLevel: newXpToNext, leveledUp } =
      calculateXpAfterAward(user.xp, user.level, user.xpToNextLevel, XP_PER_LESSON)

    await prisma.$transaction([
      prisma.userProgress.upsert({
        where: { userId_lessonId: { userId, lessonId } },
        update: { completed: true, completedAt: new Date() },
        create: { userId, lessonId, completed: true, completedAt: new Date() }
      }),
      prisma.user.update({
        where: { id: userId },
        data: { xp: newXp, level: newLevel, xpToNextLevel: newXpToNext }
      }),
      prisma.activity.create({
        data: {
          userId,
          type: "lesson_complete",
          metadata: JSON.stringify({ lessonId, xpGained: XP_PER_LESSON, leveledUp })
        }
      })
    ])

    return { xpGained: XP_PER_LESSON, leveledUp, newLevel, totalXp: newXp, xpToNext: newXpToNext }
  } catch (e) {
    throw new DatabaseError("Failed to mark lesson complete", e)
  }
}

export async function getModuleStats(userId: string, moduleId: string): Promise<{ completedLessons: number; totalLessons: number; progressPercent: number }> {
  try {
    const [totalLessons, completedCount] = await Promise.all([
      prisma.lesson.count({ where: { moduleId } }),
      prisma.userProgress.count({
        where: { userId, lesson: { moduleId }, completed: true }
      })
    ])
    return {
      completedLessons: completedCount,
      totalLessons,
      progressPercent: totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0
    }
  } catch (e) {
    throw new DatabaseError("Failed to fetch module stats", e)
  }
}
