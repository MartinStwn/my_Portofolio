'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Project = {
  category: string
  title: string
  description: string
  tech: string[]
  image: string
  alt: string
}

const projects = [
  {
    category: 'IT SECURITY / KASPERSKY',
    title: 'Kaspersky Endpoint Security Testing',
    description:
      'Hands-on testing and evaluation of Kaspersky Endpoint Security in an IT Security internship environment: agent deployment, detection testing, applying protection policies, and verifying protection status on end-user devices.',
    tech: ['Kaspersky', 'EDR', 'Endpoint Protection', 'Policy Testing'],
    image: '/images/kaspersky-testing.png',
    alt: 'Kaspersky Endpoint Security testing and evaluation',
  },
  {
    category: 'IT SECURITY / HSM',
    title: 'Hardware Security Module (HSM) Maintenance',
    description:
      'Performing Hardware Security Module (HSM) unit maintenance: unit health monitoring, slot and SO PIN management, key backup/recovery, and ensuring cryptographic keys remain secure for signing and cryptography services.',
    tech: ['HSM', 'Cryptography', 'Key Management', 'Hardware'],
    image: '/images/hsm-maintenance.png',
    alt: 'Hardware Security Module (HSM) maintenance illustration',
  },
  {
    category: 'NOC / MAIL SERVER',
    title: 'Mail Server Deployment',
    description:
      'Building an organization mail server on Ubuntu Server using Postfix as the MTA, Dovecot for IMAP/POP3 services, and Roundcube as webmail, complete with secure authentication and access.',
    tech: ['Postfix', 'Dovecot', 'Roundcube', 'Ubuntu Server'],
    image: '/images/mail-server.png',
    alt: 'Mail server architecture diagram — Postfix, Dovecot, and Roundcube',
  },
  {
    category: 'NOC / MONITORING — ZABBIX',
    title: 'Zabbix Infrastructure Monitoring',
    description:
      'Building a lab infrastructure monitoring dashboard using Zabbix: host availability tracking, CPU/memory/disk utilization, network traffic, and alerting on anomalies across NOC servers and services.',
    tech: ['Zabbix', 'Server Monitoring', 'SNMP', 'Alerting'],
    image: '/images/dashboard-lab-zabbix.png',
    alt: 'Zabbix infrastructure monitoring dashboard',
  },
  {
    category: 'NOC / MONITORING — GRAFANA',
    title: 'Grafana Metrics & Observability',
    description:
      'Building an observability dashboard for the lab infrastructure with Grafana: visualizing system performance metrics, service availability, and real-time data trends so infrastructure health is easy to monitor and analyze.',
    tech: ['Grafana', 'Metrics', 'Observability', 'Dashboard'],
    image: '/images/dashboard-lab-grafana.png',
    alt: 'Grafana observability and metrics dashboard',
  },
  {
    category: 'NOC / MONITORING — UPTIME KUMA',
    title: 'Uptime Monitoring with Uptime Kuma',
    description:
      'Running Uptime Kuma for service availability monitoring: periodic uptime checks, status page, and automated notifications so the NOC team responds quickly when downtime occurs.',
    tech: ['Uptime Kuma', 'Uptime', 'Status Page', 'Notification'],
    image: '/images/dashboard-uptime-kuma.png',
    alt: 'Uptime Kuma uptime monitoring dashboard',
  },
  {
    category: 'MIS / AUTOMATION',
    title: 'Workflow Automation with n8n',
    description:
      'Automating workflows and integrating applications using n8n: data synchronization, automated notifications, and generating routine reports that reduce manual work in the MIS division.',
    tech: ['n8n', 'Automation', 'API Integration', 'Workflow'],
    image: '/images/n8n-automation.png',
    alt: 'Workflow automation with n8n illustration',
  },
  {
    category: 'MIS / CHATBOT',
    title: 'Chatbot Development with n8n',
    description:
      'Designing and building a chatbot for internal information services using n8n: conversation flows, webhooks, and AI integration to answer user questions automatically.',
    tech: ['n8n', 'Chatbot', 'Webhook', 'AI Integration'],
    image: '/images/n8n-chatbot.png',
    alt: 'Automated chatbot with n8n illustration',
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Security', value: 'IT SECURITY' },
  { label: 'Monitoring', value: 'NOC / MONITORING' },
  { label: 'Automation', value: 'MIS / AUTOMATION' },
  { label: 'NOC', value: 'NOC / MAIL SERVER' },
]

export function Portfolio() {
  const [active, setActive] = useState('all')

  const visible = useMemo(
    () =>
      active === 'all'
        ? projects
        : projects.filter((p) => p.category.includes(active)),
    [active],
  )

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-zinc-900/80 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Selected case studies from my cybersecurity internship and hands-on
            lab work.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors',
                active === filter.value
                  ? 'border-orange-500 bg-orange-500 text-black'
                  : 'border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white',
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all hover:-translate-y-1.5 hover:border-orange-500/50 hover:shadow-[0_24px_60px_-20px_rgba(249,115,22,0.25)]">
                {/* Glare yang bergeser saat hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.06)_45%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-800 bg-black">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    unoptimized={true}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-400 backdrop-blur-sm">
                      <span className="size-1.5 rounded-full bg-orange-500" />
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-orange-400">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-zinc-300 ring-1 ring-zinc-800 transition-colors group-hover:ring-orange-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
