"use client"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Define avatar options
const avatarOptions = [
  { id: 1, src: "/placeholder.svg?key=avatar1", alt: "Avatar 1" },
  { id: 2, src: "/placeholder.svg?key=avatar2", alt: "Avatar 2" },
  { id: 3, src: "/placeholder.svg?key=avatar3", alt: "Avatar 3" },
  { id: 4, src: "/placeholder.svg?key=avatar4", alt: "Avatar 4" },
  { id: 5, src: "/placeholder.svg?key=avatar5", alt: "Avatar 5" },
  { id: 6, src: "/placeholder.svg?key=avatar6", alt: "Avatar 6" },
]

interface AvatarSelectorProps {
  selectedAvatar: number | null
  onSelect: (id: number) => void
}

export function AvatarSelector({ selectedAvatar, onSelect }: AvatarSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {avatarOptions.map((avatar) => (
        <button
          key={avatar.id}
          type="button"
          className={cn(
            "relative aspect-square rounded-md overflow-hidden border-2",
            selectedAvatar === avatar.id ? "border-black" : "border-transparent hover:border-gray-300",
          )}
          onClick={() => onSelect(avatar.id)}
          aria-label={`Select ${avatar.alt}`}
        >
          <Image src={avatar.src || "/placeholder.svg"} alt={avatar.alt} fill className="object-cover" />
        </button>
      ))}
    </div>
  )
}
