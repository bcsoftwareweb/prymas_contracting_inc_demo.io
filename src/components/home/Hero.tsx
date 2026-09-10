import { Button } from '../ui/Button'
import { images } from '../../data/images'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-charcoal-950">
      <img
        src={images.hero}
        alt="Steel construction framework against an urban sky, representing commercial building work in New York"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-charcoal-950/25" />
      <div className="absolute inset-0 bg-charcoal-950/20" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper-300">
          Maspeth, Queens • New York City
        </p>
        <h1 className="mt-6 max-w-5xl font-display text-[3.2rem] uppercase leading-[0.9] tracking-wide text-white sm:text-6xl lg:text-8xl">
          Building New York with Strength, Precision, and Purpose.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
          Prymas Contracting Inc. delivers dependable construction and contracting solutions for
          commercial, industrial, and development projects throughout New York City and the
          surrounding region.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button to="/contact">Start a Project</Button>
          <Button to="/projects" variant="outline">
            Explore Our Work
          </Button>
        </div>
      </div>
    </section>
  )
}
