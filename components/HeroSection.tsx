import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const heroImages = [
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1920", // Spa atmosphere
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1920", // Facial
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1920"  // Massage
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  const handleScrollToContacts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#contatti')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      {heroImages.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay scuro per leggibilità */}
          <img 
            src={img} 
            alt={`Hero background ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            Centro estetico di
            <span className="text-amber-200 block mt-2">Sonia Forestieri</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Trattamenti estetici professionali per prendersi cura di sé con qualità ed eleganza
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/servizi" 
              className="bg-amber-600/90 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-all transform hover:scale-105 flex items-center gap-2 text-lg font-medium shadow-lg border border-amber-500/30"
            >
              Scopri i Servizi
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a 
              href="#contatti"
              onClick={handleScrollToContacts}
              className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-colors text-lg font-medium"
            >
              Prenota Ora
            </a>
          </div>
        </div>
      </div>

      
    </section>
  )
}
