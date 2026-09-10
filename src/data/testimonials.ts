export type Testimonial = {
  quote: string
  attribution: string
  context: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The project team maintained clear communication from planning through completion and kept the work organized throughout the process.',
    attribution: 'Sample Client',
    context: 'Commercial Development',
  },
  {
    quote:
      'Field coordination was steady, questions were addressed promptly, and the finished space reflected the level of care we were looking for.',
    attribution: 'Sample Client',
    context: 'Industrial Renovation',
  },
  {
    quote:
      'Schedules, site conditions, and next steps were discussed openly, which made it easier to keep the rest of our team aligned.',
    attribution: 'Sample Client',
    context: 'Interior Build-Out',
  },
]
