import { services } from '../../data/services'
import { ServiceCard } from '../services/ServiceCard'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

import { WatermarkedSection } from '../layout/WatermarkedSection'

export function ServicesSection() {
  return (
    <WatermarkedSection className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Services"
            title="Construction Expertise for Every Stage of the Project."
            subtitle="From early planning through field execution, the service offering is organized around commercial, industrial, and renovation work."
          />
          <Button to="/services" variant="light" className="self-start lg:self-auto">
            All Services
          </Button>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </WatermarkedSection>
  )
}
