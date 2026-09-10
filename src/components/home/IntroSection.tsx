import { images } from '../../data/images'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function IntroSection() {
  return (
    <section className="bg-concrete-50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-6">
          <SectionHeader
            eyebrow="Introduction"
            title="Built Around the Way You Build."
            subtitle="Prymas Contracting Inc. is presented here as a Queens-based contracting partner organized around the realities of New York construction: crowded sites, demanding schedules, and the need for clear field coordination."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              'Quality workmanship',
              'Project coordination',
              'Safety',
              'Communication',
              'Schedule awareness',
              'Attention to detail',
              'Long-term value',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-charcoal-800">
                <span className="h-px w-6 bg-copper-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="lg:col-span-6" delay={120}>
          <div className="relative">
            <ImageWithFallback
              src={images.intro}
              alt="Architectural structure under construction with exposed concrete and steel"
              className="aspect-[4/5] w-full"
            />
            <div className="absolute -bottom-6 -left-6 hidden max-w-xs border border-charcoal-900/10 bg-white p-6 shadow-xl sm:block">
              <p className="text-[11px] uppercase tracking-[0.24em] text-copper-600">
                Queens based
              </p>
              <p className="mt-2 font-display text-2xl uppercase tracking-wide text-charcoal-950">
                Local presence. City-scale work.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
