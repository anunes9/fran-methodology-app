import { SectionHeader } from "../components/SectionHeader"
import { useState } from "react"
import { MethodologyBook } from "../lib/methodology"
import { MethodologyTOC } from "../components/MethodologyTOC"

export const MethodologyPage = () => {
  const [active, setActive] = useState(0)

  return (
    <section>
      <SectionHeader
        title="Methodology"
        description="Concepts and Documentation"
      />

      <MethodologyTOC active={active} setActive={setActive} />

      {MethodologyBook[active].sections.map(({ title, content }) => (
        <div key={title} className="mt-8">
          <h2 className="text-2xl font-gtMedium">{title}</h2>
          <p className="mt-4 text-lg font-gtRegular whitespace-pre-wrap">
            {content}
          </p>
        </div>
      ))}
    </section>
  )
}
