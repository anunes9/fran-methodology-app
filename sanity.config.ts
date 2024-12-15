import { createClient } from "@sanity/client"

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_PROJECT_DATASET

export const CMSClient = createClient({
  projectId,
  dataset,
  useCdn: true,
})
