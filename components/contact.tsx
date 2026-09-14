'use client'

import { useState } from 'react'
import {
  MessageCircle,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Send,
  MapPin,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Reveal } from '@/components/reveal'

const WHATSAPP_NUMBER = '6281234567890'
const EMAIL = 'martin.cyber092@gmail.com'

const contactChannels = [
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/martinus-setiawan',
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
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Halo, saya ${form.name}.%0A%0AEmail: ${form.email}%0ALayanan: ${form.service}%0A%0APesan:%0A${form.message}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  return (
    <section id="kontak" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/15 blur-[150px]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Kontak
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Siap Mengembangkan Bisnis Anda?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Mari diskusikan kebutuhan website Anda. Konsultasi pertama gratis,
            tanpa kewajiban apa pun.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {contactChannels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      {c.label}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Lokasi</span>
                  <span className="block text-sm text-muted-foreground">
                    Jakarta, Indonesia (Remote)
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    required
                    placeholder="Nama Anda"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="email@bisnis.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="service">Layanan yang Diminati</Label>
                <Input
                  id="service"
                  placeholder="Contoh: Website Company Profile"
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                />
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Ceritakan kebutuhan bisnis dan website Anda..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Kirim via WhatsApp
                  <Send className="size-4" />
                </Button>
                <Button
                  asChild
                  type="button"
                  size="lg"
                  variant="outline"
                  className="w-full border-border bg-card/50 sm:w-auto"
                >
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" />
                    Chat Langsung
                  </a>
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}