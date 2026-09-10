import { cn } from '../../lib/cn'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'dark',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-4 text-[11px] font-semibold uppercase tracking-[0.32em]',
            tone === 'dark' ? 'text-copper-600' : 'text-copper-300',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-display text-4xl leading-none tracking-wide uppercase sm:text-5xl lg:text-[56px]',
          tone === 'dark' ? 'text-charcoal-950' : 'text-white',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-5 max-w-2xl text-base leading-7 sm:text-lg',
            align === 'center' && 'mx-auto',
            tone === 'dark' ? 'text-charcoal-600' : 'text-white/70',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
