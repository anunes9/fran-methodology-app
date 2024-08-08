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
        showBackButton
      />

      <img
        src={getAssetsUrl(exercise?.image)}
        className="bg-slate-200 py-4 rounded-md"
      />

      <h3 className="mt-8 font-gtBold">Details</h3>

      <div className="flex flex-col gap-2 mt-2">
        {exercise?.description.map((d) => (
          <p key={d} className="ml-2">
            - {d}
          </p>
        ))}
      </div>

      <h3 className="mt-8 font-gtBold">Filters</h3>

      <div className="flex flex-wrap gap-2 mt-2">
        {exercise?.tags.map((tag) => (
          <Badge text={tag} key={tag} />
        ))}
      </div>
    </section>
  )
}
