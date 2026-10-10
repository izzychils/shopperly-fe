import { Mail, Phone, MessageCircle, CreditCard, Shield, AlertCircle, Scale } from 'lucide-react'
import './Contact.css'

export const Contact = () => {
  const contactOptions = [
    {
      icon: <MessageCircle />,
      title: 'Product Help and Technical Support',
      email: 'support@lunchpaad.com',
      phone: '+234 XXX XXX XXXX',
      description: 'Get help with building your site, troubleshooting issues, or technical questions'
    },
    {
      icon: <CreditCard />,
      title: 'Sales and Business Plans',
      email: 'sales@lunchpaad.com',
      description: 'Interested in Enterprise plans or custom solutions? Our sales team is here to help'
    },
    {
      icon: <CreditCard />,
      title: 'Billing and Subscriptions',
      email: 'billing@lunchpaad.com',
      description: 'Questions about your subscription, invoices, or payment methods'
    },
    {
      icon: <Shield />,
      title: 'Privacy and Data Requests',
      email: 'privacy@lunchpaad.com',
      note: 'Use subject line: "Data Request"',
      description: 'Exercise your data rights or ask questions about how we handle your information'
    },
    {
      icon: <AlertCircle />,
      title: 'Report Abuse or Takedown Request',
      email: 'abuse@lunchpaad.com',
      description: 'Report content that violates our terms or submit a legal takedown request'
    },
    {
      icon: <Scale />,
      title: 'Legal Notices',
      email: 'legal@lunchpaad.com',
      description: 'Send legal correspondence or formal notices'
    }
  ]

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Questions about building your site, your account or a partnership? We would love to hear from you.</p>
        </div>

        <div className="contact-grid">
          {contactOptions.map((option, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon" style={{ backgroundColor: index % 2 === 0 ? '#3dd9b3' : '#60a5fa' }}>
                {option.icon}
              </div>
              <h3>{option.title}</h3>
              <p className="contact-description">{option.description}</p>
              <div className="contact-details">
                <a href={`mailto:${option.email}`} className="contact-email">
                  <Mail size={16} />
                  {option.email}
                </a>
                {option.phone && (
                  <a href={`tel:${option.phone}`} className="contact-phone">
                    <Phone size={16} />
                    {option.phone}
                  </a>
                )}
                {option.note && (
                  <p className="contact-note">{option.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="company-info">
          <h2>Company Information</h2>
          <div className="company-details">
            <div className="company-detail-item">
              <strong>Company:</strong> MecurixTech
            </div>
            <div className="company-detail-item">
              <strong>Location:</strong> Rivers State, Nigeria
            </div>
            <div className="company-detail-item">
              <strong>Registered Address:</strong> [Your registered office address]
            </div>
            <div className="company-detail-item">
              <strong>Support Hours:</strong> [Your days and hours, West Africa Time]
            </div>
            <div className="company-detail-item">
              <strong>Website:</strong> <a href="https://lunchpaad.com">lunchpaad.com</a>
            </div>
          </div>
        </div>

        <div className="contact-tips">
          <h3>Tips for Faster Support</h3>
          <ul>
            <li>Include your account email in your message</li>
            <li>If relevant, include your site address or project name</li>
            <li>Describe the issue in detail with screenshots if possible</li>
            <li><strong>Never send your password</strong> - we will never ask for it</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
