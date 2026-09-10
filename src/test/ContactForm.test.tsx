import { act, fireEvent, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ContactForm } from '../components/contact/ContactForm'
import { validateContactForm } from '../lib/validateContactForm'
import { renderWithRouter } from './renderWithRouter'

describe('Contact form', () => {
  it('validates required fields', () => {
    const errors = validateContactForm({
      name: '',
      company: '',
      email: 'not-an-email',
      phone: '',
      projectType: '',
      location: '',
      scope: '',
      message: 'short',
    })

    expect(errors.name).toBeTruthy()
    expect(errors.email).toBeTruthy()
    expect(errors.projectType).toBeTruthy()
    expect(errors.message).toBeTruthy()
  })

  it('shows validation messages and a demo success state', () => {
    vi.useFakeTimers()
    renderWithRouter(<ContactForm />)

    fireEvent.click(screen.getByRole('button', { name: 'Start a Project' }))
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText(/Name/), { target: { value: 'Alex Rivera' } })
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'alex@example.com' } })
    fireEvent.change(screen.getByLabelText(/Project Type/), {
      target: { value: 'Commercial Construction' },
    })
    fireEvent.change(screen.getByLabelText(/Message/), {
      target: { value: 'We are exploring a commercial build-out in Queens.' },
    })

    fireEvent.click(screen.getByRole('button', { name: 'Start a Project' }))
    act(() => {
      vi.runAllTimers()
    })

    expect(screen.getByTestId('contact-success')).toBeInTheDocument()
    expect(screen.getByText('Message received.')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
