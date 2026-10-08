import { GITHUB_STARS } from '../../data/navigation'
import { GitHubIcon } from '../icons'
import { ButtonLink } from '../primitives/Button'
import { DotMatrix } from '../primitives/DotMatrix'
import { Reveal } from '../primitives/Reveal'
import './OpenSource.css'

export function OpenSource() {
  return (
    <section className="open-source section" id="open-source">
      <div className="shell open-source__inner">
        <Reveal className="open-source__copy">
          <h2 className="heading-2">Open source from day one</h2>

          <p className="body open-source__body">
            Supabase is built in the open because we believe great developer tools should be
            transparent, inspectable, and owned by the community. Read, contribute, self-host.
            You&rsquo;re never locked in, and always in control.
          </p>

          <ButtonLink variant="secondary" href="#github" leading={<GitHubIcon />}>
            View on GitHub
          </ButtonLink>
        </Reveal>

        <div className="open-source__count">
          <DotMatrix text={GITHUB_STARS} label={`${GITHUB_STARS} GitHub stars`} />
        </div>
      </div>
    </section>
  )
}
