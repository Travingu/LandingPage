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
  }
]

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-6 py-8 sm:px-10 sm:py-10">
        
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 pb-20 text-center sm:px-10 ">
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
              target="_self"
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
      <footer className="bg-black text-white px-6 py-20 sm:px-10 sm:py-40">
          <h1 className="text-md font-bold flex flex-col">Stay Connected</h1>
          {iconLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="">
            <img src={link.image} alt={link.label}>
            </img>
            </a>
          ))}
      </footer>
    </div>
  )
}

export default App
