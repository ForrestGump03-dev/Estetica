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
          <div className="max-w-4xl mx-auto">
            {/* Main slider */}
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-stone-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Before Image */}
                <div className="relative">
                  <div className="bg-stone-50 rounded-2xl p-4 shadow-inner">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src={currentImage.before} 
                        alt="Prima del trattamento"
                        className="w-full h-64 object-cover"
                        width="600"
                        height="400"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNCRkJGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUE0RkU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiPkFnZ2l1bmdpIGxlIHR1ZSBmb3RvPC90ZXh0Pgo8L3N2Zz4='
                        }}
                      />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        PRIMA
                      </div>
                    </div>
                  </div>
                </div>

                {/* After Image */}
                <div className="relative">
                  <div className="bg-stone-50 rounded-2xl p-4 shadow-inner">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src={currentImage.after} 
                        alt="Dopo il trattamento"
                        className="w-full h-64 object-cover"
                        width="600"
                        height="400"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNCRkJGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUE0RkU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiPkFnZ2l1bmdpIGxlIHR1ZSBmb3RvPC90ZXh0Pgo8L3N2Zz4='
                        }}
                      />
                      <div className="absolute top-3 left-3 bg-amber-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        DOPO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment title */}
            <div className="text-center mt-6">
              <h3 className="text-2xl font-semibold text-stone-800">
                {currentImage.title}
              </h3>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-stone-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight className="h-6 w-6 text-stone-600" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {beforeAfterImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-amber-600 w-6' : 'bg-stone-300'
                }`}
              />
            ))}
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
