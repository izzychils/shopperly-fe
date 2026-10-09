import { Sparkles, Plus, Lightbulb, ArrowRight } from 'lucide-react'
import './Hero.css'

export const Hero = () => {
  const suggestions = [
    'a modern portfolio website',
    'an e-commerce store for fashion',
    'a SaaS landing page',
    'a restaurant website with menu',
    'a blog platform'
  ]

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles />
            <span>AI Powered Website Builder</span>
          </div>

          <h1>
            Build websites with <span className="gradient-text">AI</span>
          </h1>

          <p className="hero-subtitle">
            Transform your ideas into stunning, fully-functional websites in seconds.
            <br />
            Just describe what you want, and our AI builds it.
          </p>

          <div className="hero-input-wrapper">
            <div className="hero-input-container">
              <input
                type="text"
                className="hero-input"
                placeholder="Create a modern portfolio website with a hero section, project gallery, and contact form..."
              />
              <div className="hero-input-actions">
                <button className="icon-btn" aria-label="Add attachment">
                  <Plus size={20} />
                </button>
                <button className="icon-btn" aria-label="Get suggestions">
                  <Lightbulb size={20} />
                </button>
                <button className="icon-btn primary" aria-label="Generate">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="hero-suggestions">
            {suggestions.map((suggestion, index) => (
              <button key={index} className="suggestion-chip">
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
