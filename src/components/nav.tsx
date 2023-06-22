import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const links = [
  { href: '/', label: 'breakfast', text: 'brkfst' },
  { href: '/', label: 'lunch', text: 'lnch' },
  { href: '/', label: 'dinner', text: 'dnnr' },
  { href: '/', label: 'snacks', text: 'snks' },
  { href: '/', label: 'vegan', text: 'vgn' },
  { href: '/', label: 'drinks', text: 'drnks' },
]

export const Nav = () => (
  <nav className="flex flex-wrap items-center gap-4">
    <Link
      href="/"
      className="print-exact bg-black px-2 py-1 text-white hover:bg-red-600"
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

    <div className="flex flex-1 flex-wrap items-center justify-end gap-4">
      <button className="inline-flex appearance-none items-center gap-2 font-semibold underline hover:text-red-600">
        <MagnifyingGlassIcon className="h-4 w-4" />
        srch
      </button>
    </div>
  </nav>
)
