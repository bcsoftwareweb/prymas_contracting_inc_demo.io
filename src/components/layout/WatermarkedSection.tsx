import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { DemoWatermark } from './DemoWatermark'

type WatermarkedSectionProps = {
  children: ReactNode
  className?: string
  tone?: 'light' | 'dark'
  variant?: 'hero' | 'section'
  id?: string
}

export function WatermarkedSection({
  children,
  className,
  tone = 'light',
  variant = 'section',
  id,
}: WatermarkedSectionProps) {
  return (
    <section id={id} className={cn('relative overflow-hidden', className)}>
      <DemoWatermark tone={tone} variant={variant} />
      {children}
    </section>
  )
}
