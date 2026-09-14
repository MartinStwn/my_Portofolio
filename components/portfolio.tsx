import { ExternalLink, Github, CheckCircle2, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Project = {
  title: string
  subtitle: string
  description: string
  impact: string[]
  security: string[]
  tech: string[]
  links: {
    demo: string
    github: string
  }
  gradient: string
  featured: boolean
}

const projects: Project[] = [
  {
    title: 'NOC Observability Dashboard',
    subtitle: 'Network Operations Center Monitoring',
    description:
      'Dashboard observabilitas end-to-end untuk pemantauan jaringan dan infrastruktur secara real-time, memungkinkan respons insiden yang proaktif dan pelacakan kesehatan sistem.',
    impact: [
      'Visibilitas real-time terhadap infrastruktur jaringan',
      'Pengurangan Mean Time to Detection (MTTD) untuk insiden',
      'Sentralisasi alerting dan analisis tren historis',
    ],
    security: [
      'Role-based access control (RBAC) untuk tim NOC',
      'Ingesti data yang aman dari perangkat jaringan',
      'Audit logging untuk perubahan konfigurasi',
    ],
    tech: ['Grafana', 'Prometheus', 'Linux', 'Networking Protocols'],
    links: { demo: '#', github: '#' },
    gradient: 'from-blue-600 to-indigo-600',
    featured: true,
  },
  {
    title: 'LVM Recovery & System Resilience',
    subtitle: 'Infrastructure Disaster Recovery',
    description:
      'Eksekusi langsung prosedur pemulihan Logical Volume Manager (LVM) dan restorasi sistem untuk memastikan kelangsungan bisnis dan integritas data.',
    impact: [
      'Restorasi sukses pada logical volume yang kritis',
      'Minimalisasi downtime saat terjadi kegagalan storage',
      'Dokumentasi SOP (Standard Operating Procedure) untuk pemulihan',
    ],
    security: [
      'Verifikasi integritas data pasca-pemulihan',
      'Penanganan backup yang aman dan kontrol akses',
      'Kepatuhan terhadap kebijakan retensi data',
    ],
    tech: ['Linux', 'LVM', 'Zabbix', 'Bash Scripting'],
    links: { demo: '#', github: '#' },
    gradient: 'from-emerald-600 to-teal-600',
    featured: true,
  },
  {
    title: 'SecurePOS',
    subtitle: 'Secure Restaurant Management System',
    description:
      'Sistem POS restoran lengkap dengan antarmuka kasir, manajemen inventaris, analitik penjualan, dan kontrol akses berbasis peran.',
    impact: [
      'Mendukung 200+ transaksi harian',
      'Memangkas waktu pelaporan hingga 70%',
      'Mengurangi ketidaksesuaian inventaris hingga 90%',
    ],
    security: [
      'Argon2id password hashing',
      'RBAC (Admin, Manager, Cashier)',
      'Audit logging & CSRF protection',
    ],
    tech: ['Next.js', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    links: { demo: '#', github: '#' },
    gradient: 'from-purple-600 to-pink-600',
    featured: false,
  },
]

export function Portfolio() {
  return (
    <section id="portofolio" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Portofolio
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Beberapa Proyek yang Pernah Dikerjakan
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Berbagai proyek nyata yang telah membantu klien mencapai tujuan
            digital mereka.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 100}
              className={project.featured ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <article className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div
                  className={`relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  {project.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow">
                      Featured
                    </span>
                  )}
                  <h3 className="px-6 text-center text-xl font-bold text-white drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-medium text-primary">
                    {project.subtitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Impact
                    </p>
                    <ul className="space-y-2">
                      {project.impact.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Security
                    </p>
                    <ul className="space-y-2">
                      {project.security.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center gap-3 pt-1">
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      <ExternalLink className="size-4" />
                      Demo
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="size-4" />
                      Repository
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}