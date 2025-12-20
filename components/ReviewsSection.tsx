import { Star, Quote } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll'

const reviews = [
  {
    name: "Maria R.",
    rating: 5,
    text: "Un'esperienza fantastica! Sonia è molto professionale e l'ambiente è rilassante. Il trattamento anti-age ha dato risultati incredibili. Tornerò sicuramente!",
    treatment: "Trattamento Anti-Age"
  },
  {
    name: "Elena B.",
    rating: 5,
    text: "Sono cliente da anni e non ho mai trovato un centro estetico migliore. La qualità dei servizi è eccellente e Sonia è sempre disponibile e gentile.",
    treatment: "Pulizia del Viso"
  },
  {
    name: "Giulia F.",
    rating: 5,
    text: "Il massaggio rilassante è stato meraviglioso! Finalmente ho trovato un posto dove potermi rilassare completamente. Ambiente pulito e accogliente.",
    treatment: "Massaggio Rilassante"
  },
  {
    name: "Francesca P.",
    rating: 5,
    text: "Professionalità e cortesia al top! Il trattamento anticellulite sta dando ottimi risultati. Consiglio vivamente questo centro estetico.",
    treatment: "Trattamento Anticellulite"
  },
  {
    name: "Anna V.",
    rating: 5,
    text: "Atmosfera magica e trattamenti di alta qualità. La radiofrequenza ha superato le mie aspettative. Prenotazione facile e prezzi onesti.",
    treatment: "Radiofrequenza"
  },
  {
    name: "Chiara B.",
    rating: 5,
    text: "Un vero e proprio angolo di paradiso! Sonia è super competente e l'ambiente è curato nei minimi dettagli. Lo consiglio a tutte le mie amiche.",
    treatment: "Idratazione Viso"
  }
]

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-rose-100/40 rounded-full blur-3xl transform translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm mb-3 block">Testimonianze</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Cosa Dicono le Nostre Clienti
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              La soddisfazione delle nostre clienti è la nostra priorità. Leggi le loro esperienze
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative border border-stone-100 h-full">
                {/* Quote icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="h-8 w-8 text-amber-200" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-stone-600 leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>

                {/* Client info */}
                <div className="border-t border-stone-100 pt-4 mt-auto">
                  <div className="font-semibold text-stone-800 mb-1">
                    {review.name}
                  </div>
                  <div className="text-sm text-amber-600 font-medium">
                    {review.treatment}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
