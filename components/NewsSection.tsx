import { Calendar, Tag, ArrowRight, PlayCircle, X, ChevronDown, ChevronUp, Loader2, Instagram, Facebook } from 'lucide-react'
import { useState, useEffect } from 'react'
import { fetchDatoCMSNews } from '../lib/datocms'

interface NewsItem {
  id: string | number
  type: 'promo' | 'news' | 'video'
  title: string
  description: string
  fullDescription?: string
  date: string
  image: string
  videoUrl?: string
}

const fallbackNewsItems: NewsItem[] = [
  {
    id: 1,
    type: 'promo',
    title: "Speciale Festa della Donna",
    description: "Sconto del 20% su tutti i trattamenti viso per tutta la settimana. Prenota ora il tuo momento di relax!",
    fullDescription: "Celebra la tua bellezza con la nostra promozione speciale per la Festa della Donna. Per tutta la settimana dell'8 Marzo, offriamo uno sconto esclusivo del 20% su tutti i nostri trattamenti viso. Dalla pulizia profonda ai trattamenti anti-age più avanzati, è il momento perfetto per regalarti o regalare una coccola di benessere. Prenota subito il tuo appuntamento, i posti sono limitati!",
    date: "8 Marzo 2025",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    type: 'video',
    title: "Nuova tecnica Massaggio Relax",
    description: "Guarda in anteprima la nostra nuova tecnica di massaggio con pietre calde. Un'esperienza avvolgente.",
    fullDescription: "Siamo entusiasti di introdurre una nuova tecnica di massaggio che combina il calore delle pietre laviche con movimenti fluidi e avvolgenti. Questo trattamento è ideale per sciogliere le tensioni muscolari profonde e favorire un rilassamento totale di corpo e mente. Guarda il video per scoprire come si svolge il trattamento.",
    date: "5 Marzo 2025",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    type: 'news',
    title: "Nuovi orari estivi",
    description: "A partire dal mese prossimo saremo aperti anche il Lunedì mattina per venire incontro alle vostre esigenze.",
    fullDescription: "Per venire incontro alle numerose richieste delle nostre clienti, siamo felici di annunciare che a partire dal 1° Giugno estenderemo i nostri orari di apertura. Il centro sarà aperto anche il Lunedì mattina dalle 9:00 alle 13:00. Questo ci permetterà di offrire più disponibilità per i vostri appuntamenti preferiti. Vi aspettiamo!",
    date: "1 Marzo 2025",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    type: 'news',
    title: "Arriva la nuova linea Bio",
    description: "Siamo felici di presentare la nostra nuova linea di prodotti completamente biologici e naturali.",
    fullDescription: "La natura è la nostra migliore alleata. Da oggi nel nostro centro potrai trovare la nuova linea di prodotti 'BioEssence', certificata 100% biologica e cruelty-free. Creme, oli e sieri ricchi di principi attivi naturali per nutrire la tua pelle rispettando l'ambiente. Vieni a provarli!",
    date: "25 Febbraio 2025",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    type: 'promo',
    title: "Pacchetto Sposa 2025",
    description: "Stai organizzando il tuo matrimonio? Scopri i nostri percorsi personalizzati per arrivare radiosa al grande giorno.",
    fullDescription: "Il giorno del tuo matrimonio meriti di essere perfetta. Abbiamo studiato dei percorsi 'Sposa' che iniziano 3 mesi prima del grande evento, per preparare la tua pelle e il tuo corpo al meglio. Il pacchetto include trattamenti viso, corpo, manicure, pedicure e prova trucco. Prenota una consulenza gratuita per creare il tuo percorso su misura.",
    date: "20 Febbraio 2025",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
  }
]

const DEFAULT_IMAGES = {
  promo: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2070&auto=format&fit=crop", // Gift/Promo image
  video: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2073&auto=format&fit=crop", // Playful/Active image
  news: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop"  // Generic Salon/News image
}

const getEmbedUrl = (url: string) => {
  if (!url) return '';
  
  // Handle YouTube
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let videoId = '';
    if (url.includes('youtu.be')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1]?.split('&')[0];
    } else if (url.includes('/embed/')) {
      return url; // Already an embed link
    }
    
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }

  // Handle Instagram
  if (url.includes('instagram.com')) {
    // Remove query parameters and trailing slash
    const cleanUrl = url.split('?')[0].replace(/\/$/, '');
    
    if (!cleanUrl.endsWith('/embed')) {
      return `${cleanUrl}/embed/`;
    }
    return cleanUrl;
  }
  
  return url;
}

