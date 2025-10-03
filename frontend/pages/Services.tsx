import { Sparkles, Clock, Users, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Service {
  name: string
  description: string
  purpose: string
  benefits: string[]
  duration: string
  invasive: boolean
  sessions?: string
}

interface ServiceCategory {
  category: string
  items: Service[]
}

const services: ServiceCategory[] = [
  {
    category: "Trattamenti Viso",
    items: [
      {
        name: "Pulizia del Viso Profonda",
        description: "Trattamento completo che rimuove impurità, punti neri e cellule morte, lasciando la pelle fresca e luminosa.",
        purpose: "Purificare e ossigenare la pelle del viso",
        benefits: [
          "Rimozione di impurità e tossine",
          "Pelle più luminosa e levigata",
          "Pori visibilmente ridotti"
        ],
        duration: "60 minuti",
        invasive: false
      },
      {
        name: "Trattamento Anti-Age",
        description: "Terapia avanzata che combina tecniche e prodotti specifici per contrastare i segni dell'invecchiamento cutaneo.",
        purpose: "Ridurre rughe e linee d'espressione",
        benefits: [
          "Riduzione visibile delle rughe",
          "Miglioramento dell'elasticità cutanea",
          "Pelle più tonica e compatta"
        ],
        duration: "75 minuti",
        invasive: false
      },
      {
        name: "Idratazione Intensiva",
        description: "Trattamento nutriente con maschere specifiche per restituire idratazione profonda alla pelle disidratata.",
        purpose: "Ripristinare l'equilibrio idrolipidico della pelle",
        benefits: [
          "Idratazione profonda e duratura",
          "Pelle morbida e vellutata",
          "Riduzione della secchezza cutanea"
        ],
        duration: "45 minuti",
        invasive: false
      }
    ]
  },
  {
    category: "Trattamenti Corpo",
    items: [
      {
        name: "Massaggio Rilassante",
        description: "Massaggio completo del corpo con tecniche manuali che favoriscono il rilassamento muscolare e mentale.",
        purpose: "Alleviare stress e tensioni muscolari",
        benefits: [
          "Riduzione dello stress e dell'ansia",
          "Miglioramento della circolazione",
          "Rilassamento profondo di corpo e mente"
        ],
        duration: "60 minuti",
        invasive: false
      },
      {
        name: "Trattamento Anticellulite",
        description: "Programma mirato che combina tecniche manuali e tecnologie specifiche per contrastare gli inestetismi della cellulite.",
        purpose: "Ridurre l'aspetto della cellulite e migliorare la texture cutanea",
        benefits: [
          "Riduzione visibile della cellulite",
          "Miglioramento del microcircolo",
          "Pelle più tonica e liscia"
        ],
        duration: "90 minuti",
        invasive: false
      },
      {
        name: "Scrub Corpo",
        description: "Esfoliazione delicata del corpo con prodotti naturali per rimuovere le cellule morte e rinnovare la pelle.",
        purpose: "Esfoliare e levigare la pelle del corpo",
        benefits: [
          "Rimozione delle cellule morte",
          "Pelle più morbida e luminosa",
          "Migliore assorbimento dei prodotti"
        ],
        duration: "30 minuti",
        invasive: false
      }
    ]
  },
  {
    category: "Estetica Avanzata",
    items: [
      {
        name: "Radiofrequenza",
        description: "Tecnologia avanzata che utilizza onde elettromagnetiche per stimolare la produzione di collagene e rassodare i tessuti.",
        purpose: "Rassodare la pelle e contrastare il rilassamento cutaneo",
        benefits: [
          "Stimolazione del collagene",
          "Effetto lifting naturale",
          "Pelle più tonica e compatta"
        ],
        duration: "45 minuti",
        invasive: false
      },
      {
        name: "Cavitazione",
        description: "Trattamento non invasivo che utilizza ultrasuoni per ridurre gli accumuli adiposi localizzati.",
        purpose: "Ridurre il grasso localizzato",
        benefits: [
          "Riduzione del grasso localizzato",
          "Miglioramento dei contorni corporei",
          "Trattamento non invasivo e indolore"
        ],
        duration: "50 minuti",
        invasive: false
      },
      {
        name: "Linfodrenaggio",
        description: "Massaggio specializzato che favorisce il drenaggio dei liquidi in eccesso e stimola il sistema linfatico.",
        purpose: "Favorire il drenaggio linfatico e ridurre i gonfiori",
        benefits: [
          "Riduzione di gonfiori e ritenzione idrica",
          "Miglioramento della circolazione",
          "Sensazione di leggerezza"
        ],
        duration: "60 minuti",
        invasive: false
      },
    ]
  },
  {
    category: "Unghie e Mani",
    items: [
      {
        name: "Manicure Completa",
        description: "Cura completa delle unghie e delle mani con limatura, rimozione cuticole e applicazione smalto.",
        purpose: "Curare e abbellire unghie e mani",
        benefits: [
          "Unghie curate e ben sagomate",
          "Mani morbide e idratate",
          "Finitura impeccabile"
        ],
        duration: "45 minuti",
        invasive: false
      },
      {
        name: "Manicure Semipermanente",
        description: "Applicazione di smalto gel di lunga durata che garantisce una manicure perfetta per settimane.",
        purpose: "Ottenere una manicure resistente e duratura",
        benefits: [
          "Durata fino a 3 settimane",
          "Unghie sempre perfette",
          "Colori brillanti e lucidi"
        ],
        duration: "60 minuti",
        invasive: false
      },
      {
        name: "Ricostruzione Unghie",
        description: "Allungamento e modellazione delle unghie con gel o acrilico per unghie perfette e personalizzate.",
        purpose: "Allungare e modellare le unghie",
        benefits: [
          "Unghie lunghe e resistenti",
          "Forma personalizzata",
          "Risultato duraturo"
        ],
        duration: "2 ore",
        invasive: false
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
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        {service.name}
                      </h3>
                      
                      {/* Descrizione */}
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* A cosa serve */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">A cosa serve?</h4>
                        <p className="text-gray-600 text-sm">{service.purpose}</p>
                      </div>
                      
                      {/* Benefici */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Benefici</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                              <span className="text-rose-500 mt-1">•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Durata */}
                      <div className="mb-6 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-gray-700 mb-2">
                          <Clock className="h-4 w-4 text-rose-500" />
                          <span className="font-semibold">DURATA:</span>
                          <span>{service.duration}</span>
                        </div>
                        {service.sessions && (
                          <div className="text-gray-700">
                            <span className="font-semibold">SEDUTE:</span>
                            <span className="ml-2">{service.sessions}</span>
                          </div>
                        )}
                      </div>
                      
                      <a 
                        href="/#contatti"
                        className="block w-full bg-rose-500 text-white py-3 rounded-full hover:bg-rose-600 transition-colors text-center font-medium"
                      >
                        Prenota Ora
                      </a>
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
              <h3 className="font-semibold text-gray-800 mb-2">Esperienza Certificata</h3>
              <p className="text-gray-600">
                Oltre 20 anni di esperienza nel settore dell'estetica professionale
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sparkles className="h-8 w-8 text-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Tecnologie Moderne</h3>
              <p className="text-gray-600">
                Utilizzo di prodotti di qualità e tecniche all'avanguardia
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Attenzione Personalizzata</h3>
              <p className="text-gray-600">
                Ogni trattamento è studiato su misura in base alle esigenze individuali
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
