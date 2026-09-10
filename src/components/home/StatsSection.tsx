import { stats } from '../../data/stats'
import { StatBlock } from '../stats/StatBlock'

export function StatsSection() {
  return (
    <section className="bg-charcoal-900 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.32em] text-copper-300">
          Sample company highlights
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatBlock key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
