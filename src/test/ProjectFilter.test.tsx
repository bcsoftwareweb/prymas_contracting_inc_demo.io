import { fireEvent, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectsSection } from '../components/home/ProjectsSection'
import { renderWithRouter } from './renderWithRouter'

describe('Project filtering', () => {
  it('renders project cards and filters the showcase', () => {
    renderWithRouter(<ProjectsSection showAllLink={false} />)

    expect(screen.getByTestId('project-card-maspeth-industrial-facility')).toBeInTheDocument()
    expect(screen.getByTestId('project-card-queens-commercial-center')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('tab', { name: 'Retail' }))
    expect(screen.getByTestId('project-card-long-island-retail-development')).toBeInTheDocument()
    expect(screen.queryByTestId('project-card-maspeth-industrial-facility')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('tab', { name: 'All' }))
    expect(screen.getByTestId('project-card-maspeth-industrial-facility')).toBeInTheDocument()
  })
})
