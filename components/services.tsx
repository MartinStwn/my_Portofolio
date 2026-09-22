import { Activity, Bot, Lock, Mail, ServerCog, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: ShieldCheck,
    title: 'Endpoint & IT Security',
    description:
      'Deployment, testing, and policy enforcement for endpoint protection (Kaspersky) and security hardening of end-user devices.',
  },
  {
    icon: Lock,
    title: 'HSM & Key Management',
    description:
      'Maintenance of Hardware Security Modules: health monitoring, SO PIN & slot management, and cryptographic key backup/recovery.',
  },
  {
    icon: ServerCog,
    title: 'Mail Server Deployment',
    description:
      'Building organizational mail servers with Postfix, Dovecot, and Roundcube — secure authentication and reliable delivery.',
  },
  {
    icon: Activity,
    title: 'Infrastructure Monitoring',
    description:
      'NOC monitoring stacks with Zabbix, Grafana, and Uptime Kuma: availability, metrics, alerting, and status pages.',
  },
  {
    icon: Bot,
    title: 'Automation & Chatbots',
    description:
      'Workflow automation with n8n: integrations, notifications, and internal service chatbots to reduce manual work.',
  },
  {
    icon: Mail,
    title: 'Secure Communication',
    description:
      'Configuring and securing communication channels and mail flow — relay setup, TLS, and sender validation.',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-zinc-900/80 py-20 sm:py-28"
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <article className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all hover:-translate-y-1 hover:border-orange-500/40">
                <div className="flex size-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/20 transition-colors group-hover:bg-orange-500 group-hover:text-black">
                  <service.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
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
