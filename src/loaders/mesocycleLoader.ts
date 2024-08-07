import { LoaderFunctionArgs } from "react-router-dom"
import { Mesocycles } from "../lib/mesocycles"

export const mesocycleLoader = async (
  args: LoaderFunctionArgs<unknown>
): Promise<unknown> => {
  const mesocycle = Mesocycles.find(({ id }) => id === args.params.id)

  return mesocycle || null
}
