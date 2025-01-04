export const VideoCard = ({
  title,
  source,
}: {
  title: string
  source: string
}) => (
  <div className="hover:cursor-pointer hover:opacity-75 hover:text-projectGreen hover:bg-gray-100 border rounded-md px-2 py-4">
    <iframe src={source} width="auto" height="480" allow="autoplay"></iframe>

    <h2 className="text-lg font-gtMedium mt-2">{title}</h2>
  </div>
)
