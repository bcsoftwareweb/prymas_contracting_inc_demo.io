import { unsplash } from './images'

export const projectFilters = [
  'All',
  'Commercial',
  'Industrial',
  'Renovation',
  'Retail',
  'Other',
] as const

export type ProjectFilter = (typeof projectFilters)[number]

export type Project = {
  slug: string
  name: string
  location: string
  market: string
  type: string
  categories: Exclude<ProjectFilter, 'All'>[]
  summary: string
  overview: string
  scope: string[]
  highlights: string[]
  image: string
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: 'maspeth-industrial-facility',
    name: 'Maspeth Industrial Facility',
    location: 'Maspeth, Queens, NY',
    market: 'Industrial',
    type: 'Renovation & Facility Improvements',
    categories: ['Industrial', 'Renovation'],
    summary: 'Industrial renovation and facility modernization.',
    overview:
      'A representative industrial renovation showcasing how an existing Queens facility can be modernized while remaining practical for operations. The sample scope includes selective demolition, upgraded building systems coordination, improved circulation, and a cleaner, more durable working environment.',
    scope: [
      'Selective demolition and protection of existing areas',
      'Interior modernization of operational spaces',
      'Loading and circulation improvements',
      'Finish upgrades selected for durability',
      'Closeout and punch-list coordination',
    ],
    highlights: [
      'Sample project developed for a working industrial setting',
      'Emphasis on sequencing around operational needs',
      'Clear coordination between field work and project reporting',
      'Durable assemblies suited to daily facility use',
    ],
    image: unsplash('photo-1581094794329-c8112a89af12', 1800),
    gallery: [
      unsplash('photo-1581094794329-c8112a89af12', 1400),
      unsplash('photo-1586528116311-ad8dd3c8310d', 1400),
      unsplash('photo-1504307651254-35680f356dfd', 1400),
      unsplash('photo-1517086828157-83d9410d3c0c', 1400),
    ],
  },
  {
    slug: 'queens-commercial-center',
    name: 'Queens Commercial Center',
    location: 'Queens, NY',
    market: 'Commercial',
    type: 'Commercial Construction & Interior Build-Out',
    categories: ['Commercial'],
    summary: 'Commercial construction and interior build-out.',
    overview:
      'A featured commercial sample project illustrating a coordinated interior build-out for a multi-tenant commercial setting. The representative work focuses on layout, finishes, and field sequencing that support a professional, ready-to-occupy result.',
    scope: [
      'Interior framing and finish packages',
      'Ceiling, lighting, and floor coordination',
      'Common-area upgrades',
      'Tenant-ready commercial interiors',
    ],
    highlights: [
      'Representative commercial build-out for a Queens setting',
      'Attention to finish quality and field detailing',
      'Organized trade sequencing',
      'Clear owner communication throughout the sample process',
    ],
    image: unsplash('photo-1486406146926-c627a92ad1ab', 1800),
    gallery: [
      unsplash('photo-1486406146926-c627a92ad1ab', 1400),
      unsplash('photo-1497366811353-6870744d04b2', 1400),
      unsplash('photo-1497366216548-37526070297c', 1400),
      unsplash('photo-1487958449943-2429e8be8625', 1400),
    ],
  },
  {
    slug: 'brooklyn-distribution-facility',
    name: 'Brooklyn Distribution Facility',
    location: 'Brooklyn, NY',
    market: 'Warehousing & Distribution',
    type: 'Warehouse & Distribution Improvements',
    categories: ['Industrial', 'Other'],
    summary: 'Warehouse and distribution facility improvements.',
    overview:
      'A sample warehouse improvement project focused on circulation, storage, and operational flow. This representative scope shows how industrial construction can support a more efficient distribution environment.',
    scope: [
      'Warehouse floor and circulation upgrades',
      'Loading area improvements',
      'Lighting and safety-minded site coordination',
      'Back-of-house operational spaces',
    ],
    highlights: [
      'Representative distribution facility improvements',
      'Planning around movement, storage, and access',
      'Practical detailing for heavy daily use',
      'Coordination intended to limit operational disruption',
    ],
    image: unsplash('photo-1586528116311-ad8dd3c8310d', 1800),
    gallery: [
      unsplash('photo-1586528116311-ad8dd3c8310d', 1400),
      unsplash('photo-1581094794329-c8112a89af12', 1400),
      unsplash('photo-1541888946425-d81bb19240f5', 1400),
      unsplash('photo-1503387762-592deb58ef4e', 1400),
    ],
  },
  {
    slug: 'long-island-retail-development',
    name: 'Long Island Retail Development',
    location: 'Long Island, NY',
    market: 'Retail',
    type: 'Commercial Construction & Tenant Improvements',
    categories: ['Retail', 'Commercial'],
    summary: 'Commercial construction and tenant improvements.',
    overview:
      'A representative retail development sample focused on tenant improvements, storefront-ready interiors, and coordinated commercial construction for a Long Island setting.',
    scope: [
      'Tenant improvement packages',
      'Storefront and interior finish coordination',
      'Customer-facing and back-of-house spaces',
      'Opening-ready commercial detailing',
    ],
    highlights: [
      'Sample retail tenant improvement scope',
      'Emphasis on presentation-quality interiors',
      'Clear sequencing toward opening',
      'Coordination across finish trades',
    ],
    image: unsplash('photo-1441986300917-64674bd600d8', 1800),
    gallery: [
      unsplash('photo-1441986300917-64674bd600d8', 1400),
      unsplash('photo-1519567241046-7f034642c8b0', 1400),
      unsplash('photo-1497366811353-6870744d04b2', 1400),
      unsplash('photo-1487958449943-2429e8be8625', 1400),
    ],
  },
  {
    slug: 'manhattan-office-transformation',
    name: 'Manhattan Office Transformation',
    location: 'Manhattan, NY',
    market: 'Commercial',
    type: 'Interior Renovation & Commercial Build-Out',
    categories: ['Commercial', 'Renovation'],
    summary: 'Interior renovation and commercial build-out.',
    overview:
      'A featured office renovation sample showing how an existing Manhattan commercial floor can be transformed through coordinated demolition, new interiors, and a disciplined closeout process.',
    scope: [
      'Occupied-building protection and logistics',
      'Open office and meeting space build-out',
      'Ceiling, lighting, and finish systems',
      'Reception and common-area upgrades',
    ],
    highlights: [
      'Representative Manhattan commercial renovation',
      'Phased work suitable for an urban building context',
      'Focus on craft, cleanliness, and communication',
      'Finish-driven interior transformation',
    ],
    image: unsplash('photo-1497366811353-6870744d04b2', 1800),
    gallery: [
      unsplash('photo-1497366811353-6870744d04b2', 1400),
      unsplash('photo-1497366216548-37526070297c', 1400),
      unsplash('photo-1486406146926-c627a92ad1ab', 1400),
      unsplash('photo-1448630360428-65456885c650', 1400),
    ],
  },
  {
    slug: 'queens-mixed-use-renovation',
    name: 'Queens Mixed-Use Renovation',
    location: 'Queens, NY',
    market: 'Renovation & Adaptive Reuse',
    type: 'Large-Scale Renovation & Modernization',
    categories: ['Renovation', 'Other'],
    summary: 'Large-scale renovation and modernization.',
    overview:
      'A sample mixed-use renovation illustrating modernization of an existing Queens property. The representative scope includes interior upgrades, common-area improvements, and coordinated work across multiple building uses.',
    scope: [
      'Multi-area renovation sequencing',
      'Common-area modernization',
      'Interior upgrades across mixed occupancies',
      'Envelope and finish coordination where required',
    ],
    highlights: [
      'Representative adaptive reuse and renovation scope',
      'Planning across more than one building use',
      'Careful protection of existing conditions',
      'Modernization without losing operational practicality',
    ],
    image: unsplash('photo-1448630360428-65456885c650', 1800),
    gallery: [
      unsplash('photo-1448630360428-65456885c650', 1400),
      unsplash('photo-1545324418-cc1a3fa10c00', 1400),
      unsplash('photo-1503387762-592deb58ef4e', 1400),
      unsplash('photo-1487958449943-2429e8be8625', 1400),
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(slug: string, count = 3) {
  const current = getProject(slug)
  if (!current) return projects.slice(0, count)
  return projects
    .filter((project) => project.slug !== slug)
    .sort((a, b) => {
      const aScore = a.categories.filter((category) => current.categories.includes(category)).length
      const bScore = b.categories.filter((category) => current.categories.includes(category)).length
      return bScore - aScore
    })
    .slice(0, count)
}

export function filterProjects(filter: ProjectFilter) {
  if (filter === 'All') return projects
  return projects.filter((project) => project.categories.includes(filter))
}
