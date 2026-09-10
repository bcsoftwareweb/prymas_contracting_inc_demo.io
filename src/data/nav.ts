export type NavItem = {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Markets', to: '/markets' },
  { label: 'Projects', to: '/projects' },
  { label: 'Our Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]
