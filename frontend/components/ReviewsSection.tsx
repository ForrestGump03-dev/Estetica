import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: "Maria Rossi",
    rating: 5,
    text: "Un'esperienza fantastica! Lo staff è molto professionale e l'ambiente è rilassante. Il trattamento anti-age ha dato risultati incredibili. Tornerò sicuramente!",
    treatment: "Trattamento Anti-Age"
  },
  {
    name: "Elena Bianchi",
    rating: 5,
    text: "Sono cliente da anni e non ho mai trovato un centro estetico migliore. La qualità dei servizi è eccellente e le ragazze sono sempre disponibili e gentili.",
    treatment: "Pulizia del Viso"
  },
  {
    name: "Giulia Ferrari",
    rating: 5,
    text: "Il massaggio rilassante è stato meraviglioso! Finalmente ho trovato un posto dove potermi rilassare completamente. Ambiente pulito e accogliente.",
    treatment: "Massaggio Rilassante"
  },
  {
    name: "Francesca Romano",
    rating: 5,
    text: "Professionalità e cortesia al top! Il trattamento anticellulite sta dando ottimi risultati. Consiglio vivamente questo centro estetico.",
    treatment: "Trattamento Anticellulite"
  },
  {
    name: "Anna Verde",
    rating: 5,
    text: "Atmosfera magica e trattamenti di alta qualità. La radiofrequenza ha superato le mie aspettative. Prenotazione facile e prezzi onesti.",
    treatment: "Radiofrequenza"
  },
  {
    name: "Chiara Blu",
    rating: 5,
    text: "Un vero e proprio angolo di paradiso! Le estetiste sono competenti e l'ambiente è curato nei minimi dettagli. Lo consiglio a tutte le mie amiche.",
    treatment: "Idratazione Viso"
  }
]

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Cosa Dicono le Nostre Clienti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La soddisfazione delle nostre clienti è la nostra priorità. Leggi le loro esperienze
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-rose-200" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Client info */}
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-800 mb-1">
                  {review.name}
                </div>
                <div className="text-sm text-rose-500 font-medium">
                  {review.treatment}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-4xl font-bold text-gray-800">4.9</div>
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-gray-600 text-sm">Media recensioni</div>
              </div>
            </div>
            <div className="text-gray-600">
              Basato su <span className="font-semibold">200+</span> recensioni verificate
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
