import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import BeforeAfterSection from '../components/BeforeAfterSection'
import NewsSection from '../components/NewsSection'
import ReviewsSection from '../components/ReviewsSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BeforeAfterSection />
      <NewsSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  )
}
