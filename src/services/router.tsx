import { createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../pages/auth/Login"
import { Layout } from "../layout/Layout"
import { MyClubPage } from "../pages/MyClub"
import { PlanningPage } from "../pages/Planning"
import { MesocyclePage } from "../pages/Mesocycle"
import { mesocycleLoader } from "../loaders/mesocycleLoader"
import { Settings } from "../pages/Settings"
import { ForgotPasswordPage } from "../pages/auth/ForgotPassword"
import { RecoverPage } from "../pages/auth/Recover"
import { DocumentsPage } from "../pages/Documents"
// import { MethodologyPage } from "../pages/Methodology"
// import { ExercisesPage } from "../pages/Exercises"
// import { ExerciseItem } from "../pages/ExerciseItem"
// import { exerciseLoader } from "../loaders/exerciseLoader"
// import { CalendarPage } from "../pages/Calendar"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    index: true,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/recover",
    element: <RecoverPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "club",
        element: <MyClubPage />,
      },
      // {
      //   path: "methodology",
      //   element: <MethodologyPage />,
      // },
      {
        path: "documents",
        element: <DocumentsPage />,
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
      // {
      //   path: "exercises",
      //   element: <ExercisesPage />,
      // },
      // {
      //   path: "exercises/:id",
      //   element: <ExerciseItem />,
      //   loader: exerciseLoader,
      // },
      {
        path: "profile",
        element: <Settings />,
      },
      // {
      //   path: "calendar",
      //   element: <CalendarPage />,
      // },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
])
