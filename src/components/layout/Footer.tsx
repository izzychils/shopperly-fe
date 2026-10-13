// import { Facebook, Twitter, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '/#features' },
        { text: 'How it works', href: '/#how-it-works' },
        // { text: 'Templates', href: '#' },
        { text: 'Pricing', href: '/#pricing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        // { text: 'Blog', href: '#' },
        // { text: 'Careers', href: '#' },
        { text: 'Contact', href: '/contact' }
      ]
    }
    // {
    //   title: 'Resources',
    //   links: [
    //     { text: 'Documentation', href: '#' },
    //     { text: 'Help Center', href: '#' },
    //     { text: 'Community', href: '#' },
    //     { text: 'API', href: '#' }
    //   ]
    // }
  ]

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') || href.startsWith('#')) {
      const id = href.replace(/^\/?#/, '')
      const element = document.getElementById(id)
      if (element) {
        e.preventDefault()
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', href)
      }
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.jpg" alt="lunchpaad logo" className="footer-logo-img" />
              <h3>lunchpaad</h3>
            </div>
            <p>Build stunning websites with AI-powered technology</p>
            {/* Social media icons commented out
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
            */}
          </div>

          {footerLinks.map((column, index) => (
            <div key={index} className="footer-column">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    {link.href.startsWith('/#') ? (
                      <Link
                        to={link.href}
                        onClick={(e) => handleAnchorClick(e, link.href)}
                      >
                        {link.text}
                      </Link>
                    ) : link.href.startsWith('/') && link.href !== '/' ? (
                      <Link to={link.href}>{link.text}</Link>
                    ) : (
                      <a href={link.href}>{link.text}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 lunchpaad. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
