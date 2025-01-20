import { ReactNode } from "react"
import { IconPresentation } from "@tabler/icons-react"

export type UpdateType = {
  title: string
  description: string
  date: string
  url: string
  icon: ReactNode
}

export const Updates: UpdateType[] = [
  {
    title: "Formação Iniciante Disponível",
    description: "",
    date: "",
    url: "/training/beginner",
    icon: <IconPresentation width={24} height={24} />,
  },
  {
    title: "Formação Intermédia Disponível",
    description: "",
    date: "",
    url: "/training/intermediate",
    icon: <IconPresentation width={24} height={24} />,
  },
  {
    title: "Formação Avançada Disponível",
    description: "",
    date: "",
    url: "/training/advanced",
    icon: <IconPresentation width={24} height={24} />,
  },
]
