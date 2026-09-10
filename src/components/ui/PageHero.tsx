import { DemoWatermark } from '../layout/DemoWatermark'

type PageHeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  image: string
  imageAlt: string
}

export function PageHero({ eyebrow, title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative min-h-[58vh] overflow-hidden bg-charcoal-950 pt-24">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-charcoal-950/30" />
      <DemoWatermark className="top-[28%]" />
      <div className="relative mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:px-10">
        {eyebrow && (
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-copper-300">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl font-display text-5xl uppercase leading-[0.92] tracking-wide text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
