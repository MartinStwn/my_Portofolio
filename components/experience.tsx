import { Activity, Code2, Server, ShieldCheck, Terminal, Workflow } from 'lucide-react'
import {
  siDovecot,
  siFedora,
  siGnubash,
  siGrafana,
  siNextdotjs,
  siN8n,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siUptimekuma,
  siWireshark,
} from 'simple-icons'
import type { ReactNode } from 'react'
import { NmapIcon, PostfixIcon, ZabbixIcon } from '@/components/brand-icons'
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

const toolGlyphs: Record<string, (props: GlyphProps) => ReactNode> = {
  Zabbix: ZabbixIcon,
  Postfix: PostfixIcon,
  Nmap: NmapIcon,
  Grafana: si(siGrafana),
  'Uptime Kuma': si(siUptimekuma),
  n8n: si(siN8n),
  'Fedora Linux': si(siFedora),
  Dovecot: si(siDovecot),
  Python: si(siPython),
  Bash: si(siGnubash),
  Wireshark: si(siWireshark),
  PostgreSQL: si(siPostgresql),
  TypeScript: si(siTypescript),
  React: si(siReact),
  'Tailwind CSS': si(siTailwindcss),
  'Next.js': si(siNextdotjs),
}

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
    color: '#006D5C',
    tools: [
      { name: 'Kaspersky', color: '#006D5C' },
      { name: 'EDR', color: '#006D5C' },
      { name: 'HSM / PKI', color: '#006D5C' },
      { name: 'Incident Response', color: '#006D5C' },
      { name: 'SIEM', color: '#006D5C' },
    ],
  },
  {
    group: 'Monitoring & Observability',
    icon: Activity,
    color: '#D40000',
    tools: [
      { name: 'Zabbix', color: '#D40000' },
      { name: 'Grafana', color: '#F46800' },
      { name: 'Uptime Kuma', color: '#5CDD8B' },
      { name: 'SNMP', color: '#F46800' },
      { name: 'Alerting', color: '#D40000' },
    ],
  },
  {
    group: 'Automation',
    icon: Workflow,
    color: '#EA4B71',
    tools: [
      { name: 'n8n', color: '#EA4B71' },
      { name: 'Webhooks', color: '#EA4B71' },
      { name: 'API Integration', color: '#EA4B71' },
      { name: 'Chatbot', color: '#EA4B71' },
      { name: 'Workflow Design', color: '#EA4B71' },
    ],
  },
  {
    group: 'Infrastructure',
    icon: Server,
    color: '#54BCAB',
    tools: [
      { name: 'Fedora Linux', color: '#51A2DA' },
      { name: 'Postfix', color: '#54BCAB' },
      { name: 'Dovecot', color: '#54BCAB' },
      { name: 'Roundcube', color: '#37BEFF' },
      { name: 'PostgreSQL', color: '#4169E1' },
    ],
  },
  {
    group: 'Offensive & Scripting',
    icon: Terminal,
    color: '#1679A7',
    tools: [
      { name: 'Nmap', color: '#1679A7' },
      { name: 'Wireshark', color: '#1679A7' },
      { name: 'Python', color: '#3776AB' },
      { name: 'Bash', color: '#4EAA25' },
      { name: 'VMware', color: '#607078' },
    ],
  },
  {
    group: 'Platform & Web',
    icon: Code2,
    color: '#61DAFB',
    tools: [
      { name: 'Next.js', color: '#9CC9F5' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'React', color: '#61DAFB' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
      { name: 'Git', color: '#F05032' },
    ],
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
                      {category.tools.map((tool) => {
                        const Glyph = toolGlyphs[tool.name]
                        return (
                          <span
                            key={tool.name}
                            className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                              color: tool.color,
                              borderColor: `${tool.color}33`,
                              backgroundColor: `${tool.color}12`,
                            }}
                          >
                            {Glyph ? <Glyph className="size-3.5 shrink-0" /> : null}
                            {tool.name}
                          </span>
                        )
                      })}
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