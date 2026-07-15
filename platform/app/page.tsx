"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import BriefingFlow from "@/app/components/BriefingFlow"

export default function LandingPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const handleRegister = async (userData: { name: string; email: string; password: string; xp?: number }) => {
    setError(null)

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        xp: userData.xp ?? 0,
      }),
    })

    if (!res.ok) {
      const body = await res.json()
      setError(body.error || "Error al registrar")
      return
    }

    const result = await signIn("credentials", {
      email: userData.email,
      password: userData.password,
      redirect: false,
    })

    if (result?.error) {
      setError("Error al iniciar sesión")
      return
    }

    router.push("/dashboard")
  }

  return (
    <>
      <BriefingFlow onComplete={handleRegister} />
      {error && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-2xl bg-red-500/90 text-white text-sm font-medium shadow-xl">
          {error}
        </div>
      )}
    </>
  )
}
