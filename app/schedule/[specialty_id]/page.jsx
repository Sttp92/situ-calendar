import Link from 'next/link'

async function getSpecialty(id) {
    const res = await fetch(`http://localhost:4000/specialties/${id}`)
    return res.json()
}

async function getUserWithSelectedSpecialty(specialtyId) {
  
    const res = await fetch("http://localhost:4000/professionals");
    const professionals = await res.json()
    return professionals.filter((professional) => (specialtyId === professional.specialty_id))
}

export default async function SpecialtyAvailability({ params }) {
  const professionals = await getUserWithSelectedSpecialty(params.specialty_id)
  const specialty = await getSpecialty(params.specialty_id)
  return (
    <main className="w-1/2">
        <h1 className='text-center'>Selecciona un profesional</h1>
        <p className='text-center'>
            Aquí puedes encontrar la disponibilidad de todos los profesionales
            de la especialidad elegida.
        </p>
        {professionals.map((professional) => (
            <div key={professional.id} className="card">
                <Link href={`/schedule/${params.specialty_id}/${professional.id}`}>
                    <h3>{professional.name} {professional.last_name}</h3>
                    <p>{specialty.name}</p>
                </Link>
            </div>
        ))}
        {professionals.length === 0 && (
            <main>
                <p className="text-center">No hay profesionales disponibles en esta especialidad.</p>
            </main>
        )}
    </main>
  )
}
