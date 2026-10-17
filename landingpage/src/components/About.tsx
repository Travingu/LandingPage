import type { Ref } from 'react'
import SocialLinks from './SocialLinks'

interface AboutProps {
  ref?: Ref<HTMLDivElement>
  className?: string
}

export default function About({ ref, className = '' }: AboutProps) {
  return (
    <section
      ref={ref}
      aria-labelledby="about-title"
      className={`grid gap-4 rounded-md bg-paper p-6 shadow-card lg:grid-cols-[14rem_1fr] lg:gap-6 ${className}`}
    >
      <img
        src="/about-1280.jpg"
        alt="Travis standing on red rock in Sedona, Arizona"
        width={1280}
        height={720}
        decoding="async"
        className="h-40 w-full rounded-md bg-ink/10 object-cover object-[25%_50%] lg:h-full max-lg:[@media(max-height:720px)]:hidden"
      />

      <div className="flex flex-col gap-4">
        <h2 id="about-title" className="font-display text-5xl font-medium">
          About me
        </h2>
        <p className="text-base leading-7 text-ink-muted">
          I’m a junior in Electrical and Computer Engineering at UW, drawn most to embedded
          systems and digital design. I cofounded Husky Micromouse, where small teams of students
          design and build autonomous robots that race through mazes. Before that I interned at
          Boeing, and I now work in IT for UW Libraries. In my free time I enjoy playing piano, tennis, and gaming.
        </p>
        <SocialLinks />
      </div>
    </section>
  )
}
