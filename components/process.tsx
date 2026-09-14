import {
  MessagesSquare,
  PencilRuler,
  Code2,
  TestTube2,
  Rocket,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: MessagesSquare,
    title: 'Konsultasi Kebutuhan',
    description:
      'Memahami tujuan bisnis, target audiens, dan kebutuhan spesifik website Anda.',
  },
  {
    icon: PencilRuler,
    title: 'Desain & Perencanaan',
    description:
      'Menyusun struktur, alur, dan desain visual yang sesuai dengan identitas brand Anda.',
  },
  {
    icon: Code2,
    title: 'Pengembangan Website',
    description:
      'Membangun website dengan kode bersih, modern, dan standar keamanan terbaik.',
  },
  {
    icon: TestTube2,
    title: 'Testing & Optimasi',
    description:
      'Menguji performa, responsivitas, dan keamanan agar website siap dan optimal.',
  },
  {
    icon: Rocket,
    title: 'Launching & Support',
    description:
      'Meluncurkan website dan memberikan dukungan serta pemeliharaan berkelanjutan.',
  },
]

export function Process() {
  return (
    <section id="proses" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Proses Kerja
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Proses Pengerjaan
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Alur kerja yang terstruktur dan transparan untuk memastikan hasil
            terbaik bagi bisnis Anda.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 hidden h-full w-px bg-border lg:left-1/2 lg:block"
          />
          <ol className="space-y-6 lg:space-y-0">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80}>
                <div
                  className={`relative flex items-start gap-5 lg:w-1/2 ${
                    i % 2 === 1 ? 'lg:ml-auto lg:flex-row' : 'lg:flex-row-reverse lg:text-right'
                  } ${i > 0 ? 'lg:-mt-6' : ''}`}
                >
                  <div className="glass relative z-10 flex size-12 shrink-0 items-center justify-center rounded-xl text-primary">
                    <step.icon className="size-6" />
                    <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <div className="glass flex-1 rounded-2xl p-5">
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
