import { SectionHeader } from "../components/SectionHeader"
import { useEffect, useState } from "react"
import { CMSClient } from "../../sanity.config"
import { useAuth } from "../hooks/useAuth"
import { useTranslation } from "react-i18next"
import { PlanningGrid } from "../components/Planning/PlanningGrid"
import { MesocycleData } from "../lib/mesocycles"

export const TrainingAdvancedPage = () => {
  const [data, setData] = useState<MesocycleData[]>([])
  const { userData, language } = useAuth()
  const { t } = useTranslation()

  useEffect(() => {
    let levelQuery = ""
    if (userData?.subscription_pack === "Advanced")
      levelQuery = `level->name == "Advanced"`

    if (levelQuery)
      CMSClient.fetch(
        `*[_type == "mesocycle" && language == "${language}" && (${levelQuery})] | order(title) {
        _id,
        slug,
        title,
        concept,
        level -> { name }
      }`
      )
        .then((data) => setData(data))
        .catch(console.error)
  }, [userData])

  return (
    <section>
      <SectionHeader
        title={t("planning.planning")}
        description={t("planning.subtitle")}
      />

      <PlanningGrid
        title={t("planning.advanced")}
        data={data}
        blocked={["Beginner", "Intermediate"].includes(
          // @ts-expect-error subscription_pack exists on userData
          userData?.subscription_pack
        )}
      />
    </section>
  )
}
