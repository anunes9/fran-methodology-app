import { useEffect } from "react"
import { NavigationLinks } from "../lib/navigation-links"
import { UserInformation } from "./UserInformation"
import { MobileNavbar } from "./MobileNavbar"
import { SidebarItem } from "./SidebarItem"
import { useAuth } from "../hooks/useAuth"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { LogoutButton } from "./LogoutButton"
import { BetaBanner } from "../components/BetaBanner"

export const Layout = () => {
  const { session } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!session) navigate("/")
  }, [session])

  if (!session) <Navigate to="/" replace />

  return (
    <>
      <BetaBanner />

      <div className="flex flex-col lg:grid lg:grid-cols-[300px_minmax(0,_1fr)] h-screen">
        <div className="border-r border-r-foreground/10">
          <MobileNavbar />

          <nav className="hidden lg:block">
            <ul className="hidden lg:block mx-2 py-4 space-y-1 font-light">
              {NavigationLinks.map(({ name, href, icon }, i) => (
                <SidebarItem key={i} title={name} href={href} icon={icon} />
              ))}

              <li>
                <LogoutButton />
              </li>
            </ul>

            <div className="border-t border-t-foreground/10 px-2 py-4 mt-8">
              <UserInformation />
            </div>
          </nav>
        </div>

        <div className="flex-1 lg:block p-12">
          <div className="m-auto max-w-screen-xl animate-in">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
