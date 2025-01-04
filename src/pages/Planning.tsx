import { SectionHeader } from "../components/SectionHeader"
import { useEffect, useState } from "react"
import { CMSClient } from "../../sanity.config"
import { useAuth } from "../hooks/useAuth"
import { useTranslation } from "react-i18next"
import { PlanningGrid } from "../components/Planning/PlanningGrid"
import { MesocycleData } from "../lib/mesocycles"

export const PlanningPage = () => {
  const [data, setData] = useState<MesocycleData[]>([])
  const { userData, language } = useAuth()
  const { t } = useTranslation()

  useEffect(() => {
    let levelQuery = ""
    if (userData?.subscription_pack === "Beginner")
      levelQuery = `level->name == "Beginner"`
    else if (userData?.subscription_pack === "Intermediate")
      levelQuery = `level->name == "Beginner" || level->name == "Intermediate"`
    else if (userData?.subscription_pack === "Advanced")
      levelQuery = `level->name == "Beginner" || level->name == "Intermediate" || level->name == "Advanced"`

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
        data={data.filter(({ level }) =>
          level ? level?.name === "Beginner" : false
        )}
        blocked={false}
      />

      <PlanningGrid
        title={t("planning.intermediate")}
        data={data.filter(({ level }) =>
          level ? level?.name === "Intermediate" : false
        )}
        blocked={userData?.subscription_pack === "Beginner"}
      />

      <PlanningGrid
        title={t("planning.advanced")}
        data={data.filter(({ level }) =>
          level ? level?.name === "Advanced" : false
        )}
        blocked={userData?.subscription_pack === "Intermediate"}
      />
    </section>
  )
}
