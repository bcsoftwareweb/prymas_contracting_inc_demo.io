import { images } from '../../data/images'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function SafetySection() {
  return (
    <section className="bg-concrete-50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <ImageWithFallback
            src={images.safety}
            alt="Construction team coordinating on a job site in safety gear"
            className="aspect-[5/4] w-full"
          />
        </Reveal>
        <Reveal delay={100}>
          <SectionHeader
            eyebrow="Jobsite Discipline"
            title="Safety Is Part of the Work."
            subtitle="Construction sites require planning, awareness, and a shared understanding of how people and materials move through the work. Safety is treated as part of daily coordination—not a separate conversation."
          />
          <ul className="mt-8 space-y-4 text-sm leading-7 text-charcoal-700">
            <li>
              <strong className="text-charcoal-950">Planning.</strong> Work is organized with site
              conditions and access in mind before crews mobilize.
            </li>
            <li>
              <strong className="text-charcoal-950">Site awareness.</strong> Field activity is
              approached with attention to occupied buildings, neighbors, and changing conditions.
            </li>
            <li>
              <strong className="text-charcoal-950">Communication.</strong> Expectations and next
              steps are kept visible to the people doing the work.
            </li>
            <li>
              <strong className="text-charcoal-950">Proper procedures.</strong> Tasks are coordinated
              so the job can move without unnecessary risk.
            </li>
            <li>
              <strong className="text-charcoal-950">Responsible coordination.</strong> Trades, deliveries,
              and site logistics are sequenced with care.
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
