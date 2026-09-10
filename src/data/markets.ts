import { unsplash } from './images'

export type Market = {
  slug: string
  title: string
  summary: string
  image: string
}

export const markets: Market[] = [
  {
    slug: 'commercial',
    title: 'Commercial',
    summary: 'Offices, mixed commercial properties, and business environments throughout the city.',
    image: unsplash('photo-1486406146926-c627a92ad1ab', 1400),
  },
  {
    slug: 'industrial',
    title: 'Industrial',
    summary: 'Production, operations, and industrial facilities that need durable, practical construction.',
    image: unsplash('photo-1581094794329-c8112a89af12', 1400),
  },
  {
    slug: 'retail',
    title: 'Retail',
    summary: 'Storefronts, tenant spaces, and retail environments prepared for opening and daily traffic.',
    image: unsplash('photo-1441986300917-64674bd600d8', 1400),
  },
  {
    slug: 'warehousing-distribution',
    title: 'Warehousing & Distribution',
    summary: 'Warehouse, logistics, and distribution facilities built around movement, storage, and operations.',
    image: unsplash('photo-1586528116311-ad8dd3c8310d', 1400),
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    summary: 'Guest-facing renovations and back-of-house upgrades that have to stay coordinated and clean.',
    image: unsplash('photo-1566073771259-6a8506099945', 1400),
  },
  {
    slug: 'multifamily',
    title: 'Multifamily',
    summary: 'Residential buildings and common areas requiring organized renovation and construction support.',
    image: unsplash('photo-1545324418-cc1a3fa10c00', 1400),
  },
  {
    slug: 'renovation-adaptive-reuse',
    title: 'Renovation & Adaptive Reuse',
    summary: 'Existing buildings brought forward through modernization, reuse, and careful field coordination.',
    image: unsplash('photo-1448630360428-65456885c650', 1400),
  },
]
