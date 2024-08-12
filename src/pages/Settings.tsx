import { SectionHeader } from "../components/SectionHeader"
import { useAuth } from "../hooks/useAuth"
import { UserName } from "../components/Profile/UserName"
import { useTranslation } from "react-i18next"

export const Settings = () => {
  const { session, clubData } = useAuth()
  const { t, i18n } = useTranslation()

  const updateLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    window.localStorage.setItem("lang", lang)
  }

  return (
    <div className="flow-root">
      <SectionHeader
        title={t("settings.settings")}
        description={t("settings.myDetails")}
      />

      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">{t("settings.name")}</dt>
          <UserName />
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">{t("settings.email")}</dt>
          <dd className="text-gray-700 sm:col-span-2">{session?.user.email}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">{t("settings.club")}</dt>
          <dd className="text-gray-700 sm:col-span-2">{clubData?.name}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">
            {t("settings.language")}
          </dt>
          <dd className="text-gray-700 sm:col-span-2 flex items-center gap-4">
            <span
              className={`${
                i18n.language === "en"
                  ? "font-gtBold bg-green-200"
                  : "font-gtRegular"
              } border px-2 rounded-md py-1 hover:bg-green-100 cursor-pointer`}
              onClick={() => updateLanguage("en")}
            >
              English
            </span>

            <span>{"<>"} </span>

            <span
              className={`${
                i18n.language === "pt"
                  ? "font-gtBold bg-green-200"
                  : "font-gtRegular"
              } border px-2 rounded-md py-1 hover:bg-green-100 cursor-pointer`}
              onClick={() => updateLanguage("pt")}
            >
              Português
            </span>
          </dd>
        </div>
      </dl>
    </div>
  )
}
