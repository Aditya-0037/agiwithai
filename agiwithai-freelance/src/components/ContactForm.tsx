'use client';

import { useState, type FormEvent } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', details: '' });
  const [sent, setSent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      
      if (result.success) {
        setSent(true);
        setForm({ name: '', email: '', details: '' });
        setTimeout(() => setSent(false), 8000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      {sent && (
        <div style={{
          background: '#dcfce7',
          color: '#166534',
          border: '2px solid #166534',
          borderRadius: '6px',
          padding: '14px 18px',
          marginBottom: '20px',
          fontWeight: 600,
          fontSize: '14px'
        }}>
          ✓ Message sent successfully! We&apos;ll get back to you soon.
        </div>
      )}
      {error && (
        <div style={{
          background: '#fee2e2',
          color: '#991b1b',
          border: '2px solid #991b1b',
          borderRadius: '6px',
          padding: '14px 18px',
          marginBottom: '20px',
          fontWeight: 600,
          fontSize: '14px'
        }}>
          ⚠ Failed to send message. Please try again or email us directly.
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
        <button 
          type="submit" 
          id="contact-submit" 
          className="btn btn-primary" 
          disabled={loading}
          style={{ width: '100%', padding: '16px', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
