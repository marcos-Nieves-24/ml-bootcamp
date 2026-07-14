import "@/app/globals.css"
import type { Metadata } from "next"
import Providers from "./providers"

const siteName = "ML Bootcamp Platform"
const siteDescription = "Transformando aprendizaje estático en experiencia interactiva. Cursos de Machine Learning y Data Science."

export const metadata: Metadata = {
  title: {
    default: "ML Expedition",
    template: `%s · ML Expedition`,
  },
  description: siteDescription,
  openGraph: {
    siteName,
    title: "ML Expedition",
    description: siteDescription,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body-md min-h-screen">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}