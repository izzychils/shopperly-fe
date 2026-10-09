import { Check } from 'lucide-react'
import './Pricing.css'

export const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      tagline: 'Perfect for getting started',
      price: '$0',
      period: '/month',
      buttonText: 'Get Started',
      isPrimary: false,
      features: [
        '1 website',
        'Basic AI builder',
        'Standard templates',
        'Community support',
        'Weekly branding'
      ]
    },
    {
      name: 'Pro',
      tagline: 'For professionals and teams',
      price: '$29',
      period: '/month',
      buttonText: 'Get Started',
      isPrimary: true,
      badge: 'MOST POPULAR',
      features: [
        '10 websites',
        'Advanced AI features',
        'All AI & ML features',
        'Premium templates',
        'Custom domain',
        'Priority support',
        'SEO optimization',
        'Advanced analytics'
      ]
    },
    {
      name: 'Enterprise',
      tagline: 'For large organizations',
      price: '$99.99',
      period: '/month',
      buttonText: 'Get Started',
      isPrimary: false,
      features: [
        'Unlimited websites',
        'AI Pro features',
        'White label solution',
        'Dedicated account manager',
        'Custom AI training',
        'SLA guarantee',
        'Advanced analytics',
        'API access'
      ]
    }
  ]

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>Simple, Transparent Pricing</h2>
          <p className="pricing-subtitle">Choose the plan that's right for you</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.isPrimary ? 'primary' : ''}`}>
              {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
              
              <div className="pricing-card-content">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
                
                <div className="plan-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>

                <button className={`plan-button ${plan.isPrimary ? 'primary' : ''}`}>
                  {plan.buttonText}
                </button>

                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="plan-feature">
                      <Check size={18} className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
