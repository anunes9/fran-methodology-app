import { Card } from "../components/Card"
import { SectionHeader } from "../components/SectionHeader"
import { Mesocycles } from "../lib/mesocycles"
import { getAssetsUrl } from "../services/supabase"
import DownloadIcon from "../assets/download.png"

export const PlanningPage = () => (
  <section>
    <SectionHeader
      title="Planning"
      description="Mesocycles, lessons and training courses"
    />

    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {Mesocycles.map((meso) => (
        <Card
          url={`planning/${meso.id}`}
          title={meso.name}
          icon={meso.icon}
          subtitle={meso.concept}
        />
      ))}

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

      <Card url="planning/lessons" title="Example Lesson" variant="white" />
    </div>
  </section>
)
