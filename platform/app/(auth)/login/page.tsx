import AuthForm from "@/app/components/AuthForm"

export default function LoginPage() {
  return (
    <>
      <h2 className="text-xl font-bold text-on-surface mb-6">Iniciar sesión</h2>
      <AuthForm mode="login" />
    </>
  )
}