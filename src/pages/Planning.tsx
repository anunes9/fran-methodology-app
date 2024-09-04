import { Card } from "../components/Card"
import { SectionHeader } from "../components/SectionHeader"
import { getAssetsUrl } from "../services/supabase"
import DownloadIcon from "../assets/download.png"
import { useEffect, useState } from "react"
import { CMSClient } from "../../sanity.config"

export const PlanningPage = () => {
  const [mesos, setMesos] = useState([])

  useEffect(() => {
    CMSClient.fetch(
      `*[_type == "mesocycle"]{
      _id,
      title,
      slug,
      description,
      duration,
      concept,
      details
    }`
    )
      .then((data) => setMesos(data))
      .catch(console.error)
  }, [])

  return (
    <section>
      <SectionHeader
        title="Planning"
        description="Mesocycles, lessons and training courses"
      />

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {mesos.map(({ slug, title, concept }) => (
          <Card
            key={slug}
            url={`planning/${slug}`}
            title={title}
            icon={null}
            subtitle={concept}
          />
        ))}

        {/* {Mesocycles.map(({ id, name, icon, concept }) => (
          <Card
            key={id}
            url={`planning/${id}`}
            title={name}
            icon={icon}
            subtitle={concept}
          />
        ))} */}

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
