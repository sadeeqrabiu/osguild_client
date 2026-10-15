import type { ReactElement } from 'react'
import {
  CULTURE_GRID_CELLS,
  PATHWAY_PHASES,
  REAL_WORLD_REPOS,
  type ProductVisual as ProductVisualId,
} from '../../data/products'
import './ProductVisuals.css'

/*
 * Minimalist illustrations for the OSGuild bento cards.
 *
 * Each card carries exactly ONE clean, iconic, abstract illustration in pure vector/markup,
 * strictly matching the minimalist aesthetic of Supabase's original design.
 */

/* 1. Frontier Model Access (Postgres-style Stacked Rotated Frames) ---------- */
function FrontierModelsVisual() {
  return (
    <div className="visual visual--frontier" aria-hidden="true">
      <span className="visual__frame visual__frame--back" />
      <span className="visual__frame visual__frame--mid" />
      <span className="visual__frame">
        <svg viewBox="0 0 160 160" className="visual__mark">
          <g fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Geometric neural crystal / frontier model core */}
            <polygon points="80,24 132,60 132,100 80,136 28,100 28,60" />
            <polygon points="80,50 108,70 108,90 80,110 52,90 52,70" />
            <path d="M80 24v26M132 60l-24 10M132 100l-24-10M80 136v-26M28 100l24-10M28 60l24 10" />
            <circle cx="80" cy="80" r="4.5" fill="currentColor" stroke="none" />
          </g>
        </svg>
      </span>
    </div>
  )
}

/* 2. MCP Codebase Guide (Edge Functions-style Terminal + Wireframe Globe) -- */
function McpGuideVisual() {
  return (
    <div className="visual visual--mcp" aria-hidden="true">
      <div className="visual__terminal">
        <span className="visual__prompt">$</span> osguild{' '}
        <span className="visual__command">mcp guide</span>
      </div>

      <svg viewBox="0 0 220 180" className="visual__globe">
        <g fill="none" stroke="currentColor" strokeWidth="0.75">
          <circle cx="110" cy="105" r="78" />
          <ellipse cx="110" cy="105" rx="30" ry="78" />
          <ellipse cx="110" cy="105" rx="58" ry="78" />
          <path d="M32 105h156M44 62h132M44 148h132" />
        </g>
        {/* Codebase context edges fanning out to repository subsystems */}
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M150 88 110 118 68 140" />
          <path d="M110 118 96 160" />
        </g>
        <g fill="currentColor">
          <circle cx="150" cy="88" r="3.5" />
          <circle cx="110" cy="118" r="2.5" />
          <circle cx="68" cy="140" r="2.5" />
          <circle cx="96" cy="160" r="2.5" />
        </g>
      </svg>
    </div>
  )
}

/* 3. Six-Week Contributor Pathway (Vector-style Isometric 3D Cube) --------- */
function SixWeekPathwayVisual() {
  return (
    <div className="visual visual--pathway" aria-hidden="true">
      <svg viewBox="0 0 220 170" className="visual__cube">
        <g fill="none" stroke="currentColor" strokeWidth="0.9">
          <path d="M110 28 178 62v66l-68 34-68-34V62z" />
          <path d="M42 62l68 34 68-34M110 96v66" />
        </g>
        {/* 6 milestone coordinates across the 3D pathway */}
        <g fill="currentColor">
          <circle cx="78" cy="62" r="2.8" />
          <circle cx="142" cy="56" r="2.2" />
          <circle cx="110" cy="96" r="3" />
          <circle cx="82" cy="120" r="2.4" />
          <circle cx="138" cy="116" r="2.8" />
          <circle cx="110" cy="154" r="3.4" />
        </g>
      </svg>

      <ul className="vector__providers">
        {PATHWAY_PHASES.map((phase) => (
          <li key={phase}>
            <span className="vector__dot" />
            {phase}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* 4. Fork Simulation Environment (Blueprint Grid + Clean Git Branch) ------- */
function ForkSimulationVisual() {
  return (
    <div className="visual visual--fork" aria-hidden="true">
      <div className="visual__terminal">
        <span className="visual__prompt">$</span> git{' '}
        <span className="visual__command">fork --simulate</span>
      </div>

      <svg viewBox="0 0 220 120" className="visual__fork-tree">
        {/* Upstream main track */}
        <line x1="20" y1="36" x2="200" y2="36" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="50" cy="36" r="3" fill="currentColor" />
        <circle cx="100" cy="36" r="3" fill="currentColor" />
        <circle cx="170" cy="36" r="3" fill="currentColor" />

        {/* Branch curve into sandbox fork */}
        <path d="M50 36 C80 36, 75 86, 110 86 L190 86" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="110" cy="86" r="4" fill="currentColor" />
        <circle cx="150" cy="86" r="3.5" fill="currentColor" />
        <circle cx="185" cy="86" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

/* 5. Open-Source Culture & Norms (Authentication-style Over-width Grid) ---- */
function CultureNormsVisual() {
  return (
    <div className="visual visual--culture" aria-hidden="true">
      <div className="auth-grid">
        {CULTURE_GRID_CELLS.map((cell, index) => (
          <div
            key={index}
            className={cell ? 'auth-grid__cell' : 'auth-grid__cell auth-grid__cell--masked'}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  )
}

/* 6. Mentorship & Code Review (Realtime-style Blueprint + Bubble + Cursors) - */
function MentorshipReviewVisual() {
  return (
    <div className="visual visual--mentorship" aria-hidden="true">
      <span className="realtime__bubble">
        <i />
        <i />
        <i />
      </span>

      <svg viewBox="0 0 24 24" className="realtime__cursor realtime__cursor--a">
        <path d="M5 2.5 19 11l-6.5 1.6L9.5 19z" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 24 24" className="realtime__cursor realtime__cursor--b">
        <path d="M5 2.5 19 11l-6.5 1.6L9.5 19z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

/* 7. Real-World Contribution Pathway (Data APIs-style Dashed Wire Rows) ---- */
function RealWorldVisual() {
  return (
    <div className="visual visual--real-world" aria-hidden="true">
      <ul className="data-api__rows">
        {REAL_WORLD_REPOS.map((item) => (
          <li className="data-api__row" key={item.name}>
            <span className="data-api__table">
              <GitPullGlyph />
              {item.name}
            </span>
            <span className="data-api__wire" />
            <span className="data-api__endpoint">
              .../pull/<b>{item.pr}</b>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function GitPullGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="data-api__glyph">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M6 8.5v7" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M6 12a6 6 0 0 1 6-6h2" />
      <path d="m15 3 3 3-3 3" />
      <path d="M18 15.5V11" />
    </svg>
  )
}

const VISUALS: Record<ProductVisualId, () => ReactElement> = {
  frontierModels: FrontierModelsVisual,
  mcpGuide: McpGuideVisual,
  pathway: SixWeekPathwayVisual,
  forkSimulation: ForkSimulationVisual,
  cultureNorms: CultureNormsVisual,
  mentorshipReview: MentorshipReviewVisual,
  realWorld: RealWorldVisual,
}

export function ProductVisual({ visual }: { visual: ProductVisualId }) {
  const Visual = VISUALS[visual]
  return <Visual />
}
