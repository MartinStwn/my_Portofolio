import { Mail, Linkedin, Github, Instagram } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const contactChannels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'martin.cyber092@gmail.com',
    href: 'mailto:martin.cyber092@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/martinus-setiawan',
    href: 'https://www.linkedin.com/in/martinus-setiawan-b72621328/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@MartinStwn',
    href: 'https://github.com/MartinStwn',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@mars_yakubets',
    href: 'https://www.instagram.com/mars_yakubets/',
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-zinc-900/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s Talk Security
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
              Have a question about security, monitoring, or want to collaborate
              on a project? Feel free to reach out through any of my channels —
              I&apos;m always happy to discuss and share what I&apos;m learning.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col gap-4">
              {contactChannels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={c.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition-all hover:-translate-y-0.5 hover:border-orange-500/40"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 transition-colors group-hover:bg-orange-500 group-hover:text-black">
                    <c.icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm text-zinc-400">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}