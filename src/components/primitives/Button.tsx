import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../lib/cn'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

type Shared = {
  variant?: Variant
  size?: Size
  /** Leading adornment, typically a brand mark. */
  leading?: ReactNode
  /** Trailing adornment, typically a chevron or external-link arrow. */
  trailing?: ReactNode
  children: ReactNode
}

function classesFor(variant: Variant, size: Size, className?: string) {
  return cn('btn', `btn--${variant}`, `btn--${size}`, className)
}

/*
 * Button and ButtonLink are kept as two components rather than one polymorphic
 * component: the generics needed to switch between <button> and <a> props cost
 * far more to read than the handful of lines duplicated here.
 */

export function Button({
  variant = 'primary',
  size = 'md',
  leading,
  trailing,
  children,
  className,
  type = 'button',
  ...rest
}: Shared & ComponentPropsWithoutRef<'button'>) {
  return (
    <button type={type} className={classesFor(variant, size, className)} {...rest}>
      {leading && <span className="btn__leading">{leading}</span>}
      <span className="btn__label">{children}</span>
      {trailing && <span className="btn__trailing">{trailing}</span>}
    </button>
  )
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  leading,
  trailing,
  children,
  className,
  ...rest
}: Shared & ComponentPropsWithoutRef<'a'>) {
  return (
    <a className={classesFor(variant, size, className)} {...rest}>
      {leading && <span className="btn__leading">{leading}</span>}
      <span className="btn__label">{children}</span>
      {trailing && <span className="btn__trailing">{trailing}</span>}
    </a>
  )
}
