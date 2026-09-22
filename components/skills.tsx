import { Reveal } from '@/components/reveal'

const skills = [
  { name: 'Linux Administration', level: 88 },
  { name: 'Network Security & Monitoring', level: 85 },
  { name: 'Zabbix & Grafana Dashboards', level: 90 },
  { name: 'Mail Server (Postfix / Dovecot)', level: 80 },
  { name: 'Automation (n8n / Python)', level: 78 },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-zinc-900/80 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Core Skills
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            The tools and techniques I use daily across security, monitoring,
            and operations.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-7 md:grid-cols-2">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 60}>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-zinc-200">{skill.name}</span>
                  <span className="font-semibold text-orange-500">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-900">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-[width] duration-1000"
                    style={{ width: `${skill.level}%`, height: '100%' }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
