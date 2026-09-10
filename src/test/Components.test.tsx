import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServiceCard } from '../components/services/ServiceCard'
import { services } from '../data/services'
import { DemoCredit } from '../components/layout/DemoCredit'
import { DemoWatermark } from '../components/layout/DemoWatermark'
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
    expect(
      screen.getByText('This demo and design belongs to B&C Software & Web'),
    ).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Prymas Contracting Inc/)).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn placeholder')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram placeholder')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook placeholder')).toBeInTheDocument()
  })

  it('renders the B&C watermark and ownership badge', () => {
    renderWithRouter(
      <>
        <DemoWatermark />
        <DemoCredit />
      </>,
    )

    expect(screen.getByTestId('bc-demo-credit')).toHaveTextContent(
      'This demo and design belongs to B&C Software & Web',
    )
    expect(screen.getAllByAltText('B&C Software & Web').length).toBeGreaterThan(0)
  })
})
