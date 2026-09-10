import { unsplash } from './images'

export type Service = {
  slug: string
  title: string
  summary: string
  description: string
  approach: string[]
  image: string
}

export const services: Service[] = [
  {
    slug: 'general-contracting',
    title: 'General Contracting',
    summary:
      'Coordinating construction activities, trades, schedules, and project requirements from start to completion.',
    description:
      'A structured general contracting approach that keeps fieldwork, documentation, and stakeholder communication aligned as the project moves from planning through closeout.',
    approach: [
      'Trade coordination and field sequencing',
      'Schedule and logistics planning',
      'Quality review throughout construction',
      'Clear reporting to the project team',
    ],
    image: unsplash('photo-1541888946425-d81bb19240f5', 1200),
  },
  {
    slug: 'construction-management',
    title: 'Construction Management',
    summary:
      'Professional project coordination focused on organization, communication, scheduling, and execution.',
    description:
      'Construction management support designed to keep owners, consultants, and field teams working from the same plan with fewer surprises.',
    approach: [
      'Project organization and reporting',
      'Look-ahead scheduling',
      'Issue tracking and resolution support',
      'Coordination across consultants and trades',
    ],
    image: unsplash('photo-1503387762-592deb58ef4e', 1200),
  },
  {
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    summary:
      'Construction solutions for offices, retail, industrial facilities, and other commercial environments.',
    description:
      'Commercial construction services for spaces that need to open on time, operate efficiently, and hold up to daily use in New York’s demanding building conditions.',
    approach: [
      'Interior and core-and-shell coordination',
      'Tenant-ready commercial spaces',
      'Phased work in occupied buildings',
      'Finish quality and field detailing',
    ],
    image: unsplash('photo-1486406146926-c627a92ad1ab', 1200),
  },
  {
    slug: 'renovation-build-outs',
    title: 'Renovation & Build-Outs',
    summary:
      'Modernization, interior build-outs, upgrades, and renovations for existing spaces.',
    description:
      'Renovation and build-out work that respects existing conditions while delivering a cleaner, more functional result for commercial and industrial users.',
    approach: [
      'Existing-condition assessment support',
      'Selective demolition and protection',
      'Interior modernization and fit-out',
      'Punch-list driven closeout',
    ],
    image: unsplash('photo-1497366811353-6870744d04b2', 1200),
  },
  {
    slug: 'industrial-construction',
    title: 'Industrial Construction',
    summary:
      'Construction support for warehouses, industrial facilities, production environments, and operational spaces.',
    description:
      'Industrial construction focused on durable assemblies, operational continuity, and spaces that have to perform as working facilities—not just finished interiors.',
    approach: [
      'Warehouse and production space upgrades',
      'Loading, storage, and circulation improvements',
      'Coordination around active operations',
      'Practical detailing for heavy use',
    ],
    image: unsplash('photo-1586528116311-ad8dd3c8310d', 1200),
  },
  {
    slug: 'preconstruction',
    title: 'Preconstruction',
    summary:
      'Early planning, scope development, budgeting support, constructability considerations, and project coordination.',
    description:
      'Preconstruction support that helps teams define scope, identify constraints, and enter the field with a clearer plan.',
    approach: [
      'Scope development and work packaging',
      'Constructability review',
      'Budget and schedule alignment support',
      'Early logistics and site planning',
    ],
    image: unsplash('photo-1487958449943-2429e8be8625', 1200),
  },
]
