import { useNavigate } from "react-router-dom"
import { SectionHeader } from "../components/SectionHeader"
import { Exercises, ExerciseTags } from "../lib/exercises"
import { ExercisesFilter } from "../components/ExercisesFilter"
import { useState } from "react"
import { ExercisesCard } from "../components/ExercisesCard"

export const ExercisesPage = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState("")

  const exercisesFiltered = active
    ? Exercises.filter((e) => e.tags.includes(active))
    : Exercises

  return (
    <section>
      <SectionHeader
        title="Exercises"
        description="List of exercises per type"
      />

      <ExercisesFilter
        active={active}
        setActive={(filter: string) =>
          setActive(active === filter ? "" : filter)
        }
        filters={ExerciseTags}
        count={exercisesFiltered.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {exercisesFiltered.map(({ id, title, image, tags }) => (
          <ExercisesCard
            title={title}
            id={id}
            tags={tags}
            image={image}
            navigate={navigate}
            key={id}
          />
        ))}

        {exercisesFiltered.length === 0 && <p>No exercises for that filter</p>}
      </div>
    </section>
  )
}
