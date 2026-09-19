import { Mail, Linkedin, Github, Instagram } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Mail, href: 'mailto:martin.cyber092@gmail.com', label: 'Email' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/martinus-setiawan-b72621328/',
    label: 'LinkedIn',
  },
  { icon: Github, href: 'https://github.com/MartinStwn', label: 'GitHub' },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/mars_yakubets/',
    label: 'Instagram',
  },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <a href="#home" className="text-base font-semibold tracking-tight text-white">
              M.Setiawan
            </a>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Cybersecurity enthusiast exploring offensive and defensive
              security, focused on secure digital infrastructure.
            </p>
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex size-10 items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-orange-500/40 hover:text-orange-500"
              >
                <s.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800/60 pt-6 text-center text-sm text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Martinus Setiawan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}