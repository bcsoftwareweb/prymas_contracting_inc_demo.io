import { BC_LOGO_DARK, BC_LOGO_LIGHT } from '../../config'
import { cn } from '../../lib/cn'

type DemoWatermarkProps = {
  className?: string
  tone?: 'light' | 'dark'
  variant?: 'hero' | 'section'
}

export function DemoWatermark({
  className,
  tone = 'dark',
  variant = 'hero',
}: DemoWatermarkProps) {
  return (
    <img
      src={tone === 'dark' ? BC_LOGO_DARK : BC_LOGO_LIGHT}
      alt=""
      aria-hidden="true"
      data-testid="bc-hero-watermark"
      className={cn(
        'pointer-events-none absolute z-10 w-[170px] select-none sm:w-[200px] lg:w-[220px]',
        variant === 'hero'
          ? 'right-5 top-[16%] opacity-[0.45] sm:right-8 sm:top-[18%] lg:right-10'
          : 'right-5 top-1/2 -translate-y-1/2 sm:right-8 lg:right-10',
        variant === 'section' && tone === 'dark' && 'opacity-[0.32]',
        variant === 'section' && tone === 'light' && 'opacity-[0.12]',
        className,
      )}
    />
  )
}
