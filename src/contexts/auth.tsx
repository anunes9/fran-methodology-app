import { Session, User } from "@supabase/supabase-js"
import { createContext, useState, useEffect, ReactNode } from "react"
import { supabase } from "../services/supabase"

type UserDataType = {
  club_id: string
  id: string
  name: string
}

type ClubDataType = {
  name: string
}

interface AuthContextType {
  session: Session | null
  user: User | null
  userData: UserDataType | null
  clubData: ClubDataType | null
  signOut: () => void
  updateUser: ({ name }: { name: string }) => Promise<void>
}

export const AuthContext = createContext<AuthContextType>(null!)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [userData, setUserData] = useState<UserDataType | null>(null)
  const [clubData, setClubData] = useState<ClubDataType | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log("session onAuthStateChange: ", session)
        setSession(session)
        setUser(session?.user || null)
        getUser()
        getClub()
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

  const getUser = () => {
    supabase
      .from("users_app")
      .select()
      .single()
      .then(({ data }) => setUserData(data))
  }

  const updateUser = async ({ name }: { name: string }) => {
    const { data, error } = await supabase
      .from("users_app")
      .update({
        name: name,
      })
      .eq("id", session?.user?.id)
      .select()

    if (error) console.log("error", error)
    if (data) setUserData(data[0])
  }

  const getClub = () => {
    supabase
      .from("clubs_app")
      .select()
      .single()
      .then(({ data }) => setClubData(data))
  }

  return (
    <AuthContext.Provider
      value={{ session, user, signOut, clubData, userData, updateUser }}
    >
      {!loading ? children : `<div>Loading...</div>`}
    </AuthContext.Provider>
  )
}

export default AuthProvider
