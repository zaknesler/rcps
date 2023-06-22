import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { cx } from 'class-variance-authority'
import { useRouter } from 'next/router'
import { type KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useEvent } from '~/hooks/use-event'

type SearchProps = {
  className?: string
}

export const Search: React.FC<SearchProps> = ({ className }) => {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const input = useRef<HTMLInputElement>(null)

  useEvent('keydown', e => {
    const isSlash = e.key == '/'
    const isMetaK = e.metaKey && e.key === 'k'
    const isCtrlK = e.ctrlKey && e.key === 'k'

    if (!isSlash && !isMetaK && !isCtrlK) return

    e.preventDefault()

    if (open) input.current?.focus()
    else {
      setOpen(true)
      setQuery('')
    }
  })

  useEffect(() => {
    const handler = () => {
      setOpen(false)
      setQuery('')
    }

    router.events.on('routeChangeComplete', handler)
    return () => router.events.off('routeChangeComplete', handler)
  }, [router])

  useEffect(() => {
    if (!open) return
    input.current?.focus()
  }, [open])

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return
    setOpen(false)
    router.push(`/search?q=${input.current?.value}`)
  }

  return (
    <div className={cx('relative flex items-center', className)}>
      {open ? (
        <input
          ref={input}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleSubmit}
          className={cx(
            'absolute right-0 h-full w-64 rounded-none border border-black p-2 text-sm outline-none transition-[box-shadow,width] focus:ring-4 focus:ring-gray-300',
          )}
          placeholder="Search for recipes..."
        />
      ) : (
        <button
          className="absolute right-0 inline-flex appearance-none items-center gap-2 font-semibold underline hover:text-red-600"
          onClick={() => setOpen(!open)}
        >
          <MagnifyingGlassIcon className="h-4 w-4" />
          srch
        </button>
      )}
    </div>
  )
}
