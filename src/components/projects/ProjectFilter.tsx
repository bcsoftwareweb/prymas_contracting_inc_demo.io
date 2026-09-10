import type { ProjectFilter } from '../../data/projects'
import { projectFilters } from '../../data/projects'
import { cn } from '../../lib/cn'

type ProjectFilterProps = {
  value: ProjectFilter
  onChange: (filter: ProjectFilter) => void
}

export function ProjectFilterControls({ value, onChange }: ProjectFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter representative projects"
    >
      {projectFilters.map((filter) => (
        <button
          key={filter}
          type="button"
          role="tab"
          aria-selected={value === filter}
          className={cn(
            'border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors',
            value === filter
              ? 'border-charcoal-950 bg-charcoal-950 text-white'
              : 'border-charcoal-900/15 bg-transparent text-charcoal-700 hover:border-charcoal-950',
          )}
          onClick={() => onChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
