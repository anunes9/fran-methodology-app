import { SupabaseClient } from "@supabase/supabase-js"
import { useNavigate } from "react-router-dom"

export const HomePage = ({
  supabase,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, "public", any>
}) => {
  const signOut = async () => {
    await supabase.auth.signOut()
  }

  const navigate = useNavigate()

  return (
    <div>
      <h1>Logged in!</h1>

      <button onClick={() => navigate("/club")}>Navigate to myclub</button>

      <button onClick={signOut}>Sign out</button>
    </div>
  )
}