export default function NewsSection() {
  const [items, setItems] = useState<NewsItem[]>(fallbackNewsItems)
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null)
  const [showAll, setShowAll] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      const datoItems = await fetchDatoCMSNews();
      
      if (datoItems && datoItems.length > 0) {
        const mappedItems: NewsItem[] = datoItems.map((item: any) => {
          const category = (item.category as 'promo' | 'news' | 'video') || 'news';
          return {
            id: item.id,
            type: category,
            title: item.title,
            description: item.description,
            fullDescription: item.fullDescription,
            date: new Date(item.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }),
            // Logica intelligente: Immagine caricata -> Default per categoria -> Default News
            image: item.image?.url || DEFAULT_IMAGES[category] || DEFAULT_IMAGES.news,
            videoUrl: item.videoUrl
          }
        })
        setItems(mappedItems)
      }
      setLoading(false)
    }

    fetchNews()
  }, [])

  // Su desktop mostriamo solo i primi 3 se non è espanso
  const desktopItems = showAll ? items : items.slice(0, 3)

  return (
    <section id="novita" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">Novità & Promozioni</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rimani aggiornata sulle nostre ultime offerte ed eventi speciali
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
          </div>
        ) : (
          <>
            {/* Mobile View: Horizontal Scroll (Slider) */}
            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 scrollbar-hide">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="min-w-[85vw] snap-center group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
                >
                  {/* Image Container */}
                  <div 
                    className="relative h-48 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`
                        px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white
                        ${item.type === 'promo' ? 'bg-red-500' : 
                          item.type === 'video' ? 'bg-blue-500' : 'bg-amber-500'}
                      `}>
                        {item.type === 'promo' ? 'Promozione' : 
                         item.type === 'video' ? 'Video' : 'Novità'}
                      </span>
                    </div>
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <PlayCircle className="w-12 h-12 text-white opacity-90" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                      {item.description}
                    </p>

                    <button 
                      onClick={() => setSelectedItem(item)}
                      className="flex items-center gap-2 text-amber-600 font-medium mt-auto"
                    >
                      {item.type === 'video' ? 'Guarda Video' : 'Scopri di più'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View: Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {desktopItems.map((item) => (
                <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col">
                  {/* Image Container */}
                  <div 
                    className="relative h-48 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`
                        px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white
                        ${item.type === 'promo' ? 'bg-red-500' : 
                          item.type === 'video' ? 'bg-blue-500' : 'bg-amber-500'}
                      `}>
                        {item.type === 'promo' ? 'Promozione' : 
                         item.type === 'video' ? 'Video' : 'Novità'}
                      </span>
                    </div>
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <PlayCircle className="w-12 h-12 text-white opacity-90" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-1">
                      {item.description}
                    </p>

                    <button 
                      onClick={() => setSelectedItem(item)}
                      className="flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors mt-auto"
                    >
                      {item.type === 'video' ? 'Guarda Video' : 'Scopri di più'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Show All Button (Desktop Only) */}
            {items.length > 3 && (
              <div className="hidden md:flex justify-center mt-12">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="flex items-center gap-2 px-6 py-3 bg-amber-50 text-amber-700 rounded-full hover:bg-amber-100 transition-colors font-medium"
                >
                  {showAll ? (
                    <>
                      Mostra meno
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Vedi tutte le novità
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
          <div 
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-300"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {selectedItem.type === 'video' && selectedItem.videoUrl ? (
              selectedItem.videoUrl.includes('instagram.com') ? (
                <div 
                  className="h-64 w-full relative group cursor-pointer overflow-hidden" 
                  onClick={() => window.open(selectedItem.videoUrl, '_blank')}
                >
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center text-white">
                    <Instagram className="w-16 h-16 mb-3 opacity-90" />
                    <span className="font-medium text-lg">Guarda su Instagram</span>
                    <span className="text-sm opacity-75 mt-1">Clicca per aprire il video</span>
                  </div>
                </div>
              ) : selectedItem.videoUrl.includes('facebook.com') ? (
                <div 
                  className="h-64 w-full relative group cursor-pointer overflow-hidden" 
                  onClick={() => window.open(selectedItem.videoUrl, '_blank')}
                >
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center text-white">
                    <Facebook className="w-16 h-16 mb-3 opacity-90" />
                    <span className="font-medium text-lg">Guarda su Facebook</span>
                    <span className="text-sm opacity-75 mt-1">Clicca per aprire il video</span>
                  </div>
                </div>
              ) : (
                <div className="aspect-video w-full bg-black">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={getEmbedUrl(selectedItem.videoUrl)} 
                    title={selectedItem.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              )
            ) : (
              <div className="h-64 w-full relative">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <h3 className="text-3xl font-serif text-white">{selectedItem.title}</h3>
                </div>
              </div>
            )}

            <div className="p-8">
              {!selectedItem.videoUrl && (
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedItem.date}</span>
                  <span className="mx-2">•</span>
                  <span className={`
                    px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider text-white
                    ${selectedItem.type === 'promo' ? 'bg-red-500' : 'bg-amber-500'}
                  `}>
                    {selectedItem.type === 'promo' ? 'Promozione' : 'Novità'}
                  </span>
                </div>
              )}
              
              {selectedItem.type === 'video' && (
                 <h3 className="text-2xl font-serif text-gray-800 mb-4">{selectedItem.title}</h3>
              )}

              <div className="prose prose-amber max-w-none text-gray-600">
                <p className="text-lg leading-relaxed">
                  {selectedItem.fullDescription || selectedItem.description}
                </p>
                {selectedItem.type === 'promo' && (
                  <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-center">
                    <p className="font-medium text-amber-800 mb-2">Vuoi approfittare di questa offerta?</p>
                    <a 
                      href="/#contatti" 
                      onClick={() => setSelectedItem(null)}
                      className="inline-block bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors shadow-md"
                    >
                      Prenota Ora
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
