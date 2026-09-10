import { useState, type FormEvent } from 'react'
import type { ContactFormValues } from './contactTypes'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'
import { validateContactForm } from '../../lib/validateContactForm'

const projectTypes = [
  'General Contracting',
  'Commercial Construction',
  'Industrial Construction',
  'Renovation',
  'Build-Out',
  'Construction Management',
  'Other',
]

const emptyValues: ContactFormValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  scope: '',
  message: '',
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyValues)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const update = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateContactForm(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    window.setTimeout(() => {
      setStatus('success')
    }, 700)
  }

  if (status === 'success') {
    return (
      <div
        className="border border-charcoal-900/10 bg-white p-8 sm:p-10"
        data-testid="contact-success"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-copper-600">
          Demo submission
        </p>
        <h2 className="mt-4 font-display text-4xl uppercase tracking-wide text-charcoal-950">
          Message received.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-charcoal-600">
          This is a frontend demonstration, so the form does not send a live message. In a
          production website, this step would deliver the inquiry to the project team.
        </p>
        <Button
          className="mt-8"
          onClick={() => {
            setValues(emptyValues)
            setErrors({})
            setStatus('idle')
          }}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border border-charcoal-900/10 bg-white p-6 sm:p-10"
      aria-label="Start a project"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          value={values.name}
          error={errors.name}
          onChange={update}
          required
        />
        <Field
          label="Company"
          name="company"
          value={values.company}
          error={errors.company}
          onChange={update}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={update}
          required
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={update}
        />
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-charcoal-800">
            Project Type <span className="text-copper-600">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(event) => update('projectType', event.target.value)}
            className={inputClass(Boolean(errors.projectType))}
            aria-invalid={Boolean(errors.projectType)}
          >
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && <ErrorText message={errors.projectType} />}
        </div>
        <Field
          label="Project Location"
          name="location"
          value={values.location}
          error={errors.location}
          onChange={update}
        />
        <div className="sm:col-span-2">
          <Field
            label="Estimated Project Scope"
            name="scope"
            value={values.scope}
            error={errors.scope}
            onChange={update}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal-800">
            Message <span className="text-copper-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => update('message', event.target.value)}
            className={inputClass(Boolean(errors.message))}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <ErrorText message={errors.message} />}
        </div>
      </div>
      <p className="mt-6 text-xs leading-5 text-charcoal-500">
        This form is a visual demonstration and does not submit live project inquiries.
      </p>
      <Button type="submit" className="mt-6" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Start a Project'}
      </Button>
    </form>
  )
}

type FieldProps = {
  label: string
  name: keyof ContactFormValues
  value: string
  error?: string
  onChange: (name: keyof ContactFormValues, value: string) => void
  type?: string
  required?: boolean
}

function Field({ label, name, value, error, onChange, type = 'text', required }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-charcoal-800">
        {label}
        {required ? <span className="text-copper-600"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        className={inputClass(Boolean(error))}
        aria-invalid={Boolean(error)}
        required={required}
      />
      {error && <ErrorText message={error} />}
    </div>
  )
}

function inputClass(hasError: boolean) {
  return cn(
    'w-full border bg-concrete-50 px-4 py-3 text-sm text-charcoal-900 outline-none transition-colors focus:border-copper-500',
    hasError ? 'border-copper-600' : 'border-charcoal-900/15',
  )
}

function ErrorText({ message }: { message: string }) {
  return (
    <p className="mt-2 text-sm text-copper-700" role="alert">
      {message}
    </p>
  )
}
