import { Fragment } from 'react'
import type { CopySegment } from '../../data/copy'

/**
 * Renders a run of copy where some phrases are emphasised mid-sentence.
 * Emphasis is styled by `.body strong` / `.lead strong` in typography.css.
 */
export function RichText({ segments }: { segments: CopySegment[] }) {
  return (
    <>
      {segments.map((segment, index) =>
        segment.strong ? (
          <strong key={index}>{segment.text}</strong>
        ) : (
          // Index keys are safe: segments are static content, never reordered.
          <Fragment key={index}>{segment.text}</Fragment>
        ),
      )}
    </>
  )
}
