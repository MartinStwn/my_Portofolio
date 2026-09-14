import {
  Sparkles,
  Smartphone,
  Gauge,
  Search,
  Lock,
  Headphones,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const advantages = [
  {
    icon: Sparkles,
    title: 'Desain Modern & Profesional',
    description:
      'Tampilan elegan dan kekinian yang mencerminkan kualitas serta kredibilitas bisnis Anda.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description:
      'Tampil sempurna di semua perangkat, mulai dari ponsel, tablet, hingga desktop.',
  },
  {
    icon: Gauge,
    title: 'Website Cepat & Ringan',
    description:
      'Waktu muat yang singkat untuk pengalaman pengguna terbaik dan tingkat konversi lebih tinggi.',
  },
  {
    icon: Search,
    title: 'SEO Friendly',
    description:
      'Struktur yang dioptimasi agar website mudah ditemukan di mesin pencari seperti Google.',
  },
  {
    icon: Lock,
    title: 'Keamanan Terjaga',
    description:
      'Penerapan praktik keamanan terbaik untuk melindungi website dan data dari ancaman siber.',
  },
  {
    icon: Headphones,
    title: 'Support & Maintenance',
    description:
      'Dukungan responsif dan perawatan berkala agar website Anda selalu berjalan optimal.',
  },
]

export function Advantages() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[160px]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Keunggulan
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Kenapa Memilih Saya?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Setiap proyek dikerjakan dengan standar tinggi agar memberikan
            dampak nyata bagi pertumbuhan bisnis Anda.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="h-full bg-card p-7 transition-colors hover:bg-secondary">
                <item.icon className="size-7 text-primary" />
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
