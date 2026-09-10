import { Link } from 'react-router-dom'
import { navItems } from '../../data/nav'
import { SITE_EMAIL, SITE_LOCATION, SITE_NAME, SITE_PHONE } from '../../config'
import { formatPhoneHref } from '../../lib/cn'
import { Logo } from '../ui/Logo'

const socials = ['LinkedIn', 'Instagram', 'Facebook']

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-20">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
            {SITE_NAME} is presented as a fictional example company for this website
            demonstration. Construction, contracting, and project content shown here is
            representative sample material.
          </p>
          <p className="mt-6 text-sm text-white/80">{SITE_LOCATION}</p>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-copper-300">
            Navigation
          </h2>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-copper-300">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <a className="hover:text-white" href={formatPhoneHref(SITE_PHONE)}>
                {SITE_PHONE}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`mailto:${SITE_EMAIL}`}>
                {SITE_EMAIL}
              </a>
            </li>
            <li className="text-white/45">Demo contact details for presentation only.</li>
          </ul>
          <div className="mt-8 flex gap-3">
            {socials.map((name) => (
              <span
                key={name}
                title="Demo placeholder"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-[10px] uppercase tracking-[0.16em] text-white/50"
                aria-label={`${name} placeholder`}
              >
                {name.slice(0, 2)}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 {SITE_NAME}. All rights reserved.</p>
          <p>Website demo by B&C Software & Web.</p>
        </div>
      </div>
    </footer>
  )
}
