import { CheckCircle2, ShieldCheck, Code2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const highlights = [
  'Pengembangan website profesional dari nol hingga online',
  'Audit dan penguatan keamanan untuk melindungi data bisnis',
  'Optimasi performa agar website cepat di semua perangkat',
  'Pendampingan teknis dan konsultasi digital berkelanjutan',
]

export function About() {
  return (
    <section id="tentang" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="glass rounded-3xl p-8">
                <div className="flex items-center gap-4">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Code2 className="size-8" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Andra Pratama</p>
                    <p className="text-sm text-muted-foreground">
                      Web Developer & Cyber Security Specialist
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border bg-card/60 p-5">
                    <p className="text-2xl font-bold text-primary">3+</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Tahun pengalaman
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card/60 p-5">
                    <p className="text-2xl font-bold text-primary">50+</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Proyek selesai
                    </p>
                  </div>
                  <div className="col-span-2 flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-5">
                    <ShieldCheck className="size-6 shrink-0 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Mengutamakan keamanan dan kerahasiaan data setiap klien.
                    </p>
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-2xl"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Tentang Saya
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Mitra digital yang fokus pada hasil nyata
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Perkenalkan, saya seorang Web Developer dan Cyber Security
                Specialist yang berfokus pada pengembangan website profesional,
                keamanan website, dan optimasi performa digital. Saya percaya
                bahwa website bukan sekadar tampilan, melainkan aset bisnis yang
                harus cepat, aman, dan mampu mengubah pengunjung menjadi
                pelanggan.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Dengan kombinasi keahlian pengembangan dan keamanan, saya
                membantu UMKM, startup, dan perusahaan membangun kehadiran
                digital yang profesional sekaligus terlindungi dari ancaman
                siber.
              </p>
            </Reveal>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <Reveal as="li" key={item} delay={250 + i * 80}>
                  <span className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
