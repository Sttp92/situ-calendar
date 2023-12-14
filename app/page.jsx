import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className='text-center'>¡Agenda con nosotros!</h1>
      <p className='text-center'>
        En situ contamos con profesionales capacitados para brindarte la mejor atención.
        Consulta ahora por las horas disponibles.
      </p>
      <div className="flex justify-center my-8">
        <Link href="/schedule">
          <button className="btn-primary">Agenda tu hora</button>
        </Link>
      </div>
    </main>
  )
}
