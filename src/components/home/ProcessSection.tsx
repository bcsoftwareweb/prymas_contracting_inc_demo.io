import { images } from '../../data/images'
import { ProcessTimeline } from '../process/ProcessTimeline'
import { SectionHeader } from '../ui/SectionHeader'

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 py-20 lg:py-28">
      <img
        src={images.process}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-charcoal-950/80" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Our Process"
          title="From Planning to Completion."
          subtitle="A straightforward sequence designed to keep scope, communication, and field execution aligned."
          tone="light"
        />
        <div className="mt-16">
          <ProcessTimeline />
        </div>
      </div>
    </section>
  )
}
