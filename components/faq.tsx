import { Reveal } from '@/components/reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan sebuah website?',
    answer:
      'Waktu pengerjaan bergantung pada kompleksitas proyek. Landing page biasanya selesai dalam 1–2 minggu, sedangkan website company profile atau toko online membutuhkan 2–4 minggu. Estimasi pasti akan diberikan setelah sesi konsultasi.',
  },
  {
    question: 'Berapa biaya pembuatan website?',
    answer:
      'Biaya disesuaikan dengan kebutuhan dan fitur yang Anda inginkan. Setiap proyek bersifat custom, sehingga saya akan memberikan penawaran transparan setelah memahami kebutuhan bisnis Anda melalui konsultasi gratis.',
  },
  {
    question: 'Apakah website yang dibuat sudah SEO friendly?',
    answer:
      'Ya. Setiap website dibangun dengan struktur dan praktik SEO terbaik agar mudah ditemukan di mesin pencari seperti Google, sehingga membantu meningkatkan visibilitas bisnis Anda secara organik.',
  },
  {
    question: 'Apakah ada layanan maintenance setelah website selesai?',
    answer:
      'Tentu. Saya menyediakan layanan maintenance dan support berkala yang mencakup pembaruan, pemantauan keamanan, serta perbaikan teknis agar website Anda selalu berjalan optimal.',
  },
  {
    question: 'Bagaimana dengan keamanan website saya?',
    answer:
      'Keamanan adalah prioritas utama. Saya menerapkan praktik keamanan terbaik dan dapat melakukan audit keamanan menyeluruh untuk mengidentifikasi serta menutup celah kerentanan yang berpotensi membahayakan data bisnis Anda.',
  },
  {
    question: 'Apakah saya bisa mengelola sendiri konten website?',
    answer:
      'Bisa. Saya dapat membangun website dengan sistem manajemen konten yang mudah digunakan, sehingga Anda dapat memperbarui teks, gambar, dan produk secara mandiri tanpa pengetahuan teknis.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Jawaban atas pertanyaan umum dari calon klien seputar pembuatan
            website.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-xl border-0 px-5"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
