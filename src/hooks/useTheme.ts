import { useSyncExternalStore } from 'react'

export type Theme = 'dark' | 'light'

/** Shared with the pre-paint bootstrap script in index.html. Keep the two in sync. */
const STORAGE_KEY = 'supabase-clone-theme'
const TRANSITION_CLASS = 'theme-transition'
const TRANSITION_MS = 300

/*
 * The theme lives on <html data-theme>, not in React state, because the bootstrap
 * script sets it before React mounts. useSyncExternalStore lets components read
 * that single source of truth instead of keeping a second copy in sync with it.
 */
const listeners = new Set<() => void>()
let transitionTimer: number | undefined

function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    // Storage blocked (private mode, hardened settings) — treat as no preference.
    return null
  }
}

function applyTheme(theme: Theme, persist: boolean) {
  const root = document.documentElement
  if (readTheme() === theme) return

  // Colour transitions are enabled only for the length of the switch; see reset.css.
  root.classList.add(TRANSITION_CLASS)
  window.clearTimeout(transitionTimer)
  transitionTimer = window.setTimeout(
    () => root.classList.remove(TRANSITION_CLASS),
    TRANSITION_MS,
  )

  root.dataset.theme = theme

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Not persisting is acceptable; the choice still applies for this session.
    }
  }

  for (const notify of listeners) notify()
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange)
  return () => {
    listeners.delete(onStoreChange)
  }
}

// Follow the OS for as long as the visitor has not made an explicit choice.
window
  .matchMedia('(prefers-color-scheme: light)')
  .addEventListener('change', (event) => {
    if (readStoredTheme() === null) applyTheme(event.matches ? 'light' : 'dark', false)
  })

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme)

  return {
    theme,
    toggleTheme: () => applyTheme(theme === 'dark' ? 'light' : 'dark', true),
  }
}
