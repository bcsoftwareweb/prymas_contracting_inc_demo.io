import { useState } from 'react'
import { filterProjects, type ProjectFilter } from '../../data/projects'
import { ProjectCard } from '../projects/ProjectCard'
import { ProjectFilterControls } from '../projects/ProjectFilter'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'

type ProjectsSectionProps = {
  heading?: string
  showAllLink?: boolean
  limit?: number
}

export function ProjectsSection({
  heading = 'Our Work',
  showAllLink = true,
  limit,
}: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const visible = filterProjects(filter).slice(0, limit)

  return (
    <section className="bg-concrete-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Project Showcase"
            title={heading}
            subtitle="A selection of representative projects showcasing the type of work Prymas Contracting Inc. can deliver."
          />
          {showAllLink && (
            <Button to="/projects" variant="light">
              View All Projects
            </Button>
          )}
        </div>
        <div className="mt-10">
          <ProjectFilterControls value={filter} onChange={setFilter} />
        </div>
        {visible.length === 0 ? (
          <p className="mt-12 text-charcoal-600">No representative projects in this category yet.</p>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
