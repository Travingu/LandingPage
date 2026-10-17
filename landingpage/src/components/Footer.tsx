export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-night py-8 text-sm text-paper/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 sm:flex-row sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Travis Nguyen</p>
        <p>Seattle, Washington</p>
      </div>
    </footer>
  )
}
