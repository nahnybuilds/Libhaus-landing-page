"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen, Check, ChevronsUpDown, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { OnboardingProgress } from "@/app/components/onboarding-progress"

const genres = [
  { label: "Literary Fiction", value: "literary-fiction" },
  { label: "Queer Reads", value: "queer-reads" },
  { label: "Black Authors", value: "black-authors" },
  { label: "Thrillers", value: "thrillers" },
  { label: "Science Fiction", value: "science-fiction" },
  { label: "Fantasy", value: "fantasy" },
  { label: "Romance", value: "romance" },
  { label: "Mystery", value: "mystery" },
  { label: "Historical Fiction", value: "historical-fiction" },
  { label: "Non-Fiction", value: "non-fiction" },
  { label: "Memoirs", value: "memoirs" },
  { label: "Poetry", value: "poetry" },
  { label: "Young Adult", value: "young-adult" },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])

  const toggleGenre = (value: string) => {
    setSelectedGenres((current) => {
      if (current.includes(value)) {
        return current.filter((item) => item !== value)
      } else {
        return [...current, value]
      }
    })
  }

  const handleContinue = () => {
    // Save the selected genres (this would typically be done via an API or state management)
    console.log("Selected genres:", selectedGenres)
    // Navigate to the next onboarding page
    router.push("/onboarding/add-book")
  }

  const handleBack = () => {
    router.push("/")
  }

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
          <OnboardingProgress currentStep={1} totalSteps={3} />

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Pick your vibe</h1>
            <p className="text-gray-500">Select the genres that interest you so we can personalize your experience</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Genre preferences</label>

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between h-auto min-h-[2.5rem] py-2"
                  >
                    {selectedGenres.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {selectedGenres.map((value) => (
                          <Badge key={value} variant="secondary" className="mr-1">
                            {genres.find((genre) => genre.value === value)?.label}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      "Select genres..."
                    )}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search genres..." />
                    <CommandList>
                      <CommandEmpty>No genre found.</CommandEmpty>
                      <CommandGroup className="max-h-64 overflow-auto">
                        {genres.map((genre) => (
                          <CommandItem key={genre.value} value={genre.value} onSelect={() => toggleGenre(genre.value)}>
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedGenres.includes(genre.value) ? "opacity-100" : "opacity-0",
                              )}
                            />
                            {genre.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <p className="text-xs text-gray-500 mt-1">Select multiple genres that interest you</p>
            </div>

            <Button
              className="w-full bg-black text-white hover:bg-gray-800"
              onClick={handleContinue}
              disabled={selectedGenres.length === 0}
            >
              Continue
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
