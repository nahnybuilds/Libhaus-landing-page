"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BackButtonProps {
  href?: string
}

export function BackButton({ href }: BackButtonProps) {
  const router = useRouter()

  const handleBack = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleBack} className="absolute top-4 left-4" aria-label="Go back">
      <ArrowLeft className="h-5 w-5" />
    </Button>
  )
}
