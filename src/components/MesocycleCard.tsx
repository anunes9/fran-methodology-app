import { ReactNode } from "react"

export const MesocycleCard = ({
  icon,
  text,
  onClick,
  selected,
}: {
  icon: ReactNode
  text: string
  onClick: () => void
  selected: boolean
}) => (
  <button
    className={`flex items-center gap-2 border rounded-lg px-4 py-6 ${
      selected ? "bg-btn-background" : ""
    }`}
    onClick={onClick}
  >
    {icon}

    <h2 className="text-md md:text-lg font-gtMedium">{text}</h2>
  </button>
)
