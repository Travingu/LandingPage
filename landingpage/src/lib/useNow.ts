import { useEffect, useState } from 'react'

/** The current time, refreshed every `intervalMs`. The sky turns ~0.25° a minute. */
export function useNow(intervalMs = 60_000) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), intervalMs)
    return () => window.clearInterval(id)
  }, [intervalMs])
  return now
}
