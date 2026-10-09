import './HowItWorks.css'

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Describe Your Vision',
      description: 'Tell our AI what kind of website you want to build using natural language'
    },
    {
      number: '02',
      title: 'AI Builds It',
      description: 'Watch as AI creates your website with all the features and design you requested'
    },
    {
      number: '03',
      title: 'Optimize & Launch',
      description: 'Use AI tools to optimize SEO, performance, and translate to multiple languages'
    }
  ]

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-it-works-header">
          <h2>How It Works</h2>
          <p className="how-it-works-subtitle">
            From idea to live website in three simple steps
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
