import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'

const DAY = 24 * 60
const PX_PER_HOUR = 16
const PX_PER_MIN = PX_PER_HOUR / 60
/** Width of one day on the strip. The strip holds three days so it never runs out while it loops. */
const PERIOD = 24 * PX_PER_HOUR
const TICKS = Array.from({ length: 3 * 24 + 1 }, (_, i) => i)
/** Releasing a drag this many minutes from now snaps back to now. */
const SNAP = 10
const STEP = 10

/** Keeps an offset within a day either way, which is what makes the strip loop. */
const wrap = (minutes: number) => ((((minutes + DAY / 2) % DAY) + DAY) % DAY) - DAY / 2

/** Seattle's wall-clock time, read out to screen readers. */
const seattleTime = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'America/Los_Angeles',
})

interface SkyTimelineProps {
  now: Date
  /** Minutes from now that the sky is showing. */
  offset: number
  onOffsetChange: (offset: number) => void
}

/**
 * A wordless, endlessly looping day of hour ticks. Drag it (or use the arrow keys) to turn
 * the sky; the ember dot is now. Double-click, or let go near the dot, to return to now.
 */
export default function SkyTimeline({ now, offset, onOffsetChange }: SkyTimelineProps) {
  const drag = useRef<{ x: number; offset: number } | null>(null)
  const [dragging, setDragging] = useState(false)

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    drag.current = { x: e.clientX, offset }
    setDragging(true)
  }

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return
    // Pulling the strip left brings later hours under the center line.
    onOffsetChange(Math.round(wrap(drag.current.offset - (e.clientX - drag.current.x) / PX_PER_MIN)))
  }

  const endDrag = () => {
    if (!drag.current) return
    drag.current = null
    setDragging(false)
    if (Math.abs(offset) < SNAP) onOffsetChange(0)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const next: Record<string, number> = {
      ArrowRight: offset + STEP,
      ArrowUp: offset + STEP,
      ArrowLeft: offset - STEP,
      ArrowDown: offset - STEP,
      PageUp: offset + 60,
      PageDown: offset - 60,
      Home: 0,
    }
    if (!(e.key in next)) return
    e.preventDefault()
    onOffsetChange(wrap(next[e.key]))
  }

  return (
    <div
      role="slider"
      tabIndex={0}
      aria-label="Time shown in the sky"
      aria-valuemin={-DAY / 2}
      aria-valuemax={DAY / 2}
      aria-valuenow={offset}
      aria-valuetext={seattleTime.format(new Date(now.getTime() + offset * 60_000))}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onDoubleClick={() => onOffsetChange(0)}
      onKeyDown={onKeyDown}
      className={`pointer-events-auto relative h-10 w-48 touch-pan-y overflow-hidden rounded-md border border-ink/15 bg-paper shadow-card select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${
        dragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 32px, black calc(100% - 32px), transparent)',
        }}
      >
        <div
          className="absolute inset-y-0 left-1/2"
          style={{ width: PERIOD * 3, transform: `translateX(${-(PERIOD + offset * PX_PER_MIN)}px)` }}
        >
          {TICKS.map((i) => (
            <span
              key={i}
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 ${
                i % 24 === 0
                  ? 'h-2 w-2 rounded-full bg-ember'
                  : i % 6 === 0
                    ? 'h-4 w-px bg-ink/50'
                    : 'h-2 w-px bg-ink/25'
              }`}
              style={{ left: i * PX_PER_HOUR }}
            />
          ))}
        </div>
      </div>
      <span
        aria-hidden="true"
        className="absolute inset-y-2 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-ink"
      />
    </div>
  )
}
