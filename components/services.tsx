import {
  LayoutTemplate,
  Building2,
  Store,
  ShoppingCart,
  Wrench,
  ShieldAlert,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: LayoutTemplate,
    title: 'Pembuatan Landing Page',
    description:
      'Halaman penjualan yang fokus pada konversi untuk meningkatkan jumlah leads dan pelanggan baru bisnis Anda.',
  },
  {
    icon: Building2,
    title: 'Website Company Profile',
    description:
      'Bangun citra perusahaan yang profesional dan kredibel untuk membangun kepercayaan calon klien dan mitra.',
  },
  {
    icon: Store,
    title: 'Website UMKM',
    description:
      'Solusi website terjangkau untuk UMKM agar bisnis Anda lebih mudah ditemukan dan dipercaya pelanggan.',
  },
  {
    icon: ShoppingCart,
    title: 'Website Toko Online',
    description:
      'Toko online yang cepat dan aman dengan pengalaman belanja mulus untuk meningkatkan penjualan produk Anda.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Website',
    description:
      'Perawatan rutin, pembaruan, dan pemantauan agar website Anda selalu prima dan bebas masalah teknis.',
  },
  {
    icon: ShieldAlert,
    title: 'Audit Keamanan Website',
    description:
      'Identifikasi celah keamanan dan perkuat pertahanan website untuk melindungi data bisnis serta pelanggan.',
  },
]

export function Services() {
  return (
    <section id="layanan" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Layanan
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Layanan yang Saya Tawarkan
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Solusi digital menyeluruh yang dirancang untuk membantu bisnis Anda
            tumbuh, tampil profesional, dan tetap aman.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="group glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
