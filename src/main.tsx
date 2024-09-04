import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { Analytics } from "@vercel/analytics/react"
import "./index.scss"
import "./i18n"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>
)
