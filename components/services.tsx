import type { CSSProperties } from 'react'
import { siDovecot, siGrafana, siKaspersky, siN8n, siRoundcube } from 'simple-icons'
import { HsmIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'

type GlyphProps = { className?: string }

function si(glyph: { path: string }) {
  return function Glyph({ className }: GlyphProps) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d={glyph.path} />
      </svg>
    )
  }
}

function brand(icon: { hex: string }) {
  return icon.hex.startsWith('#') ? icon.hex : `#${icon.hex}`
}

function tint(hex: string, amount = 0.45) {
  const n = parseInt(hex.slice(1), 16)
  const r = Math.round(((n >> 16) & 255) * (1 - amount) + 255 * amount)
  const g = Math.round(((n >> 8) & 255) * (1 - amount) + 255 * amount)
  const b = Math.round((n & 255) * (1 - amount) + 255 * amount)
  return `rgb(${r} ${g} ${b})`
}

const services = [
  {
    icon: si(siKaspersky),
    color: brand(siKaspersky),
    title: 'Endpoint & IT Security',
    description:
      'Deployment, testing, and policy enforcement for endpoint protection (Kaspersky) and security hardening of end-user devices.',
  },
  {
    icon: HsmIcon,
    color: '#005EB8',
    title: 'HSM & Key Management',
    description:
      'Maintenance of Hardware Security Modules: health monitoring, SO PIN & slot management, and cryptographic key backup/recovery.',
  },
  {
    icon: si(siDovecot),
    color: brand(siDovecot),
    title: 'Mail Server Deployment',
    description:
      'Building organizational mail servers with Postfix, Dovecot, and Roundcube — secure authentication and reliable delivery.',
  },
  {
    icon: si(siGrafana),
    color: brand(siGrafana),
    title: 'Infrastructure Monitoring',
    description:
      'NOC monitoring stacks with Zabbix, Grafana, and Uptime Kuma: availability, metrics, alerting, and status pages.',
  },
  {
    icon: si(siN8n),
    color: brand(siN8n),
    title: 'Automation & Chatbots',
    description:
      'Workflow automation with n8n: integrations, notifications, and internal service chatbots to reduce manual work.',
  },
  {
    icon: si(siRoundcube),
    color: brand(siRoundcube),
    title: 'Secure Communication',
    description:
      'Configuring and securing communication channels and mail flow — relay setup, TLS, and sender validation.',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-zinc-900/80 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            What I can bring to a security, NOC, or operations team.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <article
                className="group relative h-full overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)] hover:shadow-[0_18px_40px_-18px_var(--brand)]"
                style={
                  {
                    '--brand': service.color,
                    '--brand-soft': tint(service.color),
                  } as CSSProperties
                }
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-45"
                  style={{ backgroundColor: service.color }}
                />

                <div className="relative flex items-center gap-3">
                  <span className="relative inline-flex size-11 shrink-0 items-center justify-center">
                    <span
                      aria-hidden="true"
                      className="absolute -inset-0.5 rounded-xl opacity-45 blur-lg transition-opacity duration-300 group-hover:opacity-80"
                      style={{ backgroundColor: service.color }}
                    />
                    <span
                      className="relative inline-flex size-11 items-center justify-center rounded-xl shadow-lg ring-1 ring-inset ring-white/15 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(140deg, ${service.color} 0%, ${service.color}B3 100%)`,
                      }}
                    >
                      <service.icon className="size-[22px] text-white" />
                    </span>
                  </span>
                  <h3
                    className="text-sm font-semibold leading-snug text-white transition-colors duration-300"
                  >
                    <span className="transition-colors duration-300 group-hover:text-[var(--brand-soft)]">
                      {service.title}
                    </span>
                  </h3>
                </div>
                <p className="relative mt-3 flex-1 text-xs leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
