/**
 * Skills shown after Highlights, each with where it was used. Like highlights.ts, these come
 * from the résumé (public/FullResume.pdf), plus this site itself. Don't add skills without a
 * project or job to point to.
 */
export interface SkillGroup {
  label: string
  skills: { name: string; usedIn: string }[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'C', usedIn: 'Husky Micromouse' },
      { name: 'Python', usedIn: 'PyMiDio' },
      { name: 'TypeScript', usedIn: 'GroupUp, travingn.dev' },
    ],
  },
  {
    label: 'Hardware and lab',
    skills: [
      { name: 'STM32 microcontrollers', usedIn: 'Husky Micromouse' },
      { name: 'PCB design in KiCad', usedIn: 'Line-Following Robot' },
      { name: 'Arduino and PID control', usedIn: 'Line-Following Robot' },
      { name: 'Failure analysis and test design', usedIn: 'Boeing' },
      { name: 'X-ray and microscopy inspection', usedIn: 'Boeing' },
    ],
  },
  {
    label: 'Software and tools',
    skills: [
      { name: 'React', usedIn: 'GroupUp, travingn.dev' },
      { name: 'Firebase and Firestore', usedIn: 'GroupUp' },
      { name: 'PyQt6 and NumPy', usedIn: 'PyMiDio' },
      { name: 'Tailwind CSS', usedIn: 'travingn.dev' },
      { name: 'AWS Amplify and Route 53', usedIn: 'travingn.dev' },
    ],
  },
]
