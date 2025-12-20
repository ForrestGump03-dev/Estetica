import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll'

export default function ContactSection() {
  const phoneNumber = "+393922281816"
  const whatsappNumber = "+393922281816"
  const whatsappMessage = "Ciao! Vorrei prenotare un appuntamento."

  return (
    <section id="contatti" className="py-24 bg-stone-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-200/50 skew-x-12 transform translate-x-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm mb-3 block">Contatti</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Vieni a Trovarci
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Prenota il tuo appuntamento o contattaci per qualsiasi informazione
            </p>
          </div>
        </RevealOnScroll>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <RevealOnScroll delay={100}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full border border-stone-100">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 rounded-full p-4 flex-shrink-0">
                    <MapPin className="h-7 w-7 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 text-xl mb-2">Dove Siamo</h3>
                    <a 
                      href="https://maps.app.goo.gl/udGkG4NE4qyu2o359" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-stone-600 hover:text-amber-600 transition-colors text-lg"
                    >
                      Via Titina De Filippo 36<br />
                      90135 Palermo
                    </a>
                    <p className="text-sm text-stone-400 mt-2">Clicca per aprire in Google Maps</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full border border-stone-100">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 rounded-full p-4 flex-shrink-0">
                    <Phone className="h-7 w-7 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 text-xl mb-2">Telefono</h3>
                    <a 
                      href={`tel:${phoneNumber}`} 
                      className="text-stone-600 hover:text-amber-600 transition-colors text-lg block"
                    >
                      392 228 1816
                    </a>
                    <p className="text-sm text-stone-400 mt-2">Chiamaci per prenotazioni</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full border border-stone-100">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 rounded-full p-4 flex-shrink-0">
                    <Mail className="h-7 w-7 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 text-xl mb-2">Email</h3>
                    <a href="mailto:soniaforestieri@hotmail.it" className="text-stone-600 hover:text-amber-600 transition-colors text-lg break-all">
                      soniaforestieri@hotmail.it
                    </a>
                    <p className="text-sm text-stone-400 mt-2">Scrivici per informazioni</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full border border-stone-100">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 rounded-full p-4 flex-shrink-0">
                    <Clock className="h-7 w-7 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 text-xl mb-2">Orari di Apertura</h3>
                    <div className="text-stone-600 space-y-1 text-lg">
                      <p>Martedì - Sabato</p>
                      <p className="font-semibold text-amber-600">9:00 - 18:00</p>
                      <p>Mercoledì</p>
                      <p className="font-semibold text-amber-600">14:00 - 22:00</p>
                      <p className="text-sm text-stone-400 mt-2">Domenica e Lunedì: Chiuso</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={500}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100">
              <h3 className="text-2xl font-semibold text-stone-800 text-center mb-6">
                Prenota il Tuo Appuntamento
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a 
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 text-lg font-medium shadow-md w-full sm:w-auto"
              >
                <MessageCircle className="h-6 w-6" />
                Prenota su WhatsApp
              </a>
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all transform hover:scale-105 text-lg font-medium shadow-md w-full sm:w-auto"
              >
                <Phone className="h-6 w-6" />
                Chiamaci Ora
              </a>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-center text-gray-600 mb-4">Seguici sui social</p>
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://www.instagram.com/soniaforestieri" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-amber-500 to-orange-500 text-white p-4 rounded-full hover:shadow-lg transition-all transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100063692671459" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-amber-500 to-orange-500 text-white p-4 rounded-full hover:shadow-lg transition-all transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
              <p className="text-center text-sm text-stone-400 mt-4">
                Rimani aggiornata su novità e promozioni
              </p>
            </div>
          </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
