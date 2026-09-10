import { ProjectsSection } from '../components/home/ProjectsSection'
import { CTASection } from '../components/cta/CTASection'
import { PageHero } from '../components/ui/PageHero'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

export function Projects() {
  usePageMeta(
    'Projects | Prymas Contracting Inc.',
    'Browse representative sample projects for commercial, industrial, retail, and renovation construction in New York.',
  )

  return (
    <>
      <PageHero
        eyebrow="Project Showcase"
        title="Our Work"
        subtitle="A selection of representative projects showcasing the type of work Prymas Contracting Inc. can deliver."
        image={images.architecture}
        imageAlt="Completed architectural structure used as a project showcase background"
      />
      <ProjectsSection heading="Representative Work" showAllLink={false} />
      <CTASection title="Discuss a Similar Project" />
    </>
  )
}
