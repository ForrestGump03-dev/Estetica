import { Sparkles, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-elegant text-white mb-6">
              <img 
                src="/logo_estetica.jpg" 
                alt="Sonia Forestieri Logo" 
                className="w-10 h-10 rounded-full object-cover shadow-md border border-amber-500/30"
              />
              <span className="font-serif">Sonia Forestieri</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Trattamenti estetici di qualità nel cuore di Palermo, per valorizzare la tua bellezza naturale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl text-white mb-6">Link Rapidi</h3>
            <div className="space-y-3">
              <Link to="/" className="block hover:text-amber-400 transition-colors">Home</Link>
              <Link to="/servizi" className="block hover:text-amber-400 transition-colors">Servizi</Link>
              <Link to="/privacy" className="block hover:text-amber-400 transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl text-white mb-6">Contatti</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-amber-500" />
                <a 
                  href="https://maps.app.goo.gl/udGkG4NE4qyu2o359" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Via Titina De Filippo 36<br />90135 Palermo
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <a href="tel:+393922281816" className="hover:text-amber-400 transition-colors">392 228 1816</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <a href="mailto:soniaforestieri@hotmail.it" className="hover:text-amber-400 transition-colors break-all">soniaforestieri@hotmail.it</a>
              </div>
              <div className="flex gap-4 mt-6">
                <a 
                  href="https://www.instagram.com/soniaforestieri" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100063692671459" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-500 text-sm">
          <p className="mb-2">
            Sito progettato e sviluppato da{' '}
            <a 
              href="https://wa.me/393500082907" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400 transition-colors font-medium"
            >
              Alessio Forestieri
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} Centro Estetico Sonia Forestieri. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
