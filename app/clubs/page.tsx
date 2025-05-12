import { AppLayout } from "@/app/components/app-layout"

export default function ClubsPage() {
  return (
    <AppLayout title="Book Clubs">
      <div className="container px-4 py-6 sm:px-6 flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-3xl font-bold mb-4 text-center">Book Clubs</h1>
        <p className="text-xl text-gray-500 text-center mb-6">Coming Soon</p>
        <p className="text-gray-500 text-center max-w-md">
          We're working on bringing you amazing book clubs where you can connect with fellow readers and discuss your
          favorite books.
        </p>
      </div>
    </AppLayout>
  )
}
