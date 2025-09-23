import { Heart, Zap, Flower2, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Heart,
    title: "Trattamenti Viso",
    description: "Pulizie profonde, trattamenti anti-age e terapie personalizzate per una pelle radiosa e giovane."
  },
  {
    icon: Zap,
    title: "Estetica Avanzata",
    description: "Tecnologie innovative come radiofrequenza e cavitazione per risultati visibili e duraturi."
  },
  {
    icon: Flower2,
    title: "Relax e Benessere",
    description: "Massaggi rilassanti e trattamenti corpo per ritrovare equilibrio e serenità."
  },
  {
    icon: Sparkles,
    title: "Cura delle Unghie",
    description: "Manicure, pedicure e ricostruzione unghie per mani sempre perfette e curate."
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una gamma completa di trattamenti professionali per la tua bellezza e il tuo benessere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl p-8 h-full">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <service.icon className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/servizi" 
            className="inline-flex items-center gap-2 bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition-colors text-lg font-medium"
          >
            Vedi Tutti i Servizi
            <Sparkles className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
