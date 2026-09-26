'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, BookOpen, Maximize2, X } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Project = {
  category: string
  title: string
  description: string
  tech: string[]
  image: string
  alt: string
  metric?: string
  link?: { label: string; href: string }
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
  const [preview, setPreview] = useState<Project | null>(null)

  useEffect(() => {
    if (!preview) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreview(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [preview])

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
      className="scroll-mt-24 border-t border-zinc-900/80 py-12 sm:py-16"
    >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 transition-all hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-[0_18px_40px_-16px_rgba(249,115,22,0.25)]">
                {/* Glare yang bergeser saat hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.06)_45%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <button
                  type="button"
                  onClick={() => setPreview(project)}
                  aria-label={`Zoom: ${project.title}`}
                  className="relative block aspect-[16/9] w-full cursor-zoom-in overflow-hidden border-b border-zinc-800 bg-black"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    unoptimized={true}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                  <div className="absolute left-3 top-3">
                    <span className="inline-flex items-center gap-1 rounded-full border border-orange-500/30 bg-black/60 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-orange-400 backdrop-blur-sm">
                      <span className="size-1.5 rounded-full bg-orange-500" />
                      {project.category}
                    </span>
                  </div>
                  <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-[10px] font-semibold text-zinc-300 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <Maximize2 className="size-3" />
                    Zoom
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-[15px] font-semibold leading-snug text-white transition-colors group-hover:text-orange-400">
                    {project.title}
                  </h3>
                  {project.metric ? (
                    <p className="mt-1.5 inline-flex w-fit items-center rounded-md border border-orange-500/25 bg-orange-500/10 px-2 py-0.5 text-[11px] font-semibold text-orange-400">
                      {project.metric}
                    </p>
                  ) : null}
                  <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  {project.link ? (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex w-fit items-center gap-1 text-[11px] font-semibold text-orange-400 transition-colors hover:text-orange-300"
                    >
                      {project.link.label}
                      <ArrowUpRight className="size-3" />
                    </a>
                  ) : null}
                  <div className="mt-auto flex flex-wrap gap-1 pt-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-zinc-900 px-1.5 py-0.5 text-[10px] font-medium text-zinc-300 ring-1 ring-zinc-800 transition-colors group-hover:ring-orange-500/30"
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

      {preview ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={preview.title}
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/90 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            aria-label="Close preview"
            className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 transition-colors hover:border-orange-500 hover:text-orange-400"
          >
            <X className="size-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[80vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950"
          >
            <div className="relative w-full bg-black" style={{ aspectRatio: '16 / 9' }}>
              <Image
                src={preview.image}
                alt={preview.alt}
                fill
                unoptimized={true}
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1 border-t border-zinc-800 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500">
                  {preview.category}
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-white sm:text-base">
                  {preview.title}
                </h3>
              </div>
              {preview.link ? (
                <a
                  href={preview.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 rounded-full border border-orange-500/40 px-4 py-2 text-xs font-semibold text-orange-400 transition-colors hover:bg-orange-500 hover:text-black"
                >
                  <BookOpen className="size-3.5" />
                  {preview.link.label}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
