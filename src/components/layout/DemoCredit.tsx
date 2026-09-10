import { BC_CREDIT, BC_LOGO_DARK } from '../../config'

export function DemoCredit() {
  return (
    <aside
      className="fixed bottom-4 right-4 z-40 max-w-[17.5rem] border border-white/15 bg-charcoal-950/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:bottom-5 sm:right-5 sm:max-w-[22rem] sm:p-4"
      aria-label={BC_CREDIT}
      data-testid="bc-demo-credit"
    >
      <div className="flex items-center gap-3">
        <img
          src={BC_LOGO_DARK}
          alt="B&C Software & Web"
          className="h-10 w-auto shrink-0 sm:h-12"
        />
        <p className="text-[11px] leading-4 text-white/80 sm:text-xs sm:leading-5">
          {BC_CREDIT}
        </p>
      </div>
    </aside>
  )
}
