import { useState } from 'react'
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react'

// Placeholder images - sostituisci con le tue immagini reali
const beforeAfterImages = [
  {
    id: 1,
    title: "Trattamento Anti-Age",
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300"
  },
  {
    id: 2,
    title: "Pulizia del Viso Profonda",
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300"
  },
  {
    id: 3,
    title: "Trattamento Anticellulite",
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300"
  },
  {
    id: 4,
    title: "Radiofrequenza Viso",
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300"
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Prima e Dopo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scopri i risultati sorprendenti dei nostri trattamenti attraverso le trasformazioni delle nostre clienti
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main slider */}
          <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Before Image */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src="/prima-placeholder.jpg" 
                      alt="Prima del trattamento"
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNCRkJGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUE0RkU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiPkFnZ2l1bmdpIGxlIHR1ZSBmb3RvPC90ZXh0Pgo8L3N2Zz4='
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-gray-800/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      PRIMA
                    </div>
                  </div>
                </div>
              </div>

              {/* After Image */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src="/dopo-placeholder.jpg" 
                      alt="Dopo il trattamento"
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkVGM0Y0Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRUY0NDQ0IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiPkFnZ2l1bmdpIGxlIHR1ZSBmb3RvPC90ZXh0Pgo8L3N2Zz4='
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      DOPO
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment title */}
            <div className="text-center mt-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {currentImage.title}
              </h3>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {beforeAfterImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-amber-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-8 bg-amber-50 rounded-xl p-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Camera className="h-5 w-5 text-amber-600" />
              <span className="font-medium text-gray-800">Risultati Reali</span>
            </div>
            <p className="text-gray-600 text-sm">
              Le immagini mostrano risultati reali ottenuti dalle nostre clienti. I risultati possono variare da persona a persona.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
