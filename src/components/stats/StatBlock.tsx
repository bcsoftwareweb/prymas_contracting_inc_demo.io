import { useCountUp } from '../../hooks/useCountUp'
import { useInView } from '../../hooks/useInView'
import type { Stat } from '../../data/stats'

type StatBlockProps = {
  stat: Stat
}

export function StatBlock({ stat }: StatBlockProps) {
  const { ref, inView } = useInView(0.4)
  const counted = useCountUp(stat.numericValue ?? 0, inView && Boolean(stat.numericValue))

  return (
    <div ref={ref} className="border-t border-white/10 py-8 lg:border-t-0 lg:border-l lg:px-8 lg:py-0 first:border-l-0 first:pl-0">
      <p className="font-display text-5xl uppercase tracking-wide text-white sm:text-6xl">
        {stat.numericValue ? `${counted}${stat.suffix ?? ''}` : stat.value}
      </p>
      <p className="mt-3 max-w-[12rem] text-sm leading-6 text-white/65">{stat.label}</p>
    </div>
  )
}
