import { featured, highlights, type Highlight } from '../data/highlights'

function Tags({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="rounded-md border border-ink/15 px-2 py-1 text-xs text-ink-muted">
          {tag}
        </li>
      ))}
    </ul>
  )
}

function HighlightLink({ link }: { link: Highlight['link'] }) {
  if (!link) return null
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-ink decoration-ember decoration-2 underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
    >
      {link.label}
      <span aria-hidden="true" className="text-ember transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </a>
  )
}

export default function Highlights() {
  return (
    <section aria-labelledby="highlights-title" className="flex flex-col gap-8">
      <h2 id="highlights-title" className="font-display text-5xl font-medium text-paper">
        Highlights
      </h2>

      <article className="flex flex-col gap-4 rounded-md bg-paper p-6 shadow-card sm:p-8">
        <p className="text-sm text-ink-muted">{featured.meta}</p>
        <h3 className="font-display text-5xl font-medium text-ink">{featured.title}</h3>
        <p className="max-w-2xl text-lg leading-8 text-ink-muted">{featured.description}</p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-4">
          <Tags tags={featured.tags} />
          <HighlightLink link={featured.link} />
        </div>
      </article>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <li key={item.title}>
            <article className="flex h-full flex-col gap-4 rounded-md bg-paper p-6 shadow-card">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-ink-muted">{item.meta}</p>
                <h3 className="font-display text-4xl font-medium text-ink">{item.title}</h3>
              </div>
              <p className="text-base leading-7 text-ink-muted">{item.description}</p>
              <div className="mt-auto flex flex-col gap-4">
                <Tags tags={item.tags} />
                <HighlightLink link={item.link} />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
