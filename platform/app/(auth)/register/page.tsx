import AuthForm from "@/app/components/AuthForm"

export default function RegisterPage() {
  return (
    <>
      <h2 className="text-xl font-bold text-on-surface mb-6">Crear cuenta</h2>
      <AuthForm mode="register" />
    </>
  )
}