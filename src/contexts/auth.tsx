import { Session, User } from "@supabase/supabase-js"
import React, { useState, useEffect, useContext, createContext } from "react"
import { supabase } from "../supabase"

interface AuthContextType {
  session: Session | null
  user: User | undefined
}

const AuthContext = createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userSession, setSession] = useState(null as Session | null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
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
