import { SectionHeader } from "../components/SectionHeader"
import { useAuth } from "../contexts/auth"
import { Layout } from "../layout/Layout"
import MyClubLogo from "../assets/my-club.png"

export const MyClubPage = () => {
  const { club } = useAuth()

  return (
    <Layout>
      <SectionHeader title={club?.name} description="My Club" />

      <img src={MyClubLogo} alt="logo" />
    </Layout>
  )
}
