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
                <div className="group relative h-full rounded-2xl">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-px animate-[spin_4s_linear_infinite] rounded-2xl bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,rgb(249_115_22/0.85)_320deg,transparent_360deg)] opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <article className="relative h-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/70 to-zinc-950/80 p-5 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-zinc-700/60">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-4 right-3 select-none text-[68px] font-bold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-orange-500/10"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-12 -top-12 size-32 rounded-full bg-orange-500/0 blur-2xl transition-colors duration-500 group-hover:bg-orange-500/20"
                    />

                    <div className="relative flex items-start justify-between gap-3">
                      <span className="relative inline-flex size-12 shrink-0 items-center justify-center">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-2xl bg-orange-500/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
                        />
                        <span className="relative inline-flex size-11 items-center justify-center rounded-xl border border-orange-500/25 bg-gradient-to-br from-orange-500/25 via-orange-600/10 to-transparent text-orange-400 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-300">
                          <category.icon className="size-5" />
                        </span>
                      </span>
                      <span className="shrink-0 rounded-full border border-zinc-800 bg-zinc-900/70 px-2.5 py-1 text-[10px] font-semibold text-zinc-400 backdrop-blur-sm">
                        {category.tools.length} tools
                      </span>
                    </div>

                    <h4 className="relative mt-5 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-base font-semibold text-transparent transition-all duration-300 group-hover:from-white group-hover:to-orange-400">
                      {category.group}
                    </h4>

                    <div className="relative mt-4 flex flex-wrap gap-1.5">
                      {category.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-lg border border-zinc-800/80 bg-zinc-900/60 px-2.5 py-1 text-[11px] font-medium text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}