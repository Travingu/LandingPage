import { CONSTELLATIONS, STARS } from '../data/sky'

/** Seattle. Longitude is east-positive. */
const LAT = 47.61
const LON = -122.33

/** The view looks south, tilted up so the bottom of the frame sits near the horizon. */
const VIEW_AZ = 180
const VIEW_ALT = 40
/** Half the field of view across the frame's longer side, in degrees. */
const HALF_FOV = 75

const RAD = Math.PI / 180

/** Greenwich mean sidereal time in degrees (accurate to well under a degree for this purpose). */
function gmst(date: Date) {
  const jd = date.getTime() / 86400000 + 2440587.5
  return (280.46061837 + 360.98564736629 * (jd - 2451545)) % 360
}

/** Equatorial (ra, dec) → horizontal (alt, az) for Seattle at the given time, in degrees. */
function toHorizontal(ra: number, dec: number, lst: number) {
  const ha = (lst - ra) * RAD
  const d = dec * RAD
  const lat = LAT * RAD
  const sinAlt = Math.sin(d) * Math.sin(lat) + Math.cos(d) * Math.cos(lat) * Math.cos(ha)
  const alt = Math.asin(sinAlt)
  const az = Math.atan2(
    -Math.sin(ha) * Math.cos(d),
    Math.sin(d) * Math.cos(lat) - Math.cos(d) * Math.sin(lat) * Math.cos(ha),
  )
  return { alt: alt / RAD, az: ((az / RAD) % 360 + 360) % 360 }
}

/** Unit vector for an (alt, az) direction: x east, y north, z up. */
function vec(alt: number, az: number): [number, number, number] {
  const a = alt * RAD
  const z = az * RAD
  return [Math.cos(a) * Math.sin(z), Math.cos(a) * Math.cos(z), Math.sin(a)]
}

const CENTER = vec(VIEW_ALT, VIEW_AZ)
// Screen axes: facing south, right is west and up is the direction 90° above the view center.
const RIGHT: [number, number, number] = [-1, 0, 0]
const UP = vec(VIEW_ALT + 90, VIEW_AZ)

const dot = (a: number[], b: number[]) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]

export interface ProjectedStar {
  x: number
  y: number
  mag: number
  /** Fades stars out as they approach the horizon. */
  fade: number
}

export interface SkyFrame {
  stars: ProjectedStar[]
  /** SVG polyline point strings, already broken where they leave the visible sky. */
  lines: string[]
  labels: { name: string; x: number; y: number }[]
  /** Prominent constellations currently above the horizon, highest first. */
  up: string[]
}

/** Project the sky over Seattle at `date` onto a `width`×`height` frame (stereographic). */
export function projectSky(date: Date, width: number, height: number): SkyFrame {
  const lst = gmst(date) + LON
  const scale = Math.max(width, height) / 2 / (2 * Math.tan((HALF_FOV * RAD) / 2))

  const project = (ra: number, dec: number) => {
    const { alt, az } = toHorizontal(ra, dec, lst)
    const v = vec(alt, az)
    const c = dot(v, CENTER)
    // Behind the viewer, or below the horizon: not drawn.
    if (c < -0.2 || alt < -1) return null
    const k = 2 / (1 + c)
    return {
      x: width / 2 + scale * k * dot(v, RIGHT),
      y: height / 2 - scale * k * dot(v, UP),
      alt,
    }
  }

  const onScreen = (p: { x: number; y: number }, pad = 40) =>
    p.x > -pad && p.x < width + pad && p.y > -pad && p.y < height + pad

  const stars: ProjectedStar[] = []
  for (let i = 0; i < STARS.length; i += 3) {
    const p = project(STARS[i], STARS[i + 1])
    if (!p || !onScreen(p, 4)) continue
    stars.push({ x: p.x, y: p.y, mag: STARS[i + 2], fade: Math.min(1, Math.max(0, p.alt / 8)) })
  }

  const lines: string[] = []
  const labels: SkyFrame['labels'] = []
  const up: { name: string; alt: number }[] = []

  for (const con of CONSTELLATIONS) {
    for (const seg of con.lines) {
      let run: string[] = []
      for (let i = 0; i < seg.length; i += 2) {
        const p = project(seg[i], seg[i + 1])
        if (p && p.alt > 0 && onScreen(p, 200)) {
          run.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`)
        } else {
          if (run.length > 1) lines.push(run.join(' '))
          run = []
        }
      }
      if (run.length > 1) lines.push(run.join(' '))
    }

    if (con.label) {
      const p = project(con.label[0], con.label[1])
      if (p && p.alt > 8 && onScreen(p, -24) && con.rank === 1) {
        labels.push({ name: con.name, x: p.x, y: p.y })
        up.push({ name: con.name, alt: p.alt })
      }
    }
  }

  return { stars, lines, labels, up: up.sort((a, b) => b.alt - a.alt).map((c) => c.name) }
}
