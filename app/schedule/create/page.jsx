import CreateAppointment from "./CreateAppointment";
import { handleDateFormat } from "../../functions/dates"

async function getAvailability(availabilityID) {
    const res = await fetch(`http://localhost:4000/availability/${availabilityID}`)
    return res.json()
}

async function getProfessionalInfo(professionalID) {
    const res = await fetch(`http://localhost:4000/professionals/${professionalID}`)
    return res.json()
}

async function getSpecialty(specialtyID) {
    const res = await fetch(`http://localhost:4000/specialties/${specialtyID}`)
    return res.json()
}

async function getPatientInfo(patientID) {
    const res = await fetch(`http://localhost:4000/patients/${patientID}`)
    return res.json()
}

const patientID = process.env.NEXT_PUBLIC_LOGGED_USER_ID

export default async function NewAppointment({ searchParams }) {
  const availabilityInfo = await getAvailability(searchParams.agendaID)
  const profesionalInfo = await getProfessionalInfo(availabilityInfo.professional_rut)
  const specialtyInfo = await getSpecialty(profesionalInfo.specialty_id)
  const patientInfo = await getPatientInfo(patientID)

  const appointmentDateTemp = availabilityInfo.date
  const appointmentDate = handleDateFormat(appointmentDateTemp)
  
  return (
    <main>
        <CreateAppointment
            professional={profesionalInfo}
            specialty={specialtyInfo}
            appointmentDate={appointmentDate}
            startTime={searchParams.startTime}
            patientInfo={patientInfo}
        />
    </main>
  )
}
