import { Sparkles, Instagram, Facebook, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-rose-100/50 border-t border-rose-200/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-elegant text-rose-700 mb-4">
              <Sparkles className="h-6 w-6" />
              <span className="font-serif">Estetica Bellezza</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Il tuo centro di bellezza dove ogni trattamento è un'esperienza di puro relax e benessere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Link Rapidi</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-600 hover:text-rose-600 transition-colors">Home</a>
              <a href="/servizi" className="block text-gray-600 hover:text-rose-600 transition-colors">Servizi</a>
              <a href="#contatti" className="block text-gray-600 hover:text-rose-600 transition-colors">Contatti</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+39 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>info@esteticabellezza.it</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-rose-500 hover:text-rose-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-rose-500 hover:text-rose-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-rose-200/50 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Estetica Bellezza. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
