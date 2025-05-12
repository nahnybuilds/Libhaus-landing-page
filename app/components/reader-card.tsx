import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ReaderCardProps {
  id: string
  name: string
  avatar: string
  bio?: string
  genres?: string[]
}

export function ReaderCard({ id, name, avatar, bio, genres }: ReaderCardProps) {
  return (
    <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-4 flex items-center space-x-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image src={avatar || "/placeholder.svg"} alt={`${name}'s avatar`} fill className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium truncate">{name}</h3>
          {bio && <p className="text-xs text-gray-500 line-clamp-1">{bio}</p>}
        </div>
      </div>

      {genres && genres.length > 0 && (
        <div className="px-4 pb-2">
          <div className="flex flex-wrap gap-1">
            {genres.slice(0, 3).map((genre) => (
              <span key={genre} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {genre}
              </span>
            ))}
            {genres.length > 3 && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">+{genres.length - 3} more</span>
            )}
          </div>
        </div>
      )}

      <div className="p-4 pt-2 mt-auto">
        <Link href={`/readers/${id}`}>
          <Button variant="outline" size="sm" className="w-full">
            View Profile
          </Button>
        </Link>
      </div>
    </div>
  )
}
