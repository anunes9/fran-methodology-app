import { SectionHeader } from "../components/SectionHeader"
import { useAuth } from "../hooks/useAuth"
import MyClubLogo from "../assets/my-club.png"
import { Updates } from "../lib/updates"
import { NewsCard } from "../components/NewsCard"

export const MyClubPage = () => {
  const { clubData } = useAuth()

  return (
    <section>
      <SectionHeader
        title={clubData?.name ?? "My Club"}
        description="My Club"
      />

      <img src={MyClubLogo} alt="logo" />

      <h1 className="text-2xl text-projectBlue font-gtExtendedBold underline mt-12">
        Latest Updates
      </h1>

      <div className="grid grid-cols-1 gap-4 max-w-screen lg:w-3/4 mt-8">
        {Updates.map(({ url, title, icon, description }) => (
          <NewsCard
            href={url}
            key={title}
            icon={icon}
            title={title}
            details={description}
          />
        ))}
      </div>
    </section>
  )
}
