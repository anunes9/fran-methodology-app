import { IconLockAccess } from "@tabler/icons-react"
import { ReactNode } from "react"

export const Card = ({
  url,
  title,
  subtitle,
  icon,
  variant = "default",
}: {
  url: string
  title: string
  subtitle?: string
  icon?: ReactNode
  variant?: "default" | "white"
}) => (
  <a
    href={url}
    key={title}
    className="hover:opacity-75 hover:cursor-pointer rounded-xl shadow-md p-8 min-h-[12rem] bg-gradient-to-b from-[#04142D] from-10% to-[#408D7A] flex flex-col gap-4 items-center justify-center"
  >
    <span
      className={
        variant === "default"
          ? "font-gtExtendedBold text-projectGreen"
          : "font-gtExtendedBold underline text-white"
      }
    >
      {title}
    </span>

    {icon}

    {subtitle && (
      <span className="text-center font-gtMedium text-white">{subtitle}</span>
    )}
  </a>
)

export const CardBlocked = () => (
  <div className="hover:opacity-75 hover:cursor-pointer rounded-xl shadow-md p-8 min-h-[12rem] bg-gradient-to-b from-[#04142D] from-10% to-[#408D7A] flex flex-col gap-4 items-center justify-center">
    <IconLockAccess height={24} width={24} className="text-white" />
    <span className="text-center font-gtMedium text-white">
      Bloqueado por subscrição
    </span>
  </div>
)
