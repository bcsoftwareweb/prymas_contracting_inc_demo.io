import { BC_CREDIT, BC_LOGO_LIGHT } from '../../config'

export function DemoCredit() {
  return (
    <aside
      className="fixed bottom-4 right-4 z-40 w-[10.75rem] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:bottom-5 sm:right-5 sm:w-[12.5rem]"
      aria-label={BC_CREDIT}
      data-testid="bc-demo-credit"
    >
      <img
        src={BC_LOGO_LIGHT}
        alt="B&C Software & Web"
        className="h-8 w-auto sm:h-9"
      />
      <p className="mt-3 text-[10px] leading-4 text-neutral-500 sm:text-[11px] sm:leading-[1.35]">
        {BC_CREDIT}
      </p>
    </aside>
  )
}
