import { Navigate, useLoaderData } from "react-router-dom"
import { SectionHeader } from "../components/SectionHeader"
import { ExerciseData, MesocycleType, VideoData } from "../lib/mesocycles"
import { IconClock, IconMovie, IconTarget } from "@tabler/icons-react"
import { MesocycleCard } from "../components/MesocycleCard"
import { MesocycleDetails } from "../components/MesocycleDetails"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { ExerciseImage } from "../components/ExerciseImage"
import { CMSClient } from "../../sanity.config"
import { VideoCard } from "../components/VideoCard"

export const MesocyclePage = () => {
  const mesocycle = useLoaderData() as unknown as MesocycleType
  const { t } = useTranslation()
  const [tab, setTab] = useState(0)
  const [exercises, setExercises] = useState([] as ExerciseData[])
  const [videos, setVideos] = useState([] as VideoData[])

  if (!mesocycle) return <Navigate to="/not-found" />

  const handleExercises = () => {
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

    setTab(1)
  }

  const handleVideos = () => {
    CMSClient.fetch(
      `*[_type == "video" && mesocycle == "${mesocycle.slug}"]{
      _id,
      slug,
      title,
      source
    }`
    )
      .then((data) => setVideos(data))
      .catch(console.error)

    setTab(2)
  }

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
          onClick={handleExercises}
          selected={tab === 1}
        />

        <MesocycleCard
          icon={<IconMovie width={24} height={24} color="#6bb8a4" />}
          text={t("exercises.videos")}
          onClick={handleVideos}
          selected={tab === 2}
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

      {tab === 2 && (
        <div className="flex flex-wrap gap-4 mt-10">
          {videos.map((a) => (
            <VideoCard key={a.slug} title={a.title} source={a.source} />
          ))}
        </div>
      )}
    </section>
  )
}
