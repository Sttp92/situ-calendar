import DayCard from "./DayCard"

export default function Calendar({ professionalAgenda }) {
  const agendaInfo = professionalAgenda.map(
    ({ id, day, date }) => ({ id, day, date})
  )
  const uniqueAgendaInfo = agendaInfo.filter((obj, index) => {
    return index === agendaInfo.findIndex(o => obj.date === o.date);
  });
  const timeInfo = professionalAgenda.map(
    ({ date, id, start_time, end_time }) => ({ date, id, start_time, end_time})
  )
  const availabilityInfo = uniqueAgendaInfo.map((unique) => {
    const times = timeInfo.filter((time) => time.date === unique.date)
    const timesOnly = times.map(({ date, ...rest }) => rest)
    return {...unique, agenda: timesOnly}
  })
  return (
    <main className="flex center">
        {availabilityInfo.map((availability) => (
            <DayCard
                key={availability.id}
                day={availability.day}
                date={availability.date}
                id={availability.id}
                availabilityInfo={availability.agenda}
            />
        ))}
    </main>
  )
}
