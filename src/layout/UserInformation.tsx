import { IconUserCircle } from "@tabler/icons-react"
import { useAuth } from "../hooks/useAuth"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

export const UserInformation = () => {
  const { userData } = useAuth()
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div
      className="flex items-center p-2 space-x-4 hover:cursor-pointer hover:bg-btn-background-hover/50 rounded-md"
      onClick={() => navigate("/profile")}
    >
      <div className="rounded-lg bg-gray-200 stroke-gray-500 w-9 h-9 flex justify-center items-center">
        <IconUserCircle
          width={28}
          height={28}
          stroke={1.2}
          className="stroke-gray-600"
        />
      </div>

      <div>
        <h2 className="text-md font-semibold">{userData?.name}</h2>
        <span className="flex items-center space-x-1">
          <span className="text-xs hover:underline text-gray-600">
            {t("settings.settings")}
          </span>
        </span>
      </div>
    </div>
  )
}
