import type { ReactElement } from 'react'
import {
  AUTH_GRID_CELLS,
  DATA_API_TABLES,
  VECTOR_PROVIDERS,
  type ProductVisual as ProductVisualId,
} from '../../data/products'
import './ProductVisuals.css'

/*
 * The illustration inside each bento card.
 *
 * Every one is drawn in markup rather than shipped as an image, so they follow
 * the active theme, stay sharp at any density and reflow with the card. They are
 * decorative: the card's heading and body carry the meaning.
 */

function DatabaseVisual() {
  return (
    <div className="visual visual--database" aria-hidden="true">
      {/* Offset frames behind the mark, as in the original's stacked-card motif. */}
      <span className="visual__frame visual__frame--back" />
      <span className="visual__frame visual__frame--mid" />
      <span className="visual__frame">
        <svg viewBox="0 0 160 160" className="visual__elephant">
          <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M104 52c-16-16-46-14-60 4-10 13-10 32 1 45 4 5 9 8 14 10v24c0 12 10 21 22 21s22-9 22-21v-9" />
            <path d="M64 62c-9-7-21-5-26 5" />
            <path d="M103 97c9-4 15-13 15-24" />
            <circle cx="80" cy="76" r="3.5" fill="currentColor" stroke="none" />
          </g>
        </svg>
      </span>
    </div>
  )
}

function AuthVisual() {
  return (
    <div className="visual visual--auth" aria-hidden="true">
      <div className="auth-grid">
        {AUTH_GRID_CELLS.map((cell, index) => (
          <div
            // Index keys: the cells are fixed content, and redacted rows have no text to key on.
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

function FunctionsVisual() {
  return (
    <div className="visual visual--functions" aria-hidden="true">
      <div className="visual__terminal">
        <span className="visual__prompt">$</span> supabase{' '}
        <span className="visual__command">functions serve</span>
      </div>

      <svg viewBox="0 0 220 180" className="visual__globe">
        <g fill="none" stroke="currentColor" strokeWidth="0.75">
          <circle cx="110" cy="105" r="78" />
          <ellipse cx="110" cy="105" rx="30" ry="78" />
          <ellipse cx="110" cy="105" rx="58" ry="78" />
          <path d="M32 105h156M44 62h132M44 148h132" />
        </g>
        {/* Deployment edges fanning out from one region. */}
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

/** File kinds across the storage grid, row by row, in the order the original uses. */
const STORAGE_TILES = [
  'image', 'image', 'image', 'image', 'image',
  'doc', 'doc', 'doc', 'doc', 'doc',
  'video', 'video', 'video', 'video', 'video',
]

function StorageVisual() {
  return (
    <div className="visual visual--storage" aria-hidden="true">
      <div className="storage-grid">
        {STORAGE_TILES.map((kind, index) => (
          <span className="storage-grid__tile" key={index}>
            <FileGlyph kind={kind} />
          </span>
        ))}
      </div>
    </div>
  )
}

function FileGlyph({ kind }: { kind: string }) {
  if (kind === 'image') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
        <circle cx="9" cy="10" r="1.5" />
        <path d="m4.5 17 4.5-4.5 4 4 2.5-2.5 4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (kind === 'video') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="2.5" y="6" width="14" height="12" rx="2.5" />
        <path d="m16.5 13 5 3V8l-5 3z" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M13.5 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z" strokeLinejoin="round" />
      <path d="M13.5 3.5V9H19" strokeLinejoin="round" />
    </svg>
  )
}

function RealtimeVisual() {
  return (
    <div className="visual visual--realtime" aria-hidden="true">
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

function VectorVisual() {
  return (
    <div className="visual visual--vector" aria-hidden="true">
      <svg viewBox="0 0 220 170" className="visual__cube">
        <g fill="none" stroke="currentColor" strokeWidth="0.9">
          <path d="M110 28 178 62v66l-68 34-68-34V62z" />
          <path d="M42 62l68 34 68-34M110 96v66" />
        </g>
        {/* Embeddings scattered through the volume. */}
        <g fill="currentColor">
          <circle cx="86" cy="66" r="2.6" />
          <circle cx="132" cy="54" r="2" />
          <circle cx="152" cy="88" r="2.8" />
          <circle cx="98" cy="104" r="2.2" />
          <circle cx="124" cy="120" r="3" />
          <circle cx="66" cy="96" r="1.8" />
          <circle cx="166" cy="118" r="1.8" />
          <circle cx="78" cy="132" r="2.2" />
        </g>
      </svg>

      <ul className="vector__providers">
        {VECTOR_PROVIDERS.map((provider) => (
          <li key={provider}>
            <span className="vector__dot" />
            {provider}
          </li>
        ))}
      </ul>
    </div>
  )
}

function DataApiVisual() {
  return (
    <div className="visual visual--data-api" aria-hidden="true">
      <ul className="data-api__rows">
        {DATA_API_TABLES.map((table) => (
          <li className="data-api__row" key={table}>
            <span className="data-api__table">
              <TableGlyph />
              {table}
            </span>
            <span className="data-api__wire" />
            <span className="data-api__endpoint">
              .../v1/<b>{table}</b>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TableGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="data-api__glyph">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9.5h16M4 15h16M9.5 9.5V20" />
    </svg>
  )
}

const VISUALS: Record<ProductVisualId, () => ReactElement> = {
  database: DatabaseVisual,
  auth: AuthVisual,
  functions: FunctionsVisual,
  storage: StorageVisual,
  realtime: RealtimeVisual,
  vector: VectorVisual,
  dataApi: DataApiVisual,
}

export function ProductVisual({ visual }: { visual: ProductVisualId }) {
  const Visual = VISUALS[visual]
  return <Visual />
}
