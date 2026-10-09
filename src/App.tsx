import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { Stats } from './components/sections/Stats'
import { Features } from './components/sections/Features'
import { HowItWorks } from './components/sections/HowItWorks'
import { Pricing } from './components/sections/Pricing'
import { WebsiteTypes } from './components/sections/WebsiteTypes'
import { CTA } from './components/sections/CTA'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Pricing />
        <WebsiteTypes />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
