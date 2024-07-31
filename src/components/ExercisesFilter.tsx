import { FilterBadge } from "./Badge"

export const ExercisesFilter = ({
  active,
  setActive,
  filters,
  count,
}: {
  active: string
  setActive: (filter: string) => void
  filters: string[]
  count: number
}) => (
  <div className="mb-10">
    <span className="block mb-4 font-gtMedium">Filter ({count})</span>

    <div className="flex flex-wrap gap-4">
      {filters.map((tag) => (
        <FilterBadge
          text={tag}
          key={tag}
          active={active === tag}
          onClick={() => setActive(tag)}
        />
      ))}
    </div>
  </div>
)
