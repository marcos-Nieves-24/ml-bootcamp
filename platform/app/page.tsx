"use client"

import { useRouter } from "next/navigation"
import BriefingFlow from "@/app/components/BriefingFlow"

export default function LandingPage() {
  const router = useRouter()

  return <BriefingFlow onComplete={() => router.push("/campus")} />
}
