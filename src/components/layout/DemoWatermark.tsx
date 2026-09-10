import { BC_LOGO_LIGHT } from '../../config'

export function DemoWatermark() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[15] overflow-hidden"
      aria-hidden="true"
    >
      <img
        src={BC_LOGO_LIGHT}
        alt=""
        className="absolute left-1/2 top-[42%] w-[min(72vw,640px)] -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] opacity-[0.07] mix-blend-multiply select-none sm:w-[min(58vw,720px)]"
      />
    </div>
  )
}
