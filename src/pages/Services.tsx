import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CTASection } from '../components/cta/CTASection'
import { ServiceCard } from '../components/services/ServiceCard'
import { ImageWithFallback } from '../components/ui/ImageWithFallback'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeader } from '../components/ui/SectionHeader'
import { images } from '../data/images'
import { services } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'

export function Services() {
  const location = useLocation()
  usePageMeta(
    'Services | Prymas Contracting Inc.',
    'Explore general contracting, construction management, commercial construction, renovation, industrial construction, and preconstruction services.',
  )

  useEffect(() => {
    const id = location.hash.replace('#', '')
    if (!id) return
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Construction Expertise for Every Stage of the Project."
        subtitle="A full set of contracting services organized around planning, coordination, and field execution."
        image={images.steel}
        imageAlt="Construction workers coordinating commercial building activity"
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-concrete-50 py-20">
        <div className="mx-auto max-w-7xl space-y-20 px-5 sm:px-8 lg:px-10">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2"
            >
              <ImageWithFallback
                src={service.image}
                alt={`${service.title} representative image`}
                className={`aspect-[5/4] w-full ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              />
              <div>
                <SectionHeader eyebrow="Service Detail" title={service.title} subtitle={service.description} />
                <ul className="mt-8 space-y-3">
                  {service.approach.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-charcoal-700">
                      <span className="mt-2 h-px w-6 shrink-0 bg-copper-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
