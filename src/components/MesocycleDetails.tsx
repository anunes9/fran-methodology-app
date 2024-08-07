import { IconArrowBarRight, IconDirectionSign } from "@tabler/icons-react"

export const MesocycleDetails = ({
  title,
  description,
  details,
  section,
}: {
  title: string
  description?: string
  details: string[]
  section?: {
    title: string
    description?: string
    details: string[]
  }
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

    {section && (
      <div className="ml-4 mt-8">
        <div className="flex items-center gap-2">
          <IconArrowBarRight height={18} width={18} />
          <span className="block font-bold text-gray-700 underline">
            {section.title}
          </span>
        </div>

        <span className="block mt-2 mb-4  text-gray-500">
          {section.description}
        </span>

        {section.details?.map((t, i) => (
          <span key={i} className="block mt-2 ml-6">
            - {t}
          </span>
        ))}
      </div>
    )}
  </div>
)
