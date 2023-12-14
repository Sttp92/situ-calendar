import Link from 'next/link'
import { startTransition } from 'react'

export default function AppointmentCard({ agenda }) {
  return (
    <Link
      href={{
        pathname: '/schedule/create',
        query: {
          agendaID: agenda.id,
          startTime: agenda.start_time
        }
    }}>
      <div className="appointment-card">
          <div>{agenda.start_time} - {agenda.end_time}</div>
      </div>
    </Link>
  )
}
