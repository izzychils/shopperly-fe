import './PrivacyPolicy.css'

export const TermsAndConditions = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last Updated: December 2024</p>
        </div>

        <div className="legal-content">
          <div className="legal-intro">
            <p>
              These Terms and Conditions are the commercial agreement between you and lunchpaad. 
              They apply with the Terms of Use and Privacy Policy.
            </p>
          </div>

          <section className="legal-section">
            <h2>1. Plans and Fees</h2>
            <p>lunchpaad may offer free and paid plans. The features, limits and prices of each plan are shown on our pricing page or in your order.</p>
            
            <h3>Free Plan - $0/month</h3>
            <ul>
              <li>1 website</li>
              <li>Basic AI builder</li>
              <li>Standard templates</li>
              <li>Community support</li>
              <li>lunchpaad branding</li>
            </ul>

            <h3>Pro Plan - $29/month</h3>
            <ul>
              <li>10 websites</li>
              <li>Advanced AI features</li>
              <li>Premium templates</li>
              <li>Custom domain</li>
              <li>Priority support</li>
              <li>SEO optimization</li>
              <li>Advanced analytics</li>
            </ul>

            <h3>Enterprise Plan - $99.99/month</h3>
            <ul>
              <li>Unlimited websites</li>
              <li>AI Pro features</li>
              <li>White label solution</li>
              <li>Dedicated account manager</li>
              <li>Custom AI training</li>
              <li>SLA guarantee</li>
              <li>API access</li>
              <li>Advanced analytics</li>
            </ul>

            <p>
              Prices are in the currency shown, exclude applicable taxes such as VAT, and may change with at least 30 days' notice.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Billing and Renewal</h2>
            <p>
              Paid plans are billed in advance for each period (monthly or yearly) and renew automatically until you cancel. 
              Failed payments may lead to downgrade or suspension after notice.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Cancellation and Refunds</h2>
            <p>
              You may cancel at any time and keep paid features until the end of the period. Fees already paid are not refundable 
              unless the law requires or we agree in writing.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Domains and Add-Ons</h2>
            <p>
              Custom domains, e-commerce add-ons and other third-party services may be provided by partners and are subject to 
              their terms and fees. Domain registrations are generally non-refundable once completed. You are responsible for 
              renewing domains you own.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Your Responsibilities</h2>
            <p>
              You are responsible for your site's content and legality, including its privacy notice, terms for your own customers, 
              product descriptions, prices, taxes and consumer-protection duties. You are also responsible for the accuracy of 
              anything the AI generates that you choose to publish.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Your Data on Cancellation</h2>
            <p>
              You can export your site content before closing your account. After closure or prolonged non-payment, we may 
              unpublish your sites and delete your data as described in the Privacy Policy, subject to legal retention rules.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Intellectual Property</h2>
            <p>
              You keep ownership of your content. lunchpaad keeps all rights in lunchpaad, its software, templates and branding. 
              You grant us the licence needed to host and display your sites. You confirm you have the rights to everything you 
              upload or prompt us to use.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Service Levels</h2>
            <p>
              We aim for high availability but do not guarantee uptime unless a separate written agreement says so. 
              Scheduled maintenance and third-party outages may affect service.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Disclaimers</h2>
            <p>
              lunchpaad is provided "as is" and "as available". We do not promise that it will be error-free, that AI output 
              will be accurate or unique, or that your site will achieve any search ranking, traffic or sales.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Limitation of Liability</h2>
            <p>
              To the extent the law allows, lunchpaad is not liable for indirect or consequential loss, lost profits, lost sales 
              or lost data. Our total liability for any claim is limited to the fees you paid in the three months before the claim arose.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Indemnity</h2>
            <p>
              You will cover losses and claims arising from your content, your sites, your breach of these terms or your unlawful 
              use of the service.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Force Majeure</h2>
            <p>Neither party is liable for delays or failures caused by events beyond its reasonable control.</p>
          </section>

          <section className="legal-section">
            <h2>13. Governing Law and Disputes</h2>
            <p>
              These terms are governed by the laws of the Federal Republic of Nigeria. We will first try to settle disputes in 
              good faith. Failing that, the courts of Rivers State, Nigeria, have jurisdiction.
            </p>
          </section>

          <section className="legal-section">
            <h2>14. General</h2>
            <p>
              If part of these terms is unenforceable, the rest stays in force. These terms are the entire agreement on this 
              subject and may not be transferred without our written consent.
            </p>
          </section>

          <div className="legal-contact">
            <h3>Questions About Pricing or Billing?</h3>
            <p>Contact us at <a href="mailto:billing@lunchpaad.com">billing@lunchpaad.com</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
