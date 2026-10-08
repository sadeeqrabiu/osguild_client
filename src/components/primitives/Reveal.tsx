import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { cn } from '../../lib/cn'
import './Reveal.css'

type RevealProps = {
  children: ReactNode
  /** Milliseconds to hold back the transition, for staggering a row of siblings. */
  delay?: number
  className?: string
}

/**
 * Fades and lifts its children into place the first time they scroll into view.
 *
 * The wrapper is a real box, not `display: contents`, because it carries the
 * transform — so when used inside a grid, pass the grid-placement class here
 * rather than to the child.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn('reveal', className)}
      data-visible={isVisible || undefined}
      // csstype has no index signature for custom properties, hence the cast.
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
