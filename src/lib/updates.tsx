import { ReactNode } from "react"
import {
  IconBallTennis,
  IconCalendarStats,
  IconNotebook,
  IconPresentation,
} from "@tabler/icons-react"

export type UpdateType = {
  title: string
  description: string
  date: string
  url: string
  icon: ReactNode
}

export const Updates: UpdateType[] = [
  {
    title: "Mesosycle 3 available",
    description:
      "Mesocycle 3 - Mindset for attack, defense, and counter-attack, the Principle of Equity, Consistency and Speed is now available in the planning section.",
    date: "June 2024",
    url: "/planning/meso-3",
    icon: <IconCalendarStats width={24} height={24} />,
  },
  {
    title: "Course 1 available to download",
    description:
      "Course 1 - Mesocycles 1-2 and ground shots is available to download",
    date: "March 2024",
    url: "/planning",
    icon: <IconPresentation width={24} height={24} />,
  },
  {
    title: "New Methodology Chapter added",
    description: "New Methodology Chapter was added to the methodology section",
    date: "February 2024",
    url: "/methodology",
    icon: <IconNotebook width={24} height={24} />,
  },
  {
    title: "New Exercises added",
    description: "New Exercises where added to the exercises section",
    date: "January 2024",
    url: "/exercises",
    icon: <IconBallTennis width={24} height={24} />,
  },
  {
    title:
      "New Mesocycle available: Transversal concepts in aerial and ground game",
    description:
      "Mesocycle 2 - Transversal concepts in aerial and ground game is now available in the planning section.",
    date: "January 2024",
    url: "/planning/meso-2",
    icon: <IconCalendarStats width={24} height={24} />,
  },
  {
    title: "New Mesosycle available: Master the 5-in-a-row Concept",
    description:
      "Mesocycle 1 - 5-in-a-row Concept is now available in the planning section.",
    date: "January 2024",
    url: "/planning/meso-1",
    icon: <IconCalendarStats width={24} height={24} />,
  },
]
