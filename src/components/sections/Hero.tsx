import { ButtonLink } from '../primitives/Button'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="display hero__headline">
            Build in a weekend
            <br />
            <span className="display__muted">Scale to millions</span>
          </h1>

          <div className="hero__actions">
            <ButtonLink href="#start">Start your project</ButtonLink>
            <ButtonLink variant="secondary" href="#demo">
              Request a demo
            </ButtonLink>
          </div>
        </div>

        <p className="lead hero__lead">
          Start your project with a Postgres database. Add Authentication, Data APIs, Edge
          Functions, Realtime Data, Storage, and Vector embeddings.
        </p>
      </div>
    </section>
  )
}
