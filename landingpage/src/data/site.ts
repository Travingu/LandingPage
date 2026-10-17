export interface Destination {
  label: string
  description: string
  href: string
}

export const destinations: Destination[] = [
  {
    label: 'Projects',
    description: 'Tools I’ve shipped, starting with Trade Desk.',
    href: 'https://projects.travingn.dev/',
  },
  {
    label: 'Games',
    description: 'Browser games I’ve designed and built.',
    href: 'https://games.travingn.dev/',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Travingu' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/trav1snguyen' },
  { label: 'Email', href: 'mailto:travis2channel@gmail.com' },
] as const

export type SocialLabel = (typeof socials)[number]['label']

// Not in git: served locally from public/ (gitignored) and in production by an Amplify rewrite to S3.
export const resumeHref = '/resume.pdf'

/** The "Now" panel beside the About bio. Facts come from the résumé. */
export const now = [
  { label: 'Studying', value: 'ECE, University of Washington · Class of 2028' },
  { label: 'Building', value: 'Husky Micromouse, as cofounder and VP' },
  { label: 'Working', value: 'IT Systems Student Assistant, UW Libraries' },
  { label: 'Based in', value: 'Seattle, Washington' },
]
