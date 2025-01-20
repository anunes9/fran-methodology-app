import { SectionHeader } from "../components/SectionHeader"
import { useEffect, useState } from "react"
import { CMSClient } from "../../sanity.config"
import { useAuth } from "../hooks/useAuth"
import { useTranslation } from "react-i18next"
import { PlanningGrid } from "../components/Planning/PlanningGrid"
import { MesocycleData } from "../lib/mesocycles"

export const TrainingBeginnerPage = () => {
  const [data, setData] = useState<MesocycleData[]>([])
  const { userData, language } = useAuth()
  const { t } = useTranslation()

  console.log("here")

  useEffect(() => {
    const levelQuery = `level->name == "Beginner"`

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
        title={t("planning.beginner")}
        data={data}
        blocked={false}
      />
    </section>
  )
}
