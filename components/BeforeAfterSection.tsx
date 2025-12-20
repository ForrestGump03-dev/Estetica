import { useState } from 'react'
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll'

// Placeholder images - sostituisci con le tue immagini reali
const beforeAfterImages = [
  {
    id: 1,
    title: "Trucco Cromatico Labbra",
    before: "/trucco_cromatico_prima.jpg",
    after: "/trucco_cromatico_dopo.jpg"
  },
  {
    id: 2,
    title: "Radiofrequenza Viso",
    before: "/Radiofrequenza_prima.jpg",
    after: "/Radiofrequenza_dopo.jpg"
  },
  {
    id: 3,
    title: "Allungamento Unghia Gel",
    before: "/allungamento_unghia_prima.jpg",
    after: "/allungamento_unghia_dopo.jpg"
  },
  {
    id: 4,
    title: "Trucco Cromatico Sopracciglia",
    before: "/Cromatico_sopracciglia_prima.jpg",
    after: "/Cromatico_sopracciglia_dopo.jpg"
  }
]

export default function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === beforeAfterImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? beforeAfterImages.length - 1 : prevIndex - 1
    )
  }

  const currentImage = beforeAfterImages[currentIndex]

  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm mb-3 block">Risultati Reali</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Prima e Dopo
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Scopri i risultati sorprendenti dei nostri trattamenti attraverso le trasformazioni delle nostre clienti
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="max-w-5xl mx-auto">
            {/* Main slider */}
            <div className="relative bg-white rounded-3xl p-4 md:p-8 shadow-2xl border border-stone-100 overflow-hidden">
              {/* Decorative background blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                {/* Before Image */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-stone-200 to-stone-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-white rounded-2xl p-2 shadow-sm border border-stone-100">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                      <img 
                        src={currentImage.before} 
                        alt="Prima del trattamento"
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNCRkJGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUE0RkU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiPkFnZ2l1bmdpIGxlIHR1ZSBmb3RvPC90ZXh0Pgo8L3N2Zz4='
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-stone-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-sm border border-stone-100">
                        PRIMA
                      </div>
                    </div>
                  </div>
                </div>

                {/* After Image */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-orange-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-white rounded-2xl p-2 shadow-sm border border-stone-100">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                      <img 
                        src={currentImage.after} 
                        alt="Dopo il trattamento"
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNCRkJGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUE0RkU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiPkFnZ2l1bmdpIGxlIHR1ZSBmb3RvPC90ZXh0Pgo8L3N2Zz4='
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-sm">
                        DOPO
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Treatment title */}
              <div className="text-center mt-8 md:mt-10">
                <h3 className="text-2xl md:text-3xl font-serif text-stone-800 mb-2">
                  {currentImage.title}
                </h3>
                <div className="h-1 w-20 bg-amber-400 mx-auto rounded-full opacity-50"></div>
              </div>

              {/* Navigation buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:bg-white hover:scale-110 border border-stone-100 z-20"
                aria-label="Precedente"
              >
                <ChevronLeft className="h-6 w-6 text-stone-600" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:bg-white hover:scale-110 border border-stone-100 z-20"
                aria-label="Successivo"
              >
                <ChevronRight className="h-6 w-6 text-stone-600" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 gap-3">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-amber-600 w-8' : 'bg-stone-300 w-2 hover:bg-stone-400'
                  }`}
                  aria-label={`Vai alla slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="text-center mt-8 bg-amber-50 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Camera className="h-5 w-5 text-amber-600" />
              <span className="font-medium text-stone-800">Risultati Reali</span>
            </div>
            <p className="text-stone-600 text-sm">
              Le immagini mostrano risultati reali ottenuti dalle nostre clienti. I risultati possono variare da persona a persona.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
