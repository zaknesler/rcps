import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuIcon from '../icons/menu.svg'
import XIcon from '../icons/x.svg'
import { Search } from './search'

const links = [
  { href: '/breakfast', label: 'breakfast', text: 'brkfst' },
  { href: '/lunch', label: 'lunch', text: 'lnch' },
  { href: '/dinner', label: 'dinner', text: 'dnnr' },
  { href: '/snacks', label: 'snacks', text: 'snks' },
  { href: '/dessert', label: 'dessert', text: 'dssrt' },
  { href: '/vegan', label: 'vegan', text: 'vgn' },
  { href: '/drinks', label: 'drinks', text: 'drnks' },
]

type NavProps = {
  open: boolean
  onToggle: () => void
}

export const Nav: React.FC<NavProps> = ({ open, onToggle }) => {
  const router = useRouter()
  const path = router.asPath
    .replace(/\/$/, '')
    .replace(/\?.*$/, '')
    .replace(/\#.*$/, '')

  return (
    <>
      <nav className="flex flex-wrap items-stretch gap-4">
        <Link
          href="/"
          className="print-exact group bg-black px-3 py-2 leading-snug text-white"
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
          <button
            className="flex items-center justify-center self-center p-1.5 transition-colors hover:bg-gray-100 print:hidden md:hidden"
            onClick={onToggle}
          >
            {open ? (
              <XIcon className="h-6 w-6 text-current" />
            ) : (
              <MenuIcon className="h-6 w-6 text-current" />
            )}
          </button>

          <Search className="hidden print:hidden md:flex" />

          <a
            className="hidden self-center text-sm print:block"
            href={`https://rcps.io${path}`}
          >
            rcps.io{path}
          </a>
        </div>
      </nav>

      {open && (
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto text-center text-lg font-semibold">
            {links.map(link => (
              <Link
                key={link.label}
                href={link.href}
                title={link.label}
                className="p-3 hover:bg-gray-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Search expanded className="flex print:hidden" inputClassName="p-3" />
        </div>
      )}
    </>
  )
}
