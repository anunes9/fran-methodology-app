import { LoaderFunctionArgs } from "react-router-dom"
import { CMSClient } from "../../sanity.config"

export const mesocycleLoader = async (
  args: LoaderFunctionArgs<unknown>
): Promise<unknown> => {
  const lang = window?.localStorage.getItem("lang") || "pt"

  const r = await CMSClient.fetch(
    `*[_type == "mesocycle" && slug == "${args.params.slug}" && language == "${lang}"][0]{
      _id,
      title,
      slug,
      description,
      duration,
      concept,
      details,
      level,
      image
    }`
  )

  return r
}
