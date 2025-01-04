import { Card } from "../components/Card"
import { SectionHeader } from "../components/SectionHeader"
import { getAssetsUrl } from "../services/supabase"
import DownloadIcon from "../assets/download.png"
import { useTranslation } from "react-i18next"

export const DocumentsPage = () => {
  const { t } = useTranslation()

  return (
    <section>
      <SectionHeader
        title={t("documents.documents")}
        description={t("documents.subtitle")}
      />

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
