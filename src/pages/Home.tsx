import { CTASection } from '../components/cta/CTASection'
import { Hero } from '../components/home/Hero'
import { IntroSection } from '../components/home/IntroSection'
import { MarketsSection } from '../components/home/MarketsSection'
import { NycSection } from '../components/home/NycSection'
import { ProcessSection } from '../components/home/ProcessSection'
import { ProjectsSection } from '../components/home/ProjectsSection'
import { SafetySection } from '../components/home/SafetySection'
import { ServicesSection } from '../components/home/ServicesSection'
import { StatsSection } from '../components/home/StatsSection'
import { TestimonialsSection } from '../components/home/TestimonialsSection'
import { WhyPrymas } from '../components/home/WhyPrymas'
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from '../config'
import { usePageMeta } from '../hooks/usePageMeta'

export function Home() {
  usePageMeta(DEFAULT_TITLE, DEFAULT_DESCRIPTION)

  return (
    <>
      <Hero />
      <IntroSection />
      <StatsSection />
      <ServicesSection />
      <MarketsSection />
      <ProjectsSection />
      <ProcessSection />
      <WhyPrymas />
      <SafetySection />
      <NycSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
