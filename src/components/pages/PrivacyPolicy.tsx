import './PrivacyPolicy.css'

export const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: December 2024</p>
        </div>

        <div className="legal-content">
          <div className="legal-intro">
            <p>
              lunchpaad ("we", "us", "our"), collects and uses information to build and host your website. 
              This policy explains what we collect, why, who sees it and your rights under the Nigeria Data Protection Act (NDPA).
            </p>
          </div>

          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p><strong>Account data:</strong> Name, email address, phone number, business name, password (stored securely) and billing details.</p>
            <p><strong>Prompts and project content:</strong> The descriptions you type, and the text, images, logos, layouts and files you add to your site.</p>
            <p><strong>Site and visitor data:</strong> If your site collects information (for example contact forms or orders), we process what your visitors submit on your behalf, and basic analytics such as page views and device type.</p>
            <p><strong>Payment data:</strong> Handled by our payment processors. We do not store full card details.</p>
            <p><strong>Technical data:</strong> IP address, browser, device, log-in times and error logs.</p>
          </section>

          <section className="legal-section">
            <h2>2. How We Use It</h2>
            <ul>
              <li>To generate, host, publish and edit your website.</li>
              <li>To provide support, billing and account security.</li>
              <li>To improve the product, including the quality of AI results, using de-identified or aggregated data. We do not use your private content to train AI models that other customers can access without your permission.</li>
              <li>To prevent abuse and meet legal obligations.</li>
              <li>To send service notices and, with your consent, product news.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Your Site Visitors</h2>
            <p>
              You are the controller of the personal data your visitors give you through your website, and we process it for you. 
              You must publish your own privacy notice on your site and have a lawful basis for collecting that data.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Who We Share It With</h2>
            <p>We share data only with:</p>
            <ul>
              <li><strong>Service providers</strong> that help us run lunchpaad, such as hosting, AI processing, domain, email, analytics and payment providers, who must protect it and use it only on our instructions;</li>
              <li><strong>Authorities</strong> when the law requires it; and</li>
              <li><strong>In a business transfer</strong>, with notice to you.</li>
            </ul>
            <div className="legal-highlight">
              <p><strong>We do not sell your personal data.</strong></p>
            </div>
          </section>

          <section className="legal-section">
            <h2>5. AI Processing</h2>
            <p>
              Your prompts and content may be sent to third-party AI providers to generate results. 
              Please do not enter sensitive personal data, passwords or confidential secrets into prompts.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Security and Storage</h2>
            <p>
              We use encryption in transit, access controls and backups. Data may be processed outside Nigeria 
              with protection equal to the NDPA standard.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Retention</h2>
            <p>
              We keep your data while your account is active and as long as needed for legal and billing purposes. 
              You can delete your sites and account, after which we delete or anonymise your data within a reasonable time.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Your Rights</h2>
            <p>You may ask to:</p>
            <ul>
              <li>Access your data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your data</li>
              <li>Restrict processing</li>
              <li>Export your data</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
              <li>Complain to the Nigeria Data Protection Commission</li>
            </ul>
            <p><strong>To exercise your rights, email:</strong> privacy@lunchpaad.com</p>
          </section>

          <section className="legal-section">
            <h2>9. Children</h2>
            <p>lunchpaad is not for anyone under 18.</p>
          </section>

          <section className="legal-section">
            <h2>10. Changes</h2>
            <p>We may update this policy and will notify you in the product or by email.</p>
          </section>

          <div className="legal-contact">
            <h3>Questions About Privacy?</h3>
            <p>Contact us at <a href="mailto:privacy@lunchpaad.com">privacy@lunchpaad.com</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
