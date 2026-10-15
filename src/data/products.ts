import type { ComponentType } from 'react'
import type { CopySegment } from './copy'
import type { IconProps } from '../components/icons'
import {
  CultureNormsIcon,
  ForkSimulationIcon,
  FrontierModelIcon,
  McpGuideIcon,
  MentorshipIcon,
  PathwayIcon,
  RealWorldIcon,
} from '../components/icons'

/** Picks which minimalist illustration ProductBento draws inside the card. */
export type ProductVisual =
  | 'frontierModels'
  | 'mcpGuide'
  | 'pathway'
  | 'forkSimulation'
  | 'cultureNorms'
  | 'mentorshipReview'
  | 'realWorld'

export type Product = {
  id: string
  title: string
  icon: ComponentType<IconProps>
  description: CopySegment[]
  visual: ProductVisual
  href: string
  /** Only the primary anchor card carries a checklist, matching the original. */
  features?: string[]
}

/**
 * 7 Core Features of OSGuild:
 * - Row 1 (Wide): Frontier Model Access, MCP Codebase Guide, Six-Week Contributor Pathway
 * - Row 2 (Narrow): Fork Simulation Environment, Open-Source Culture & Norms, Mentorship & Code Review, Real-World Contribution Pathway
 */
export const PRODUCTS: Product[] = [
  {
    id: 'frontier-models',
    title: 'Frontier Model Access',
    icon: FrontierModelIcon,
    visual: 'frontierModels',
    href: '#frontier-models',
    description: [
      { text: 'Access ' },
      { text: 'powerful coding models', strong: true },
      { text: ' to learn faster, understand code, and build with confidence.' },
    ],
    features: ['Top-tier coding models', 'Codebase-aware reasoning', 'Confidence-building pairing'],
  },
  {
    id: 'mcp-guide',
    title: 'MCP Codebase Guide',
    icon: McpGuideIcon,
    visual: 'mcpGuide',
    href: '#mcp-guide',
    description: [
      { text: 'A ' },
      { text: 'repository-specific guide', strong: true },
      { text: ' that helps developers understand codebases and follow a structured learning sequence.' },
    ],
  },
  {
    id: 'six-week-pathway',
    title: 'Six-Week Contributor Pathway',
    icon: PathwayIcon,
    visual: 'pathway',
    href: '#six-week-pathway',
    description: [
      { text: 'A ' },
      { text: 'guided journey', strong: true },
      { text: ' from learning open-source fundamentals to preparing for real contributions.' },
    ],
  },
  {
    id: 'fork-simulation',
    title: 'Fork Simulation Environment',
    icon: ForkSimulationIcon,
    visual: 'forkSimulation',
    href: '#fork-simulation',
    description: [
      { text: 'Practice on a ' },
      { text: 'simulated fork of a real project', strong: true },
      { text: ', learning workflows and solving issues in a safe environment.' },
    ],
  },
  {
    id: 'culture-norms',
    title: 'Open-Source Culture & Norms',
    icon: CultureNormsIcon,
    visual: 'cultureNorms',
    href: '#culture-norms',
    description: [
      { text: 'Learn ' },
      { text: 'project conventions & guidelines', strong: true },
      { text: ', communication, and maintainer expectations.' },
    ],
  },
  {
    id: 'mentorship-review',
    title: 'Mentorship & Code Review',
    icon: MentorshipIcon,
    visual: 'mentorshipReview',
    href: '#mentorship-review',
    description: [
      { text: 'Receive guidance and ' },
      { text: 'feedback from experienced contributors', strong: true },
      { text: ' to improve technical skills and judgment.' },
    ],
  },
  {
    id: 'real-world',
    title: 'Real-World Contribution Pathway',
    icon: RealWorldIcon,
    visual: 'realWorld',
    href: '#real-world',
    description: [
      { text: 'Progress toward ' },
      { text: 'contributing to actual repositories', strong: true },
      { text: ', submitting pull requests, and building a track record.' },
    ],
  },
]

/** Cells of the Culture & Norms card's grid (Authentication style). */
export const CULTURE_GRID_CELLS: (string | null)[] = [
  'feat: initial-rfc',
  'Signed-off-by: dev',
  null,
  null,
  'conventional-commits',
  'maintainer-approved',
]

/** Milestone phases under the 3D Pathway illustration (Vector style). */
export const PATHWAY_PHASES = ['Week 1–2: Foundations', 'Week 3–4: Fork Sim & Norms', 'Week 5–6: Sovereign PR']

/** Repositories listed under the Real-World Contribution illustration (Data APIs style). */
export const REAL_WORLD_REPOS = [
  { name: 'fedimint', pr: '1048' },
  { name: 'bitcoin', pr: '2890' },
  { name: 'lightning', pr: '412' },
  { name: 'rust-lang', pr: '8501' },
]
