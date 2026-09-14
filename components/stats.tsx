'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 50, suffix: '+', label: 'Proyek Selesai' },
  { value: 30, suffix: '+', label: 'Klien Puas' },
  { value: 3, suffix: '+', label: 'Tahun Pengalaman' },
  { value: 100, suffix: '+', label: 'Jam Konsultasi' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1600
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass rounded-3xl px-6 py-12 sm:px-12">
          <div className="mb-10 text-center">
            <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
              Pencapaian
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Angka yang merepresentasikan dedikasi dan kepercayaan klien.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-primary sm:text-5xl">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
