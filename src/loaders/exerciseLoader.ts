import { LoaderFunctionArgs } from "react-router-dom"
import { Exercises } from "../lib/exercises"

export const exerciseLoader = async (
  args: LoaderFunctionArgs<unknown>
): Promise<unknown> => {
  const exercise = Exercises.find(({ id }) => id === args.params.id)

  return exercise || null
}
