import { destinations } from '../data/site'

/** Links out, set straight on the sky (not on cards) as large serif rows. */
export default function Destinations() {
  return (
    <section aria-labelledby="destinations-title" className="flex flex-col gap-8">
      <h2 id="destinations-title" className="font-display text-5xl font-medium text-paper">
        Elsewhere on travingn.dev
      </h2>

      <ul className="flex flex-col border-t border-paper/15">
        {destinations.map((dest) => (
          <li key={dest.label} className="border-b border-paper/15">
            <a
              href={dest.href}
              className="group flex flex-col gap-2 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-display text-5xl font-medium text-paper decoration-ember decoration-2 underline-offset-8 group-hover:underline">
                  {dest.label}
                </span>
                <span
                  aria-hidden="true"
                  className="text-2xl text-ember transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
              <span className="text-base leading-7 text-paper sm:text-right">{dest.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
