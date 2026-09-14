import { ShieldCheck, Mail, Linkedin, Github, Instagram } from 'lucide-react'

const navLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Proses', href: '#proses' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
]

const socials = [
  { icon: Mail, href: 'mailto:martin.cyber092@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/martinus-setiawan-b72621328/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/MartinStwn', label: 'GitHub' },
  { icon: Instagram, href: 'https://www.instagram.com/mars_yakubets/', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <a
              href="#beranda"
              className="inline-flex items-center gap-2 font-semibold tracking-tight"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="size-5" />
              </span>
              Martinus Setiawan
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Web Developer & Cyber Security Specialist. Membangun website
              profesional, cepat, dan aman untuk pertumbuhan bisnis Anda.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-start">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <s.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Martinus Setiawan. Seluruh hak cipta
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}