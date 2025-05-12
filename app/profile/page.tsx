import { AppLayout } from "@/app/components/app-layout"

export default function ProfilePage() {
  return (
    <AppLayout title="Your Profile">
      <div className="container px-4 py-6 sm:px-6">
        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
        <p className="text-gray-500">Profile functionality will be implemented in a future update.</p>
      </div>
    </AppLayout>
  )
}
