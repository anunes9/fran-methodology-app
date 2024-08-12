import { IconChevronLeft } from "@tabler/icons-react"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import FranMethodology from "../../assets/fran-methodology.png"
import { useState } from "react"

export const ForgotPasswordPage = () => {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const { session, requestResetPassword } = useAuth()
  const navigate = useNavigate()

  if (session) navigate("/club")

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()

    // @ts-expect-error email exists on target
    const email = e.target.email.value

    if (email) {
      const error = await requestResetPassword(email)

      if (error) setError(error)
      else setSuccess(true)
    } else setError("Email is required")
  }

  return (
    <div className="w-screen">
      <div className="flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 m-auto">
        <a
          href="/"
          className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
          <IconChevronLeft height={18} />
          Back
        </a>

        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground pt-12 sm:pt-24"
          onSubmit={handleResetPassword}
        >
          <img
            alt="fran-methodology"
            src={FranMethodology}
            width={448}
            height={448}
          />

          {success ? (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              Password reset email sent. Check your inbox.
            </p>
          ) : (
            <>
              <label className="text-md" htmlFor="email">
                Email
              </label>

              <input
                disabled={success}
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                placeholder="you@example.com"
                required
              />

              <button
                className="bg-green-300 rounded-md px-4 py-2 text-foreground mb-2"
                disabled={success}
              >
                Recover Password
              </button>
            </>
          )}

          {error && (
            <p className="mt-4 p-4 bg-foreground/10 text-error text-center">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
