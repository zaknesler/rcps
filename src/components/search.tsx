import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { cx } from 'class-variance-authority'
import { useRouter } from 'next/router'
import { type KeyboardEvent, useEffect, useRef, useState } from 'react'

export const Search = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const input = useRef<HTMLInputElement>(null)

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
    <div className="relative flex items-center">
      {open ? (
        <input
          ref={input}
          type="text"
          onKeyDown={handleSubmit}
          className={cx(
            'absolute right-0 h-full w-64 rounded-none border border-black p-2 text-sm outline-none transition-[box-shadow,width] focus:ring-4 focus:ring-gray-300',
          )}
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
