import Logo from "@/app/components/Logo"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <div className="bg-white border border-border-muted rounded-xl shadow-sm p-8">
          {children}
        </div>
      </div>
    </div>
  )
}