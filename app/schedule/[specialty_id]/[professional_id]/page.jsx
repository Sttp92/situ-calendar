import Calendar from "./Calendar"

async function getProfessionalAvailability(professionalID) {
  const res = await fetch("http://localhost:4000/availability")
  const availabilityList = await res.json()
  return availabilityList.filter(
    (availability) => (professionalID === availability.professional_rut && availability.status === "active")
  )
}

async function getShifts(idList) {
  const query = idList.reduce((query, id) => `${query}&id=${id}`, "?")
  const res = await fetch(`http://localhost:4000/shifts${query}`)
  return res.json()
}

async function getSpecialty(id) {
  const res = await fetch(`http://localhost:4000/specialties/${id}`)
  return res.json()
}

async function getProfessionalInfo(professionalID) {
  
  const res = await fetch(`http://localhost:4000/professionals/${professionalID}`);
  return res.json()
}

export default async function Availability({ params }) {
  const professionalAvailability = await getProfessionalAvailability(params.professional_id)
  const profesionalInfo = await getProfessionalInfo(params.professional_id)
  const specialty = await getSpecialty(params.specialty_id)
  const professionalShiftIds = professionalAvailability.map(({shift_id}) => shift_id)
  const shifts = await getShifts(professionalShiftIds)
  const updatedShifts = shifts.map(
    ({ id: shift_id, day, start_time, end_time }) => ({shift_id, day, start_time, end_time}));
  const professionalAgenda = professionalAvailability.map((availability) => {
    const shift = updatedShifts.find(({shift_id}) => shift_id === availability.shift_id)
    return {...availability, ...shift}
  })
  return (
    <main>
      <h1>Selecciona una hora</h1>
      <p>Encuentra la hora que más te acomode.</p>
      <br/>
      <div>
        <p>{profesionalInfo.name} {profesionalInfo.last_name}</p>
        <p>{specialty.name}</p>
      </div>
      <div></div>
      <Calendar professionalAgenda={professionalAgenda}/>
      {professionalAvailability.length === 0 && (
        <main>
            <p className="text-center">No hay horas disponibles con este profesional.</p>
        </main>
      )}
    </main>
  )
}

