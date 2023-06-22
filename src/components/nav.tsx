import Link from 'next/link'
import { Search } from './search'

const links = [
  { href: '/breakfast', label: 'breakfast', text: 'brkfst' },
  { href: '/lunch', label: 'lunch', text: 'lnch' },
  { href: '/dinner', label: 'dinner', text: 'dnnr' },
  { href: '/snacks', label: 'snacks', text: 'snks' },
  { href: '/vegan', label: 'vegan', text: 'vgn' },
  { href: '/drinks', label: 'drinks', text: 'drnks' },
]

export const Nav = () => (
  <nav className="flex flex-wrap items-stretch gap-4">
    <Link
      href="/"
      className="print-exact bg-black p-2 leading-none text-white hover:bg-red-600"
    >
      rcps
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
      <Search />
    </div>
  </nav>
)
