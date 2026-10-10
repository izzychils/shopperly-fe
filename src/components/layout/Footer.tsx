import { Facebook, Twitter, Instagram } from 'lucide-react'
import './Footer.css'

export const Footer = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#features' },
        { text: 'How it works', href: '#how-it-works' },
        { text: 'Templates', href: '#' },
        { text: 'Pricing', href: '#pricing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', href: '#' },
        { text: 'Help Center', href: '#' },
        { text: 'Community', href: '#' },
        { text: 'API', href: '#' }
      ]
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>lunchpaad</h3>
            <p>Build stunning websites with AI-powered technology</p>
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
          </div>

          {footerLinks.map((column, index) => (
            <div key={index} className="footer-column">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 lunchpaad. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-use">Terms of Use</a>
            <a href="/terms-and-conditions">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
