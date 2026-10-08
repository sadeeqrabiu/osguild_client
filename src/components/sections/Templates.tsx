import type { ReactNode } from 'react'
import {
  FEATURED_TEMPLATES,
  TEMPLATES,
  type Template,
  type TemplateThumbnail,
} from '../../data/templates'
import { cn } from '../../lib/cn'
import { Reveal } from '../primitives/Reveal'
import './Templates.css'

export function Templates() {
  return (
    <section className="templates section" id="templates">
      <div className="shell">
        <Reveal>
          <header className="templates__head">
            <h2 className="heading-2">
              <span className="display__muted">Kickstart your next project</span>
              <br />
              with production ready templates
            </h2>

            <a className="templates__all" href="#examples">
              View all examples
            </a>
          </header>
        </Reveal>

        <div className="templates__featured">
          {FEATURED_TEMPLATES.map((template, index) => (
            <Reveal key={template.id} delay={index * 90} className="templates__cell">
              <TemplateCard template={template} size="featured" />
            </Reveal>
          ))}
        </div>

        <div className="templates__grid">
          {TEMPLATES.map((template, index) => (
            <Reveal key={template.id} delay={index * 80} className="templates__cell">
              <TemplateCard template={template} size="compact" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TemplateCard({ template, size }: { template: Template; size: 'featured' | 'compact' }) {
  return (
    <a className={cn('template-card', `template-card--${size}`)} href={template.href}>
      <span className="template-card__wordmark">{template.wordmark}</span>
      <h3 className="heading-3">{template.title}</h3>
      <p className="body template-card__copy">{template.description}</p>
      <Thumbnail variant={template.thumbnail} />
    </a>
  )
}

/*
 * Grey wireframe previews, reproduced from the original rather than replaced
 * with real screenshots. Each variant is a different arrangement of the same
 * two primitives: `block` for a filled panel and `bar` for a line of text.
 */
function Thumbnail({ variant }: { variant: TemplateThumbnail }) {
  return (
    <div className={cn('thumb', `thumb--${variant}`)} aria-hidden="true">
      <div className="thumb__chrome">
        <span />
        <span />
        <span />
      </div>
      <div className="thumb__body">{THUMBNAIL_BODIES[variant]}</div>
    </div>
  )
}

const THUMBNAIL_BODIES: Record<TemplateThumbnail, ReactNode> = {
  // Three pricing columns with the middle plan picked out.
  pricing: (
    <div className="thumb__plans">
      {[0, 1, 2].map((column) => (
        <div className="thumb__plan" key={column} data-featured={column === 1 || undefined}>
          <span className="bar bar--sm" />
          <span className="block" />
        </div>
      ))}
    </div>
  ),

  // Sidebar beside a grid of cards.
  dashboard: (
    <div className="thumb__app">
      <div className="thumb__rail">
        <span className="dot" />
        <span className="bar" />
        <span className="bar bar--sm" />
        <span className="bar bar--sm" />
      </div>
      <div className="thumb__cards">
        {Array.from({ length: 8 }, (_, index) => (
          <span className="block" key={index} />
        ))}
      </div>
    </div>
  ),

  // Alternating message bubbles.
  chat: (
    <div className="thumb__chat">
      {[0, 1, 2, 3].map((row) => (
        <span className="bubble" key={row} data-side={row % 2 === 0 ? 'in' : 'out'} />
      ))}
    </div>
  ),

  split: (
    <div className="thumb__split">
      <span className="block" />
      <div className="thumb__lines">
        <span className="bar" />
        <span className="bar bar--sm" />
        <span className="bar" />
        <span className="bar bar--sm" />
      </div>
    </div>
  ),

  mobile: (
    <div className="thumb__mobile">
      <div className="thumb__phone">
        <span className="dot" />
        <span className="bar bar--sm" />
        <span className="bar bar--sm" />
        <span className="block" />
      </div>
    </div>
  ),

  list: (
    <div className="thumb__list">
      {Array.from({ length: 5 }, (_, index) => (
        <div className="thumb__list-row" key={index}>
          <span className="dot" />
          <span className="bar" />
        </div>
      ))}
    </div>
  ),
}
