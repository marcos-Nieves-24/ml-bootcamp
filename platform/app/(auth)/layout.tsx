export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <h1 className="text-2xl font-bold text-primary">ML Expedition</h1>
          </div>
        </div>
        <div className="bg-white border border-border-muted rounded-xl shadow-sm p-8">
          {children}
        </div>
      </div>
    </div>
  )
}