import { useState, useEffect } from "react"
import { Session, createClient } from "@supabase/supabase-js"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LoginPage } from "./pages/Login"
import { HomePage } from "./pages/Home"

const supabase = createClient(
  import.meta.env.VITE_CLIENT,
  import.meta.env.VITE_SECRET
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage supabase={supabase} />,
  },
  {
    path: "/login",
    element: <LoginPage supabase={supabase} />,
  },
])

export default function App() {
  // const [session, setSession] = useState(null as Session | null)
  const [session, setSession] = useState(true as Session | null)

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })

  //   return () => subscription.unsubscribe()
  // }, [])

  if (session) return <RouterProvider router={router} />
  else return <LoginPage supabase={supabase} />
}
