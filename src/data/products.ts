import type { ComponentType } from 'react'
import type { CopySegment } from './copy'
import type { IconProps } from '../components/icons'
import {
  AuthIcon,
  DataApiIcon,
  DatabaseIcon,
  FunctionsIcon,
  RealtimeIcon,
  StorageIcon,
  VectorIcon,
} from '../components/icons'

/** Picks which illustration ProductBento draws inside the card. */
export type ProductVisual =
  | 'database'
  | 'auth'
  | 'functions'
  | 'storage'
  | 'realtime'
  | 'vector'
  | 'dataApi'

export type Product = {
  id: string
  title: string
  icon: ComponentType<IconProps>
  description: CopySegment[]
  visual: ProductVisual
  href: string
  /** Only the Postgres card carries a checklist in the original. */
  features?: string[]
}

/**
 * Card order matters: the first three fill the wide row, the remaining four fill
 * the narrow row below it. ProductBento slices this array rather than keeping two
 * separate lists.
 */
export const PRODUCTS: Product[] = [
  {
    id: 'database',
    title: 'Postgres Database',
    icon: DatabaseIcon,
    visual: 'database',
    href: '#database',
    description: [
      { text: 'Every project is ' },
      { text: 'a full Postgres database', strong: true },
      { text: ", the world's most trusted relational database." },
    ],
    features: ['100% portable', 'Built-in Auth with RLS', 'Easy to extend'],
  },
  {
    id: 'auth',
    title: 'Authentication',
    icon: AuthIcon,
    visual: 'auth',
    href: '#auth',
    description: [
      { text: 'Add user sign ups and logins', strong: true },
      { text: ', securing your data with Row Level Security.' },
    ],
  },
  {
    id: 'functions',
    title: 'Edge Functions',
    icon: FunctionsIcon,
    visual: 'functions',
    href: '#functions',
    description: [
      { text: 'Easily write custom code ' },
      { text: 'without deploying or scaling servers.', strong: true },
    ],
  },
  {
    id: 'storage',
    title: 'Storage',
    icon: StorageIcon,
    visual: 'storage',
    href: '#storage',
    description: [
      { text: 'Store, organize, and serve ' },
      { text: 'large files', strong: true },
      { text: ', from videos to images.' },
    ],
  },
  {
    id: 'realtime',
    title: 'Realtime',
    icon: RealtimeIcon,
    visual: 'realtime',
    href: '#realtime',
    description: [
      { text: 'Build multiplayer experiences', strong: true },
      { text: ' with real-time data synchronization.' },
    ],
  },
  {
    id: 'vector',
    title: 'Vector',
    icon: VectorIcon,
    visual: 'vector',
    href: '#vector',
    description: [
      { text: 'Integrate your favorite ML-models to ' },
      { text: 'store, index and search vector embeddings.', strong: true },
    ],
  },
  {
    id: 'data-apis',
    title: 'Data APIs',
    icon: DataApiIcon,
    visual: 'dataApi',
    href: '#data-apis',
    description: [
      { text: 'Instant ready-to-use ' },
      { text: 'REST APIs.', strong: true },
    ],
  },
]

/** Tables wired to endpoints in the Data APIs card illustration. */
export const DATA_API_TABLES = [
  'countries',
  'continents',
  'cities',
  'states',
  'country_codes',
  'oceans',
]

/**
 * Cells of the Authentication card's grid, in render order. `null` is a redacted
 * row. The grid is deliberately wider than its card, so the addresses are clipped
 * at both edges exactly as they are in the original.
 */
export const AUTH_GRID_CELLS: (string | null)[] = [
  'chris0198@gmail.com',
  'alex16019',
  null,
  null,
  'jordan4567@gmail.com',
  'mememaster04',
]

/** Model providers listed under the Vector card illustration. */
export const VECTOR_PROVIDERS = ['OpenAI', 'Hugging Face']
