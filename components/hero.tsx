'use client'

import type { CSSProperties, ReactNode } from 'react'
import {
  siDovecot,
  siFedora,
  siGnubash,
  siGrafana,
  siKaspersky,
  siN8n,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siRoundcube,
  siTailwindcss,
  siTypescript,
  siUptimekuma,
  siWireshark,
} from 'simple-icons'
import { ArrowRight, Github } from 'lucide-react'
import { NmapIcon, ZabbixIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'

type GlyphProps = { className?: string; style?: CSSProperties }

function si(glyph: { path: string }) {
  return function Glyph({ className, style }: GlyphProps) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style} fill="currentColor">
        <path d={glyph.path} />
      </svg>
    )
  }
}

function hexOf(icon: { hex: string }) {
  return icon.hex.startsWith('#') ? icon.hex : `#${icon.hex}`
}

const marqueeLogos: { name: string; color: string; Glyph: (props: GlyphProps) => ReactNode }[] = [
  { name: 'Zabbix', color: '#D40000', Glyph: ZabbixIcon },
  { name: 'Grafana', color: hexOf(siGrafana), Glyph: si(siGrafana) },
  { name: 'Kaspersky', color: hexOf(siKaspersky), Glyph: si(siKaspersky) },
  { name: 'n8n', color: hexOf(siN8n), Glyph: si(siN8n) },
  { name: 'Uptime Kuma', color: hexOf(siUptimekuma), Glyph: si(siUptimekuma) },
  { name: 'Dovecot', color: hexOf(siDovecot), Glyph: si(siDovecot) },
  { name: 'Roundcube', color: hexOf(siRoundcube), Glyph: si(siRoundcube) },
  { name: 'Nmap', color: hexOf(siWireshark), Glyph: NmapIcon },
  { name: 'Wireshark', color: hexOf(siWireshark), Glyph: si(siWireshark) },
  { name: 'Python', color: hexOf(siPython), Glyph: si(siPython) },
  { name: 'Bash', color: hexOf(siGnubash), Glyph: si(siGnubash) },
  { name: 'Fedora', color: hexOf(siFedora), Glyph: si(siFedora) },
  { name: 'PostgreSQL', color: hexOf(siPostgresql), Glyph: si(siPostgresql) },
  { name: 'Next.js', color: '#9CC9F5', Glyph: si(siNodedotjs) },
  { name: 'TypeScript', color: hexOf(siTypescript), Glyph: si(siTypescript) },
  { name: 'React', color: hexOf(siReact), Glyph: si(siReact) },
  { name: 'Tailwind', color: hexOf(siTailwindcss), Glyph: si(siTailwindcss) },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_0%,black_10%,transparent_72%)]" />
        <div className="absolute -left-24 top-10 size-[420px] rounded-full bg-orange-500/12 blur-[140px]" />
        <div className="absolute -right-20 bottom-0 size-[380px] rounded-full bg-orange-600/10 blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-zinc-300 backdrop-blur-sm">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-orange-500" />
                </span>
                Cybersecurity &amp; NOC
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Martinus&nbsp;Setiawan
                <span className="mt-2 block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Security &amp; Infrastructure
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-zinc-400 lg:mx-0">
                Hands-on experience across endpoint protection, HSM operations,
                mail infrastructure, and NOC observability — turning lab work into
                production-grade systems.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all hover:bg-orange-500 hover:shadow-[0_12px_32px_-10px_rgba(249,115,22,0.6)]"
                >
                  Get In Touch
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://github.com/MartinStwn"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-orange-500/60 hover:bg-orange-500/10"
                >
                  <Github className="size-4" />
                  View GitHub
                </a>
              </div>
            </Reveal>

          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={140}>
              <div className="relative mx-auto w-full max-w-[210px] sm:max-w-[240px]">
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-[1.6rem] bg-gradient-to-br from-orange-500/25 via-transparent to-orange-600/10 blur-xl"
                />
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-1.5 shadow-xl backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-xl bg-zinc-950">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/profile.jpg"
                      alt="Martinus Setiawan"
                      className="aspect-[4/5] w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <p className="text-[11px] font-semibold text-white">D4 Cybersecurity</p>
                      <p className="mt-0.5 text-[10px] leading-tight text-zinc-400">
                        Endpoint Security · NOC · Automation
                      </p>
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent"
                    />
                  </div>
                </div>

              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={420}>
          <div className="mt-16 border-y border-zinc-900/80 py-6">
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
              <div className="animate-marquee flex w-max items-center gap-10">
                {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
                  <span
                    key={`${logo.name}-${i}`}
                    className="flex shrink-0 items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-200"
                    style={{ '--brand': logo.color } as CSSProperties}
                  >
                    <logo.Glyph className="size-4" style={{ color: logo.color }} />
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}