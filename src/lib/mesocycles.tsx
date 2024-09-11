import { ReactNode } from "react"

export type MesocycleType = {
  _id: string
  slug: string
  language: string
  title: string
  concept: string
  description: string
  duration: string
  level: string
  image: string
  icon: ReactNode
  details: {
    title: string
    description?: string
    details: string[]
    section?: {
      title: string
      description?: string
      details: string[]
    }
  }[]
}
