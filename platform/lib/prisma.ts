import { PrismaClient } from "@prisma/client"

// Create a singleton PrismaClient for use across the application
// This ensures only one PrismaClient instance is created at the module level,
// which prevents connection leaks and respects Next.js's hot-reload behavior.
declare global {
  // allow global `prisma` for hot-reload mode in development
  var prisma: PrismaClient | undefined
}

const prisma =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  })

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma
}

export { prisma }