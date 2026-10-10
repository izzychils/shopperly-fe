import './PrivacyPolicy.css'

export const TermsOfUse = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Terms of Use</h1>
          <p className="last-updated">Last Updated: December 2024</p>
        </div>

        <div className="legal-content">
          <div className="legal-intro">
            <p>
              These Terms of Use govern your use of lunchpaad, including the AI builder, the drag-and-drop editor, 
              hosting and any related tools. By using lunchpaad you agree to them.
            </p>
          </div>

          <section className="legal-section">
            <h2>1. Eligibility</h2>
            <p>
              You must be 18 or older and able to enter a binding agreement. If you use lunchpaad for a business, 
              you confirm you can bind it.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Your Account</h2>
            <p>
              Keep your details accurate and your password secure. You are responsible for all activity on your account 
              and for any team members you invite.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Your Content and Sites</h2>
            <p>
              You own the content you provide and the sites you build. You give us a limited licence to host, copy, 
              process and display them to provide the service. You are responsible for your site, including its content, 
              products, prices, claims and legal notices.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. AI-Generated Content</h2>
            <p>
              lunchpaad's AI creates text, layouts, images and code from your prompts. Results may be inaccurate, 
              incomplete or similar to content made for others. You must review everything before publishing. 
              As between you and us, you may use the output for your business, subject to these terms and the rights of third parties.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Acceptable Use</h2>
            <p>You must not use lunchpaad to build or host:</p>
            <ul>
              <li>Unlawful, fraudulent, deceptive or phishing sites, including fake shops or impersonation of brands, banks or government bodies;</li>
              <li>Content that infringes copyright, trademarks or other rights;</li>
              <li>Hateful, abusive, sexually explicit involving minors, violent or harassing content;</li>
              <li>Malware, spam or anything that harms visitors, networks or our systems;</li>
              <li>Sites that sell illegal goods or services, or goods that require licences you do not hold.</li>
            </ul>
            <p>
              You must also not scrape, reverse-engineer or overload the service, or resell it without our written permission.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Third-Party Services</h2>
            <p>
              Your site may use third-party services such as payment gateways, domain registrars, analytics or plug-ins. 
              Their terms apply, and we are not responsible for them.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Takedowns</h2>
            <p>
              We may remove content, unpublish sites or suspend accounts that break these terms or the law, or on valid legal request. 
              We will give notice where reasonably possible.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Our Property</h2>
            <p>
              lunchpaad, its software, templates, design, name and logo belong to lunchpaad. Templates and assets are licensed 
              for use on your lunchpaad site only.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Availability</h2>
            <p>
              We work to keep lunchpaad and your sites online but cannot promise uninterrupted service. We may update, 
              change or retire features with reasonable notice.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Ending Your Use</h2>
            <p>
              You may stop using lunchpaad and delete your account at any time. We may suspend or end accounts for breach of these terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Changes</h2>
            <p>We may update these terms and will notify you. Continued use means you accept the changes.</p>
          </section>

          <div className="legal-contact">
            <h3>Questions About These Terms?</h3>
            <p>Contact us at <a href="mailto:legal@lunchpaad.com">legal@lunchpaad.com</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
