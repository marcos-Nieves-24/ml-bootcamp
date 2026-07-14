'use client'

import { useState } from "react"
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
        // Call register API instead of localStorage
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
        
        // Registration successful - auto-login
        await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false
        })
        
      } else {
        // Login mode
        const result = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false
        })

        if (result?.error) {
          // Map NextAuth errors to Spanish
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-on-surface mb-2">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="w-full px-3 py-2 border border-border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-on-surface mb-2">
            Contraseña
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="w-full px-3 py-2 border border-border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Mínimo 6 caracteres"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-error">{errors.password.message}</p>
          )}
        </div>

        {error && (
          <div className="p-3 bg-error/10 border border-error/20 rounded-lg">
            <p className="text-sm text-error">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-primary text-on-primary font-medium rounded-lg hover:bg-[#3525cd] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading
            ? "Cargando..."
            : mode === 'login'
            ? 'Iniciar sesión'
            : 'Crear cuenta'
          }
        </button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border-muted" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-on-surface-variant">O continúa con</span>
        </div>
      </div>

      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="w-full py-2 px-4 bg-white border border-border-muted rounded-lg hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.3-4.75 3.3-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.94 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.33-1.36-.33-2.09s.11-1.43.33-2.09V5.07H2.18C1.43 6.26 1 7.62 1 9s.43 2.74 1.18 3.93l3.66-.72z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.89 14.98 1 12 1 7.94 1 4.27 3.47 2.18 7.07l3.66.89C6.50 9.31 9.14 5.38 12 5.38z"
          />
        </svg>
        <span className="text-sm font-medium text-on-surface">Google</span>
      </button>

      <div className="text-center">
        <p className="text-sm text-on-surface-variant">
          {mode === 'login' 
            ? '¿No tienes cuenta? ' 
            : '¿Ya tienes cuenta? '
          }
          <a
            href={mode === 'login' ? '/register' : '/login'}
            className="font-medium text-primary hover:text-[#3525cd]"
          >
            {mode === 'login' ? 'Crear cuenta' : 'Iniciar sesión'}
          </a>
        </p>
      </div>
    </div>
  )
}