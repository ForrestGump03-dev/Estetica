import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import BeforeAfterSection from '../components/BeforeAfterSection'
import NewsSection from '../components/NewsSection'
import ReviewsSection from '../components/ReviewsSection'
import ContactSection from '../components/ContactSection'
import PageTransition from '../components/PageTransition'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <PageTransition>
      <Helmet>
        <title>Sonia Forestieri - Centro Estetico Palermo | Trattamenti Viso e Corpo</title>
        <meta name="title" content="Sonia Forestieri - Centro Estetico Palermo | Trattamenti Viso e Corpo" />
        <meta name="description" content="Centro estetico a Palermo con oltre 20 anni di esperienza. Trattamenti viso, corpo, epilazione, manicure e pedicure. Via Titina De Filippo 36, Palermo." />
        <meta name="keywords" content="centro estetico Palermo, trattamenti estetici Palermo, Sonia Forestieri estetista, epilazione Palermo, manicure Palermo, trattamenti viso Palermo, trattamenti corpo Palermo, pedicure Palermo, massaggi Palermo, depilazione Palermo" />
        <link rel="canonical" href="https://www.soniaforestieri.it/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.soniaforestieri.it/" />
        <meta property="og:title" content="Sonia Forestieri - Centro Estetico Palermo" />
        <meta property="og:description" content="Trattamenti estetici di qualità nel cuore di Palermo. Prenota il tuo appuntamento per viso, corpo e benessere." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.soniaforestieri.it/" />
        <meta property="twitter:title" content="Sonia Forestieri - Centro Estetico Palermo" />
        <meta property="twitter:description" content="Trattamenti estetici di qualità nel cuore di Palermo. Prenota il tuo appuntamento per viso, corpo e benessere." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Sonia Forestieri - Centro Estetico Palermo",
              "image": "https://www.soniaforestieri.it/og-image.jpg",
              "@id": "https://www.soniaforestieri.it",
              "url": "https://www.soniaforestieri.it",
              "telephone": "+393922281816",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via Titina De Filippo 36",
                "addressLocality": "Palermo",
                "postalCode": "90135",
                "addressCountry": "IT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.163351,
                "longitude": 13.330852
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "20:00"
              },
              "priceRange": "$$"
            }
          `}
        </script>
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BeforeAfterSection />
      <NewsSection />
      <ReviewsSection />
      <ContactSection />
    </PageTransition>
  )
}
