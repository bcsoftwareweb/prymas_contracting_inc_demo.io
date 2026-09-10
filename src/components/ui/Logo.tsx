import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type LogoProps = {
  variant?: 'light' | 'dark'
  compact?: boolean
}

export function Logo({ variant = 'light', compact = false }: LogoProps) {
  const color = variant === 'light' ? 'text-white' : 'text-charcoal-950'

  return (
    <Link
      to="/"
      className={cn('group flex items-center gap-3', color)}
      aria-label="Prymas Contracting Inc. home"
    >
      <span
        className={cn(
          'flex h-10 w-10 items-center justify-center border',
          variant === 'light' ? 'border-white/30' : 'border-charcoal-900/20',
        )}
        aria-hidden="true"
      >
        <span className="font-display text-xl font-semibold tracking-wide">P</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[26px] font-semibold tracking-[0.18em]">
          PRYMAS
        </span>
        {!compact && (
          <span
            className={cn(
              'mt-1 text-[10px] uppercase tracking-[0.32em]',
              variant === 'light' ? 'text-white/70' : 'text-charcoal-600',
            )}
          >
            Contracting Inc.
          </span>
        )}
      </span>
    </Link>
  )
}
