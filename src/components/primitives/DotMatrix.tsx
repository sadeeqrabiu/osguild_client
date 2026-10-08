import type { CSSProperties } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { cn } from '../../lib/cn'
import './DotMatrix.css'

/*
 * A 5x7 bitmap font, just wide enough for the star count. Each glyph is seven
 * rows of five cells; '#' lights the dot. Adding a character means adding a
 * seven-row entry here and nothing else.
 */
const GLYPH_HEIGHT = 7

const GLYPHS: Record<string, string[]> = {
  '0': ['.###.', '#...#', '#..##', '#.#.#', '##..#', '#...#', '.###.'],
  '1': ['..#..', '.##..', '..#..', '..#..', '..#..', '..#..', '.###.'],
  '2': ['.###.', '#...#', '....#', '...#.', '..#..', '.#...', '#####'],
  '3': ['#####', '...#.', '..#..', '...#.', '....#', '#...#', '.###.'],
  '4': ['...#.', '..##.', '.#.#.', '#..#.', '#####', '...#.', '...#.'],
  '5': ['#####', '#....', '####.', '....#', '....#', '#...#', '.###.'],
  '6': ['..##.', '.#...', '#....', '####.', '#...#', '#...#', '.###.'],
  '7': ['#####', '....#', '...#.', '..#..', '.#...', '.#...', '.#...'],
  '8': ['.###.', '#...#', '#...#', '.###.', '#...#', '#...#', '.###.'],
  '9': ['.###.', '#...#', '#...#', '.####', '....#', '...#.', '.##..'],
  K: ['#...#', '#..#.', '#.#..', '##...', '#.#..', '#..#.', '#...#'],
  M: ['#...#', '##.##', '#.#.#', '#.#.#', '#...#', '#...#', '#...#'],
  '.': ['.....', '.....', '.....', '.....', '.....', '.##..', '.##..'],
  ' ': ['.....', '.....', '.....', '.....', '.....', '.....', '.....'],
}

/** Dim dots padding the lit glyphs, so the number sits inside a field rather than on its own. */
const PAD_X = 10
const PAD_Y = 3

function composeRows(text: string): string[] {
  const glyphs = [...text].map((char) => GLYPHS[char] ?? GLYPHS[' '])

  // One blank column between glyphs, supplied by the join separator.
  const body = Array.from({ length: GLYPH_HEIGHT }, (_, row) =>
    glyphs.map((glyph) => glyph[row]).join('.'),
  )

  const gutter = '.'.repeat(PAD_X)
  const padded = body.map((row) => gutter + row + gutter)
  const blankRow = '.'.repeat(padded[0].length)

  return [
    ...Array.from({ length: PAD_Y }, () => blankRow),
    ...padded,
    ...Array.from({ length: PAD_Y }, () => blankRow),
  ]
}

type DotMatrixProps = {
  text: string
  /** What the dots spell out, for anyone who cannot see them. */
  label: string
  className?: string
}

export function DotMatrix({ text, label, className }: DotMatrixProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.25 })

  return (
    <div
      ref={ref}
      className={cn('dot-matrix', className)}
      data-visible={isVisible || undefined}
      role="img"
      aria-label={label}
    >
      {composeRows(text).map((row, y) => (
        <div className="dot-matrix__row" key={y}>
          {[...row].map((cell, x) => (
            <span
              key={x}
              className="dot-matrix__dot"
              data-on={cell === '#' || undefined}
              // Staggering by column makes the number sweep in left to right.
              style={{ '--dot-delay': `${x * 11}ms` } as CSSProperties}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
