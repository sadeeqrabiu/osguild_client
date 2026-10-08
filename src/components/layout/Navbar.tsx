import { useEffect, useState } from 'react'
import { GITHUB_STARS, NAV_ITEMS } from '../../data/navigation'
import { useScrolledPast } from '../../hooks/useScrolledPast'
import { ButtonLink } from '../primitives/Button'
import { ChevronDown, CloseIcon, GitHubIcon, MenuIcon, SupabaseLogo } from '../icons'
import { ThemeToggle } from './ThemeToggle'
import './Navbar.css'

export function Navbar() {
  const isScrolled = useScrolledPast(8)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // While the drawer is open, hold the page still and let Escape close it.
  useEffect(() => {
    if (!isMenuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isMenuOpen])

  return (
    <header className="navbar" data-scrolled={isScrolled || undefined}>
      <div className="navbar__inner">
        <a className="navbar__brand" href="#top">
          <SupabaseLogo className="navbar__logo" />
          <span className="navbar__wordmark">supabase</span>
        </a>

        <nav className="navbar__nav" aria-label="Main">
          <ul className="navbar__links">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a className="navbar__link" href={item.href}>
                  {item.label}
                  {item.hasMenu && <ChevronDown className="navbar__chevron" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <a className="navbar__stars" href="#github">
            <GitHubIcon className="navbar__stars-mark" />
            <span>{GITHUB_STARS}</span>
          </a>

          <ThemeToggle />

          <ButtonLink className="navbar__sign-in" variant="secondary" size="sm" href="#sign-in">
            Sign in
          </ButtonLink>
          <ButtonLink className="navbar__cta" variant="primary" size="sm" href="#start">
            Start your project
          </ButtonLink>
        </div>

        <button
          type="button"
          className="navbar__menu-button"
          aria-expanded={isMenuOpen}
          aria-controls="navbar-drawer"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div className="navbar__drawer" id="navbar-drawer" data-open={isMenuOpen || undefined}>
        <div className="navbar__drawer-inner">
          <nav aria-label="Mobile">
            <ul className="navbar__drawer-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    className="navbar__drawer-link"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__drawer-actions">
            <ButtonLink variant="secondary" href="#sign-in">
              Sign in
            </ButtonLink>
            <ButtonLink variant="primary" href="#start">
              Start your project
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  )
}
