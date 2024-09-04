import { createClient } from "@sanity/client"

export const CMSClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_PROJECT_DATASET,
  useCdn: false,
  token: import.meta.env.VITE_SANITY,
})
