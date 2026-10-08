import { CERTIFICATIONS } from '../../data/footer'
import { CheckIcon } from '../icons'
import { ButtonLink } from '../primitives/Button'
import { Reveal } from '../primitives/Reveal'
import './ClosingCta.css'

export function ClosingCta() {
  return (
    <section className="closing section" id="start">
      <div className="shell">
        <Reveal>
          <div className="closing__pitch">
            <h2 className="heading-2 closing__headline">
              <span className="display__muted">Build in a weekend,</span> scale to millions
            </h2>

            <div className="closing__actions">
              <ButtonLink href="#start-project">Start your project</ButtonLink>
              <ButtonLink variant="secondary" href="#demo">
                Request a demo
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="closing__trust">
            <p className="closing__trust-lead">
              We protect your data.{' '}
              <a className="closing__trust-link" href="#security">
                More on Security
              </a>
            </p>

            <ul className="closing__certs">
              {CERTIFICATIONS.map((certification) => (
                <li key={certification.name}>
                  <CheckIcon />
                  <strong>{certification.name}</strong> {certification.status}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
