import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-amber-50 to-pink-100"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-0.5 bg-rose-300"></div>
            <Sparkles className="h-8 w-8 text-rose-400" />
            <div className="w-12 h-0.5 bg-rose-300"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-6 leading-tight">
            Bellezza e
            <span className="text-rose-500 block">Benessere</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Scopri un'oasi di tranquillità dove prendersi cura di sé diventa un'esperienza unica e rigenerante
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/servizi" 
              className="bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition-all transform hover:scale-105 flex items-center gap-2 text-lg font-medium"
            >
              Scopri i Servizi
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a 
              href="#contatti" 
              className="border-2 border-rose-300 text-rose-600 px-8 py-4 rounded-full hover:bg-rose-50 transition-colors text-lg font-medium"
            >
              Prenota Ora
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-rose-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  )
}
