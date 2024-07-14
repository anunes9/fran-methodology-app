import FranMethodology from "../assets/fran-methodology.png"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { Auth } from "@supabase/auth-ui-react"
import { supabase } from "../services/supabase"
import { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate("/club")
  }, [user])

  return (
    <div className="w-screen">
      <div className="animate-in pt-24 px-4 max-w-md m-auto">
        <img
          alt="fran-methodology"
          src={FranMethodology}
          width={448}
          height={448}
        />

        <Auth
          //@ts-expect-error the type of client is ok
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            style: {
              button: { border: "unset" },
            },
            variables: {
              default: {
                colors: {
                  brand: "#6bb8a4",
                  brandAccent: "#275e53",
                },
              },
            },
          }}
          view="sign_in"
          providers={[]}
          showLinks={false}
        />

        <div className="flex gap-2 mt-8">
          <span>Don't have an account? </span>
          <a href={"/contact"}>
            <span className="text-projectGreen !font-semibold hover:underline hover:cursor-pointer">
              Contact us here.
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
