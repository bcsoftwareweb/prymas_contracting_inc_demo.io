import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CTASection } from '../components/cta/CTASection'
import { MarketCard } from '../components/markets/MarketCard'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeader } from '../components/ui/SectionHeader'
import { images } from '../data/images'
import { markets } from '../data/markets'
import { usePageMeta } from '../hooks/usePageMeta'

export function Markets() {
  const location = useLocation()
  usePageMeta(
    'Markets | Prymas Contracting Inc.',
    'Commercial, industrial, retail, warehousing, hospitality, multifamily, and renovation markets served in this contracting website demonstration.',
  )

  useEffect(() => {
    const id = location.hash.replace('#', '')
    if (!id) return
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return (
    <>
      <PageHero
        eyebrow="Markets"
        title="Built for Different Industries. Built to Perform."
        subtitle="A focused set of markets that reflect the kinds of commercial and industrial environments this demonstration is designed around."
        image={images.skyline}
        imageAlt="Urban commercial skyline representing New York construction markets"
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((market) => (
              <div key={market.slug} id={market.slug} className="scroll-mt-28">
                <MarketCard market={market} />
              </div>
            ))}
          </div>
          <div className="mt-16 max-w-3xl">
            <SectionHeader
              eyebrow="How markets are used"
              title="The work changes. The standard does not."
              subtitle="Each market has different operational needs, but the underlying requirement remains the same: organized construction, clear communication, and a finished project that can be used as intended."
            />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
