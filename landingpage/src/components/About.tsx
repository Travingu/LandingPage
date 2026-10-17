import type { Ref } from 'react'
import { now, resumeHref } from '../data/site'
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
      className={`grid gap-6 rounded-md bg-paper p-6 shadow-card sm:p-8 lg:grid-cols-[14rem_1fr_15rem] lg:gap-8 ${className}`}
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
        {/* Pinned to the bottom so it lines up with the résumé button in the Now panel. */}
        <div className="mt-auto">
          <SocialLinks />
        </div>
      </div>

      <aside
        aria-labelledby="now-title"
        className="flex flex-col gap-4 border-t border-ink/15 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"
      >
        <h3 id="now-title" className="text-xs font-medium tracking-wider text-ink-muted uppercase">
          Now
        </h3>
        <dl className="flex flex-col divide-y divide-ink/15 border-t border-ink/15">
          {now.map((item) => (
            <div key={item.label} className="flex flex-col py-2">
              <dt className="text-sm leading-6 text-ink-muted">{item.label}</dt>
              <dd className="text-base leading-7 font-medium text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
        <a
          href={resumeHref}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex h-10 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-medium text-paper transition-colors duration-200 hover:bg-night focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
            <path d="M14 3v5h5M9 13h6M9 17h6" />
          </svg>
          Résumé (PDF)
        </a>
      </aside>
    </section>
  )
}
