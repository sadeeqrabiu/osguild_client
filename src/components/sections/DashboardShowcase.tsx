import { useEffect, useState } from 'react'
import { Reveal } from '../primitives/Reveal'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import './DashboardShowcase.css'

// Load all workshop images from assets/workshop
const imageModules = import.meta.glob<{ default: string }>(
  '../../assets/workshop/*.jpg',
  { eager: true }
)

const WORKSHOP_IMAGES: string[] = Object.keys(imageModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map((path) => imageModules[path].default)

export function DashboardShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (!isPlaying || prefersReduced || WORKSHOP_IMAGES.length === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % WORKSHOP_IMAGES.length)
    }, 1000)

    return () => clearInterval(timer)
  }, [isPlaying, prefersReduced])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % WORKSHOP_IMAGES.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + WORKSHOP_IMAGES.length) % WORKSHOP_IMAGES.length)
  }

  return (
    <section className="dashboard section" id="dashboard">
      <div className="shell">
        <Reveal>
          <h2 className="heading-2 dashboard__headline">
            Experience our in-person FOSS Workshops
            <br />
            <span className="display__muted">learning, building, and contributing together</span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="workshop-showcase">
            {/* Window Chrome Header */}
            <div className="workshop-showcase__chrome">
              <div className="workshop-showcase__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className="workshop-showcase__title">
                <span>OsGuild Workshop Reel</span>
              </div>

              <div className="workshop-showcase__controls">
                <button
                  type="button"
                  className="workshop-showcase__btn"
                  onClick={handlePrev}
                  aria-label="Previous image"
                >
                  ◀
                </button>
                <button
                  type="button"
                  className="workshop-showcase__btn"
                  onClick={() => setIsPlaying((prev) => !prev)}
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {isPlaying ? '❚❚' : '▶'}
                </button>
                <button
                  type="button"
                  className="workshop-showcase__btn"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  ▶
                </button>
              </div>
            </div>

            {/* Slides Viewport */}
            <div
              className="workshop-showcase__stage"
              onClick={handleNext}
              role="region"
              aria-label="Workshop image carousel"
            >
              {WORKSHOP_IMAGES.map((imgSrc, index) => {
                const isActive = index === currentIndex
                return (
                  <img
                    key={imgSrc}
                    src={imgSrc}
                    alt={`OsGuild workshop photo ${index + 1}`}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    className={`workshop-showcase__slide ${isActive ? 'workshop-showcase__slide--active' : ''
                      }`}
                  />
                )
              })}

              {/* Scrim Overlay */}
              <div className="workshop-showcase__scrim" aria-hidden="true" />

              {/* Overlay Footer Bar */}
              <div className="workshop-showcase__footer">
                <div className="workshop-showcase__badge">
                  <span>OsGuild Workshop</span>
                </div>

                <div className="workshop-showcase__dots-nav">
                  {WORKSHOP_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Jump to photo ${index + 1}`}
                      className={`workshop-showcase__dot-btn ${index === currentIndex ? 'workshop-showcase__dot-btn--active' : ''
                        }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentIndex(index)
                      }}
                    />
                  ))}
                </div>

                <div className="workshop-showcase__counter">
                  {String(currentIndex + 1).padStart(2, '0')} /{' '}
                  {String(WORKSHOP_IMAGES.length).padStart(2, '0')}
                </div>
              </div>

              {/* 1s Progress bar */}
              {isPlaying && !prefersReduced && (
                <div className="workshop-showcase__progress" aria-hidden="true">
                  <div
                    key={currentIndex}
                    className="workshop-showcase__progress-bar workshop-showcase__progress-bar--running"
                  />
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
