import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { cx } from 'class-variance-authority'
import { useRouter } from 'next/router'
import { type KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useEvent } from '~/hooks/use-event'

type SearchProps = {
  className?: string
  inputClassName?: string
  expanded?: boolean
}

export const Search: React.FC<SearchProps> = ({
  className,
  inputClassName,
  expanded = false,
}) => {
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
    <div
      className={cx(
        !expanded && 'flex flex-1 items-center justify-end',
        className,
      )}
    >
      {open || expanded ? (
        <input
          ref={input}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleSubmit}
          className={cx(
            'w-full rounded-none border border-black bg-white p-2 leading-none outline-none transition-shadow focus:ring-4 focus:ring-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:focus:ring-gray-700',
            !expanded && 'h-full max-w-xs flex-1 self-stretch text-sm',
            inputClassName,
          )}
          placeholder="Search for recipes..."
        />
      ) : (
        <button
          className="inline-flex appearance-none items-center gap-2 font-semibold underline hover:text-red-600"
          onClick={() => setOpen(!open)}
        >
          <MagnifyingGlassIcon className="h-4 w-4" />
          srch
        </button>
      )}
    </div>
  )
}
