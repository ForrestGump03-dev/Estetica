import { Sparkles, Clock, Users, Award } from 'lucide-react'

const services = [
  {
    category: "Trattamenti Viso",
    items: [
      {
        name: "Pulizia del Viso Profonda",
        description: "Trattamento completo per rimuovere impurità e rigenerare la pelle del viso.",
        duration: "60 min",
        price: "€ 70"
      },
      {
        name: "Trattamento Anti-Age",
        description: "Terapia avanzata per contrastare i segni del tempo e mantenere la pelle giovane.",
        duration: "75 min",
        price: "€ 120"
      },
      {
        name: "Idratazione Intensiva",
        description: "Maschera nutriente e idratante per tutti i tipi di pelle.",
        duration: "45 min",
        price: "€ 60"
      }
    ]
  },
  {
    category: "Trattamenti Corpo",
    items: [
      {
        name: "Massaggio Rilassante",
        description: "Massaggio completo del corpo per alleviare stress e tensioni muscolari.",
        duration: "60 min",
        price: "€ 80"
      },
      {
        name: "Trattamento Anticellulite",
        description: "Programma specifico per contrastare gli inestetismi della cellulite.",
        duration: "90 min",
        price: "€ 150"
      },
      {
        name: "Scrub Corpo",
        description: "Esfoliazione dolce per una pelle morbida e levigata.",
        duration: "30 min",
        price: "€ 50"
      }
    ]
  },
  {
    category: "Estetica Avanzata",
    items: [
      {
        name: "Radiofrequenza",
        description: "Tecnologia avanzata per il ringiovanimento e il rassodamento della pelle.",
        duration: "45 min",
        price: "€ 100"
      },
      {
        name: "Cavitazione",
        description: "Trattamento non invasivo per la riduzione del grasso localizzato.",
        duration: "50 min",
        price: "€ 90"
      },
      {
        name: "Linfodrenaggio",
        description: "Massaggio specializzato per favorire il drenaggio linfatico.",
        duration: "60 min",
        price: "€ 85"
      }
    ]
  },
  {
    category: "Unghie e Mani",
    items: [
      {
        name: "Manicure Completa",
        description: "Cura completa delle unghie e delle mani con smalto a scelta.",
        duration: "45 min",
        price: "€ 35"
      },
      {
        name: "Manicure Semipermanente",
        description: "Applicazione di smalto gel di lunga durata.",
        duration: "60 min",
        price: "€ 45"
      },
      {
        name: "Ricostruzione Unghie",
        description: "Allungamento e modellazione delle unghie con gel o acrilico.",
        duration: "120 min",
        price: "€ 70"
      }
    ]
  }
]

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-100 to-amber-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-rose-500" />
            <h1 className="text-4xl md:text-6xl font-serif text-gray-800">I Nostri Servizi</h1>
            <Sparkles className="h-8 w-8 text-rose-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scopri la nostra gamma completa di trattamenti professionali per la cura del corpo e del viso
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-serif text-gray-800 text-center mb-12">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-rose-100">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="text-rose-600 font-semibold text-lg">
                          {service.price}
                        </div>
                      </div>
                      <button className="w-full bg-rose-500 text-white py-3 rounded-full hover:bg-rose-600 transition-colors">
                        Prenota Ora
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-rose-50/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="h-8 w-8 text-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Professionali Qualificati</h3>
              <p className="text-gray-600">
                Il nostro team è formato da estetiste certificate con anni di esperienza
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sparkles className="h-8 w-8 text-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Tecnologie Avanzate</h3>
              <p className="text-gray-600">
                Utilizziamo le tecnologie più innovative per risultati ottimali
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Esperienza Personalizzata</h3>
              <p className="text-gray-600">
                Ogni trattamento è studiato su misura per le tue esigenze specifiche
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
