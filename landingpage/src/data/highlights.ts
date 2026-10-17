/**
 * Highlights shown after About. Facts are taken from the portfolio site's data
 * (Website/website/src/data); keep the two in sync when either changes.
 */
export interface Highlight {
  title: string
  /** Role, context, and dates. */
  meta: string
  description: string
  link?: { label: string; href: string }
  tags?: string[]
}

/** The one highlight given the full-width slot. */
export const featured: Highlight = {
  title: 'Husky Micromouse',
  meta: 'Cofounder · University of Washington · Jan 2026 – present',
  description:
    'I cofounded and help lead a new engineering organization at UW. Together we’re building a small autonomous robot that competes to find the fastest route through a maze it has never seen.',
  link: { label: 'Club page', href: 'https://huskylink.washington.edu/organization/huskymicromouse' },
  tags: ['C', 'Circuitry'],
}

export const highlights: Highlight[] = [
  {
    title: 'PyMiDio',
    meta: 'Personal project',
    description:
      'An audio-to-MIDI transcriber and MIDI player built on the public Transkun model. It listens to piano, live or recorded, and recovers notes, velocity, pitch bend, and sustain at roughly 75% accuracy, or up to 90% with a better microphone.',
    link: { label: 'GitHub', href: 'https://github.com/Travingu/PyMiDio' },
    tags: ['Python', 'PyQt6'],
  },
  {
    title: 'Boeing',
    meta: 'EQA component testing intern · Summer 2023',
    description:
      'Traced the root cause of component failures using x-ray, microscopy, mechanical and electrical testing, destructive physical analysis, and chemical analysis.',
  },
  {
    title: 'VibeCheck.ai',
    meta: 'HackSU 2026 · 24-hour hackathon',
    description:
      'An app that looks at what you’re wearing and suggests improvements to color matching and overall outfit balance.',
    link: { label: 'GitHub', href: 'https://github.com/sluong05/vibecheck-web' },
    tags: ['Python', 'JavaScript', 'OpenCV'],
  },
]
