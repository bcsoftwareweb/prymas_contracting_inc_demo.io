import type { Testimonial } from '../../data/testimonials'

type TestimonialCardProps = {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col border border-charcoal-900/10 bg-white p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-copper-600">
        Sample testimonial
      </p>
      <p className="mt-5 flex-1 text-lg leading-8 text-charcoal-800">“{testimonial.quote}”</p>
      <footer className="mt-8 text-sm text-charcoal-600">
        <cite className="not-italic font-semibold text-charcoal-950">
          {testimonial.attribution}
        </cite>
        <span className="block mt-1">{testimonial.context}</span>
      </footer>
    </blockquote>
  )
}
