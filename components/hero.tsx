import {
  ArrowRight,
  Code2,
  Github,
  Monitor,
  Server,
  Shield,
  Terminal,
} from 'lucide-react'

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
      className="relative flex min-h-screen scroll-mt-24 flex-col items-center justify-center overflow-hidden pb-20 pt-28 sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-10 h-[480px] w-[640px] -translate-x-1/2 rounded-full bg-orange-500/12 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-size-[64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 text-center lg:px-8">
        <div className="mx-auto flex size-28 items-center justify-center rounded-full bg-linear-to-br from-orange-400 to-orange-700 p-[3px] shadow-[0_0_40px_rgba(249,115,22,0.25)]">
          <div className="flex size-full items-center justify-center overflow-hidden rounded-full bg-zinc-950">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile.jpg"
              alt="Martinus Setiawan"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Martinus Setiawan
        </h1>
        <p className="mt-2 text-2xl font-bold tracking-tight text-orange-500 sm:text-3xl md:text-4xl">
          Cybersecurity Enthusiast
        </p>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
          Passionate about securing digital infrastructure, monitoring network
          health, and building clean web interfaces. Currently exploring the
          offensive and defensive sides of cybersecurity through real internship
          work and hands-on lab projects.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200 sm:w-auto"
          >
            Get In Touch
            <ArrowRight className="size-4" />
          </a>
          <a
            href="https://github.com/MartinStwn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/5 sm:w-auto"
          >
            <Github className="size-4" />
            View GitHub
          </a>
        </div>
      </div>

      <div className="mt-16 w-full">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
          Experience With
        </p>
        <div className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6">
          {techStack.map((tech) => (
            <span
              key={tech.label}
              className="flex items-center gap-2 text-sm text-zinc-400"
            >
              <tech.icon className="size-4 text-orange-500/80" />
              {tech.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
