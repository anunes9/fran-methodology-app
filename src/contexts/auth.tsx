import { Session, User } from "@supabase/supabase-js"
import { createContext, useState, useEffect, ReactNode } from "react"
import { supabase } from "../services/supabase"

interface AuthContextType {
  session: Session | null
  user: User | null
  // user?: {
  //   club_id: string
  //   id: string
  //   name: string
  // }
  club?: {
    name: string
  }
  // getClub: () => void
  // getUser: () => void
  signOut: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log("session onAuthStateChange: ", session)
        setSession(session)
        setUser(session?.user || null)
        setLoading(false)
      }
    )
    return () => {
      listener?.subscription.unsubscribe()
    }
  }, [])

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    console.log("error: ", error)
    if (!error) {
      setUser(null)
      setSession(null)
    }
    return { error }
  }

  // const getUser = () => {
  //   supabase
  //     .from("users_app")
  //     .select()
  //     .single()
  //     .then(({ data }) => {
  //       console.log(data)

  //       setUser(data)
  //     })
  // }

  // const getClub = () => {
  //   supabase
  //     .from("clubs_app")
  //     .select()
  //     .single()
  //     .then(({ data }) => {
  //       setClub(data)
  //     })
  // }

  return (
    <AuthContext.Provider
      value={{ session, user, signOut, club: { name: "club" } }}
    >
      {!loading ? children : `<div>Loading...</div>`}
    </AuthContext.Provider>
  )
}

export default AuthProvider
