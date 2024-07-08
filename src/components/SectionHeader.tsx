export const SectionHeader = ({
  title,
  description,
}: {
  title?: string
  description: string
}) => (
  <div className="flex flex-col w-full mb-12">
    <h1 className="text-3xl text-projectBlue underline">{title}</h1>

    <h2 className="text-projectGreen mt-2">{description}</h2>
  </div>
)
