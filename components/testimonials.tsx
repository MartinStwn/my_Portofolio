import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'Website company profile kami benar-benar berubah total. Tampilannya profesional dan banyak klien baru yang menghubungi setelah website online. Prosesnya cepat dan komunikatif.',
    name: 'Budi Santoso',
    role: 'Direktur, CV Maju Bersama',
    initials: 'BS',
  },
  {
    quote:
      'Sebagai pemilik UMKM, saya butuh website yang terjangkau tapi tetap berkualitas. Hasilnya melebihi ekspektasi, cepat diakses dan mudah ditemukan di Google.',
    name: 'Siti Rahmawati',
    role: 'Pemilik, Dapur Sehat Nusantara',
    initials: 'SR',
  },
  {
    quote:
      'Audit keamanan yang dilakukan sangat menyeluruh. Beberapa celah berbahaya berhasil ditemukan dan diperbaiki. Sekarang saya jauh lebih tenang dengan keamanan website bisnis saya.',
    name: 'Andi Wijaya',
    role: 'Founder, Startup TeknoLokal',
    initials: 'AW',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Testimoni
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Apa Kata Klien
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Kepuasan klien adalah prioritas utama dalam setiap proyek yang saya
            kerjakan.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="glass flex h-full flex-col rounded-2xl p-7">
                <Quote className="size-8 text-primary/40" />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="size-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
