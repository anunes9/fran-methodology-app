import { useState, useEffect, useCallback } from "react"
import { Exercises, ExerciseTags, ExerciseType } from "../lib/exercises"
import { ExercisesCard } from "../components/ExercisesCard"
import { useNavigate } from "react-router-dom"
import { SectionHeader } from "../components/SectionHeader"
import { ExercisesFilter } from "../components/ExercisesFilter"
import { Loader } from "../components/Loader"
import { useTranslation } from "react-i18next"

const INITIAL_INDEX = 12
const LIMIT = 6

export const ExercisesPage = () => {
  const { t } = useTranslation()
  const [items, setItems] = useState([] as ExerciseType[])
  const [isLoading, setIsLoading] = useState(true)
  const [index, setIndex] = useState(INITIAL_INDEX)
  const navigate = useNavigate()
  const [active, setActive] = useState("")

  const exercisesFiltered = active
    ? Exercises.filter((e) => e.tags.includes(active))
    : Exercises

  const hasMore = () => items.length <= Exercises.length

  const fetchData = useCallback(async () => {
    // Return early if there are no more items to load, or if data is already loading, or if a filter is active
    if (items.length === Exercises.length || isLoading || active !== "") return

    setIsLoading(true)

    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...Exercises.slice(index, index + LIMIT),
      ])
      setIsLoading(false)
      setIndex((prevIndex) => prevIndex + LIMIT)
    }, 1500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isLoading])

  useEffect(() => {
    const getData = async () => {
      setTimeout(async () => {
        setItems(Exercises.slice(0, INITIAL_INDEX))
        setIsLoading(false)
      }, 500)
    }

    getData()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement
      if (hasMore() && scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData])

  return (
    <section>
      <SectionHeader
        title={t("exercises.exercises")}
        description={t("exercises.exercisesPerType")}
      />

      <ExercisesFilter
        active={active}
        setActive={(filter: string) => {
          if (active === filter) {
            setActive("")
            setItems(Exercises.slice(0, INITIAL_INDEX))
            setIndex(INITIAL_INDEX)
          } else {
            setActive(filter)
            setItems(Exercises.filter((e) => e.tags.includes(filter)))
            setIndex(-1)
          }
        }}
        filters={ExerciseTags}
        count={exercisesFiltered.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {items.map(({ title, id, tags, image }) => (
          <ExercisesCard
            title={title}
            id={id}
            tags={tags}
            image={image}
            navigate={navigate}
            key={id}
          />
        ))}
      </div>

      {isLoading && <Loader />}
    </section>
  )
}
