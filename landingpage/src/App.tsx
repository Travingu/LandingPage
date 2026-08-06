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

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-6 py-8 sm:px-10 sm:py-10">
        
      </header>

      <main>
        <div className="ml-80 flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 sm:px-10 ">
          <div className="flex">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-8xl">
                Travis Nguyen
              </h1>
              <p className="mt-4 text-lg font-semibold text-accent sm:text-xl">
                Electrical and Computer Engineering
              </p>
              <p className="mt-4 max-w-md text-ink-muted">
                Hi!
              </p>
            </div>
            <img className="items-right" src="" alt="hi"></img>
          </div>
          <div className="my-10 h-px max-w-5xl" />
          <nav className="grid w-full grid-cols-1 gap-10 sm:grid-cols-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_self"
                rel="noreferrer"
                className="flex flex-col gap-1.5 rounded-2xl border-2 border-transparent bg-accent-light p-6 text-center transition-colors duration-200 hover:border-accent hover:shadow-sm"
              >
                <span className="text-lg font-bold text-accent">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
          <div className="my-20 h-px w-full flex bg-hairline" />
          <div className="text-right">
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-7xl">About Me</h1>
            <p className="mt-4 text-ink-muted">
              Basic Description
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-black text-white px-6 py-20 sm:px-10 sm:py-40">
          <div className=" items-right">
            <h1 className="text-md font-bold">Stay Connected</h1>
            <div className="flex gap-10 flex-rows items-right">
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
            </div>
          </div>
      </footer>
    </div>
  )
}

export default App
