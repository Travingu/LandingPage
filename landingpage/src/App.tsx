import { useDeferredValue, useState } from 'react'
import About from './components/About'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import NightSky from './components/NightSky'
import Reveal from './components/Reveal'
import Skills from './components/Skills'
import SkyTimeline from './components/SkyTimeline'
import TopBar from './components/TopBar'
import { useNow } from './lib/useNow'

function App() {
  const now = useNow()
  // Minutes from now picked on the top bar's timeline. The sky redraws from a deferred copy so the
  // slider stays responsive while it is dragged.
  const [offset, setOffset] = useState(0)
  const skyOffset = useDeferredValue(offset)
  const skyTime = new Date(now.getTime() + skyOffset * 60_000)

  return (
    <>
      <NightSky now={skyTime} />
      <TopBar center={<SkyTimeline now={now} offset={offset} onOffsetChange={setOffset} />} />
      <main id="top" className="mx-auto w-full max-w-5xl px-4 sm:px-8">
        <Hero />
        <Reveal className="pb-16 sm:pb-24">
          <div id="about" className="scroll-mt-24">
            <About className="max-w-2xl" />
          </div>
        </Reveal>
        <Reveal className="pb-16 sm:pb-24">
          <Highlights />
        </Reveal>
        <Reveal className="pb-16 sm:pb-24">
          <Skills />
        </Reveal>
        <Reveal className="pb-24 sm:pb-32">
          <Destinations />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App
