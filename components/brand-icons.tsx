import type { CSSProperties } from 'react'

type IconProps = {
  className?: string
  style?: CSSProperties
}

export function ZabbixIcon({ className, style }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label="Zabbix"
      fill="currentColor"
      style={style}
    >
      <path d="M17.1 12.2c.4-.5.6-1.1.6-1.7a4.3 4.3 0 0 0-1.6-3.4l-.4-.3.2-.5.9-1.9.2-.5-.5-.2-2 .4-.5.1-.3-.4-1.2-2-.3-.4-.4.3-1.3 2-.3.4-.5-.1-2-.4-.5-.1-.2.5.2.5l.9 1.9.2.5-.4.3a4.3 4.3 0 0 0-1.6 3.4c0 .6.2 1.2.6 1.7l.3.4-.3.3-1.5 1.3-.4.4.4.3 1.8.9.5.2v.5l-.3 2.1-.1.5.5-.1 2-.8.5-.2.3.3 1.5 1.8.4.4.3-.4 1.5-1.8.3-.3.5.2 2 .8.5.1-.1-.5-.3-2.1v-.5l.5-.2 1.8-.9.4-.3-.4-.4-1.5-1.3-.3-.3.3-.4zM12 15.4a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8z" />
    </svg>
  )
}

export function NmapIcon({ className, style }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label="Nmap"
      fill="currentColor"
      style={style}
    >
      <path d="M3 3h18v2H3V3zm0 4h6v2H3V7zm0 4h10v2H3v-2zm0 4h6v2H3v-2zM3 19h18v2H3v-2z" />
    </svg>
  )
}

export function HsmIcon({ className, style }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label="Hardware Security Module"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <rect x="5" y="5" width="14" height="14" rx="2.5" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M19 5l-2 2M5 19l2-2M19 19l-2-2" />
    </svg>
  )
}

export function PostfixIcon({ className, style }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label="Postfix"
      fill="currentColor"
      style={style}
    >
      <path d="M2 4h20v16H2V4zm2 2v3h4V6H4zm6 0v3h4V6h-4zm6 0v3h4V6h-4zM4 11v7h4v-7H4zm6 0v7h4v-7h-4zm6 0v7h4v-7h-4z" />
    </svg>
  )
}
