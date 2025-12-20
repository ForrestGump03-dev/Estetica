import { Heart, Zap, Flower2, Sparkles, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import RevealOnScroll from './RevealOnScroll'

const services = [
  {
    icon: Heart,
    title: "Trattamenti Viso",
    description: "Pulizie profonde, trattamenti anti-age e terapie personalizzate per una pelle radiosa e giovane.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Zap,
    title: "Estetica Avanzata",
    description: "Tecnologie innovative come radiofrequenza e cavitazione per risultati visibili e duraturi.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Flower2,
    title: "Relax e Benessere",
    description: "Massaggi rilassanti e trattamenti corpo per ritrovare equilibrio e serenità.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Sparkles,
    title: "Cura delle Unghie",
    description: "Manicure, pedicure e ricostruzione unghie per mani sempre perfette e curate.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-rose-100/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-100/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm mb-3 block">I Nostri Trattamenti</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Eccellenza e Benessere
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Una gamma completa di trattamenti professionali curati nei minimi dettagli per esaltare la tua bellezza naturale
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif mb-3 border-b border-white/30 pb-3 inline-block">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 h-0 group-hover:h-auto">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={400}>
          <div className="text-center">
            <Link 
              to="/servizi" 
              className="inline-flex items-center gap-3 bg-stone-800 text-white px-10 py-4 rounded-full hover:bg-amber-600 transition-all duration-300 text-lg font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Scopri i servizi
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
