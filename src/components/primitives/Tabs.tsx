import { useLayoutEffect, useRef, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import { cn } from '../../lib/cn'
import './Tabs.css'

export type TabItem = {
  id: string
  label: ReactNode
  /** Required when `label` is an icon and carries no text of its own. */
  accessibleName?: string
}

type TabsProps = {
  items: TabItem[]
  activeId: string
  onChange: (id: string) => void
  /** Accessible name for the tablist as a whole. */
  label: string
  /** Shared with the matching TabPanel so tab and panel can reference each other. */
  baseId: string
  variant?: 'pill' | 'icon'
  className?: string
}

// Private so this module exports components only, which keeps fast refresh working.
const tabDomId = (baseId: string, id: string) => `${baseId}-tab-${id}`
const panelDomId = (baseId: string, id: string) => `${baseId}-panel-${id}`

/**
 * A WAI-ARIA tablist with roving tabindex and automatic activation: arrow keys
 * move focus and switch panels in one step, which is the expected behaviour when
 * panels are cheap to render, as they are here.
 *
 * The active marker is a single element measured against the selected tab, so it
 * slides between tabs instead of cutting.
 */
export function Tabs({
  items,
  activeId,
  onChange,
  label,
  baseId,
  variant = 'pill',
  className,
}: TabsProps) {
  const listRef = useRef<HTMLDivElement>(null)
  const [marker, setMarker] = useState<{ left: number; width: number } | null>(null)

  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return

    const measure = () => {
      const selected = list.querySelector<HTMLElement>('[aria-selected="true"]')
      if (selected) setMarker({ left: selected.offsetLeft, width: selected.offsetWidth })
    }

    measure()

    // Tabs resize when the web font swaps in or the layout reflows; re-measure then.
    const observer = new ResizeObserver(measure)
    for (const tab of list.querySelectorAll('[role="tab"]')) observer.observe(tab)
    return () => observer.disconnect()
  }, [activeId, items])

  function selectByOffset(offset: number) {
    const current = items.findIndex((item) => item.id === activeId)
    const next = items[(current + offset + items.length) % items.length]

    onChange(next.id)
    listRef.current
      ?.querySelector<HTMLButtonElement>(`#${CSS.escape(tabDomId(baseId, next.id))}`)
      ?.focus()
  }

  function selectAt(index: number) {
    const next = items[index]
    onChange(next.id)
    listRef.current
      ?.querySelector<HTMLButtonElement>(`#${CSS.escape(tabDomId(baseId, next.id))}`)
      ?.focus()
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case 'ArrowRight':
        selectByOffset(1)
        break
      case 'ArrowLeft':
        selectByOffset(-1)
        break
      case 'Home':
        selectAt(0)
        break
      case 'End':
        selectAt(items.length - 1)
        break
      default:
        return
    }

    event.preventDefault()
  }

  return (
    <div className={cn('tabs', `tabs--${variant}`, className)}>
      <span
        className="tabs__marker"
        aria-hidden="true"
        data-measured={marker ? true : undefined}
        style={marker ? { transform: `translateX(${marker.left}px)`, width: marker.width } : undefined}
      />

      <div
        ref={listRef}
        role="tablist"
        aria-label={label}
        aria-orientation="horizontal"
        className="tabs__list"
        onKeyDown={onKeyDown}
      >
        {items.map((item) => {
          const isActive = item.id === activeId

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={tabDomId(baseId, item.id)}
              aria-selected={isActive}
              aria-controls={panelDomId(baseId, item.id)}
              aria-label={item.accessibleName}
              // Roving tabindex: only the selected tab is a tab stop.
              tabIndex={isActive ? 0 : -1}
              className="tabs__tab"
              onClick={() => onChange(item.id)}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

type TabPanelProps = {
  baseId: string
  /** The id of the tab this panel belongs to. */
  tabId: string
  children: ReactNode
  className?: string
}

export function TabPanel({ baseId, tabId, children, className }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      id={panelDomId(baseId, tabId)}
      aria-labelledby={tabDomId(baseId, tabId)}
      // Focusable so keyboard users can reach panel content that has no controls.
      tabIndex={0}
      className={cn('tab-panel', className)}
    >
      {children}
    </div>
  )
}
