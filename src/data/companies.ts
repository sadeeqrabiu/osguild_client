/*
 * Logo-wall entries.
 *
 * These render as typeset wordmarks rather than the companies' real vector logos:
 * redrawing a dozen trademarked marks by hand would be guesswork, and a wrong
 * logo reads worse than an honest wordmark. Swapping in real SVGs later only
 * touches this file and LogoWall.
 */
export type Company = {
  id: string
  /** The exact string to typeset — several brands set their name lowercase. */
  label: string
  weight?: 400 | 500 | 600 | 700
  tracking?: string
  italic?: boolean
  /** Draws the GitHub mark ahead of the wordmark, as the original does. */
  withGitHubMark?: boolean
}

export const COMPANIES: Company[] = [
  { id: 'lovable', label: 'Lovable', weight: 700, tracking: '-0.05em' },
  { id: 'mozilla', label: 'moz://a', weight: 500, tracking: '-0.02em' },
  { id: 'pwc', label: 'pwc', weight: 700, tracking: '-0.04em' },
  { id: 'figma', label: 'Figma', weight: 600, tracking: '-0.04em' },
  { id: 'v7', label: 'V7', weight: 700, tracking: '-0.06em' },
  { id: 'bolt', label: 'bolt', weight: 700, tracking: '-0.05em', italic: true },
  { id: 'github', label: 'GitHub', weight: 600, tracking: '-0.03em', withGitHubMark: true },
  { id: 'betashares', label: 'betashares', weight: 500, tracking: '-0.02em' },
  { id: 'mobbin', label: 'Mobbin', weight: 600, tracking: '-0.03em' },
  { id: 'resend', label: 'Resend', weight: 600, tracking: '-0.04em' },
  { id: 'langchain', label: 'LangChain', weight: 500, tracking: '-0.02em' },
  { id: '1password', label: '1Password', weight: 500, tracking: '-0.02em' },
]
