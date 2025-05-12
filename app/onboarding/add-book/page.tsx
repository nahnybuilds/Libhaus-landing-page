"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { OnboardingProgress } from "@/app/components/onboarding-progress"

export default function AddBookPage() {
  const router = useRouter()
  const [bookTitle, setBookTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContinue = () => {
    setIsSubmitting(true)

    // Save the book information (this would typically be done via an API)
    console.log("Book added:", { title: bookTitle, author })

    // Navigate to the create profile page
    router.push("/onboarding/create-profile")
  }

  const handleSkip = () => {
    // Navigate to the create profile page without adding a book
    console.log("Skipped adding a book")
    router.push("/onboarding/create-profile")
  }

  const handleBack = () => {
    router.push("/onboarding")
  }

  const isFormValid = bookTitle.trim() !== "" && author.trim() !== ""

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-gray-200 relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBack}
          className="absolute left-4 top-1/2 -translate-y-1/2"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="container flex h-16 items-center justify-center px-4 sm:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold tracking-tight">LibHaus</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <OnboardingProgress currentStep={2} totalSteps={3} />

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Add one book</h1>
            <p className="text-gray-500">Tell us what you're currently reading</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="book-title">Book Title</Label>
                <Input
                  id="book-title"
                  placeholder="Enter the title of the book"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  placeholder="Enter the author's name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                className="w-full bg-black text-white hover:bg-gray-800"
                onClick={handleContinue}
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Continue"}
              </Button>
              <Button variant="outline" className="w-full" onClick={handleSkip} disabled={isSubmitting}>
                Skip
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200">
        <div className="container py-4 px-4 flex justify-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} LibHaus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
