import { useNavigate } from "react-router-dom"
import { Badge } from "../components/Badge"
import { SectionHeader } from "../components/SectionHeader"
import { Exercises } from "../lib/exercises"
import { getAssetsUrl } from "../services/supabase"

export const ExercisesPage = () => {
  const navigate = useNavigate()

  return (
    <section>
      <SectionHeader title="Exercises" description="My Club" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
        {Exercises.map(({ id, title, image, tags }) => (
          <div
            key={title}
            className="bg-slate-200 p-4 rounded-md hover:cursor-pointer hover:opacity-75"
            onClick={() => navigate(`/exercises/${id}`)}
          >
            <img src={getAssetsUrl(image)} />

            <h2 className="font-gtBold mt-4">{title}</h2>

            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <Badge text={tag} key={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
