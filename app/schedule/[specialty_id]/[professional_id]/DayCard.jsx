import AppointmentCard from "./AppointmentCard";

export default function DayCard({ day, date, id, availabilityInfo }) {
  return (
    <div className="day-card">
        <h3>{day}</h3>
        <p>{date}</p>
        {availabilityInfo.map((availability) => (
            <AppointmentCard key={id} agenda={availability} />
        ))}
    </div>
  )
}
