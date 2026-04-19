import Link from 'next/link';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-col">
          <h3>AGI With AI</h3>
          <p style={{ marginBottom: '20px' }}>
            Building fast, scalable digital products for startups worldwide.
          </p>
          <a
            href="mailto:team@agiwithai.com"
            style={{ color: '#ccc', textDecoration: 'none', fontWeight: 500 }}
          >
            team@agiwithai.com
          </a>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="#services">Web Development</Link></li>
            <li><Link href="#services">SaaS Dashboards</Link></li>
            <li><Link href="#services">AI Integrations</Link></li>
            <li><Link href="#services">E-commerce</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="#work">Our Work</Link></li>
            <li><Link href="#process">Process</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4>Social</h4>
          <ul>
            <li><span>X / Twitter</span></li>
            <li><span>LinkedIn</span></li>
            <li><span>GitHub</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} agiwithai.com · All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
