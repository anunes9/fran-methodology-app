import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AuthProvider from "./contexts/auth"
import { LoginPage } from "./pages/Login"
import { MyClubPage } from "./pages/MyClub"
import { MethodologyPage } from "./pages/Methodology"
import { Layout } from "./layout/Layout"

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    index: true,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/club",
        element: <MyClubPage />,
      },
      {
        path: "/methodology",
        element: <MethodologyPage />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
])
