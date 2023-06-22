import Link from 'next/link'
import { useRouter } from 'next/router'
import { Search } from './search'

const links = [
  { href: '/breakfast', label: 'breakfast', text: 'brkfst' },
  { href: '/lunch', label: 'lunch', text: 'lnch' },
  { href: '/dinner', label: 'dinner', text: 'dnnr' },
  { href: '/snacks', label: 'snacks', text: 'snks' },
  { href: '/vegan', label: 'vegan', text: 'vgn' },
  { href: '/drinks', label: 'drinks', text: 'drnks' },
]

export const Nav = () => {
  const router = useRouter()
  const path = router.asPath.replace(/\/$/, '')

  return (
    <nav className="flex flex-wrap items-stretch gap-4">
      <Link
        href="/"
        className="print-exact group bg-black p-2 leading-none text-white"
      >
        <span className="group-hover:hidden">r.c.p.s</span>
        <span className="hidden group-hover:inline">recipes</span>
      </Link>

      <div className="hidden flex-wrap items-center gap-4 md:flex">
        {links.map(link => (
          <Link
            key={link.label}
            href={link.href}
            className="font-semibold underline hover:text-red-600"
            title={link.label}
          >
            {link.text}
          </Link>
        ))}
      </div>

      <div className="flex flex-1 flex-wrap items-stretch justify-end gap-4">
        <Search className="print:hidden" />
        <a
          className="hidden self-center text-sm print:block"
          href={`https://rcps.io${path}`}
        >
          rcps.io{path}
        </a>
      </div>
    </nav>
  )
}
