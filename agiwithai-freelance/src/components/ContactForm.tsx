'use client';

import { useState, type FormEvent } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', details: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Construct mailto link with form data
    const subject = encodeURIComponent(`Project Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nProject Details:\n${form.details}`
    );
    window.open(`mailto:team@agiwithai.com?subject=${subject}&body=${body}`);
    setSent(true);
    setForm({ name: '', email: '', details: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="card">
      {sent && (
        <div style={{
          background: 'var(--color-warm-yellow)',
          border: '2px solid var(--color-black)',
          borderRadius: '6px',
          padding: '14px 18px',
          marginBottom: '20px',
          fontWeight: 600,
          fontSize: '14px'
        }}>
          ✓ Your email client has been opened. We&apos;ll respond soon!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>Name</label>
          <input
            id="contact-name"
            type="text"
            placeholder="Your name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>Email</label>
          <input
            id="contact-email"
            type="email"
            placeholder="you@startup.com"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>Project Details</label>
          <textarea
            id="contact-details"
            placeholder="Tell us what you want to build..."
            required
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
          />
        </div>
        <button type="submit" id="contact-submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
