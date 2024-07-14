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
    <div className="flex">
      {showBackButton && (
        <IconChevronLeft
          className="text-projectBlue w-12 h-12 cursor-pointer hover:opacity-75"
          stroke={2}
          onClick={() => navigate(-1)}
        />
      )}

      <div className="flex flex-col w-full mb-12">
        <div className="flex">
          <h1
            className={`text-3xl text-projectBlue ${
              breadcrumb ? "font-gtRegular" : "font-gtExtendedBold underline"
            }`}
          >
            {title}
            {breadcrumb ? " /" : ""}
          </h1>

          {breadcrumb && (
            <h1 className="text-3xl text-projectBlue font-gtExtendedBold underline ml-2">
              {breadcrumb}
            </h1>
          )}
        </div>

        {description && (
          <h2 className="text-projectGreen font-gtMedium mt-2">
            {description}
          </h2>
        )}
      </div>
    </div>
  )
}
