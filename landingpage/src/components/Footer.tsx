export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-night px-4 py-8 text-sm text-paper/70 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Travis Nguyen</p>
        <p>Seattle, Washington</p>
      </div>
    </footer>
  )
}
