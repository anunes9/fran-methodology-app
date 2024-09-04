import { LoaderFunctionArgs } from "react-router-dom"
import { CMSClient } from "../../sanity.config"

export const mesocycleLoader = async (
  args: LoaderFunctionArgs<unknown>
): Promise<unknown> => {
  return CMSClient.fetch(
    `*[_type == "mesocycle" && slug == "${args.params.id}"]{
      _id,
      title,
      slug,
      description,
      duration,
      concept,
      details,
      level
    }`
  )
    .then((r) => (r.length > 0 ? r[0] : null))
    .catch(() => null)
}
