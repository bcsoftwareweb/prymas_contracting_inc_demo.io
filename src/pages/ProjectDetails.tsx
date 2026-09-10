import { Link, useParams } from 'react-router-dom'
import { CTASection } from '../components/cta/CTASection'
import { ProjectCard } from '../components/projects/ProjectCard'
import { Button } from '../components/ui/Button'
import { ImageWithFallback } from '../components/ui/ImageWithFallback'
import { getProject, getRelatedProjects } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'
import { NotFound } from './NotFound'

export function ProjectDetails() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  usePageMeta(
    project
      ? `${project.name} | Prymas Contracting Inc.`
      : 'Project | Prymas Contracting Inc.',
    project
      ? `${project.summary} Representative sample project in ${project.location}.`
      : 'Representative construction project details.',
  )

  if (!project) {
    return <NotFound />
  }

  const related = getRelatedProjects(project.slug)

  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-charcoal-950 pt-24">
        <img
          src={project.image}
          alt={`${project.name} hero image`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/55 to-charcoal-950/20" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper-300">
            Featured Project
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.92] tracking-wide text-white sm:text-7xl">
            {project.name}
          </h1>
          <p className="mt-5 text-white/75">
            {project.location} · {project.market}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <dl className="space-y-6 border-t border-charcoal-900/10 pt-8">
              <Detail label="Location" value={project.location} />
              <Detail label="Market" value={project.market} />
              <Detail label="Project Type" value={project.type} />
            </dl>
            <Button to="/contact" className="mt-10">
              Start a Project
            </Button>
          </div>
          <div className="lg:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-copper-600">
              Project overview
            </p>
            <p className="mt-4 text-lg leading-8 text-charcoal-700">{project.overview}</p>
            <h2 className="mt-12 font-display text-3xl uppercase tracking-wide text-charcoal-950">
              Scope
            </h2>
            <ul className="mt-5 space-y-3">
              {project.scope.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-charcoal-700">
                  <span className="mt-2 h-px w-6 shrink-0 bg-copper-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="mt-12 font-display text-3xl uppercase tracking-wide text-charcoal-950">
              Key highlights
            </h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.highlights.map((item) => (
                <li key={item} className="bg-concrete-50 p-5 text-sm leading-6 text-charcoal-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-concrete-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="font-display text-3xl uppercase tracking-wide text-charcoal-950">
            Project gallery
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <ImageWithFallback
                key={image}
                src={image}
                alt={`${project.name} gallery image ${index + 1}`}
                className="aspect-[5/4] w-full"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-4xl uppercase tracking-wide text-charcoal-950">
              Related projects
            </h2>
            <Link
              to="/projects"
              className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-copper-600 sm:inline"
            >
              All projects
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.24em] text-steel-500">{label}</dt>
      <dd className="mt-2 text-lg text-charcoal-950">{value}</dd>
    </div>
  )
}
