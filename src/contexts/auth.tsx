import { Session, User } from "@supabase/supabase-js"
import { createContext, useState, useEffect, ReactNode } from "react"
import { supabase } from "../services/supabase"
import { useTranslation } from "react-i18next"

type UserDataType = {
  club_id: string
  id: string
  name: string
  subscription_pack: string
  avatar_url: string
  club_name: string
}

interface AuthContextType {
  session: Session | null
  user: User | null
  userData: UserDataType | null
  language: string
  signOut: () => void
  updateUser: ({ name }: { name: string }) => Promise<void>
  requestResetPassword: (email: string) => Promise<string | null>
  updatePassword: (password: string) => Promise<string | null>
}

export const AuthContext = createContext<AuthContextType>(null!)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [userData, setUserData] = useState<UserDataType | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const { i18n } = useTranslation()

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setUser(session?.user || null)
        getUser()
        setLoading(false)
      }
    )
    return () => {
      listener?.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    const lang = window?.localStorage.getItem("lang") || "pt"
    i18n.changeLanguage(lang)
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

  const requestResetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email)

    if (error) return "Something went wrong. Please try again."
    return null
  }

  const updatePassword = async (password: string) => {
    try {
      await supabase.auth.updateUser({ password })

      return null
    } catch (error) {
      return "Something went wrong. Please try again."
    }
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        signOut,
        userData,
        language: i18n.language,
        updateUser,
        requestResetPassword,
        updatePassword,
      }}
    >
      {!loading ? children : `<div>Loading...</div>`}
    </AuthContext.Provider>
  )
}

export default AuthProvider
