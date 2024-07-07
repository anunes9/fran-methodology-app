import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
  import.meta.env.VITE_CLIENT,
  import.meta.env.VITE_SECRET
)
