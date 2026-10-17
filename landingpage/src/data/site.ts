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
