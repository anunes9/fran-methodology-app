import AN_LOGO from "../assets/an-logo-color.svg"

const PRIVACY_POLICY_URL = "https://www.franpadelproject.com/privacy-policy"
const TERMS_OF_SERVICE_URL = "https://www.franpadelproject.com/terms-of-service"

export const Footer = () => (
  <footer className="text-foreground/50 text-xs flex justify-center items-center gap-4 mt-12">
    <a
      href={PRIVACY_POLICY_URL}
      className="hover:underline"
      target="_blank"
      rel="noreferrer"
    >
      Privacy Policy
    </a>

    <a
      href={TERMS_OF_SERVICE_URL}
      className="hover:underline"
      target="_blank"
      rel="noreferrer"
    >
      Terms of Service
    </a>

    <div className="flex items-center">
      <a href="https://anunes9.github.io/me/" target="_blank" rel="noreferrer">
        <img alt="an-logo" src={AN_LOGO} height={48} width={48} />
      </a>

      <span>&copy; {new Date().getFullYear()} All rights reserved</span>
    </div>
  </footer>
)
