import { ArrowRight, Code2, Github, Monitor, Server, Shield, Terminal } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const techStack = [
  { icon: Shield, label: 'Cybersecurity' },
  { icon: Monitor, label: 'Zabbix' },
  { icon: Server, label: 'Grafana' },
  { icon: Terminal, label: 'Linux' },
  { icon: Code2, label: 'Next.js' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 flex-col items-center justify-center overflow-hidden pb-20 pt-32 sm:pt-40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[560px] w-[720px] -translate-x-1/2 rounded-[50%] bg-orange-500/15 blur-[160px] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_70%)]" />
        <div className="absolute bottom-24 right-[-80px] size-72 rounded-full bg-orange-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-8">
        <Reveal delay={120}>
          <div className="relative mx-auto mt-10 size-40 sm:size-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 via-orange-600 to-orange-800 blur-sm" />
            <div className="absolute inset-0 animate-spin rounded-full bg-[conic-gradient(transparent_90deg,rgb(249_115_22/0.5))] [animation-duration:8s]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile.jpg"
              alt="Martinus Setiawan"
              className="absolute inset-[3px] size-[calc(100%-6px)] rounded-full border-4 border-zinc-950 object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={240}>
          <h1 className="mt-10 text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Martinus&nbsp;Setiawan
            </span>
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Cybersecurity enthusiast, currently interning in real-world NOC and
            IT security environments — endpoint protection, HSM maintenance,
            mail servers, and observability dashboards. I turn lab work into
            dependable operations.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-500"
            >
              Get In Touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com/MartinStwn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-orange-500 hover:text-orange-400"
            >
              <Github className="size-4" />
              View GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={480}>
          <div className="mt-16 w-full">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Experience With</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {techStack.map((tech) => (
                <span key={tech.label} className="flex items-center gap-2 text-sm text-zinc-400">
                  <tech.icon className="size-4 text-orange-500" />
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}