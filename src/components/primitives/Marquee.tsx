import { useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../lib/cn'
import { PauseIcon, PlayIcon } from '../icons'
import './Marquee.css'

type MarqueeProps = {
  children: ReactNode
  /** Seconds for one full pass of the track. */
  duration?: number
  direction?: 'left' | 'right'
  /** Names what is scrolling, for the pause control's accessible name. */
  label: string
  className?: string
}

/**
 * A continuously scrolling track. The children are rendered twice so the second
 * copy takes over exactly as the first leaves, and the duplicate is hidden from
 * assistive tech so the same content is not announced twice.
 *
 * Pauses on hover and on keyboard focus, and offers an explicit pause control.
 * Falls back to a static wrapped row when the visitor prefers reduced motion.
 */
export function Marquee({
  children,
  duration = 42,
  direction = 'left',
  label,
  className,
}: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isPaused, setIsPaused] = useState(false)

  if (prefersReducedMotion) {
    return <div className={cn('marquee marquee--static', className)}>{children}</div>
  }

  return (
    <div
      className={cn('marquee', className)}
      data-paused={isPaused || undefined}
      style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
    >
      <div className="marquee__viewport">
        <div className="marquee__track" data-direction={direction}>
          <div className="marquee__group">{children}</div>
          <div className="marquee__group" aria-hidden="true">
            {children}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="marquee__toggle"
        onClick={() => setIsPaused((paused) => !paused)}
        aria-label={`${isPaused ? 'Resume' : 'Pause'} ${label}`}
      >
        {isPaused ? <PlayIcon /> : <PauseIcon />}
      </button>
    </div>
  )
}
