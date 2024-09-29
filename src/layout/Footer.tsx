import AN_LOGO from "../assets/an-logo-color.svg"
import FR_LOGO from "../assets/fr-logo.svg"

export const Footer = () => (
  <footer className="flex flex-col justify-center items-center gap-2">
    <div className="flex justify-center items-center gap-4">
      <a href="https://anunes9.github.io/me/" target="_blank" rel="noreferrer">
        <img alt="fran-logo" src={FR_LOGO} height={36} width={36} />
      </a>

      <a href="https://anunes9.github.io/me/" target="_blank" rel="noreferrer">
        <img alt="an-logo" src={AN_LOGO} height={48} width={48} />
      </a>
    </div>

    <span className="text-foreground/50 text-xs">
      &copy; {new Date().getFullYear()} All rights reserved
    </span>
  </footer>
)
