/**
 * Highlights shown after About. Facts are taken from the résumé (public/FullResume.pdf);
 * keep the two in sync when either changes, and don't add claims that aren't there.
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
  meta: 'Cofounder and Vice President · University of Washington · Jan 2026 – present',
  description:
    'I cofounded Husky Micromouse and built its engineering team from the ground up to 14 members. I coordinate the subteams so their systems come together as one working robot, and I’ve written over 500 lines of C for its STM32 microcontroller. The goal is a small autonomous robot that finds the fastest route through a maze it has never seen.',
  link: { label: 'Club page', href: 'https://huskylink.washington.edu/organization/huskymicromouse' },
  tags: ['C', 'STM32'],
}

export const highlights: Highlight[] = [
  {
    title: 'Boeing',
    meta: 'Quality Analysis Intern · Jul – Sep 2023',
    description:
      'Ran failure analysis on eleven aircraft components, traced each to its root cause, and reported the findings to groups including the NTSB and FAA. I developed test methods to reproduce mechanical and electrical failures, wrote two technical reports, and peer reviewed five more.',
  },
  {
    title: 'Line-Following Robot',
    meta: 'Project · Jan – Mar 2026',
    description:
      'Designed a custom PCB in KiCad that puts the motor driver and sensor circuitry on one compact board, then implemented and tuned a PID control loop for precise, real-time motor speed and direction.',
    tags: ['KiCad', 'Arduino'],
  },
  {
    title: 'PyMiDio',
    meta: 'Personal project · Mar 2026',
    description:
      'An audio-to-MIDI transcriber built on the open-source Transkun model, with the recording, pitch bend, and velocity editing the model lacks. It cut the time to recreate a piano arrangement from a week to under five hours.',
    link: { label: 'GitHub', href: 'https://github.com/Travingu/PyMiDio' },
    tags: ['Python', 'NumPy', 'PyQt6'],
  },
  {
    title: 'GroupUp',
    meta: 'Web app · Apr 2025',
    description:
      'A directory of every UW club, built as an unofficial stand-in while the official site was being migrated. It was used in UW’s virtual first-year orientation and drew over 270 visitors, with Firestore holding clubs, events, and users in real time.',
    tags: ['React', 'TypeScript', 'Firebase'],
  },
]
