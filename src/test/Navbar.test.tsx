import { fireEvent, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from '../components/layout/Navbar'
import { renderWithRouter } from './renderWithRouter'

describe('Navbar', () => {
  it('renders primary navigation links and the start project CTA', () => {
    renderWithRouter(<Navbar />)

    expect(screen.getByRole('link', { name: 'Prymas Contracting Inc. home' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'About' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Services' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Start a Project' }).length).toBeGreaterThan(0)
  })

  it('opens and closes the mobile navigation', () => {
    renderWithRouter(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    fireEvent.click(toggle)

    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toHaveTextContent('Our Process')

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
