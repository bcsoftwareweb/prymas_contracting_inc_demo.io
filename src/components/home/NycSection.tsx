import { serviceCoverage } from '../../data/coverage'
import { images } from '../../data/images'
import { SectionHeader } from '../ui/SectionHeader'

const boroughs = [
  { name: 'Bronx', x: '42%', y: '8%' },
  { name: 'Manhattan', x: '28%', y: '28%' },
  { name: 'Queens', x: '58%', y: '32%', active: true },
  { name: 'Brooklyn', x: '42%', y: '58%' },
  { name: 'Staten Island', x: '12%', y: '72%' },
]

export function NycSection() {
  return (
    <section className="bg-charcoal-900 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div>
          <SectionHeader
            eyebrow="New York Presence"
            title="Proudly Based in Queens. Built for New York."
            subtitle="Prymas Contracting Inc. is shown here as a Maspeth, Queens company organized to support work across the city and the surrounding region."
            tone="light"
          />
          <ul className="mt-10 grid grid-cols-2 gap-3">
            {serviceCoverage.map((area) => (
              <li
                key={area}
                className="border border-white/10 px-4 py-3 text-sm text-white/80"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden border border-white/10 bg-charcoal-950 p-6">
          <img
            src={images.nyc}
            alt="New York City skyline used as a local presence visual"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="relative">
            <p className="text-[11px] uppercase tracking-[0.28em] text-copper-300">
              Map-style demo
            </p>
            <div className="relative mt-6 aspect-[5/4] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]">
              {boroughs.map((borough) => (
                <div
                  key={borough.name}
                  className="absolute"
                  style={{ left: borough.x, top: borough.y }}
                >
                  <span
                    className={
                      borough.active
                        ? 'inline-flex items-center gap-2 bg-copper-500 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white'
                        : 'inline-flex items-center gap-2 border border-white/20 bg-charcoal-950/80 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/70'
                    }
                  >
                    {borough.active && (
                      <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                    )}
                    {borough.name}
                  </span>
                </div>
              ))}
              <p className="absolute bottom-4 left-4 text-xs text-white/60">
                Maspeth, Queens · Home base
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
