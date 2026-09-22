import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'Reliable in the NOC rotation — caught issues early and documented them clearly. Great attention to monitoring detail.',
    name: 'NOC Supervisor',
    role: 'Internship Mentor',
  },
  {
    quote:
      'Built our monitoring dashboards from scratch in Zabbix and Grafana and taught the team how to read them. Impressive for an intern.',
    name: 'Team Lead, IT Security',
    role: 'Internship Review',
  },
  {
    quote:
      'Handled HSM and mail server tasks carefully, always security-first. Communicated progress well and asked the right questions.',
    name: 'Security Operations',
    role: 'Internship Feedback',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-t border-zinc-900/80 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What People Say
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Feedback and notes from internship mentors and teammates.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <Quote className="size-6 text-orange-500" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-zinc-900 pt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
