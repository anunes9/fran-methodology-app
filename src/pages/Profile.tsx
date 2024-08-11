import { SectionHeader } from "../components/SectionHeader"
import { useAuth } from "../hooks/useAuth"
import { UserName } from "../components/Profile/UserName"

export const Profile = () => {
  const { session, clubData } = useAuth()

  return (
    <div className="flow-root">
      <SectionHeader title="Profile" description="My information" />

      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Name</dt>
          <UserName />
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
