import { createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../pages/Login"
import { Layout } from "../layout/Layout"
import { MyClubPage } from "../pages/MyClub"
import { MethodologyPage } from "../pages/Methodology"
import { PlanningPage } from "../pages/Planning"
import { ExercisesPage } from "../pages/Exercises"
import { ExerciseItem } from "../pages/ExerciseItem"
import { exerciseLoader } from "../loaders/exerciseLoader"
import { MesocyclePage } from "../pages/Mesocycle"
import { mesocycleLoader } from "../loaders/mesocycleLoader"
import { Profile } from "../pages/Profile"
import { CalendarPage } from "../pages/Calendar"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    index: true,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "club",
        element: <MyClubPage />,
      },
      {
        path: "methodology",
        element: <MethodologyPage />,
      },
      {
        path: "planning",
        element: <PlanningPage />,
      },
      {
        path: "planning/:id",
        element: <MesocyclePage />,
        loader: mesocycleLoader,
      },
      {
        path: "exercises",
        element: <ExercisesPage />,
      },
      {
        path: "exercises/:id",
        element: <ExerciseItem />,
        loader: exerciseLoader,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "calendar",
        element: <CalendarPage />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
])
