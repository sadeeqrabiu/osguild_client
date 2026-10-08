/** Joins class names, dropping anything falsy. Keeps conditional classes readable in JSX. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}
