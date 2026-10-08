import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../lib/cn'
import { MoonIcon, SunIcon } from '../icons'
import './ThemeToggle.css'

/**
 * The nav bar's theme button.
 *
 * It shows the theme it will switch *to* — a sun while the page is dark — which
 * is what the accessible name promises, so icon and label never disagree.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const description = `Switch to ${nextTheme} theme`

  return (
    <button
      type="button"
      className={cn('theme-toggle', className)}
      onClick={toggleTheme}
      aria-label={description}
      title={description}
    >
      <span className="theme-toggle__icons" data-theme={theme}>
        <SunIcon className="theme-toggle__icon theme-toggle__icon--sun" />
        <MoonIcon className="theme-toggle__icon theme-toggle__icon--moon" />
      </span>
    </button>
  )
}
