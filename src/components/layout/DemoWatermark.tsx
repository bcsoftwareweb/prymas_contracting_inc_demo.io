import { BC_LOGO_DARK } from '../../config'
import { cn } from '../../lib/cn'

type DemoWatermarkProps = {
  className?: string
}

export function DemoWatermark({ className }: DemoWatermarkProps) {
  return (
    <img
      src={BC_LOGO_DARK}
      alt=""
      aria-hidden="true"
      data-testid="bc-hero-watermark"
      className={cn(
        'pointer-events-none absolute right-5 top-[16%] z-10 w-[170px] select-none opacity-[0.45] sm:right-8 sm:top-[18%] sm:w-[200px] lg:right-10 lg:w-[220px]',
        className,
      )}
    />
  )
}
