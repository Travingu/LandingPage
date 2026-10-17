import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section aria-labelledby="skills-title" className="flex flex-col gap-8">
      <h2 id="skills-title" className="font-display text-5xl font-medium text-paper">
        Skills
      </h2>

      <div className="grid grid-cols-1 gap-8 rounded-md bg-paper p-6 shadow-card sm:p-8 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-4">
            <h3 className="text-xs font-medium tracking-wider text-ink-muted uppercase">
              {group.label}
            </h3>
            <ul className="flex flex-col divide-y divide-ink/15 border-t border-ink/15">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex flex-col py-2">
                  <span className="text-base leading-7 font-medium text-ink">{skill.name}</span>
                  <span className="text-sm leading-6 text-ink-muted">{skill.usedIn}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
