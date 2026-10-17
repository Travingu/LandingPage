/**
 * Skills shown after Highlights, each with where it was used. Like highlights.ts, these come
 * from the portfolio site's data (Website/website/src/data), plus TypeScript, which this site
 * is written in. Don't add skills without a project or job to point to.
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
      { name: 'Python', usedIn: 'PyMiDio, VibeCheck.ai' },
      { name: 'JavaScript', usedIn: 'VibeCheck.ai' },
      { name: 'TypeScript', usedIn: 'travingn.dev' },
      { name: 'Luau', usedIn: 'Husky Micromouse' },
    ],
  },
  {
    label: 'Hardware and lab',
    skills: [
      { name: 'Circuitry', usedIn: 'Husky Micromouse' },
      { name: 'X-ray and microscopy inspection', usedIn: 'Boeing' },
      { name: 'Mechanical and electrical testing', usedIn: 'Boeing' },
      { name: 'Destructive physical analysis', usedIn: 'Boeing' },
    ],
  },
  {
    label: 'Frameworks and tools',
    skills: [
      { name: 'React and Tailwind CSS', usedIn: 'travingn.dev' },
      { name: 'PyQt6', usedIn: 'PyMiDio' },
      { name: 'OpenCV', usedIn: 'VibeCheck.ai' },
      { name: 'AWS Amplify and Route 53', usedIn: 'travingn.dev' },
    ],
  },
]
