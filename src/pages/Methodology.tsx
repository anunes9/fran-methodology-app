import { SectionHeader } from "../components/SectionHeader"
import { useState } from "react"
import { MethodologyBook } from "../lib/methodology"
import { MethodologyTOC } from "../components/MethodologyTOC"
import { useTranslation } from "react-i18next"

export const MethodologyPage = () => {
  const [active, setActive] = useState(0)
  const { t } = useTranslation()

  return (
    <section>
      <SectionHeader
        title={t("methodology.methodology")}
        description={t("methodology.conceptsAndDocumentation")}
      />

      <MethodologyTOC active={active} setActive={setActive} />

      {MethodologyBook[active].sections.map(({ title, content }) => (
        <div key={title} className="mt-4">
          <h2 className="text-2xl font-gtMedium">{title}</h2>
          <p className="mt-4 text-lg font-gtRegular whitespace-pre-wrap">
            {content}
          </p>
        </div>
      ))}
    </section>
  )
}
