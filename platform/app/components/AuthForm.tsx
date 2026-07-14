'use client'

import { useState } from "react"
import { Mail, Lock } from "lucide-react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
})

interface AuthFormProps {
  mode: 'login' | 'register'
}

type LoginFormData = z.infer<typeof loginSchema>

export default function AuthForm({ mode }: AuthFormProps) {
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setIsLoading(true)
    setError("")

    try {
      if (mode === 'register') {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            name: data.email.split('@')[0]
          })
        })
        
        if (response.status === 409) {
          setError("Este email ya está registrado")
          setIsLoading(false)
          return
        }
        
        if (!response.ok) {
          const errorData = await response.json()
          setError(errorData.error || "Error al registrar")
          setIsLoading(false)
          return
        }
        
        await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false
        })
        
      } else {
        const result = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false
        })

        if (result?.error) {
          if (result.error === "CredentialsSignin") {
            setError("Email o contraseña incorrectos")
          } else {
            setError("Error al iniciar sesión")
          }
        } else {
          router.push("/dashboard")
          router.refresh()
        }
      }
    } catch (error) {
      setError("Error al iniciar sesión")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Title */}
      <h2 className="text-xl font-bold text-white text-center headline-md">
        {mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
            Email
          </label>
          <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 shadow-inner shadow-black/50 transition-all
            ${errors.email
              ? 'bg-black/70 border border-red-300/30'
              : 'bg-black/70 border border-white/10 focus-within:border-[#8A2EFF]/40'
            }
          `}>
            <Mail className="w-5 h-5 text-white/40 shrink-0" />
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="tu@email.com"
              className="w-full bg-transparent text-white placeholder-white/30 outline-none text-base"
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-300 mt-1 px-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white/70 mb-2">
            Contraseña
          </label>
          <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 shadow-inner shadow-black/50 transition-all
            ${errors.password
              ? 'bg-black/70 border border-red-300/30'
              : 'bg-black/70 border border-white/10 focus-within:border-[#8A2EFF]/40'
            }
          `}>
            <Lock className="w-5 h-5 text-white/40 shrink-0" />
            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              className="w-full bg-transparent text-white placeholder-white/30 outline-none text-base"
            />
          </div>
          {errors.password && (
            <p className="text-sm text-red-300 mt-1 px-1">{errors.password.message}</p>
          )}
        </div>

        {error && (
          <div className="p-4 bg-red-300/10 border border-red-300/20 rounded-2xl">
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 rounded-2xl font-semibold bg-gradient-to-r from-[#8A2EFF] to-[#24E3F2] text-white shadow-lg shadow-[#8A2EFF]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading
            ? "Cargando..."
            : mode === 'login'
            ? 'Iniciar sesión'
            : 'Crear cuenta'
          }
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-sm text-white/40">O continúa con</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Google OAuth */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="w-full py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center gap-3 group"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        <span className="font-medium text-white/70 group-hover:text-white transition-colors">
          Continuar con Google
        </span>
      </button>

      {/* Switch mode */}
      <div className="text-center">
        <p className="text-sm text-white/50">
          {mode === 'login' 
            ? '¿No tienes cuenta? ' 
            : '¿Ya tienes cuenta? '
          }
          <a
            href={mode === 'login' ? '/register' : '/login'}
            className="font-medium text-[#24E3F2] hover:text-[#8A2EFF] transition-colors"
          >
            {mode === 'login' ? 'Crear cuenta' : 'Iniciar sesión'}
          </a>
        </p>
      </div>
    </div>
  )
}
