import { Navigate, useLoaderData } from "react-router-dom"
import { Badge } from "../components/Badge"
import { SectionHeader } from "../components/SectionHeader"
import { getAssetsUrl } from "../services/supabase"
import { ExerciseType } from "../lib/exercises"

export const ExerciseItem = () => {
  const exercise = useLoaderData() as unknown as ExerciseType

  if (!exercise) return <Navigate to="/not-found" />

  return (
    <section>
      <SectionHeader
        title="Exercises"
        breadcrumb={exercise.title}
        description="My Club"
        showBackButton
      />
      <div className="bg-slate-200 p-4 rounded-md">
        <img src={getAssetsUrl(exercise?.image)} />

        <h3 className="mt-4 font-gtBold">Details</h3>

        <div className="flex flex-col gap-2 mt-2">
          {exercise?.description.map((d) => (
            <p key={d} className="ml-2">
              - {d}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {exercise?.tags.map((tag) => (
            <Badge text={tag} key={tag} />
          ))}
        </div>
      </div>
    </section>
  )
}
