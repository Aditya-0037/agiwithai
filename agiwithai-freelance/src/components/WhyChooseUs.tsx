import { CheckCircle } from 'lucide-react';

const reasons = [
  'Startup-focused approach',
  'Fast delivery cycles',
  'Clean, scalable code',
  'Flexible pricing model',
  'Direct communication with developers',
];

const WhyChooseUs = () => (
  <section>
    <div className="container">
      <div className="why-grid">
        <div>
          <h2 style={{ marginBottom: '16px' }}>Why Startups Choose Us</h2>
          <p style={{ fontSize: '18px', marginBottom: '36px', color: 'var(--color-muted-text)' }}>
            We understand the speed and clarity startups need. Our process is designed to get you from idea to launch — fast.
          </p>
          {reasons.map((r, i) => (
            <div key={i} className="why-reason">
              <CheckCircle size={20} strokeWidth={2} color="var(--color-black)" style={{ flexShrink: 0 }} />
              <span>{r}</span>
            </div>
          ))}
        </div>

        <div className="why-highlight-card">
          <div style={{ fontSize: '40px', marginBottom: '16px' }}>⚡</div>
          <h3 style={{ marginBottom: '12px' }}>Direct Developer Access</h3>
          <p style={{ color: 'var(--color-body-text)', lineHeight: 1.7 }}>
            No account managers or middlemen. Talk directly to the people building your product for 100% clarity and faster execution.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
