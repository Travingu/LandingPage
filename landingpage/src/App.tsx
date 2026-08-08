const links = [
  {
    label: 'Portfolio',
    description: 'Experience, projects & education',
    href: 'https://portfolio.travingn.dev/',
  },
  {
    label: 'Games',
    description: 'Games I have built',
    href: 'https://games.travingn.dev/',
  },
  {
    label: 'Projects',
    description: 'More projects including professional works',
    href: 'https://projects.travingn.dev/',
  },
  {
    label: 'Blog',
    description: 'What is on my mind?',
    href: 'https://blog.travingn.dev/',
  },
]

const iconLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/trav1snguyen/',
    image: "",
  },
  { 
    label: 'GitHub',
    href: 'https://github.com/Travingu',
    image: "",
  },
  {
    label: 'Email',
    href: "mailto:travis2channel@gmail.com",
    image: "",
  },
  { 
    label: 'Resume',
    href: "",
    image: "",
  },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Travingu',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.71 5.4-5.29 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/trav1snguyen',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:travis2channel@gmail.com',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
]

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-6 py-8 sm:px-10 sm:py-10">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-accent text-sm font-bold text-accent">
          TN
        </span>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 pb-20 text-center sm:px-10">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Travis Nguyen
        </h1>
        <p className="mt-4 text-lg font-semibold text-accent sm:text-xl">
          Electrical and Computer Engineering
        </p>
        <p className="mt-4 max-w-md text-ink-muted">
          Pick a destination below to see my work, play something I built, or
          get in touch.
        </p>

        <div className="my-10 h-px w-full max-w-md bg-hairline" />

        <nav className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-1.5 rounded-2xl border-2 border-transparent bg-accent-light p-6 text-left transition-colors duration-200 hover:border-accent hover:shadow-sm"
            >
              <span className="text-lg font-bold text-accent">
                {link.label}
              </span>
              <span className="text-sm text-ink-muted">
                {link.description}
              </span>
            </a>
          ))}
        </nav>
      </main>
    </div>
  )
}

export default App
