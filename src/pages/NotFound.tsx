import { Button } from '../components/ui/Button'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFound() {
  usePageMeta(
    'Page Not Found | Prymas Contracting Inc.',
    'The requested page could not be found on the Prymas Contracting Inc. website demo.',
  )

  return (
    <section className="flex min-h-screen items-center bg-charcoal-950 px-5 pt-24 text-white">
      <div className="mx-auto max-w-3xl py-24">
        <p className="text-[11px] uppercase tracking-[0.32em] text-copper-300">404</p>
        <h1 className="mt-6 font-display text-6xl uppercase leading-none tracking-wide sm:text-8xl">
          Page not found.
        </h1>
        <p className="mt-6 max-w-xl text-white/70">
          The page you were looking for is not part of this demonstration website. Return home or
          start a project from the contact page.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button to="/">Back to Home</Button>
          <Button to="/contact" variant="outline">
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  )
}
