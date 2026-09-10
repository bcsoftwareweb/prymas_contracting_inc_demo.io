import { CTASection } from '../components/cta/CTASection'
import { ProcessTimelineLight } from '../components/process/ProcessTimeline'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeader } from '../components/ui/SectionHeader'
import { images } from '../data/images'
import { processSteps } from '../data/process'
import { usePageMeta } from '../hooks/usePageMeta'
import { WatermarkedSection } from '../components/layout/WatermarkedSection'

export function Process() {
  usePageMeta(
    'Our Process | Prymas Contracting Inc.',
    'Follow the Prymas contracting process from planning and coordination through construction and completion.',
  )

  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="From Planning to Completion."
        subtitle="A clear sequence for moving a project from early conversations to a finished, usable space."
        image={images.process}
        imageAlt="Construction planning and field work representing the project process"
      />
      <WatermarkedSection className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="How a project moves"
            title="Organized from the first conversation."
            subtitle="The process is designed to keep owners, trades, and field conditions aligned as the work develops."
          />
          <div className="mt-16">
            <ProcessTimelineLight />
          </div>
        </div>
      </WatermarkedSection>
      <WatermarkedSection tone="dark" className="bg-charcoal-950 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <ol className="grid gap-8 lg:grid-cols-5">
            {processSteps.map((step) => (
              <li key={step.number} className="border-t border-white/10 pt-6">
                <p className="font-display text-4xl text-copper-300">{step.number}</p>
                <h2 className="mt-4 font-display text-2xl uppercase tracking-wide text-white">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/65">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </WatermarkedSection>
      <CTASection />
    </>
  )
}
