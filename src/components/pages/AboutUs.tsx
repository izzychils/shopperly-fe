import './AboutUs.css'

export const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>About Us</h1>
        </div>

        <section className="about-section">
          <h2>What is lunchpaad?</h2>
          <p>
            lunchpaad is an AI website builder that turns your ideas into stunning, fully functional websites in seconds. 
            Describe what you want and our AI builds it; then refine it with simple drag-and-drop editing.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            To put professional websites within reach of every business, from a one-person shop to a large company, 
            without needing a developer, a designer or weeks of waiting.
          </p>
        </section>

        <section className="about-section">
          <h2>How It Works</h2>
          <div className="how-it-works-steps">
            <div className="step">
              <h3>1. Describe it</h3>
              <p>Tell lunchpaad about your business and the site you want, in plain words.</p>
            </div>
            <div className="step">
              <h3>2. Let the AI build it</h3>
              <p>lunchpaad generates the pages, layout, text and design for you in seconds.</p>
            </div>
            <div className="step">
              <h3>3. Make it yours</h3>
              <p>Use drag and drop to move, add and edit sections, images and text until it is exactly right.</p>
            </div>
            <div className="step">
              <h3>4. Publish</h3>
              <p>Take your site live and keep improving it any time.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Who It Is For</h2>
          <ul className="target-audience">
            <li>
              <strong>Small and medium businesses</strong> that need to get online quickly and affordably.
            </li>
            <li>
              <strong>Large businesses and teams</strong> that need to launch pages and sites fast.
            </li>
            <li>
              <strong>Entrepreneurs, creators and agencies</strong> who want to build more, sooner.
            </li>
          </ul>
        </section>

        <section className="about-section promise">
          <h2>Our Promise</h2>
          <p>
            Simple tools, quick results and full control over your site, with your content and ideas staying yours.
          </p>
        </section>
      </div>
    </div>
  )
}
