import { Reveal } from '../primitives/Reveal'
import { AFRICA_DOTS } from '../../data/africaDots'
import './FrameworkQuickstart.css'

interface Hub {
  id: string
  name: string
  cx: number
  cy: number
  delay: string
}

const STEP = 13.5
const OFFSET_X = 22
const OFFSET_Y = 22

const HUBS: Hub[] = [
  {
    id: 'seychelles',
    name: 'Seychelles',
    cx: 43 * STEP + OFFSET_X,
    cy: 25 * STEP + OFFSET_Y,
    delay: '0s',
  },
  {
    id: 'madagascar',
    name: 'Madagascar',
    cx: 38 * STEP + OFFSET_X,
    cy: 33 * STEP + OFFSET_Y,
    delay: '0.7s',
  },
  {
    id: 'mauritius',
    name: 'Mauritius',
    cx: 44 * STEP + OFFSET_X,
    cy: 34 * STEP + OFFSET_Y,
    delay: '1.4s',
  },
]

export function FrameworkQuickstart() {
  return (
    <section className="quickstart section" id="mission">
      <div className="shell quickstart__inner">
        {/* Left Column: Mission statement */}
        <div className="quickstart__copy">
          <Reveal>
            <h2 className="heading-2 quickstart__headline">
              <span className="display__muted">Targeting</span>
              <br />
              <span>Insular East Africa</span>
            </h2>

            <p className="lead quickstart__lead">
              We believe talent is everywhere, but opportunities are not. OSGuild aims to empower
              developers across Insular East Africa to participate in global open-source projects,
              build valuable skills, and create sustainable careers in FOSS.
            </p>
          </Reveal>
        </div>

        {/* Right Column: Dot Matrix Map of Africa */}
        <Reveal delay={120} className="quickstart__visual">
          <svg
            viewBox="0 0 650 620"
            className="quickstart__map-svg"
            role="img"
            aria-label="Dotted matrix map of Africa highlighting Mauritius, Madagascar, and Seychelles in Insular East Africa"
          >
            <defs>
              {/* Neon Glow Filter */}
              <filter id="hub-glow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="4.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="beacon-aura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4ade80" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#22c55e" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Base Africa continent dots */}
            <g className="quickstart__africa-dots">
              {AFRICA_DOTS.map(([col, row]) => (
                <circle
                  key={`${col}-${row}`}
                  cx={col * STEP + OFFSET_X}
                  cy={row * STEP + OFFSET_Y}
                  r="2.3"
                  className="quickstart__continent-dot"
                />
              ))}
            </g>

            {/* Insular East Africa Blinking Beacons */}
            {HUBS.map((hub) => (
              <g key={hub.id} className="quickstart__hub-marker" aria-label={hub.name}>
                {/* Outer pulse ripple wave 1 */}
                <circle
                  cx={hub.cx}
                  cy={hub.cy}
                  r="6"
                  className="quickstart__beacon-ripple"
                  style={{ animationDelay: hub.delay }}
                />

                {/* Outer pulse ripple wave 2 */}
                <circle
                  cx={hub.cx}
                  cy={hub.cy}
                  r="6"
                  className="quickstart__beacon-ripple quickstart__beacon-ripple--delayed"
                  style={{ animationDelay: `calc(${hub.delay} + 0.8s)` }}
                />

                {/* Luminous Aura Gradient Disc */}
                <circle
                  cx={hub.cx}
                  cy={hub.cy}
                  r="14"
                  fill="url(#beacon-aura)"
                  className="quickstart__beacon-aura"
                  style={{ animationDelay: hub.delay }}
                />

                {/* Glowing core dot */}
                <circle
                  cx={hub.cx}
                  cy={hub.cy}
                  r="5.5"
                  filter="url(#hub-glow)"
                  className="quickstart__beacon-core"
                  style={{ animationDelay: hub.delay }}
                />

                {/* Bright specular center */}
                <circle
                  cx={hub.cx}
                  cy={hub.cy}
                  r="2"
                  className="quickstart__beacon-center"
                />
              </g>
            ))}
          </svg>
        </Reveal>
      </div>
    </section>
  )
}
