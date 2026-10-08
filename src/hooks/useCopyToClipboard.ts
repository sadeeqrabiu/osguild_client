import { useEffect, useState } from 'react'

/** Copies text and exposes a `copied` flag that clears itself, for confirmation states. */
export function useCopyToClipboard(resetAfterMs = 2000) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timer = window.setTimeout(() => setCopied(false), resetAfterMs)
    return () => window.clearTimeout(timer)
  }, [copied, resetAfterMs])

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch {
      // Clipboard denied or unavailable — leave the button in its resting state.
      setCopied(false)
    }
  }

  return { copied, copy }
}
