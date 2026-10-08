/**
 * A run of body copy where some phrases are emphasised mid-sentence.
 *
 * The original bolds fragments inside otherwise plain sentences, which rules out
 * storing the copy as a single string. Segments keep the markup out of the data
 * and let every consumer render emphasis the same way.
 */
export type CopySegment = {
  text: string
  strong?: boolean
}
