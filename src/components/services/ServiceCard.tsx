import { Link } from 'react-router-dom'
import type { Service } from '../../data/services'
import { ImageWithFallback } from '../ui/ImageWithFallback'

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      to={`/services#${service.slug}`}
      className="group block h-full bg-white focus-visible:outline-none"
      data-testid={`service-card-${service.slug}`}
    >
      <article className="flex h-full flex-col overflow-hidden border border-charcoal-900/8 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-charcoal-900/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
        <div className="aspect-[16/10] overflow-hidden">
          <ImageWithFallback
            src={service.image}
            alt={`${service.title} representative construction photography`}
            className="h-full w-full"
            imgClassName="image-zoom"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal-950">
            {service.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-charcoal-600">{service.summary}</p>
          <span className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-copper-600">
            Learn More
          </span>
        </div>
      </article>
    </Link>
  )
}
