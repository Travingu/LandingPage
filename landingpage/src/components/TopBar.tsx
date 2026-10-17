import type { ReactNode } from 'react'
import { destinations } from '../data/site'

/** Monogram on the left, `center` (the sky timeline) in the middle, site nav on the right. */
export default function TopBar({ center }: { center: ReactNode }) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30 pt-4 sm:pt-6">
      {/* Fades content out as it scrolls under the bar. It starts at `night`, the color at the top
          of the sky, so over the sky itself it only reads as a slightly darker band. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -bottom-8 -z-10 bg-linear-to-b from-night via-night/80 to-transparent" />
      <div className="mx-auto grid max-w-5xl grid-cols-[auto_1fr] px-4 sm:px-8 items-center gap-x-4 gap-y-2 md:grid-cols-[1fr_auto_1fr]">
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        aria-label="Travis Nguyen — back to top"
        className="pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-ink/15 bg-paper font-display text-lg font-medium text-ink shadow-card transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
      >
        TN
      </a>

      {/* Below the bar on small screens, centered between the monogram and nav from md up. */}
      <div className="col-span-2 row-start-2 justify-self-center md:col-span-1 md:col-start-2 md:row-start-1">
        {center}
      </div>

      <nav aria-label="Destinations" className="pointer-events-auto justify-self-end">
        <ul className="flex h-10 items-center gap-4 rounded-md border border-ink/15 bg-paper px-4 text-sm font-medium shadow-card">
          {destinations.map((dest) => (
            <li key={dest.label}>
              <a
                href={dest.href}
                className="decoration-ember decoration-2 underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
              >
                {dest.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  )
}
