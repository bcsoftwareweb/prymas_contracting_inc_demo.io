import { Link } from 'react-router-dom'
import type { Market } from '../../data/markets'
import { ImageWithFallback } from '../ui/ImageWithFallback'

type MarketCardProps = {
  market: Market
}

export function MarketCard({ market }: MarketCardProps) {
  return (
    <Link
      to={`/markets#${market.slug}`}
      className="group relative block overflow-hidden bg-charcoal-900"
      data-testid={`market-card-${market.slug}`}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <ImageWithFallback
          src={market.image}
          alt={`${market.title} market representative image`}
          className="h-full w-full"
          imgClassName="image-zoom"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <h3 className="font-display text-2xl uppercase tracking-wide">{market.title}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-6 text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
          {market.summary}
        </p>
      </div>
    </Link>
  )
}
