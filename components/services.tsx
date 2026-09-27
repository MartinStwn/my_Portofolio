import type { ReactNode } from 'react'
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

const services = [
  {
    icon: si(siKaspersky),
    color: siKaspersky.hex,
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
    color: siDovecot.hex,
    title: 'Mail Server Deployment',
    description:
      'Building organizational mail servers with Postfix, Dovecot, and Roundcube — secure authentication and reliable delivery.',
  },
  {
    icon: si(siGrafana),
    color: siGrafana.hex,
    title: 'Infrastructure Monitoring',
    description:
      'NOC monitoring stacks with Zabbix, Grafana, and Uptime Kuma: availability, metrics, alerting, and status pages.',
  },
  {
    icon: si(siN8n),
    color: siN8n.hex,
    title: 'Automation & Chatbots',
    description:
      'Workflow automation with n8n: integrations, notifications, and internal service chatbots to reduce manual work.',
  },
  {
    icon: si(siRoundcube),
    color: siRoundcube.hex,
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
                className="group flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition-all hover:-translate-y-1 hover:border-zinc-700"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ring-1 transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: service.color,
                      backgroundColor: `${service.color}1F`,
                      boxShadow: `inset 0 0 0 1px ${service.color}33`,
                    }}
                  >
                    <service.icon className="size-5" />
                  </span>
                  <h3 className="text-sm font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-orange-400">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-zinc-400">
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
