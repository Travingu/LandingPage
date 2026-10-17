import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NightSky from './components/NightSky'

/**
 * The link-preview image (see og.html): the hero over the real sky, at a fixed date so the image
 * doesn't change between regenerations. October at 9 pm shows Pegasus, Aquila and Cetus.
 */
const SKY_DATE = new Date('2026-10-17T21:00:00-07:00')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NightSky now={SKY_DATE} />
    <main className="mx-auto flex h-svh w-full max-w-5xl flex-col justify-center gap-4 px-4 sm:px-8">
      <h1 className="font-display text-8xl font-medium text-paper">Travis Nguyen</h1>
      <p className="max-w-xl text-lg leading-8 text-paper/80">
        Electrical and Computer Engineering student at the University of Washington, focused on
        embedded systems and digital design.
      </p>
      <p className="mt-4 flex items-center gap-4 text-sm font-medium text-paper">
        <span aria-hidden="true" className="h-px w-8 bg-ember" />
        travingn.dev
      </p>
    </main>
  </StrictMode>,
)
