import { Reveal } from '../primitives/Reveal'
import btrustWhite from '../../assets/Btrust-white.png'
import btrustBlack from '../../assets/Btrust-black.png'
import './LogoWall.css'

export function LogoWall() {
  return (
    <section className="logo-wall">
      <div className="shell">
        <Reveal>
          <p className="logo-wall__label">Trusted and supported by</p>
        </Reveal>
      </div>

      <div className="logo-wall__band">
        <div className="logo-wall__container">
          <a
            href="https://www.btrust.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="logo-wall__link"
            aria-label="Btrust"
          >
            <img
              src={btrustWhite}
              alt="Btrust"
              className="logo-wall__logo logo-wall__logo--white"
            />
            <img
              src={btrustBlack}
              alt="Btrust"
              className="logo-wall__logo logo-wall__logo--black"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

