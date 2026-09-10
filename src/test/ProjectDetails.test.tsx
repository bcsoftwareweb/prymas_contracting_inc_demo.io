import { screen } from '@testing-library/react'
import { Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { ProjectDetails } from '../pages/ProjectDetails'
import { renderWithRouter } from './renderWithRouter'

function renderProject(route: string) {
  return renderWithRouter(
    <Routes>
      <Route path="/projects/:slug" element={<ProjectDetails />} />
    </Routes>,
    route,
  )
}

describe('Project details', () => {
  it('renders a representative project case study', () => {
    renderProject('/projects/maspeth-industrial-facility')

    expect(
      screen.getByRole('heading', { name: 'Maspeth Industrial Facility' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/Maspeth, Queens, NY/).length).toBeGreaterThan(0)
    expect(screen.getByText('Renovation & Facility Improvements')).toBeInTheDocument()
    expect(screen.getByText('Project overview')).toBeInTheDocument()
    expect(screen.getByText('Related projects')).toBeInTheDocument()
  })

  it('renders the 404 state for an unknown project', () => {
    renderProject('/projects/does-not-exist')
    expect(screen.getByRole('heading', { name: 'Page not found.' })).toBeInTheDocument()
  })
})
