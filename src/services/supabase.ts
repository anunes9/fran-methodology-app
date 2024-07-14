import { createClient } from "@supabase/supabase-js"

const options = {
  db: {
    schema: "public",
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
}

export const supabase = createClient(
  import.meta.env.VITE_CLIENT,
  import.meta.env.VITE_SECRET,
  options
)
