import { Reveal } from '@/components/reveal'
import { ArrowUpRight } from 'lucide-react'

const info = [
  { label: 'Name', value: 'Martinus Setiawan' },
  { label: 'Role', value: 'Cybersecurity Enthusiast' },
  { label: 'Based in', value: 'Indonesia' },
  { label: 'Education', value: 'D4 Cybersecurity' },
  { label: 'Focus', value: 'Security · NOC · Automation' },
  { label: 'Status', value: 'Available' },
]

const stats = [
  { value: 4, suffix: '+', label: 'Lab Projects' },
  { value: 12, suffix: '+', label: 'Tools Mastered' },
  { value: 3, suffix: '', label: 'Internship Stints' },
  { value: 100, suffix: '%', label: 'Uptime-Focused' },
]

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-zinc-900/80 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            A cybersecurity student who turns internships into real
            deliverables — endpoint security, HSM maintenance, mail server
            deployment, and NOC monitoring stacks.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[400px_1fr]">
          <Reveal delay={100}>
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                alt="Martinus Setiawan"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-5">
                <div>
                  <p className="font-semibold text-white">Martinus Setiawan</p>
                  <p className="text-xs text-orange-400">Security · NOC · Automation</p>
                </div>
                <a
                  href="#contact"
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-orange-500 hover:text-black"
                  aria-label="Contact Martinus"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={150}>
              <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
                {info.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-baseline gap-2 border-b border-zinc-900 py-3 text-sm"
                  >
                    <strong className="shrink-0 font-semibold text-white">
                      {item.label}:
                    </strong>
                    <span className="text-zinc-400">{item.value}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={250}>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400">
                During my internships I worked hands-on with Kaspersky endpoint
                protection, managed HSM cryptographic keys, stood up mail
                servers with Postfix &amp; Dovecot, and built monitoring
                dashboards with Zabbix, Grafana, and Uptime Kuma. I love
                automating repetitive ops work — especially with n8n.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 80}>
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-center">
                    <p className="text-3xl font-bold text-white">
                      {stat.value}
                      <span className="text-orange-500">{stat.suffix}</span>
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
