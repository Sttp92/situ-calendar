import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3xl'>Hubo un problema.</h2>
        <p>No podemos encontrar la página que solicitaste.</p>
        <p>Vuelve al <Link href="/">Inicio</Link></p>
    </main>
  )
}
