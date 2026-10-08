import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Tracks the OS "reduce motion" setting. CSS handles most of this already — use
 * the hook only where motion has to be skipped in JS too, such as a marquee that
 * should render as a static row rather than an animated track.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(() => window.matchMedia(QUERY).matches)

  useEffect(() => {
    const query = window.matchMedia(QUERY)
    const onChange = () => setPrefersReduced(query.matches)

    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return prefersReduced
}
