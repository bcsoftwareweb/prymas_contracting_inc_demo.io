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
        'pointer-events-none absolute right-4 top-[18%] z-10 w-[min(48vw,420px)] select-none opacity-[0.42] sm:right-8 sm:top-[20%] sm:w-[min(40vw,480px)] lg:right-12 lg:w-[min(36vw,520px)]',
        className,
      )}
    />
  )
}
