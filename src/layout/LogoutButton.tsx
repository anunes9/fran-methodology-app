import { useAuth } from "../hooks/useAuth"
import { IconLogout } from "@tabler/icons-react"

export const LogoutButton = () => {
  const { signOut } = useAuth()

  return (
    <button
      className="flex items-center p-2 space-x-3 rounded-md hover:bg-btn-background-hover text-sm text-gray-300 sm:text-gray-800 w-full"
      onClick={signOut}
    >
      <IconLogout width={24} height={24} />
      <span>Logout</span>
    </button>
  )
}
