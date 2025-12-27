import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Controlla se l'utente ha già fatto una scelta
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Mostra il banner dopo un breve ritardo per non essere troppo invasivo subito
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-stone-200 p-6 md:flex items-center gap-6">
        
        {/* Icona e Testo */}
        <div className="flex-1 flex gap-4">
          <div className="hidden md:flex h-12 w-12 bg-amber-100 rounded-full items-center justify-center shrink-0">
            <Cookie className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium text-stone-800 mb-1 flex items-center gap-2">
              <Cookie className="h-5 w-5 text-amber-600 md:hidden" />
              Utilizziamo i cookie
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Utilizziamo cookie tecnici e di terze parti per migliorare la tua esperienza di navigazione e mostrarti contenuti multimediali (come i video). 
              Cliccando su "Accetta", acconsenti all'uso di tutti i cookie. 
              <Link to="/privacy" className="text-amber-600 hover:text-amber-700 underline ml-1">
                Leggi la Privacy Policy
              </Link>.
            </p>
          </div>
        </div>

        {/* Bottoni */}
        <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-6 py-2.5 rounded-full border border-stone-300 text-stone-600 font-medium hover:bg-stone-50 transition-colors text-sm"
          >
            Solo necessari
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors shadow-md text-sm"
          >
            Accetta tutto
          </button>
        </div>

        {/* Chiudi (opzionale, agisce come declina/chiudi) */}
        <button 
          onClick={handleDecline}
          className="absolute top-2 right-2 p-2 text-stone-400 hover:text-stone-600 md:hidden"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
