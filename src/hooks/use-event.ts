import { useEffect } from 'react'

export const useEvent = <T extends keyof WindowEventMap>(
  event: T,
  handler: (this: Window, ev: WindowEventMap[T]) => any,
  options?: boolean | AddEventListenerOptions,
) => {
  useEffect(() => {
    window.addEventListener(event, handler, options)
    return () => window.removeEventListener(event, handler)
  }, [event, handler, options])
}
