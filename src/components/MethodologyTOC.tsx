import { MethodologyBook } from "../lib/methodology"

export const MethodologyTOC = ({
  active,
  setActive,
}: {
  active: number
  setActive: (i: number) => void
}) => (
  <div>
    <div className="flex flex-col sm:flex-row gap-4 sm:border-b">
      {MethodologyBook.map(({ title }, i) => (
        <span
          key={title}
          onClick={() => setActive(i)}
          className={`shrink-0 border-b-2 pb-2 text-sm font-gtRegular cursor-pointer
            ${
              active === i
                ? "text-projectGreen border-projectGreen !font-gtMedium"
                : "text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700 font-medium"
            }
          `}
        >
          {title}
        </span>
      ))}
    </div>
  </div>
)
