import { Card } from "../components/Card"
import { SectionHeader } from "../components/SectionHeader"
import { getAssetsUrl } from "../services/supabase"
import DownloadIcon from "../assets/download.png"
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
        blocked={userData?.subscription_pack !== "Beginner"}
      />

      <PlanningGrid
        title={t("planning.intermediate")}
        data={data.filter(({ level }) =>
          level ? level?.name === "Intermediate" : false
        )}
        blocked={userData?.subscription_pack !== "Intermediate"}
      />

      <PlanningGrid
        title={t("planning.advanced")}
        data={data.filter(({ level }) =>
          level ? level?.name === "Advanced" : false
        )}
        blocked={userData?.subscription_pack !== "Advanced"}
      />

      <h2 className="text-md md:text-xl text-projectBlue font-gtExtendedBold underline mt-12">
        {t("planning.supportDocuments")}
      </h2>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8">
        <Card
          url={`${getAssetsUrl("FranMethodology-Meso1-2.pdf")}?download`}
          icon={<img src={DownloadIcon} height={32} width={32} />}
          title="Mesocycle 1-2"
          subtitle="Download"
          variant="white"
        />

        <Card
          url={`${getAssetsUrl("FranMethodology-Meso3-4.pdf")}?download`}
          icon={<img src={DownloadIcon} height={32} width={32} />}
          title="Mesocycle 3-4"
          subtitle="Download"
          variant="white"
        />

        <Card
          url={`${getAssetsUrl("FranMethodology-Meso5-6.pdf")}?download`}
          icon={<img src={DownloadIcon} height={32} width={32} />}
          title="Mesocycle 5-6"
          subtitle="Download"
          variant="white"
        />

        <Card url="planning/lessons" title="Example Lesson" variant="white" />
      </div>
    </section>
  )
}
