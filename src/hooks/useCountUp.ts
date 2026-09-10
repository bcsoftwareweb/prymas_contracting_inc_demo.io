import { useEffect, useState } from 'react'

export function useCountUp(target: number, enabled: boolean, duration = 1400) {
  const [value, setValue] = useState(enabled ? target : 0)

  useEffect(() => {
    if (!enabled) return

    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(target * eased))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, enabled, duration])

  return value
}
