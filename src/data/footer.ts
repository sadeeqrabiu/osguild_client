import type { ComponentType } from 'react'
import type { IconProps } from '../components/icons'
import {
  DiscordIcon,
  GitHubIcon,
  InstagramIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from '../components/icons'

export type FooterColumn = {
  heading: string
  links: string[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Product',
    links: [
      'Pricing',
      'Database',
      'Auth',
      'Functions',
      'Compute',
      'Realtime',
      'Storage',
      'Vector',
    ],
  },
  {
    heading: 'Solutions',
    links: [
      'AI Builders',
      'No Code',
      'Beginners',
      'Developers',
      'Postgres Devs',
      'Vibe Coders',
      'Hackathon Contestants',
    ],
  },
  {
    heading: 'Resources',
    links: [
      'Blog',
      'Support',
      'System Status',
      'Become a Partner',
      'Partner Catalog',
      'Brand Assets',
      'Security & Compliance',
    ],
  },
  {
    heading: 'Developers',
    links: ['Documentation', 'Supabase Library', 'Changelog', 'RSS'],
  },
  {
    heading: 'Community',
    links: ['Events & Webinars', 'SupaSquad', 'Contributing', 'Open Source', 'DevTo'],
  },
  {
    heading: 'Company',
    links: [
      'Company',
      'Careers',
      'General Availability',
      'Legal Hub',
      'Privacy Policy',
      'Privacy Settings',
      'Acceptable Use Policy',
    ],
  },
]

export type SocialLink = {
  label: string
  icon: ComponentType<IconProps>
  href: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'X', icon: XIcon, href: '#x' },
  { label: 'GitHub', icon: GitHubIcon, href: '#github' },
  { label: 'Discord', icon: DiscordIcon, href: '#discord' },
  { label: 'YouTube', icon: YouTubeIcon, href: '#youtube' },
  { label: 'TikTok', icon: TikTokIcon, href: '#tiktok' },
  { label: 'Instagram', icon: InstagramIcon, href: '#instagram' },
]

export type Certification = {
  /** The certification name, set at full strength. */
  name: string
  /** Its status word, set back a step — "SOC2 Type 2 Certified". */
  status: string
}

export const CERTIFICATIONS: Certification[] = [
  { name: 'SOC2 Type 2', status: 'Certified' },
  { name: 'HIPAA', status: 'Compliant' },
  { name: 'ISO 27001', status: 'Certified' },
]
