import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

interface BookCardProps {
  id: string
  title: string
  author: string
  cover: string
  readersCount: number
}

export function BookCard({ id, title, author, cover, readersCount }: BookCardProps) {
  return (
    <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden">
      <div className="relative aspect-[2/3] w-full">
        <Image src={cover || "/placeholder.svg"} alt={`Cover of ${title}`} fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-medium line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{author}</p>
        <div className="flex items-center text-xs text-gray-500 mt-auto">
          <Users className="h-3 w-3 mr-1" />
          <span>{readersCount} readers</span>
        </div>
      </div>
      <div className="p-4 pt-0">
        <Link href={`/books/${id}`}>
          <Button variant="outline" size="sm" className="w-full">
            View Book
          </Button>
        </Link>
      </div>
    </div>
  )
}
