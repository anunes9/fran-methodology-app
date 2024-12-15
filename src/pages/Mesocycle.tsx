import { Navigate, useLoaderData } from "react-router-dom"
import { SectionHeader } from "../components/SectionHeader"
import { ExerciseData, MesocycleType } from "../lib/mesocycles"
import { IconClock, IconTarget } from "@tabler/icons-react"
import { MesocycleCard } from "../components/MesocycleCard"
import { MesocycleDetails } from "../components/MesocycleDetails"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { ExerciseImage } from "../components/ExerciseImage"
import { CMSClient } from "../../sanity.config"

export const MesocyclePage = () => {
  const mesocycle = useLoaderData() as unknown as MesocycleType
  const { t } = useTranslation()
  const [tab, setTab] = useState(0)
  const [exercises, setExercises] = useState([] as ExerciseData[])

  useEffect(() => {
    CMSClient.fetch(
      `*[_type == "exercise" && mesocycle == "${mesocycle.slug}"]{
      _id,
      slug,
      title,
      "imageUrl": image.asset->url
    }`
    )
      .then((data) => setExercises(data))
      .catch(console.error)
  }, [mesocycle])

  if (!mesocycle) return <Navigate to="/not-found" />

  return (
    <section>
      <SectionHeader
        title={t("planning.planning")}
        breadcrumb={mesocycle.title}
        showBackButton
      />

      <h1 className="text-xl md:text-3xl text-projectBlue font-gtExtendedBold underline">
        {mesocycle.concept}
      </h1>

      <span className="text-md md:text-lg text-projectBlue font-gtExtended mt-4 block">
        {mesocycle.description}
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <MesocycleCard
          icon={<IconClock width={24} height={24} color="#6bb8a4" />}
          text={t("planning.theoryContent")}
          onClick={() => setTab(0)}
          selected={tab === 0}
        />

        <MesocycleCard
          icon={<IconTarget width={24} height={24} color="#6bb8a4" />}
          text={t("exercises.exercises")}
          onClick={() => setTab(1)}
          selected={tab === 1}
        />
      </div>

      {tab === 0 && (
        <div className="flex flex-col gap-4 lg:gap-8 mt-8">
          {mesocycle.details.map((d, i) => (
            <MesocycleDetails
              key={i}
              title={d.title}
              description={d.description}
              details={d.details}
              section={d.section}
            />
          ))}
        </div>
      )}

      {tab === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {exercises.map((a) => (
            <ExerciseImage key={a.slug} title={a.title} image={a.imageUrl} />
          ))}
        </div>
      )}
    </section>
  )
}
