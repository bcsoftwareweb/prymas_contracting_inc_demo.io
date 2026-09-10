import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navItems } from '../../data/nav'
import { useLockBody } from '../../hooks/useLockBody'
import { useScrolled } from '../../hooks/useScrolled'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(20)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || open

  useLockBody(open)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-b border-white/10 bg-charcoal-950/95 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-charcoal-950"
      >
        Skip to content
      </a>
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
        <div onClick={() => setOpen(false)}>
          <Logo />
        </div>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'relative py-1 text-[12px] font-medium uppercase tracking-[0.22em] text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-copper-400 after:transition-all hover:text-white hover:after:w-full',
                  isActive && 'nav-link-active text-white after:w-full',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button to="/contact">Start a Project</Button>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-white/20 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                'absolute left-0 h-px w-5 bg-white transition-all',
                open ? 'top-1.5 rotate-45' : 'top-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-1.5 h-px w-5 bg-white transition-opacity',
                open ? 'opacity-0' : 'opacity-100',
              )}
            />
            <span
              className={cn(
                'absolute left-0 h-px w-5 bg-white transition-all',
                open ? 'top-1.5 -rotate-45' : 'top-3',
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          'fixed inset-0 z-40 bg-charcoal-950 transition-transform duration-300 lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        hidden={!open}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-24">
          <nav className="flex flex-1 flex-col gap-2" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'border-b border-white/10 py-4 font-display text-4xl uppercase tracking-wide text-white/70',
                    isActive && 'text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Button to="/contact" className="mt-8 w-full" onClick={() => setOpen(false)}>
            Start a Project
          </Button>
        </div>
      </div>
    </header>
  )
}
