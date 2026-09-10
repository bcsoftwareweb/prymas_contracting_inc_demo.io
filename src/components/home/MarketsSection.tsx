import { markets } from '../../data/markets'
import { MarketCard } from '../markets/MarketCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

import { WatermarkedSection } from '../layout/WatermarkedSection'

export function MarketsSection() {
  return (
    <WatermarkedSection tone="dark" className="bg-charcoal-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Markets"
          title="Built for Different Industries. Built to Perform."
          subtitle="A concise look at the types of environments this contracting demonstration is designed to serve."
          tone="light"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((market, index) => (
            <Reveal
              key={market.slug}
              delay={index * 50}
              className={index === 0 ? 'lg:col-span-2 lg:row-span-2' : undefined}
            >
              <MarketCard market={market} />
            </Reveal>
          ))}
        </div>
      </div>
    </WatermarkedSection>
  )
}
