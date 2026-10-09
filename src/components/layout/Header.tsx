import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>NaasAI</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How it works</a>
            <a href="#pricing" className="nav-link">Pricing</a>
          </nav>

          {/* Desktop CTA */}
          <div className="header-cta-desktop">
            <button className="btn-secondary">Sign in</button>
            <button className="btn-primary">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="nav-mobile">
            <a href="#features" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              How it works
            </a>
            <a href="#pricing" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <div className="header-cta-mobile">
              <button className="btn-secondary">Sign in</button>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
