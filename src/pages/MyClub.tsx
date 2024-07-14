import { SectionHeader } from "../components/SectionHeader"
import { useAuth } from "../hooks/useAuth"
import MyClubLogo from "../assets/my-club.png"

export const MyClubPage = () => {
  const { club } = useAuth()

  return (
    <>
      <SectionHeader title={club?.name} description="My Club" />

      <img src={MyClubLogo} alt="logo" />
    </>
  )
}
