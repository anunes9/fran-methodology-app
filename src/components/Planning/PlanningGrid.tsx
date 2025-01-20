import { MesocycleData } from "../../lib/mesocycles"
import { Card, CardBlocked } from "../Card"

export const PlanningGrid = ({
  title,
  data,
  blocked = true,
}: {
  title: string
  data: MesocycleData[]
  blocked?: boolean
}) => (
  <section className="mb-8">
    <h1 className="text-xl md:text-3xl text-projectBlue font-gtExtendedBold underline mb-8">
      {title}
    </h1>

    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {blocked ? (
        <CardBlocked />
      ) : (
        <>
          {data.map(({ slug, title, concept }) => (
            <Card
              key={slug}
              url={`/training/${slug}`}
              title={title}
              icon={null}
              subtitle={concept}
            />
          ))}
        </>
      )}
    </div>
  </section>
)
