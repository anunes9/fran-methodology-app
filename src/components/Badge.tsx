import { IconXboxXFilled } from "@tabler/icons-react"

export const Badge = ({ text }: { text: string }) => (
  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 uppercase mt-2">
    {text}
  </span>
)

export const FilterBadge = ({
  text,
  active,
  onClick,
}: {
  text: string
  active?: boolean
  onClick: () => void
}) => (
  <span
    onClick={onClick}
    className={`cursor-pointer inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 uppercase relative ${
      active ? "bg-blue-300" : "bg-blue-50"
    }`}
  >
    {text}

    {active && (
      <IconXboxXFilled
        className="absolute top-[-10px] right-[-10px]"
        width={24}
        height={24}
      />
    )}
  </span>
)
