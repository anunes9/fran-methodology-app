import { SectionHeader } from "../components/SectionHeader"
import { useTranslation } from "react-i18next"

export const TrainingPage = () => {
  const { t } = useTranslation()

  return (
    <section>
      <SectionHeader
        title={t("planning.planning")}
        description={t("planning.subtitle")}
      />

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <a href="/training/beginner">
          <div className="hover:opacity-75 hover:cursor-pointer rounded-xl shadow-md p-8 min-h-[12rem] bg-projectBlue flex items-center justify-center">
            <span className="text-center text-2xl font-gtMedium text-projectGreen">
              {t("planning.beginner")}
            </span>
          </div>
        </a>

        <a href="/training/intermediate">
          <div className="hover:opacity-75 hover:cursor-pointer rounded-xl shadow-md p-8 min-h-[12rem] bg-projectBlue flex items-center justify-center">
            <span className="text-center text-2xl font-gtMedium text-projectGreen">
              {t("planning.intermediate")}
            </span>
          </div>
        </a>

        <a href="/training/advanced">
          <div className="hover:opacity-75 hover:cursor-pointer rounded-xl shadow-md p-8 min-h-[12rem] bg-projectBlue flex items-center justify-center">
            <span className="text-center text-2xl font-gtMedium text-projectGreen">
              {t("planning.advanced")}
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
