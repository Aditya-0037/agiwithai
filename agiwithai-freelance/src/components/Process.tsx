const Process = () => {
  const steps = [
    { title: 'Share your idea', desc: 'Tell us what you want to build and your goals.' },
    { title: 'We plan and design', desc: 'Detailed roadmap and high-fidelity UI designs.' },
    { title: 'Development and iterations', desc: 'Regular updates and feedback loops.' },
    { title: 'Launch and support', desc: 'Go live with continuous maintenance and updates.' },
    { title: 'Marketing and promotion', desc: 'Helping your product reach the right audience.' }
  ];

  return (
    <section id="process" className="bg-yellow">
      <div className="container">
        <div className="section-title">
          <h2>Simple, Visual Process</h2>
          <p>How we bring your vision to life — from idea to launch.</p>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-step-item">
              <div className="process-connector" aria-hidden="true" />
              <div className="process-number">{index + 1}</div>
              <h4 style={{ marginBottom: '8px' }}>{step.title}</h4>
              <p style={{ fontSize: '14px', color: 'var(--color-muted-text)' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
