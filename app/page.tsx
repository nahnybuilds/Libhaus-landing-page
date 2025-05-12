import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, MessageSquare, Calendar } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold tracking-tight">LibHaus</span>
          </div>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#join" className="text-sm font-medium hover:underline underline-offset-4">
              Join
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to LibHaus: the cozy clubhouse for book lovers
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Join our community of readers, discover new books, and engage in thoughtful discussions about your
                    favorite reads.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/onboarding">
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-800">Get Started</Button>
                  </Link>
                  <Link href="#learn-more">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?key=o40fi"
                width={550}
                height={550}
                alt="Cozy reading space"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to enhance your reading experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg">
                <div className="rounded-full bg-gray-100 p-3">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Book Clubs</h3>
                <p className="text-sm text-gray-500 text-center">Join themed reading groups based on your interests</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg">
                <div className="rounded-full bg-gray-100 p-3">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Community</h3>
                <p className="text-sm text-gray-500 text-center">Connect with fellow readers who share your passion</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg">
                <div className="rounded-full bg-gray-100 p-3">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Discussions</h3>
                <p className="text-sm text-gray-500 text-center">Engage in thoughtful conversations about books</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg">
                <div className="rounded-full bg-gray-100 p-3">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Events</h3>
                <p className="text-sm text-gray-500 text-center">
                  Participate in virtual reading events and author talks
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About LibHaus</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  LibHaus was created by book lovers for book lovers. Our mission is to build a cozy digital space where
                  readers can connect, discover new books, and engage in meaningful discussions.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Whether you're an avid reader or just getting started, LibHaus is the perfect place to enhance your
                  reading journey.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <Image
                  src="/placeholder.svg?key=hc3wn"
                  width={550}
                  height={300}
                  alt="Book discussion"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="w-full py-12 md:py-24 bg-black text-white">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Reading Community</h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your reading journey with LibHaus today and connect with fellow book enthusiasts.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link href="/onboarding">
                <Button className="w-full bg-white text-black hover:bg-gray-200">Get Started</Button>
              </Link>
              <p className="text-xs text-gray-400">No credit card required. Start your free trial today.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="container flex flex-col gap-2 py-6 px-4 md:flex-row md:items-center md:justify-between md:py-8">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} LibHaus. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
