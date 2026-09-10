import { useState } from 'react'
import { cn } from '../../lib/cn'

type ImageWithFallbackProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}

export function ImageWithFallback({
  src,
  alt,
  className,
  imgClassName,
}: ImageWithFallbackProps) {
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading')

  return (
    <div className={cn('relative overflow-hidden bg-charcoal-800', className)}>
      {status === 'loading' && (
        <div
          className="absolute inset-0 animate-pulse bg-charcoal-700"
          aria-hidden="true"
        />
      )}
      {status === 'error' ? (
        <div className="flex h-full min-h-[180px] items-center justify-center bg-charcoal-800 px-6 text-center text-sm text-concrete-300">
          Image unavailable
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setStatus('ok')}
          onError={() => setStatus('error')}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-500',
            status === 'ok' ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
        />
      )}
    </div>
  )
}
