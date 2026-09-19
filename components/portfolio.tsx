import Image from 'next/image'
import { Reveal } from '@/components/reveal'

type Project = {
  category: string
  title: string
  description: string
  tech: string[]
  image: string
  alt: string
}

const projects: Project[] = [
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
    image: '/images/Dasboard-Lab-Zabbix.png',
    alt: 'Zabbix infrastructure monitoring dashboard',
  },
  {
    category: 'NOC / MONITORING — GRAFANA',
    title: 'Grafana Metrics & Observability',
    description:
      'Building an observability dashboard for the lab infrastructure with Grafana: visualizing system performance metrics, service availability, and real-time data trends so infrastructure health is easy to monitor and analyze.',
    tech: ['Grafana', 'Metrics', 'Observability', 'Dashboard'],
    image: '/images/Dassboard-Lab-Grafana.png',
    alt: 'Grafana observability and metrics dashboard',
  },
  {
    category: 'NOC / MONITORING — UPTIME KUMA',
    title: 'Uptime Monitoring with Uptime Kuma',
    description:
      'Running Uptime Kuma for service availability monitoring: periodic uptime checks, status page, and automated notifications so the NOC team responds quickly when downtime occurs.',
    tech: ['Uptime Kuma', 'Uptime', 'Status Page', 'Notification'],
    image: '/images/Dashboard-Grafana(Uptime Kuma).png',
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

export function Portfolio() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-zinc-900/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Security Case Studies
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Real security implementations from internship and hands-on lab work.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all hover:-translate-y-1 hover:border-orange-500/40">
                <div className="relative aspect-video overflow-hidden border-b border-zinc-800 bg-black">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    unoptimized={true}
                    priority={i < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-zinc-800"
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
