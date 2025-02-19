import { IconCalendarStats, IconFiles, IconHome } from "@tabler/icons-react"

export const NavigationLinks = [
  {
    name: "My Club",
    tKey: "myClub.myClub",
    href: "/club",
    icon: <IconHome width={24} height={24} stroke={1.5} />,
    current: true,
  },
  // {
  //   name: "Methodology",
  //   tKey: "methodology.methodology",
  //   href: "/methodology",
  //   icon: <IconNotebook width={24} height={24} stroke={1.5} />,
  //   current: false,
  // },
  {
    name: "Training",
    tKey: "planning.planning",
    href: "/training",
    icon: <IconCalendarStats width={24} height={24} stroke={1.5} />,
    current: false,
  },
  {
    name: "Documents",
    tKey: "documents.documents",
    href: "/documents",
    icon: <IconFiles width={24} height={24} stroke={1.5} />,
    current: false,
  },
  // {
  //   name: "Exercises",
  //   tKey: "exercises.exercises",
  //   href: "/exercises",
  //   icon: <IconBallTennis width={24} height={24} stroke={1.5} />,
  //   current: false,
  // },
]
