import { Session } from "@supabase/supabase-js"
import React, { useState, useEffect, useContext, createContext } from "react"
import { supabase } from "../lib/supabase"

interface AuthContextType {
  session: Session | null
  user?: {
    club_id: string
    id: string
    name: string
  }
  club?: {
    name: string
  }
  getClub: () => void
  getUser: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userSession, setSession] = useState(null as Session | null)
  const [user, setUser] = useState(undefined)
  const [club, setClub] = useState(undefined)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      getClub()
      getUser()
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signOut = () => {
    supabase.auth.signOut().then(() => {
      setSession(null)
    })
  }

  const getUser = () => {
    supabase
      .from("users_app")
      .select()
      .single()
      .then(({ data }) => {
        console.log(data)

        setUser(data)
      })
  }

  const getClub = () => {
    supabase
      .from("clubs_app")
      .select()
      .single()
      .then(({ data }) => {
        setClub(data)
      })
  }

  return (
    <AuthContext.Provider
      value={{
        session: userSession,
        user,
        club,
        getClub,
        getUser,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
