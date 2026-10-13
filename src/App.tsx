import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { Stats } from './components/sections/Stats'
import { Features } from './components/sections/Features'
import { HowItWorks } from './components/sections/HowItWorks'
import { Pricing } from './components/sections/Pricing'
import { WebsiteTypes } from './components/sections/WebsiteTypes'
import { CTA } from './components/sections/CTA'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { 
  AboutUs, 
  PrivacyPolicy, 
  TermsOfUse, 
  TermsAndConditions, 
  Contact 
} from './components/pages'

function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Pricing />
      <WebsiteTypes />
      <CTA />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
