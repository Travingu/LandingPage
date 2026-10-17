import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { projectSky } from '../lib/sky'

/** Soft banks of light, the only blurred layer: [left %, top %, width %, height %, opacity]. */
const HAZE = [
  [58, 6, 70, 26, 0.12],
  [-10, 30, 60, 22, 0.09],
  [62, 52, 50, 20, 0.1],
  [10, 74, 80, 18, 0.14],
] as const

/** Stars at least this bright twinkle; fainter ones are drawn once in a static SVG. */
const TWINKLE_MAG = 2

const radius = (mag: number) => Math.min(2.6, Math.max(0.5, 1.9 - 0.32 * mag))
const brightness = (mag: number) => Math.min(1, Math.max(0.3, 1 - (mag - 1) * 0.14))

/**
 * Fixed backdrop: the real sky over Seattle at `now`, looking south, with constellation
 * lines. Static apart from the CSS twinkle on the brightest stars, so scrolling is free.
 */
export default function NightSky({ now }: { now: Date }) {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const el = ref.current!
    const observer = new ResizeObserver(() => {
      const w = el.clientWidth
      const h = el.clientHeight
      // Mobile browsers resize the viewport as the URL bar shows and hides; ignore that.
      setSize((prev) => (prev.w === w && Math.abs(prev.h - h) < 120 ? prev : { w, h }))
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const sky = useMemo(() => {
    if (!size.w) return null
    const frame = projectSky(now, size.w, size.h)
    // Keep constellation names out from behind the hero text block, which sits in the
    // left part of the centered content column (see App and Hero).
    const columnLeft = Math.max(16, (size.w - 1024) / 2 + 32)
    const behindHero = (x: number, y: number) =>
      x > columnLeft - 48 && x < columnLeft + 640 && y > size.h * 0.15 && y < size.h * 0.85
    return { ...frame, labels: frame.labels.filter((l) => !behindHero(l.x, l.y)) }
  }, [now, size.w, size.h])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0f1a2e 0%, #1b2a47 45%, #3a4d6e 82%, #6b7a8f 100%)',
      }}
    >
      {HAZE.map(([left, top, width, height, opacity], i) => (
        <div
          key={i}
          className="absolute rounded-full bg-paper blur-3xl"
          style={{ left: `${left}%`, top: `${top}%`, width: `${width}%`, height: `${height}%`, opacity }}
        />
      ))}

      {sky && (
        <svg
          className="absolute inset-0"
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
        >
          <g fill="none" stroke="rgb(244 240 230 / 0.16)" strokeWidth={1} strokeLinejoin="round">
            {sky.lines.map((points, i) => (
              <polyline key={i} points={points} />
            ))}
          </g>
          <g fill="#f4f0e6">
            {sky.stars
              .filter((s) => s.mag >= TWINKLE_MAG)
              .map((s, i) => (
                <circle
                  key={i}
                  cx={s.x}
                  cy={s.y}
                  r={radius(s.mag)}
                  opacity={brightness(s.mag) * s.fade}
                />
              ))}
          </g>
          <g className="fill-paper/45 font-sans text-xs font-medium tracking-wider uppercase">
            {sky.labels.map((l) => (
              <text key={l.name} x={l.x} y={l.y} textAnchor="middle">
                {l.name}
              </text>
            ))}
          </g>
        </svg>
      )}

      {sky?.stars
        .filter((s) => s.mag < TWINKLE_MAG)
        .map((s, i) => {
          const d = radius(s.mag) * 2
          return (
            <span
              key={i}
              className="star absolute rounded-full bg-paper"
              style={
                {
                  left: s.x - d / 2,
                  top: s.y - d / 2,
                  width: d,
                  height: d,
                  '--star-base': brightness(s.mag) * s.fade,
                  // Deterministic, uneven cycles so each star glimmers on its own schedule.
                  animationDuration: `${5 + ((i * 7.3) % 9)}s`,
                  animationDelay: `${-((i * 3.7) % 14)}s`,
                  boxShadow: s.mag < 1 ? '0 0 8px 1px rgb(255 248 230 / 0.55)' : undefined,
                } as CSSProperties
              }
            />
          )
        })}
    </div>
  )
}
