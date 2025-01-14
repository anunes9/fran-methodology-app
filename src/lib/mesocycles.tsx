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
  }[]
}

export interface Level {
  name: string
}

export interface MesocycleData {
  _id: string
  slug: string
  title: string
  concept: string
  level?: Level
}

export interface ExerciseData {
  _id: string
  slug: string
  title: string
  description: string
  imageUrl: string
}

export interface VideoData {
  _id: string
  slug: string
  title: string
  description: string
  source: string
}
