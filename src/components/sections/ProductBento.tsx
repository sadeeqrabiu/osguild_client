import type { CSSProperties } from 'react'
import { useEffect, useRef } from 'react'
import { PRODUCTS, type Product } from '../../data/products'
import { CheckIcon } from '../icons'
import { Reveal } from '../primitives/Reveal'
import { RichText } from '../primitives/RichText'
import { cn } from '../../lib/cn'
import { ProductVisual } from './ProductVisuals'
import './ProductBento.css'

const WIDE_ROW_COUNT = 3

/**
 * Drives the mobile card stacking & flip-back swapping effect.
 * Smoothly calculates scroll-driven progress between consecutive cards on mobile screens.
 */
function useCardStack() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(max-width: 720px)')

    const container = containerRef.current
    if (!container) return

    let rafId: number | null = null

    const updateStack = () => {
      if (!mq.matches) {
        const cards = container.querySelectorAll<HTMLElement>('.product-card')
        cards.forEach((card) => card.style.removeProperty('--flip-progress'))
        return
      }

      const cards = container.querySelectorAll<HTMLElement>('.product-card')
      const stickyBase = 76
      const stackOffset = 10

      cards.forEach((card, index) => {
        const nextCard = cards[index + 1]
        if (!nextCard) {
          card.style.setProperty('--flip-progress', '0')
          return
        }

        const targetTop = stickyBase + (index + 1) * stackOffset
        const nextRect = nextCard.getBoundingClientRect()
        const distance = Math.min(Math.max(nextRect.height * 0.85, 220), 340)
        const currentDiff = nextRect.top - targetTop

        const linear =
          currentDiff <= 0
            ? 1
            : currentDiff < distance
              ? 1 - currentDiff / distance
              : 0

        // Cubic Hermite smoothstep curve: 3x^2 - 2x^3 for frictionless, organic deceleration
        const smooth = linear * linear * (3 - 2 * linear)

        card.style.setProperty('--flip-progress', smooth.toFixed(4))
      })
    }

    const onScrollOrResize = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        updateStack()
        rafId = null
      })
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })
    updateStack()

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return containerRef
}

export function ProductBento() {
  const stackRef = useCardStack()

  return (
    <section className="bento" id="product">
      <div className="shell">
        <div className="bento__grid" ref={stackRef}>
          {PRODUCTS.map((product, index) => {
            const isWide = index < WIDE_ROW_COUNT
            return (
              <Reveal
                key={product.id}
                delay={index * 80}
                className={cn(
                  'bento__cell',
                  isWide ? 'bento__cell--wide' : 'bento__cell--narrow'
                )}
                style={
                  {
                    '--card-index': index,
                    '--total-cards': PRODUCTS.length,
                  } as CSSProperties
                }
              >
                <ProductCard product={product} index={index} />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon

  return (
    <a
      className="product-card"
      href={product.href}
      style={{ '--card-index': index } as CSSProperties}
    >
      <h3 className="heading-3 product-card__title">
        <Icon className="product-card__icon" />
        {product.title}
      </h3>

      <p className="body product-card__copy">
        <RichText segments={product.description} />
      </p>

      <ProductVisual visual={product.visual} />

      {product.features && (
        <ul className="product-card__features">
          {product.features.map((feature) => (
            <li key={feature}>
              <CheckIcon />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </a>
  )
}
