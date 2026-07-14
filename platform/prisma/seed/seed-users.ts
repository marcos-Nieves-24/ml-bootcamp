import bcrypt from "bcryptjs"
import { prisma } from "../../lib/prisma"

export async function seedUsers() {
  const email = "test@nexus.com"
  const existing = await prisma.user.findUnique({ where: { email } })
  if (!existing) {
    const passwordHash = await bcrypt.hash("password123", 12)
    await prisma.user.create({
      data: { 
        email, 
        name: "Investigador Principal", 
        passwordHash,
        level: 1
      }
    })
    console.log("  ✅ Default user: test@nexus.com / password123")
  }
}