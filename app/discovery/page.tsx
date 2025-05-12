import { AppLayout } from "@/app/components/app-layout"
import { ReaderCard } from "@/app/components/reader-card"
import { BookCard } from "@/app/components/book-card"

// Mock data for readers
const readers = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "/placeholder.svg?key=avatar1",
    bio: "Lover of sci-fi and historical fiction",
    genres: ["Science Fiction", "Historical Fiction", "Fantasy", "Mystery"],
  },
  {
    id: "2",
    name: "Jamie Smith",
    avatar: "/placeholder.svg?key=avatar2",
    bio: "Book club enthusiast and coffee addict",
    genres: ["Literary Fiction", "Memoirs", "Poetry"],
  },
  {
    id: "3",
    name: "Taylor Wong",
    avatar: "/placeholder.svg?key=avatar3",
    bio: "Reading between meetings and during commutes",
    genres: ["Thrillers", "Mystery", "Non-Fiction"],
  },
  {
    id: "4",
    name: "Morgan Lee",
    avatar: "/placeholder.svg?key=avatar4",
    bio: "Always looking for the next great read",
    genres: ["Romance", "Young Adult", "Fantasy"],
  },
]

// Mock data for popular books
const popularBooks = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "/placeholder.svg?key=book1",
    readersCount: 1243,
  },
  {
    id: "2",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    cover: "/placeholder.svg?key=book2",
    readersCount: 982,
  },
  {
    id: "3",
    title: "The Vanishing Half",
    author: "Brit Bennett",
    cover: "/placeholder.svg?key=book3",
    readersCount: 1567,
  },
  {
    id: "4",
    title: "Pachinko",
    author: "Min Jin Lee",
    cover: "/placeholder.svg?key=book4",
    readersCount: 876,
  },
  {
    id: "5",
    title: "The Song of Achilles",
    author: "Madeline Miller",
    cover: "/placeholder.svg?key=book5",
    readersCount: 1342,
  },
  {
    id: "6",
    title: "Educated",
    author: "Tara Westover",
    cover: "/placeholder.svg?key=book6",
    readersCount: 1105,
  },
]

export default function DiscoveryPage() {
  return (
    <AppLayout title="Discover">
      <div className="container px-4 py-6 sm:px-6">
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Readers you might like</h2>
            <a href="/readers" className="text-sm text-gray-500 hover:underline">
              View all
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {readers.map((reader) => (
              <ReaderCard
                key={reader.id}
                id={reader.id}
                name={reader.name}
                avatar={reader.avatar}
                bio={reader.bio}
                genres={reader.genres}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Popular books</h2>
            <a href="/books" className="text-sm text-gray-500 hover:underline">
              View all
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {popularBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                cover={book.cover}
                readersCount={book.readersCount}
              />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  )
}
