import { SectionHeader } from "../components/SectionHeader"
import { useAuth } from "../hooks/useAuth"

export const Profile = () => {
  const { session, userData, clubData } = useAuth()

  return (
    <div className="flow-root">
      <SectionHeader title="Profile" description="My information" />

      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Name</dt>
          <dd className="text-gray-700 sm:col-span-2">{userData?.name}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Email</dt>
          <dd className="text-gray-700 sm:col-span-2">{session?.user.email}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Club</dt>
          <dd className="text-gray-700 sm:col-span-2">{clubData?.name}</dd>
        </div>
      </dl>
    </div>
  )
}
