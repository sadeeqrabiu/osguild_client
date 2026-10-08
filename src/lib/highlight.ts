/*
 * A deliberately small syntax tokeniser for the marketing code samples.
 *
 * This is not a general-purpose highlighter and should not grow into one — it
 * handles exactly the JavaScript/Dart shapes used in src/data/frameworks.ts. If
 * a sample ever needs more than this, reach for a real highlighter instead of
 * extending the pattern below.
 */

export type TokenKind =
  | 'comment'
  | 'string'
  | 'keyword'
  | 'number'
  | 'fn'
  | 'punct'
  | 'plain'

export type Token = {
  text: string
  kind: TokenKind
}

const KEYWORDS = new Set([
  'import',
  'from',
  'export',
  'default',
  'const',
  'let',
  'var',
  'function',
  'return',
  'await',
  'async',
  'final',
  'void',
  'new',
  'if',
  'else',
  'for',
  'class',
  'extends',
  'true',
  'false',
  'null',
  'undefined',
])

/*
 * One ordered alternation, matched left to right. Order is load-bearing:
 * comments and strings must win over everything inside them, and `call` must be
 * tried before `word` so `createClient(` reads as a function and not an
 * identifier. `punct` is last and mops up the remaining symbols.
 */
const PATTERN = new RegExp(
  [
    String.raw`(?<comment>\/\/[^\n]*)`,
    String.raw`(?<string>'[^'\n]*'|"[^"\n]*"|` + '`[^`]*`)',
    String.raw`(?<call>[A-Za-z_$][\w$]*)(?=\s*\()`,
    String.raw`(?<number>\b\d+(?:\.\d+)?\b)`,
    String.raw`(?<word>[A-Za-z_$][\w$]*)`,
    String.raw`(?<punct>[^\w\s]+)`,
  ].join('|'),
  'g',
)

function classify(groups: Record<string, string | undefined>): TokenKind {
  if (groups.comment) return 'comment'
  if (groups.string) return 'string'
  if (groups.call) return KEYWORDS.has(groups.call) ? 'keyword' : 'fn'
  if (groups.number) return 'number'
  if (groups.word) return KEYWORDS.has(groups.word) ? 'keyword' : 'plain'
  return 'punct'
}

/** Splits source into styled spans. Whitespace and gaps come back as `plain`. */
export function highlight(code: string): Token[] {
  const tokens: Token[] = []
  let cursor = 0

  for (const match of code.matchAll(PATTERN)) {
    const [text] = match
    const start = match.index

    if (start > cursor) {
      tokens.push({ text: code.slice(cursor, start), kind: 'plain' })
    }

    tokens.push({ text, kind: classify(match.groups ?? {}) })
    cursor = start + text.length
  }

  if (cursor < code.length) {
    tokens.push({ text: code.slice(cursor), kind: 'plain' })
  }

  return tokens
}
