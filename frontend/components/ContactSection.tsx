import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  const phoneNumber = "+393334567890" // Sostituisci con il tuo numero
  const whatsappMessage = "Ciao! Vorrei prenotare un appuntamento presso Estetica Bellezza."

  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Contattaci
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Siamo qui per te. Prenota il tuo appuntamento o contattaci per qualsiasi informazione
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                Informazioni di Contatto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Indirizzo</h4>
                    <p className="text-gray-600">
                      Via della Bellezza, 123<br />
                      20100 Milano, MI
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telefono</h4>
                    <a href={`tel:${phoneNumber}`} className="text-gray-600 hover:text-rose-500 transition-colors">
                      +39 333 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:info@esteticabellezza.it" className="text-gray-600 hover:text-rose-500 transition-colors">
                      info@esteticabellezza.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 rounded-full p-3">
                    <Clock className="h-6 w-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Orari di Apertura</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Lun - Ven: 9:00 - 19:00</p>
                      <p>Sabato: 9:00 - 17:00</p>
                      <p>Domenica: Chiuso</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Contatto Rapido</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
                <a 
                  href="mailto:info@esteticabellezza.it?subject=Richiesta Appuntamento&body=Ciao, vorrei prenotare un appuntamento."
                  className="flex items-center justify-center gap-3 bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Invia Email
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Invia un Messaggio
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:outline-none transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Cognome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:outline-none transition-colors"
                    placeholder="Il tuo cognome"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:outline-none transition-colors"
                  placeholder="la-tua@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Telefono</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:outline-none transition-colors"
                  placeholder="+39 333 123 4567"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Servizio di Interesse</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:outline-none transition-colors">
                  <option value="">Seleziona un servizio</option>
                  <option value="pulizia-viso">Pulizia del Viso</option>
                  <option value="anti-age">Trattamento Anti-Age</option>
                  <option value="massaggio">Massaggio Rilassante</option>
                  <option value="anticellulite">Trattamento Anticellulite</option>
                  <option value="radiofrequenza">Radiofrequenza</option>
                  <option value="manicure">Manicure</option>
                  <option value="altro">Altro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Messaggio</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:outline-none transition-colors resize-none"
                  placeholder="Scrivi qui il tuo messaggio..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors font-medium"
              >
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
