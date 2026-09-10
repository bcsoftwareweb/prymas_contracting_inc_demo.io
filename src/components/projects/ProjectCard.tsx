import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { ImageWithFallback } from '../ui/ImageWithFallback'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block focus-visible:outline-none"
      data-testid={`project-card-${project.slug}`}
    >
      <article className="relative overflow-hidden bg-charcoal-900">
        <div className="aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
          <ImageWithFallback
            src={project.image}
            alt={`${project.name} sample project in ${project.location}`}
            className="h-full w-full"
            imgClassName="image-zoom"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-[10px] uppercase tracking-[0.28em] text-copper-300">
            Featured Project
          </p>
          <h3 className="mt-2 font-display text-3xl uppercase tracking-wide">{project.name}</h3>
          <p className="mt-2 text-sm text-white/70">
            {project.location} · {project.market}
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:translate-y-2">
            {project.summary}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-white">
            View Case Study
          </p>
        </div>
      </article>
    </Link>
  )
}
