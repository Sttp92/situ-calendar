import Link from 'next/link'

async function getSpecialties() {
    const res = await fetch("http://localhost:4000/specialties");
    return res.json();
}

export default async function SpecialtyList() {
  const specialties = await getSpecialties()
  return (
    <>
        {specialties.map((specialty) => (
            <div key={specialty.id} className="card my-5">
                <Link href={`/schedule/${specialty.id}`}>
                    <h3>{specialty.name}</h3>
                </Link>
            </div>
        ))}
        {specialties.length === 0 && (
            <p className="text-center">No hay especialidades disponibles.</p>
        )}
    </>
  )
}
