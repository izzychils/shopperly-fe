import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Shopperly</h1>
          </div>

          {/* Navigation */}
          <nav className="nav">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How it works</a>
            <a href="#pricing" className="nav-link">Pricing</a>
          </nav>

          {/* CTA Buttons */}
          <div className="header-cta">
            <button className="btn-secondary">Sign in</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  )
}
