import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import CookieBanner from './components/CookieBanner'
import { Loader2 } from 'lucide-react'
import Home from './pages/Home'

// Lazy loading delle pagine secondarie
const Services = lazy(() => import('./pages/Services'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))

function ScrollToAnchor() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

// Componente di caricamento
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <Loader2 className="w-10 h-10 animate-spin text-amber-600" />
  </div>
)

export default function App() {
  return (
    <div className="font-sans text-stone-800 antialiased selection:bg-amber-200 selection:text-amber-900">
      <Router>
        <ScrollToAnchor />
        <div className="min-h-screen bg-stone-50">
          <Header />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servizi" element={<Services />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppFloat />
          <CookieBanner />
        </div>
      </Router>
    </div>
  )
}
