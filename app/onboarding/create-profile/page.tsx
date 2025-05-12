"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { OnboardingProgress } from "@/app/components/onboarding-progress"
import { AvatarSelector } from "@/app/components/avatar-selector"

export default function CreateProfilePage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [bio, setBio] = useState("")
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContinue = () => {
    setIsSubmitting(true)

    // Save the profile information (this would typically be done via an API)
    console.log("Profile created:", {
      name,
      location,
      bio,
      avatarId: selectedAvatar,
    })

    // Navigate to the discovery page
    router.push("/discovery")
  }

  const handleBack = () => {
    router.push("/onboarding/add-book")
  }

  const isFormValid = name.trim() !== ""

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
          <OnboardingProgress currentStep={3} totalSteps={3} />

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Create your profile</h1>
            <p className="text-gray-500">Tell the community a bit about yourself</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="avatar">Avatar</Label>
                <AvatarSelector selectedAvatar={selectedAvatar} onSelect={setSelectedAvatar} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Where are you based? (optional)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us a bit about yourself (optional)"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={4}
                />
              </div>
            </div>

            <Button
              className="w-full bg-black text-white hover:bg-gray-800"
              onClick={handleContinue}
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? "Creating Profile..." : "Continue"}
            </Button>
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
