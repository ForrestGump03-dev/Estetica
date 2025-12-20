import { Sparkles, Clock, Users, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import RevealOnScroll from '../components/RevealOnScroll'

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
        name: "LipoLaser",
        description: "Tecnologia laser a bassa intensità che agisce in modo mirato sulle cellule adipose, favorendo la riduzione dei centimetri e il rimodellamento della silhouette.",
        purpose: "Scolpire il corpo e ridurre le adiposità localizzate",
        benefits: [
          "Riduzione visibile della circonferenza",
          "Rimodellamento della silhouette",
          "Procedura sicura e senza tempi di recupero"
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
      {
        name: "Epilazione Laser Definitiva",
        description: "Trattamento progressivo permanente per la rimozione dei peli superflui tramite tecnologia laser di ultima generazione.",
        purpose: "Eliminare progressivamente i peli superflui",
        benefits: [
          "Risultati permanenti",
          "Pelle liscia e morbida",
          "Efficace su diverse zone del corpo"
        ],
        duration: "Variabile in base alla zona",
        invasive: false
      },
      {
        name: "Trattamento a Ultrasuoni",
        description: "Tecnologia che utilizza onde sonore ad alta frequenza per pulire in profondità e stimolare il rinnovamento cellulare.",
        purpose: "Pulizia profonda e stimolazione cellulare",
        benefits: [
          "Pulizia profonda dei pori",
          "Miglioramento della texture cutanea",
          "Stimolazione della microcircolazione"
        ],
        duration: "50 minuti",
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
    <PageTransition>
      <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-stone-100 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl transform -translate-x-1/2"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-rose-100/40 rounded-full blur-3xl transform translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <RevealOnScroll>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-amber-600" />
              <h1 className="text-4xl md:text-6xl font-serif text-stone-800">I Nostri Servizi</h1>
              <Sparkles className="h-8 w-8 text-amber-600" />
            </div>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Scopri la nostra gamma completa di trattamenti professionali per la cura del corpo e del viso
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <RevealOnScroll>
                  <h2 className="text-3xl font-serif text-stone-800 text-center mb-12">
                    {category.category}
                  </h2>
                </RevealOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((service, serviceIndex) => (
                    <RevealOnScroll key={serviceIndex} delay={serviceIndex * 100}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-100 h-full flex flex-col">
                        <h3 className="text-2xl font-serif text-stone-800 mb-4">
                          {service.name}
                        </h3>
                        
                        {/* Descrizione */}
                        <p className="text-stone-600 mb-6 leading-relaxed flex-grow">
                          {service.description}
                        </p>
                        
                        {/* A cosa serve */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-stone-800 mb-2 text-sm uppercase tracking-wide">A cosa serve?</h4>
                          <p className="text-stone-600 text-sm">{service.purpose}</p>
                        </div>
                        
                        {/* Benefici */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-stone-800 mb-2 text-sm uppercase tracking-wide">Benefici</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-stone-600 text-sm flex items-start gap-2">
                                <span className="text-amber-600 leading-normal">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Durata */}
                        <div className="mt-auto pt-6 border-t border-stone-100">
                          <div className="flex items-center justify-between text-stone-600 mb-6">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-amber-600" />
                              <span className="font-medium text-sm">{service.duration}</span>
                            </div>
                            {service.sessions && (
                              <div className="text-sm font-medium bg-amber-50 text-amber-700 px-3 py-1 rounded-full">
                                {service.sessions}
                              </div>
                            )}
                          </div>
                          
                          <a 
                            href="/#contatti"
                            className="block w-full bg-stone-900 text-white py-3 rounded-full hover:bg-amber-600 transition-colors text-center font-medium shadow-md"
                          >
                            Prenota Ora
                          </a>
                        </div>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  )
}
