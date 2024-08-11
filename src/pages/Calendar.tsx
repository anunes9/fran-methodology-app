import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { useState } from "react"
import { SectionHeader } from "../components/SectionHeader"

const daysOfWeek = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"]
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

export const CalendarPage = () => {
  const [currentMonth, setMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const firstDayOfMonthShifted =
    firstDayOfMonth - 1 < 0 ? 6 : firstDayOfMonth - 1
  const fillDays =
    daysInMonth + firstDayOfMonthShifted > 35
      ? 42 - (daysInMonth + firstDayOfMonthShifted)
      : 35 - (daysInMonth + firstDayOfMonthShifted)

  const calendarDays = new Array(daysInMonth).fill(null).map((_, i) => i + 1)

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1)
      setMonth(11)
    } else {
      setMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1)
      setMonth(0)
    } else {
      setMonth(currentMonth + 1)
    }
  }

  return (
    <section>
      <SectionHeader
        title="Annual Planning of lessons"
        description="Based on Mesocycles and Methodology"
      />

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="border rounded-md p-1 hover:bg-foreground/10 cursor-pointer">
            <IconChevronLeft
              width={24}
              height={24}
              onClick={handlePreviousMonth}
            />
          </div>

          <h1 className="text-xl font-gtRegular text-center w-40">
            {months[currentMonth]} {currentYear}
          </h1>

          <div className="border rounded-md p-1 hover:bg-foreground/10 cursor-pointer">
            <IconChevronRight
              width={24}
              height={24}
              onClick={handleNextMonth}
            />
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center font-bold">
              {day}
            </div>
          ))}

          {Array(firstDayOfMonthShifted)
            .fill(null)
            .map((_, index) => (
              <div className="bg-slate-200" key={index} />
            ))}

          {calendarDays.map((day) => (
            <DayCard key={day} day={day} />
          ))}

          {Array(fillDays)
            .fill(null)
            .map((_, index) => (
              <div className="bg-slate-200" key={index} />
            ))}
        </div>
      </div>
    </section>
  )
}

const DayCard = ({ day }: { day: number }) => (
  <div className="text-center border w-28 h-28 flex flex-col">
    <p className="border-b font-gtMedium bg-slate-100">{day}</p>

    <div className="flex-1 flex justify-center items-center">
      <p>Meso {day % 28}</p>
    </div>
  </div>
)
