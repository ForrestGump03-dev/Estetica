import { Sparkles, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-amber-100/50 border-t border-amber-200/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-elegant text-amber-700 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-serif text-sm font-bold">SF</span>
              </div>
              <span className="font-serif">Sonia Forestieri</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Trattamenti estetici di qualità nel cuore di Palermo, per valorizzare la tua bellezza naturale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Link Rapidi</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-600 hover:text-amber-600 transition-colors">Home</a>
              <a href="/servizi" className="block text-gray-600 hover:text-amber-600 transition-colors">Servizi</a>
              <a href="#contatti" className="block text-gray-600 hover:text-amber-600 transition-colors">Contatti</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/udGkG4NE4qyu2o359" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 transition-colors"
                >
                  Via Titina De Filippo 36<br />90129 Palermo
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="h-4 w-4" />
                <a href="tel:+390913824716" className="hover:text-amber-600 transition-colors">091 382 4716</a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="h-4 w-4" />
                <a href="mailto:soniaforestieri@hotmail.it" className="hover:text-amber-600 transition-colors break-all">soniaforestieri@hotmail.it</a>
              </div>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://www.instagram.com/soniaforestieri" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-200/50 mt-8 pt-8 text-center text-gray-600">
          <p>
            Sito progettato e sviluppato da{' '}
            <a 
              href="https://wa.me/393500082907" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-700 transition-colors font-medium"
            >
              Alessio Forestieri
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
