import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'

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

export default function App() {
  return (
    <div className="dark">
      <Router>
        <ScrollToAnchor />
        <div className="min-h-screen bg-gradient-to-br from-stone-200 via-amber-100 to-orange-100">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servizi" element={<Services />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  )
}
