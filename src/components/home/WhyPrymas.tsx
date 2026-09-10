import { whyPrymas } from '../../data/whyPrymas'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import { WatermarkedSection } from '../layout/WatermarkedSection'

export function WhyPrymas() {
  return (
    <WatermarkedSection className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Approach"
          title="Why Prymas"
          subtitle="The demonstration is built around the qualities owners typically look for in a construction partner: clarity, organization, and accountability in the field."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyPrymas.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article className="h-full border-t-2 border-copper-500 bg-concrete-50 p-8">
                <p className="font-display text-lg text-copper-600">0{index + 1}</p>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-charcoal-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-charcoal-600">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </WatermarkedSection>
  )
}
