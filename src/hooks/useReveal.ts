import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

type RevealOptions = {
  /** Fraction of the element that must be in view before it reveals. */
  threshold?: number
  /** Shrinks the viewport so elements reveal slightly before reaching the edge. */
  rootMargin?: string
}

/**
 * Flips to visible the first time an element scrolls into view, then stops
 * observing.
 *
 * When motion is reduced the element reports visible from the first render and
 * no observer is created, so those visitors never have content held back behind
 * an animation that will not run.
 */
export function useReveal<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
}: RevealOptions = {}) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<T>(null)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || hasEntered || prefersReducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setHasEntered(true)
        observer.disconnect()
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, hasEntered, prefersReducedMotion])

  return { ref, isVisible: hasEntered || prefersReducedMotion }
}
