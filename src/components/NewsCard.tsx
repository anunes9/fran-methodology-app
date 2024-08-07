import { ReactNode } from "react"
import { IconPlus } from "@tabler/icons-react"

export const NewsCard = ({
  icon,
  title,
  details,
  href,
}: {
  icon: ReactNode
  title: string
  details: string
  href: string
}) => (
  <div className="rounded-lg h-full border p-4">
    <div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 inline-flex items-center justify-center rounded-full text-projectGreen flex-shrink-0">
          {icon}
        </div>

        <span className="text-gray-900 text-md title-font font-medium">
          {title}
        </span>
      </div>

      <p className="mt-2 leading-relaxed text-sm text-gray-600">{details}</p>
    </div>

    <a
      href={href}
      className="mt-2 text-projectGreen inline-flex items-center float-right"
    >
      See More
      <IconPlus className="w-4 h-4 ml-2" />
    </a>
  </div>
)
