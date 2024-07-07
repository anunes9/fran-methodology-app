import { Session, SupabaseClient, User } from "@supabase/supabase-js"
import React, { useState, useEffect, useContext, createContext } from "react"

interface AuthContextType {
  session: Session | null
  user: User | undefined
}

const AuthContext = createContext<AuthContextType>(null!)

export function AuthProvider({
  children,
  supabase,
}: {
  children: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, "public", any>
}) {
  const [userSession, setSession] = useState(null as Session | null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log("data", data.session)
      setSession(data.session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        session: userSession,
        user: userSession?.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
