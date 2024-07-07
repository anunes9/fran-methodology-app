import { ReactNode } from "react"
import { useLocation } from "react-router-dom"

export const SidebarItem = ({
  title,
  href,
  icon,
}: {
  title: string
  href: string
  icon: ReactNode
}) => {
  const location = useLocation()

  return (
    <li
      className={`rounded-md hover:bg-btn-background-hover ${
        location.pathname === href && "bg-btn-background-hover"
      } text-sm text-gray-800`}
    >
      <a href={href} className="flex items-center p-2 space-x-3 rounded-md">
        {icon}
        <span>{title}</span>
      </a>
    </li>
  )
}
