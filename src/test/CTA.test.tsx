import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CTASection } from '../components/cta/CTASection'
import { Hero } from '../components/home/Hero'
import { Button } from '../components/ui/Button'
import { renderWithRouter } from './renderWithRouter'

describe('CTA buttons', () => {
  it('renders homepage hero CTAs', () => {
    renderWithRouter(<Hero />)
    expect(screen.getByRole('link', { name: 'Start a Project' })).toHaveAttribute('href', '/contact')
    expect(screen.getByRole('link', { name: 'Explore Our Work' })).toHaveAttribute('href', '/projects')
  })

  it('renders the major call-to-action links', () => {
    renderWithRouter(<CTASection />)
    expect(screen.getByRole('link', { name: 'Start a Project' })).toHaveAttribute('href', '/contact')
    expect(screen.getByRole('link', { name: 'Contact Prymas' })).toHaveAttribute('href', '/contact')
  })

  it('renders a reusable button link', () => {
    renderWithRouter(<Button to="/about">Learn more</Button>)
    expect(screen.getByRole('link', { name: 'Learn more' })).toHaveAttribute('href', '/about')
  })
})
