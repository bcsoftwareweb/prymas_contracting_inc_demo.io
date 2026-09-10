import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'
import { DemoWatermark } from '../layout/DemoWatermark'

type CTASectionProps = {
  eyebrow?: string
  title?: string
  subtitle?: string
  image?: string
  className?: string
}

export function CTASection({
  eyebrow = 'Next Step',
  title = 'Have a Project in Mind?',
  subtitle = "Let's discuss your project, goals, and construction needs.",
  image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
  className,
}: CTASectionProps) {
  return (
    <section className={cn('relative overflow-hidden bg-charcoal-950 py-24', className)}>
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-charcoal-950/40" />
      <DemoWatermark className="opacity-[0.28]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper-300">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-none tracking-wide text-white sm:text-6xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-lg text-white/70">{subtitle}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button to="/contact">Start a Project</Button>
          <Button to="/contact" variant="outline">
            Contact Prymas
          </Button>
        </div>
      </div>
    </section>
  )
}
