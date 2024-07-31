import { NavigateFunction } from "react-router-dom"
import { Badge } from "../components/Badge"
import { getAssetsUrl } from "../services/supabase"

export const ExercisesCard = ({
  title,
  id,
  tags,
  image,
  navigate,
}: {
  title: string
  id: string
  tags: string[]
  image: string
  navigate: NavigateFunction
}) => (
  <div
    key={title}
    className="hover:cursor-pointer hover:opacity-75 hover:text-projectGreen"
    onClick={() => navigate(`/exercises/${id}`)}
  >
    <div className="bg-slate-200 py-8 rounded-md">
      <img src={getAssetsUrl(image)} />
    </div>

    <h2 className="text-lg font-gtBold mt-4">{title}</h2>

    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag) => (
        <Badge text={tag} key={tag} />
      ))}
    </div>
  </div>
)
