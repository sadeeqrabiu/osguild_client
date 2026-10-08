import { COMPANIES, type Company } from '../../data/companies'
import { GitHubIcon } from '../icons'
import { Reveal } from '../primitives/Reveal'
import './LogoWall.css'

export function LogoWall() {
  return (
    <section className="logo-wall">
      <div className="shell">
        <Reveal>
          <p className="logo-wall__label">Trusted by fast-growing companies worldwide</p>
        </Reveal>
      </div>

      <div className="logo-wall__band">
        <ul className="logo-wall__grid">
          {COMPANIES.map((company) => (
            <li key={company.id}>
              <Wordmark company={company} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Wordmark({ company }: { company: Company }) {
  return (
    <span
      className="wordmark"
      style={{
        fontWeight: company.weight,
        letterSpacing: company.tracking,
        fontStyle: company.italic ? 'italic' : undefined,
      }}
    >
      {company.withGitHubMark && <GitHubIcon className="wordmark__mark" />}
      {company.label}
    </span>
  )
}
