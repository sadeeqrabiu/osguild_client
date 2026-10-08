export type NavItem = {
  label: string
  href: string
  /** Renders the disclosure chevron. The menus themselves are out of scope for this build. */
  hasMenu?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Product', href: '#product', hasMenu: true },
  { label: 'Developers', href: '#developers', hasMenu: true },
  { label: 'Solutions', href: '#solutions', hasMenu: true },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
  { label: 'Blog', href: '#blog' },
]

/** Shown beside the GitHub mark in the nav and again in the open-source section. */
export const GITHUB_STARS = '111.1K'
