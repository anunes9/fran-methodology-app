import { IconChevronLeft } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"

export const SectionHeader = ({
  title,
  breadcrumb,
  description,
  showBackButton,
}: {
  title: string
  breadcrumb?: string
  description?: string
  showBackButton?: boolean
}) => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center mb-10">
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          {showBackButton && (
            <IconChevronLeft
              className="w-8 h-8 bg-gray-200 rounded-md flex mr-2 cursor-pointer hover:opacity-75"
              stroke={2}
              onClick={() => (breadcrumb ? navigate(-1) : null)}
            />
          )}

          <h1
            className={`text-xl text-projectBlue ${
              breadcrumb
                ? "font-gtRegular cursor-pointer hover:opacity-75 flex"
                : "font-gtExtendedBold underline"
            }`}
          >
            {title}
            {breadcrumb && <span className="font-gtRegular ml-2">/</span>}
            {breadcrumb && (
              <span className="font-gtExtendedBold underline ml-2">
                {breadcrumb}
              </span>
            )}
          </h1>
        </div>

        {description && (
          <h2 className="text-md text-projectBlue font-gtMedium mt-2">
            {description}
          </h2>
        )}
      </div>
    </div>
  )
}
