"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"
import { BookOpen, Home, Search, Users, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AppLayoutProps {
  children: ReactNode
  title?: string
  showBackButton?: boolean
}

export function AppLayout({ children, title, showBackButton = true }: AppLayoutProps) {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            {showBackButton && (
              <Button variant="ghost" size="icon" onClick={handleBack} className="mr-2" aria-label="Go back">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}
            <Link href="/discovery" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-xl font-bold tracking-tight">LibHaus</span>
            </Link>
          </div>

          {title && <h1 className="text-lg font-semibold hidden md:block">{title}</h1>}

          <div className="flex items-center space-x-1">
            <Link href="/profile" className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <nav className="border-t border-gray-200 bg-white sticky bottom-0">
        <div className="container flex justify-around py-2">
          <Link href="/discovery" className="flex flex-col items-center p-2 text-xs">
            <Home className="h-6 w-6 mb-1" />
            <span>Home</span>
          </Link>
          <Link href="/search" className="flex flex-col items-center p-2 text-xs">
            <Search className="h-6 w-6 mb-1" />
            <span>Search</span>
          </Link>
          <Link href="/clubs" className="flex flex-col items-center p-2 text-xs">
            <Users className="h-6 w-6 mb-1" />
            <span>Clubs</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center p-2 text-xs">
            <User className="h-6 w-6 mb-1" />
            <span>Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default AppLayout
