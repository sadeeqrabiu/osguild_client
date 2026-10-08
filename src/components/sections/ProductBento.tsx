import { PRODUCTS, type Product } from '../../data/products'
import { CheckIcon } from '../icons'
import { Reveal } from '../primitives/Reveal'
import { RichText } from '../primitives/RichText'
import { ProductVisual } from './ProductVisuals'
import './ProductBento.css'

/** The first three products fill the wide row; the rest fill the narrow row below. */
const WIDE_ROW_COUNT = 3

export function ProductBento() {
  return (
    <section className="bento" id="product">
      <div className="shell">
        <div className="bento__row bento__row--wide">
          {PRODUCTS.slice(0, WIDE_ROW_COUNT).map((product, index) => (
            <Reveal key={product.id} delay={index * 90} className="bento__cell">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <div className="bento__row bento__row--narrow">
          {PRODUCTS.slice(WIDE_ROW_COUNT).map((product, index) => (
            <Reveal key={product.id} delay={index * 90} className="bento__cell">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {/*
          The summary sits below the grid rather than above it, as in the original,
          where it reads as a closing line on the product set instead of a header.
        */}
        <Reveal>
          <p className="bento__summary">
            <strong>Use one or all.</strong> Best of breed products. Integrated as a platform.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon

  return (
    <a className="product-card" href={product.href}>
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
