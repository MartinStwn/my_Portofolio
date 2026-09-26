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
    skills: ['Kali Linux', 'Nmap', 'Wireshark', 'Zabbix', 'Virtualization'],
  },
]

const toolkit = [
  {
    group: 'Security Operations',
    tools: ['Kaspersky Endpoint Security', 'EDR', 'HSM / PKI', 'Incident Response', 'SIEM'],
  },
  {
    group: 'Monitoring & Observability',
    tools: ['Zabbix', 'Grafana', 'Uptime Kuma', 'SNMP', 'Alerting'],
  },
  {
    group: 'Automation',
    tools: ['n8n', 'Webhooks', 'API Integration', 'Chatbot', 'Workflow Design'],
  },
  {
    group: 'Infrastructure',
    tools: ['Linux / Ubuntu Server', 'Postfix', 'Dovecot', 'Roundcube', 'PostgreSQL'],
  },
  {
    group: 'Offensive & Scripting',
    tools: ['Kali Linux', 'Nmap', 'Wireshark', 'Python', 'Bash'],
  },
  {
    group: 'Platform & Web',
    tools: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Git'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-zinc-900/80 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Education &amp; Skills
          </h2>
        </Reveal>

        <div className="relative mt-12">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[7px] top-2 w-px bg-zinc-800"
          />
          <ol className="space-y-12">
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

        <div className="mt-20 border-t border-zinc-900/80 pt-14">
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
                <div className="h-full rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 transition-colors hover:border-orange-500/40">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="size-1.5 rounded-full bg-orange-500" />
                    {category.group}
                  </h4>
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-medium text-zinc-300 ring-1 ring-zinc-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}