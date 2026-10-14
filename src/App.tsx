import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
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
  Contact,
  Login,
  PrivacyPolicy,
  Signup,
  TermsAndConditions,
  TermsOfUse
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

/**
 * The shared site furniture. Every page except the auth screens renders through
 * here, so the header and footer mount once and persist across navigation.
 */
function SiteChrome() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/*
          The login and signup screens deliberately render without the header and
          footer. They are sized to fit one screen so nothing important sits
          below the fold on a phone, and the page chrome alone would push the
          form past the viewport.
        */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<SiteChrome />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
