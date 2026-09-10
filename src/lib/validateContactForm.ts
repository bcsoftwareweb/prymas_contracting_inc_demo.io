import type { ContactFormValues } from '../components/contact/contactTypes'

export function validateContactForm(values: ContactFormValues) {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (values.phone && !/^[\d\s()+.-]{7,}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!values.projectType) {
    errors.projectType = 'Please select a project type.'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Please add a short project message.'
  }

  return errors
}
