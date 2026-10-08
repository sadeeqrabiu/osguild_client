import { useId, useState } from 'react'
import { FOOTER_COLUMNS, SOCIAL_LINKS } from '../../data/footer'
import { Button } from '../primitives/Button'
import { SupabaseLogo } from '../icons'
import './Footer.css'

export function Footer() {
  const emailId = useId()
  const [hasSubscribed, setHasSubscribed] = useState(false)

  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__brand">
          <a className="footer__logo" href="#top">
            <SupabaseLogo />
            <span>supabase</span>
          </a>

          <ul className="footer__socials">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} aria-label={label}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>

          <p className="footer__newsletter-copy">Get product updates and news from Supabase.</p>

          <form
            className="footer__newsletter"
            onSubmit={(event) => {
              // No backend in this build; confirm in place rather than navigating.
              event.preventDefault()
              setHasSubscribed(true)
            }}
          >
            <label className="footer__visually-hidden" htmlFor={emailId}>
              Email address
            </label>
            <input
              id={emailId}
              className="footer__input"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <Button type="submit" size="sm">
              {hasSubscribed ? 'Subscribed' : 'Subscribe'}
            </Button>
          </form>
        </div>

        <nav className="footer__columns" aria-label="Footer">
          {FOOTER_COLUMNS.map((column) => (
            <div className="footer__column" key={column.heading}>
              <h2 className="footer__heading">{column.heading}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a className="footer__link" href={`#${link.toLowerCase().replace(/\W+/g, '-')}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  )
}
