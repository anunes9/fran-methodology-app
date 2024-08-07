import { ReactNode } from "react"

export const MesocycleCard = ({
  icon,
  text,
}: {
  icon: ReactNode
  text: string
}) => (
  <div className="border rounded-lg p-4">
    {icon}

    <h2 className="text-lg font-gtMedium mt-2">{text}</h2>
  </div>
)
