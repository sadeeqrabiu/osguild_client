import { ButtonLink } from '../primitives/Button'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="display hero__headline">
            Build your confidence
            <br />
            <span className="display__muted">Become a Builder in Open Source</span>
          </h1>

          <div className="hero__actions">
            <ButtonLink href="#start">Start your project</ButtonLink>
            <ButtonLink variant="secondary" href="#demo">
              Request a demo
            </ButtonLink>
          </div>
        </div>

        <p className="lead hero__lead">
          Access frontier models, learn through real-world simulations,
          and get mentorship to build your confidence and contribute to open source.
        </p>
      </div>
    </section>
  )
}
