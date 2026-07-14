import { describe, it, expect } from "vitest"
import { calculateXpAfterAward } from "../lib/repositories"

describe("calculateXpAfterAward", () => {
  it("adds XP without leveling up", () => {
    const result = calculateXpAfterAward(100, 1, 1000, 15)
    expect(result.xp).toBe(115)
    expect(result.level).toBe(1)
    expect(result.xpToNextLevel).toBe(1000)
    expect(result.leveledUp).toBe(false)
  })

  it("levels up when XP exceeds threshold", () => {
    const result = calculateXpAfterAward(990, 1, 1000, 15)
    expect(result.xp).toBe(5) // 990 + 15 = 1005, minus 1000 = 5
    expect(result.level).toBe(2)
    expect(result.leveledUp).toBe(true)
  })

  it("levels up multiple times with enough XP", () => {
    // Level 1: 1000 XP needed, Level 2: 1250 XP needed (1000 * 1.25)
    // Starting at 0 XP, adding 2500 should go through 2 levels
    const result = calculateXpAfterAward(0, 1, 1000, 2500)
    // After level 1: 2500 - 1000 = 1500 XP, level 2, xpToNext = 1250
    // After level 2: 1500 - 1250 = 250 XP, level 3, xpToNext = 1563 (1250 * 1.25 = 1562.5 → round up to 1563)
    expect(result.level).toBe(3)
    expect(result.xp).toBe(250)
    expect(result.xpToNextLevel).toBe(1563)
    expect(result.leveledUp).toBe(true)
  })

  it("handles exact threshold without overflow", () => {
    const result = calculateXpAfterAward(985, 1, 1000, 15)
    // 985 + 15 = 1000, exactly equals threshold
    // 1000 - 1000 = 0, level up to 2, xpToNext = 1250
    expect(result.xp).toBe(0)
    expect(result.level).toBe(2)
    expect(result.xpToNextLevel).toBe(1250)
    expect(result.leveledUp).toBe(true)
  })

  it("increases XP required per level by 25%", () => {
    const r1 = calculateXpAfterAward(0, 1, 1000, 1000)
    expect(r1.level).toBe(2)
    expect(r1.xpToNextLevel).toBe(1250)

    const r2 = calculateXpAfterAward(0, 5, 2000, 3000)
    // Would level up 5→6 if 3000 >= 2000
    expect(r2.level).toBeGreaterThan(5)
  })

  it("does not level up with zero XP gained", () => {
    const result = calculateXpAfterAward(500, 3, 1500, 0)
    expect(result.xp).toBe(500)
    expect(result.level).toBe(3)
    expect(result.leveledUp).toBe(false)
  })
})
