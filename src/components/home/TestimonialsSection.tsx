import { testimonials } from '../../data/testimonials'
import { TestimonialCard } from '../testimonials/TestimonialCard'
import { SectionHeader } from '../ui/SectionHeader'
import { WatermarkedSection } from '../layout/WatermarkedSection'

export function TestimonialsSection() {
  return (
    <WatermarkedSection className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Feedback"
          title="What Clients Value"
          subtitle="The following comments are sample testimonials created for this website demonstration."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.context} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </WatermarkedSection>
  )
}
