import { Sparkles, Plus, Lightbulb, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { WordRotate } from '../ui/word-rotate'
import { AnimatedPlaceholder } from '../ui/animated-placeholder'
import './Hero.css'

export const Hero = () => {
  const [inputValue, setInputValue] = useState('')
  
  const suggestions = [
    'a modern portfolio website',
    'an e-commerce store for fashion',
    'a SaaS landing page',
    'a restaurant website with menu',
    'a blog platform'
  ]

  const placeholders = [
    'Create a modern portfolio with hero section and gallery...',
    'Build an e-commerce store with products and checkout...',
    'Design a SaaS landing page with pricing and testimonials...',
    'Make a restaurant site with menu and reservations...',
    'Create a blog with articles and comment system...'
  ]

  const rotatingWords = [
    'amazing',
    'stunning',
    'beautiful',
    'modern',
    'powerful'
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
            <span className="h1-line-one">
              <span>Build </span>
              <WordRotate words={rotatingWords} />
            </span>
            <span className="h1-line-two">
              <span> websites with </span>
              <span className="gradient-text">AI</span>
            </span>
          </h1>

          <p className="hero-subtitle">
            Transform your ideas into stunning, fully-functional websites in seconds.
            <br />
            Just describe what you want, and our AI builds it.
          </p>

          <div className="hero-input-wrapper">
            <div className="hero-input-container">
              <div className="hero-input-placeholder-wrapper">
                <input
                  type="text"
                  className="hero-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                {!inputValue && (
                  <div className="hero-input-placeholder">
                    <AnimatedPlaceholder 
                      placeholders={placeholders}
                      typingSpeed={30}
                      pauseDuration={2000}
                    />
                  </div>
                )}
              </div>
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
