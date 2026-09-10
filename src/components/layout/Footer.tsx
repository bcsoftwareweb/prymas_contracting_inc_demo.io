import { Link } from 'react-router-dom'
import { navItems } from '../../data/nav'
import { SITE_EMAIL, SITE_LOCATION, SITE_NAME, SITE_PHONE } from '../../config'
import { formatPhoneHref } from '../../lib/cn'
import { Logo } from '../ui/Logo'

const socials = [
  { name: 'LinkedIn', icon: LinkedInIcon },
  { name: 'Instagram', icon: InstagramIcon },
  { name: 'Facebook', icon: FacebookIcon },
]

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
            {socials.map((social) => (
              <span
                key={social.name}
                title={`${social.name} demo placeholder`}
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-copper-400 hover:text-white"
                aria-label={`${social.name} placeholder`}
              >
                <social.icon />
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

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M22.68 0H1.32A1.32 1.32 0 0 0 0 1.32v21.36A1.32 1.32 0 0 0 1.32 24h11.5v-9.29H9.69V11.1h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.33 0 2.47.1 2.8.14v3.24h-1.92c-1.5 0-1.8.72-1.8 1.77v2.32h3.59l-.47 3.61h-3.12V24h6.12A1.32 1.32 0 0 0 24 22.68V1.32A1.32 1.32 0 0 0 22.68 0z" />
    </svg>
  )
}
