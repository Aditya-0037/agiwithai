import ContactForm from './ContactForm';

const CTA = () => (
  <section id="contact">
    <div className="container">
      <div className="section-title">
        <h2>Let&apos;s Build Something That Works</h2>
        <p>Tell us about your project and we&apos;ll help you bring it to life.</p>
      </div>

      <div className="contact-grid">
        {/* Left: info */}
        <div>
          <h3 style={{ marginBottom: '16px' }}>Get In Touch</h3>
          <p style={{ marginBottom: '32px', color: 'var(--color-muted-text)', lineHeight: 1.7 }}>
            Prefer direct communication? Reach out via email or WhatsApp. We typically respond within a few hours.
          </p>

          <p style={{ fontWeight: 700, marginBottom: '8px', fontSize: '13px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-muted-text)' }}>
            Email
          </p>
          <a
            href="mailto:team@agiwithai.com"
            style={{ fontSize: '18px', fontWeight: 600, display: 'block', marginBottom: '32px', textDecoration: 'none', color: 'var(--color-black)' }}
          >
            team@agiwithai.com
          </a>

          <a
            href="https://wa.me/919690609737"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Contact on WhatsApp
          </a>
        </div>

        {/* Right: form */}
        <ContactForm />
      </div>
    </div>
  </section>
);

export default CTA;
