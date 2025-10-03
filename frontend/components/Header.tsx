import { Link, useLocation } from 'react-router-dom'
import { Sparkles, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-2xl font-elegant text-rose-700">
            {/* Logo placeholder - Aggiungi qui il tuo logo */}
            <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-serif text-xl font-bold">SF</span>
            </div>
            <span className="font-serif">Sonia Forestieri</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`transition-colors hover:text-rose-600 ${
                isActive('/') ? 'text-rose-600 font-medium' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/servizi" 
              className={`transition-colors hover:text-rose-600 ${
                isActive('/servizi') ? 'text-rose-600 font-medium' : 'text-gray-700'
              }`}
            >
              Servizi
            </Link>
            <a 
              href="/#contatti" 
              className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors"
            >
              Contatti
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-4 pt-4">
              <Link 
                to="/" 
                className={`transition-colors hover:text-rose-600 ${
                  isActive('/') ? 'text-rose-600 font-medium' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/servizi" 
                className={`transition-colors hover:text-rose-600 ${
                  isActive('/servizi') ? 'text-rose-600 font-medium' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Servizi
              </Link>
              <a 
                href="/#contatti" 
                className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contatti
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
