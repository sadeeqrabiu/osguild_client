import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type IconProps = ComponentPropsWithoutRef<'svg'>

/*
 * Two bases: outline glyphs for UI affordances, solid marks for brand logos.
 * Both inherit `currentColor`, which is what lets every icon on the page follow
 * the active theme without a single colour being restated.
 *
 * Icons are decorative by default (`aria-hidden`). A caller that needs one to be
 * announced passes `aria-hidden={false}` together with a `<title>` or an
 * accessible name on the parent control.
 */

function Glyph({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

function Mark({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  )
}

/* ---------------------------------------------------------------- UI glyphs */

export function ChevronDown(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M6 9.5 12 15.5 18 9.5" />
    </Glyph>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Glyph>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M6 6 18 18M18 6 6 18" />
    </Glyph>
  )
}

export function CopyIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M5.5 15H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v.5" />
    </Glyph>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M20 6.5 9.5 17 4 11.5" />
    </Glyph>
  )
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M7.5 16.5 16.5 7.5M8.5 7.5h8v8" />
    </Glyph>
  )
}

export function PlayIcon(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M8 5.5v13l11-6.5z" />
    </Mark>
  )
}

export function PauseIcon(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M8 5h3v14H8zM13 5h3v14h-3z" />
    </Mark>
  )
}

export function SunIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </Glyph>
  )
}

export function MoonIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.2 8.2 0 1 0 10.2 10.2z" />
    </Glyph>
  )
}

/* ------------------------------------------------------- Product card icons */

export function DatabaseIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
      <path d="M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" />
    </Glyph>
  )
}

export function AuthIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <rect x="4" y="10.5" width="16" height="10" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.5" r="1.25" />
    </Glyph>
  )
}

export function FunctionsIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 16.5 12.5 10m0 0L10.5 7m2 3 3 6.5" />
    </Glyph>
  )
}

export function StorageIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5z" />
      <path d="M4 8.5 12 13m0 0 8-4.5M12 13v7" />
    </Glyph>
  )
}

export function RealtimeIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M5 19 15.5 8.5" />
      <path d="m13.5 6.5 4 4" />
      <path d="M18 3.5v3M20.5 5h-3M8 3.5v2M9 4.5H7" />
    </Glyph>
  )
}

export function VectorIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 3.5 20 8v8l-8 4.5L4 16V8z" />
      <path d="M4 8l8 4.5L20 8M12 12.5V21" />
    </Glyph>
  )
}

export function DataApiIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <rect x="3.5" y="3.5" width="6" height="6" rx="1.5" />
      <rect x="14.5" y="14.5" width="6" height="6" rx="1.5" />
      <path d="M9.5 6.5h5a3 3 0 0 1 3 3v5" />
      <path d="M6.5 9.5v5a3 3 0 0 0 3 3h5" />
    </Glyph>
  )
}

/* ---------------------------------------------------------------- Brand marks */

export function GitHubIcon(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </Mark>
  )
}

export function XIcon(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zm-1.291 19.49h2.039L6.486 3.24H4.298z" />
    </Mark>
  )
}

export function DiscordIcon(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.011c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.01c.12.099.245.198.372.292a.077.077 0 0 1-.006.128c-.598.349-1.22.645-1.873.891a.077.077 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.029zM8.02 15.331c-1.182 0-2.157-1.086-2.157-2.419s.956-2.419 2.157-2.419c1.211 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419s.955-2.419 2.157-2.419c1.21 0 2.175 1.095 2.156 2.419 0 1.333-.946 2.419-2.156 2.419z" />
    </Mark>
  )
}

export function YouTubeIcon(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z" />
    </Mark>
  )
}

export function TikTokIcon(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </Mark>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.405a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
    </Mark>
  )
}

export function SupabaseLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.7 1.2a.7.7 0 0 1 1.25.56l-.9 7.47h6.1c1.08 0 1.66 1.27.95 2.08L10.3 22.8a.7.7 0 0 1-1.25-.56l.9-7.47h-6.1c-1.08 0-1.66-1.27-.95-2.08z" />
    </svg>
  )
}
