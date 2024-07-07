import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LoginPage } from "./pages/Login"
import { HomePage } from "./pages/Home"
import { MyClubPage } from "./pages/MyClub"
import { AuthProvider, useAuth } from "./contexts/auth"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  import.meta.env.VITE_CLIENT,
  import.meta.env.VITE_SECRET
)

export default function App() {
  // const { session } = useAuth()
  // // const [session, setSession] = useState(null as Session | null)

  // // useEffect(() => {
  // //   supabase.auth.getSession().then(({ data: { session } }) => {
  // //     setSession(session)
  // //   })

  // //   const {
  // //     data: { subscription },
  // //   } = supabase.auth.onAuthStateChange((_event, session) => {
  // //     setSession(session)
  // //   })

  // //   return () => subscription.unsubscribe()
  // // }, [])

  // if (session) return <RouterProvider router={router} />
  // else return <LoginPage supabase={supabase} />

  return (
    <AuthProvider supabase={supabase}>
      <Main />
    </AuthProvider>
  )
}

const Main = () => {
  const { session } = useAuth()

  if (session) return <RouterProvider router={router} />
  else return <LoginPage supabase={supabase} />
}

const router = createBrowserRouter([
  { path: "/", element: <HomePage supabase={supabase} /> },
  { path: "/club", element: <MyClubPage /> },
])
