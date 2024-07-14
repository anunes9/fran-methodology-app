import {
  Navigate,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom"
import { Badge } from "../components/Badge"
import { SectionHeader } from "../components/SectionHeader"
import { getAssetsUrl } from "../services/supabase"
import { ExerciseType } from "../lib/exercises"

export const ExerciseItem = () => {
  const exercise = useLoaderData() as unknown as ExerciseType
  const navigate = useNavigate()
  const { id } = useParams()

  if (!exercise) return <Navigate to="/not-found" />

  return (
    <section>
      <SectionHeader
        title="Exercises"
        breadcrumb={exercise.title}
        description="My Club"
        showBackButton
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div
          className="bg-slate-200 p-4 rounded-md hover:cursor-pointer hover:opacity-75"
          onClick={() => navigate(`/exercises/${id}`)}
        >
          <img src={getAssetsUrl(exercise?.image)} />

          <h2 className="font-gtBold mt-4">{exercise?.title}</h2>

          <div className="flex flex-wrap gap-2 mt-2">
            {exercise?.tags.map((tag) => (
              <Badge text={tag} key={tag} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
