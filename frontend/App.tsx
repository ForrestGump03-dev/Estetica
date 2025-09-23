import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'

export default function App() {
  return (
    <div className="dark">
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
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
