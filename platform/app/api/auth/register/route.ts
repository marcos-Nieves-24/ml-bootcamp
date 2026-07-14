import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

interface RegisterBody {
  name: string
  email: string
  password: string
  xp?: number
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as RegisterBody
    const { email, password, name, xp } = body
    
    if (!email || !password || password.length < 6) {
      return NextResponse.json(
        { error: "Email y contraseña requeridos (mín 6 chars)" }, 
        { status: 400 }
      )
    }
    
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json(
        { error: "Email ya registrado" }, 
        { status: 409 }
      )
    }
    
    const passwordHash = await bcrypt.hash(password, 12)
    const user = await prisma.user.create({
      data: { 
        email, 
        name: name || email.split('@')[0], 
        passwordHash,
        level: 1,
        ...(xp !== undefined ? { xp, xpToNextLevel: 1000 } : {})
      }
    })
    
    return NextResponse.json({ 
      id: user.id, 
      email: user.email, 
      name: user.name 
    }, { status: 201 })
    
  } catch (error) {
    console.error("Error en registro:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" }, 
      { status: 500 }
    )
  }
}