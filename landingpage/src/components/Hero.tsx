/** The opening summary, set in light type against the night sky. */
export default function Hero() {
  return (
    <section className="flex min-h-svh flex-col justify-center py-24">
      <div className="flex max-w-xl flex-col gap-4">
        <h1 className="font-display text-6xl font-medium text-paper sm:text-8xl">Travis Nguyen</h1>
        <p className="text-lg leading-8 text-paper/80">
          Electrical and Computer Engineering student at the University of Washington,
          focused on embedded systems and digital design.
        </p>
        <a
          href="#about"
          className="mt-4 flex w-fit items-center gap-4 text-sm font-medium text-paper decoration-ember decoration-2 underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
        >
          <span aria-hidden="true" className="h-px w-8 bg-paper" />
          More about me
        </a>
      </div>
    </section>
  )
}
