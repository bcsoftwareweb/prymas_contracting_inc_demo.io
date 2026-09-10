import { CTASection } from '../components/cta/CTASection'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { images } from '../data/images'
import { whyPrymas } from '../data/whyPrymas'
import { usePageMeta } from '../hooks/usePageMeta'
import { ImageWithFallback } from '../components/ui/ImageWithFallback'
import { WatermarkedSection } from '../components/layout/WatermarkedSection'

export function About() {
  usePageMeta(
    'About | Prymas Contracting Inc.',
    'Learn about Prymas Contracting Inc., a Queens-based contracting demonstration focused on quality, coordination, and New York construction.',
  )

  return (
    <>
      <PageHero
        eyebrow="About"
        title="A Contracting Partner Built for New York Work."
        subtitle="Prymas Contracting Inc. is presented as a Maspeth, Queens company organized around commercial, industrial, and renovation construction."
        image={images.crane}
        imageAlt="Construction team on a job site representing the Prymas approach"
      />
      <WatermarkedSection className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-7">
            <SectionHeader
              eyebrow="Who We Are"
              title="Practical construction. Clear coordination."
              subtitle="This about page describes the kind of contracting company the website is designed to represent: a local New York team focused on organized field work, communication, and durable results."
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-charcoal-700">
              <p>
                Prymas Contracting Inc. is a fictional example company created for this website
                demonstration. The content is intended to show how a high-end contracting website
                can present capability, process, and local presence without relying on generic
                template language.
              </p>
              <p>
                The approach emphasized throughout the site is straightforward: understand the
                project, plan the work, coordinate the people involved, and execute with attention
                to quality and site conditions.
              </p>
              <p>
                Because this is a demonstration, the site does not list founding dates, licenses,
                certifications, awards, or staff counts. Those details would belong to a live
                company website and should be published only when they are accurate.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={100}>
            <ImageWithFallback
              src={images.architecture}
              alt="Architectural concrete and steel detail"
              className="h-full min-h-[420px] w-full"
            />
          </Reveal>
        </div>
      </WatermarkedSection>
      <WatermarkedSection className="bg-concrete-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader eyebrow="Values" title="How the work is approached." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyPrymas.map((item) => (
              <article key={item.title} className="bg-white p-8">
                <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-charcoal-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </WatermarkedSection>
      <WatermarkedSection className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Local Presence"
            title="Based in Maspeth. Oriented to the city."
            subtitle="Queens is the home base in this demonstration, with representative coverage across New York City and the surrounding region."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[images.aboutGrid1, images.aboutGrid2, images.aboutGrid3, images.aboutGrid4].map(
              (image, index) => (
                <ImageWithFallback
                  key={image}
                  src={image}
                  alt={`Construction and architecture photograph ${index + 1} for the about page`}
                  className="aspect-[4/5] w-full"
                />
              ),
            )}
          </div>
        </div>
      </WatermarkedSection>
      <CTASection />
    </>
  )
}
