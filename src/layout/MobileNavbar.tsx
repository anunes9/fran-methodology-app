import { useLocation } from "react-router-dom"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import Logo from "../assets/logo_green.svg"
import { IconMenu, IconX } from "@tabler/icons-react"
import { NavigationLinks } from "../lib/navigation-links"
import { LogoutButton } from "./LogoutButton"
import { useAuth } from "../hooks/useAuth"
import { useTranslation } from "react-i18next"

export const MobileNavbar = () => {
  const location = useLocation()
  const { userData } = useAuth()
  const { t } = useTranslation()

  return (
    <Disclosure as="nav" className="bg-projectBlue">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IconX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <IconMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/club">
                    <img
                      alt="logo"
                      className="w-[120px]"
                      src={Logo}
                      height={48}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="flex flex-col py-4">
              {NavigationLinks.map(({ name, href, icon }) => (
                <DisclosureButton
                  key={name}
                  as="a"
                  href={href}
                  className={`${
                    location.pathname === href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300"
                  } p-4 font-light
                  `}
                  aria-current={location.pathname === href ? "page" : undefined}
                >
                  <div className="flex items-center gap-2">
                    {icon}
                    {name}
                  </div>
                </DisclosureButton>
              ))}

              <div className="p-2">
                <LogoutButton />
              </div>

              <DisclosureButton
                as="a"
                href="/profile"
                className={`${
                  location.pathname === "/profile"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300"
                } p-4 font-light
                  `}
                aria-current={
                  location.pathname === "/profile" ? "page" : undefined
                }
              >
                <div className="flex items-center gap-4">
                  <img
                    src={userData?.avatar_url}
                    alt="avatar"
                    className="w-8 h-8 rounded-sm object-cover"
                  />
                  <div className="flex flex-col">
                    {userData?.name}
                    <span className="text-xs text-gray-300">
                      {t("settings.settings")}
                    </span>
                  </div>
                </div>
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
