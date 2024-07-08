import { createBrowserRouter } from "react-router-dom"
import { MyClubPage } from "../pages/MyClub"
import { LoginPage } from "../pages/Login"
import { MethodologyPage } from "../pages/Methodology"
import { PlanningPage } from "../pages/Planning"
import { ExercisesPage } from "../pages/Exercises"

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> }, // used as login page
  { path: "/club", element: <MyClubPage /> },
  { path: "/methodology", element: <MethodologyPage /> },
  { path: "/planning", element: <PlanningPage /> },
  { path: "/exercises", element: <ExercisesPage /> },
])
