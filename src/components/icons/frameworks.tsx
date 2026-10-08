import type { IconProps } from './index'

/*
 * Framework marks for the quickstart tab strip.
 *
 * All six render in `currentColor` rather than their brand colours — the page is
 * monochrome, and tinting one tab green while its neighbours are grey would read
 * as a bug rather than as branding.
 *
 * These are decorative: the tab button itself carries the accessible name.
 */

export function ReactMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="2.05" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="10.5" ry="4.03" />
        <ellipse cx="12" cy="12" rx="10.5" ry="4.03" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10.5" ry="4.03" transform="rotate(120 12 12)" />
      </g>
    </svg>
  )
}

export function NextMark(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10.2" />
      <path d="M8.9 16.2V7.9l6.3 8.1" />
      <path d="M15.2 7.9v4.4" />
    </svg>
  )
}

export function FlutterMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.314 0 2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
    </svg>
  )
}

export function SvelteMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.712 3.175C18.447-.088 14.367-1.014 11.577.79L6.49 4.035A5.82 5.82 0 0 0 3.86 7.893a6.127 6.127 0 0 0 .605 3.934 5.834 5.834 0 0 0-.871 2.173 6.2 6.2 0 0 0 1.062 4.685c2.265 3.264 6.345 4.189 9.135 2.385l5.087-3.244a5.819 5.819 0 0 0 2.63-3.859 6.127 6.127 0 0 0-.605-3.934 5.83 5.83 0 0 0 .871-2.173 6.199 6.199 0 0 0-1.062-4.685zM10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.358a4.067 4.067 0 0 1 1.135-.5 4.44 4.44 0 0 1 4.765 1.767 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499z" />
    </svg>
  )
}

export function VueMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zM12 14.08 5.16 2.23h4.43L12 6.41l2.41-4.18h4.43z" />
    </svg>
  )
}

export function NuxtMark(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M13.4 19.6H3.1a1.3 1.3 0 0 1-1.13-1.96l5.15-8.76a1.3 1.3 0 0 1 2.25 0l5.15 8.76a1.3 1.3 0 0 1-1.12 1.96z" />
      <path d="M14.2 12.45 16.5 8.5a1.2 1.2 0 0 1 2.08 0l4.25 7.3a1.2 1.2 0 0 1-1.04 1.8h-4.4" />
    </svg>
  )
}
