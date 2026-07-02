import { useState } from 'react';
import { submitContact } from '../services/api.js';
import { CONTACT } from '../data/constants.js';
import '../styles/contact.css';

const serviceOptions = [
  'Imported Wallpapers', 'Curtain Fabrics', 'Upholstery', 'Blinds', 'Artefacts',
  'Wooden Flooring', 'PVC & SPC Flooring', 'Artificial Landscaping',
  'Mattress', 'Automated Curtain Tracks', 'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', msg: '' }); // idle | loading | success | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setStatus({ state: 'error', msg: 'Name and phone are required.' });
      return;
    }
    setStatus({ state: 'loading', msg: '' });
    try {
      const res = await submitContact(form);
      setStatus({ state: 'success', msg: res.message || 'Thank you! We will reach out shortly.' });
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (err) {
      setStatus({
        state: 'error',
        msg: err.response?.data?.error || 'Could not send. Please call us directly.',
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-card reveal">
        <div className="contact-text">
          <span className="eyebrow">Let's Begin</span>
          <h2>Ready to write <em>your wall's story?</em></h2>
          <p>Book a home consultation or drop into our studio. We'll bring the swatches, the ideas, and the honest opinions — you bring the room.</p>

          <div className="phone-inline">
            <div className="phone-label">Call Us</div>
            <a href={`tel:${CONTACT.phoneRaw}`} className="phone-number">{CONTACT.phone}</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <input
              type="text" name="name" placeholder="Your name *"
              value={form.name} onChange={onChange} required
            />
            <input
              type="tel" name="phone" placeholder="Phone number *"
              value={form.phone} onChange={onChange} required
            />
          </div>
          <input
            type="email" name="email" placeholder="Email (optional)"
            value={form.email} onChange={onChange}
          />
          <select name="service" value={form.service} onChange={onChange}>
            <option value="">Interested in… (optional)</option>
            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <textarea
            name="message" rows="3" placeholder="Tell us a bit about your space (optional)"
            value={form.message} onChange={onChange}
          />

          {status.state === 'success' && <div className="form-msg success">{status.msg}</div>}
          {status.state === 'error'   && <div className="form-msg error">{status.msg}</div>}

          <button type="submit" className="btn-primary" disabled={status.state === 'loading'}>
            {status.state === 'loading' ? 'Sending…' : 'Request a Callback'}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
