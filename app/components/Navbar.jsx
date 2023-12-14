import Link from 'next/link'
import Image from 'next/image'
import Logo from './situ-logo.png'

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <Image
          src={Logo}
          alt='Situ Care'
          width={130}
          quality={100}
        />
      </Link>
      <Link href="/schedule">Agendar</Link>
    </nav>
  )
}
