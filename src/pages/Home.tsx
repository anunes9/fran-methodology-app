import { SupabaseClient } from "@supabase/supabase-js"

export const HomePage = ({
  supabase,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, "public", any>
}) => {
  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div>
      <h1>Logged in!</h1>

      <button onClick={signOut}>Sign out</button>
    </div>
  )
}
