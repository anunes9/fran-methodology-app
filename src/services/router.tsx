import { createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../pages/auth/Login"
import { Layout } from "../layout/Layout"
import { MyClubPage } from "../pages/MyClub"
import { TrainingPage } from "../pages/Training"
import { MesocyclePage } from "../pages/Mesocycle"
import { mesocycleLoader } from "../loaders/mesocycleLoader"
import { Settings } from "../pages/Settings"
import { ForgotPasswordPage } from "../pages/auth/ForgotPassword"
import { RecoverPage } from "../pages/auth/Recover"
import { DocumentsPage } from "../pages/Documents"
import { TrainingBeginnerPage } from "../pages/TrainingBeginner"
import { TrainingIntermediatePage } from "../pages/TrainingIntermediate"
import { TrainingAdvancedPage } from "../pages/TrainingAdvanced"

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
      {
        path: "documents",
        element: <DocumentsPage />,
      },
      {
        path: "training",
        element: <TrainingPage />,
      },
      {
        path: "training/beginner",
        element: <TrainingBeginnerPage />,
      },
      {
        path: "training/intermediate",
        element: <TrainingIntermediatePage />,
      },
      {
        path: "training/advanced",
        element: <TrainingAdvancedPage />,
      },
      {
        path: "training/:slug",
        element: <MesocyclePage />,
        loader: mesocycleLoader,
      },
      {
        path: "profile",
        element: <Settings />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
])
