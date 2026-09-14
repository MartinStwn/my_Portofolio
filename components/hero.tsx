import { ArrowRight, ShieldCheck, Zap, Code2, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden pb-20 pt-36 sm:pt-44"
    >
      {/* background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="flex size-2 rounded-full bg-primary" />
            Tersedia untuk proyek baru
          </div>

          <h1 className="animate-fade-up mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Membantu Bisnis Anda Tampil{' '}
            <span className="text-gradient">Profesional dan Aman</span> di Era
            Digital
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Saya membantu UMKM, startup, dan perusahaan membangun website modern,
            cepat, dan aman untuk meningkatkan kepercayaan pelanggan serta
            memperkuat kehadiran digital.
          </p>

          <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#portofolio">
                Lihat Portofolio
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-border bg-card/50 sm:w-auto"
            >
              <a href="#kontak">Konsultasi Gratis</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-border bg-card/50 sm:w-auto"
            >
              <a
                href="/cv-martinus-setiawan.pdf"
                download="CV_Martinus_Setiawan.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download className="size-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="animate-fade-up mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Code2 className="size-4 text-primary" />
              Kode Bersih & Modern
            </span>
            <span className="flex items-center gap-2">
              <Zap className="size-4 text-primary" />
              Performa Cepat
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              Keamanan Terjamin
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
