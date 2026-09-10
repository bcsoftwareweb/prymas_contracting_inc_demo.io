import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'light'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  type?: 'button' | 'submit'
  variant?: ButtonVariant
  className?: string
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-copper-500 text-white hover:bg-copper-400 focus-visible:bg-copper-400',
  secondary:
    'bg-white text-charcoal-950 hover:bg-concrete-100 focus-visible:bg-concrete-100',
  outline:
    'border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10',
  light:
    'border border-charcoal-900/20 bg-transparent text-charcoal-900 hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-white',
}

export function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  className,
  onClick,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
