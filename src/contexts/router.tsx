import { createBrowserRouter } from "react-router-dom"
import { MyClubPage } from "../pages/MyClub"
import { LoginPage } from "../pages/Login"

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> }, // used as login page
  { path: "/club", element: <MyClubPage /> },
])
