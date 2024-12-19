import { IconDirectionSign } from "@tabler/icons-react"

export const MesocycleDetails = ({
  title,
  description,
  details,
}: {
  title: string
  description?: string
  details: string[]
}) => (
  <div className="border rounded-md p-4">
    <div className="flex items-center gap-2">
      <IconDirectionSign height={24} width={24} className="text-projectGreen" />
      <h3 className="block font-gtMedium text-projectGreen">{title}</h3>
    </div>

    <span className="block mt-2 mb-4 text-gray-500">{description}</span>

    {details?.map((t, i) => (
      <span key={i} className="block mt-2 ml-4">
        - {t}
      </span>
    ))}
  </div>
)
