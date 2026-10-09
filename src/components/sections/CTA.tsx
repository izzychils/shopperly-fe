import { ArrowRight } from 'lucide-react'
import './CTA.css'

export const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to build your dream website?</h2>
          <p className="cta-subtitle">
            Join thousands of creators who are building with AI
          </p>
          <button className="cta-button">
            Get Started Free
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
