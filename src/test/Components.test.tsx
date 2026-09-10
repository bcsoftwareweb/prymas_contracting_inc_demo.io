import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServiceCard } from '../components/services/ServiceCard'
import { services } from '../data/services'
import { Footer } from '../components/layout/Footer'
import { renderWithRouter } from './renderWithRouter'

describe('Reusable components', () => {
  it('renders a service card with learn more', () => {
    renderWithRouter(<ServiceCard service={services[0]} />)
    expect(screen.getByText('General Contracting')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders footer navigation and demo credit', () => {
    renderWithRouter(<Footer />)
    expect(screen.getByText('Website demo by B&C Software & Web.')).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Prymas Contracting Inc/)).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn placeholder')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram placeholder')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook placeholder')).toBeInTheDocument()
  })
})
