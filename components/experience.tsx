import { Activity, Code2, Server, ShieldCheck, Terminal, Workflow } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type TimelineItem = {
  title: string
  subtitle: string
  description: string
  skills: string[]
}

const timeline: TimelineItem[] = [
  {
    title: 'D4 Cybersecurity',
    subtitle: 'Higher Education',
    description:
      'Pursuing a professional bachelor degree in cybersecurity, focusing on offensive testing, defensive operations, and network security fundamentals.',
    skills: ['Network Security', 'Operating Systems', 'Cryptography', 'Python'],
  },
  {
    title: 'Professional Experience',
    subtitle: 'Hands-on Skills',
    description:
      'Working as a cybersecurity enthusiast during internship, monitoring infrastructure, responding to incidents, and hardening production systems.',
    skills: ['SIEM', 'Incident Response', 'Monitoring', 'Linux Administration'],
  },
  {
    title: 'Security Lab & Tools',
    subtitle: 'Offensive & Defensive',
    description:
      'Building personal labs to practice penetration testing and defensive techniques, from endpoint telemetry to vulnerability management.',
    skills: ['Fedora Linux', 'Nmap', 'Wireshark', 'Zabbix', 'Virtualization'],
  },
]

const toolkit = [
  {
    group: 'Security Operations',
    icon: ShieldCheck,
    tools: ['Kaspersky Endpoint Security', 'EDR', 'HSM / PKI', 'Incident Response', 'SIEM'],
  },
  {
    group: 'Monitoring & Observability',
    icon: Activity,
    tools: ['Zabbix', 'Grafana', 'Uptime Kuma', 'SNMP', 'Alerting'],
  },
  {
    group: 'Automation',
    icon: Workflow,
    tools: ['n8n', 'Webhooks', 'API Integration', 'Chatbot', 'Workflow Design'],
  },
  {
    group: 'Infrastructure',
    icon: Server,
    tools: ['Linux / Ubuntu Server', 'Postfix', 'Dovecot', 'Roundcube', 'PostgreSQL'],
  },
  {
    group: 'Offensive & Scripting',
    icon: Terminal,
    tools: ['Fedora Linux', 'Nmap', 'Wireshark', 'Python', 'Bash'],
  },
  {
    group: 'Platform & Web',
    icon: Code2,
    tools: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Git'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-zinc-900/80 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Education &amp; Skills
          </h2>
        </Reveal>

        <div className="relative mt-8">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[7px] top-2 w-px bg-zinc-800"
          />
          <ol className="space-y-8">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 100} className="relative pl-10">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 size-[15px] rounded-full bg-orange-500 ring-4 ring-orange-500/15"
                />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-orange-500">
                  {item.subtitle}
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-12 border-t border-zinc-900/80 pt-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
              Toolkit
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Technical Skills I Work With
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Tools and platforms I actively use across security operations,
              monitoring, automation, and infrastructure work.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolkit.map((category, i) => (
              <Reveal key={category.group} delay={i * 60}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-[0_20px_50px_-18px_rgba(249,115,22,0.3)]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-orange-500/0 blur-2xl transition-colors duration-500 group-hover:bg-orange-500/25"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative flex items-start justify-between gap-3">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/20 to-orange-700/5 text-orange-400 transition-all duration-300 group-hover:scale-110 group-hover:border-orange-500/50 group-hover:text-orange-300">
                      <category.icon className="size-5" />
                    </span>
                    <span className="shrink-0 rounded-full bg-zinc-900/80 px-2 py-0.5 text-[10px] font-semibold text-zinc-500 ring-1 ring-zinc-800">
                      {category.tools.length} tools
                    </span>
                  </div>

                  <h4 className="relative mt-4 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-orange-400">
                    {category.group}
                  </h4>

                  <div className="relative mt-3.5 flex flex-wrap gap-1.5">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-transparent bg-zinc-900/80 px-2 py-1 text-[11px] font-medium text-zinc-300 transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}