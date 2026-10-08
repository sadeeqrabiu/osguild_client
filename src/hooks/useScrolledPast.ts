import { useEffect, useState } from 'react'

/** True once the page has scrolled further than `offset` pixels. Drives the condensed nav. */
export function useScrolledPast(offset: number): boolean {
  const [hasScrolledPast, setHasScrolledPast] = useState(false)

  useEffect(() => {
    const onScroll = () => setHasScrolledPast(window.scrollY > offset)

    onScroll() // Catch a page restored mid-scroll.
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return hasScrolledPast
}
