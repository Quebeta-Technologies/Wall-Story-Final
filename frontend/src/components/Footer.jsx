import { BRAND, CONTACT } from '../data/constants.js';
import '../styles/footer.css';

const NAV = [
  { label: 'Services',     href: '#services' },
  { label: 'About',        href: '#about' },
  { label: 'Process',      href: '#process' },
  { label: 'Reviews',      href: '#testimonials' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Contact',      href: '#contact' },
];

const SERVICES = [
  'Imported Wallpapers',
  'Curtain Fabrics',
  'Upholstery & Blinds',
  'Wooden Flooring',
  'PVC & SPC Flooring',
  'Automated Curtain Tracks',
  'Artificial Landscaping',
  'Mattress',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top CTA strip */}
      <div className="footer-cta">
        <div className="footer-cta-inner">
          <div>
            <h3>Ready to transform your space?</h3>
            <p>Visit our studio or call us for a free home consultation.</p>
          </div>
          <div className="footer-cta-btns">
            <a href={`tel:${CONTACT.phoneRaw}`} className="footer-btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-btn-ghost"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.15-1.8-.9-2.1-1s-.5-.15-.7.15-.8 1-1 1.2-.4.2-.7.05a8.5 8.5 0 0 1-2.5-1.55 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.65s.3-.4.45-.55.2-.3.3-.5.05-.35 0-.5-.7-1.7-.95-2.3-.5-.5-.7-.5h-.6a1.15 1.15 0 0 0-.85.4 3.6 3.6 0 0 0-1.15 2.7 6.2 6.2 0 0 0 1.35 3.3 14.4 14.4 0 0 0 5.55 4.85c.75.3 1.35.5 1.8.65a4.35 4.35 0 0 0 2 .15 3.25 3.25 0 0 0 2.15-1.5 2.65 2.65 0 0 0 .2-1.5c-.05-.1-.25-.15-.55-.3zM12 2A10 10 0 0 0 2 12a9.9 9.9 0 0 0 1.35 5L2 22l5.15-1.35A10 10 0 1 0 12 2z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="footer-body">
        <div className="footer-grid">

          {/* Col 1 — Brand */}
          <div className="footer-col footer-col--brand">
            <div className="footer-brand">
              <div className="footer-brand-mark">W</div>
              <span>{BRAND.name}</span>
            </div>
            <p className="footer-about">
              Pune's trusted destination for imported wallpapers, curtain fabrics,
              flooring, blinds and automated interior solutions. Est. 2019.
            </p>
            <div className="footer-socials">
              <a href="https://wa.me/919767479000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.15-1.8-.9-2.1-1s-.5-.15-.7.15-.8 1-1 1.2-.4.2-.7.05a8.5 8.5 0 0 1-2.5-1.55 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.65s.3-.4.45-.55.2-.3.3-.5.05-.35 0-.5-.7-1.7-.95-2.3-.5-.5-.7-.5h-.6a1.15 1.15 0 0 0-.85.4 3.6 3.6 0 0 0-1.15 2.7 6.2 6.2 0 0 0 1.35 3.3 14.4 14.4 0 0 0 5.55 4.85c.75.3 1.35.5 1.8.65a4.35 4.35 0 0 0 2 .15 3.25 3.25 0 0 0 2.15-1.5 2.65 2.65 0 0 0 .2-1.5c-.05-.1-.25-.15-.55-.3zM12 2A10 10 0 0 0 2 12a9.9 9.9 0 0 0 1.35 5L2 22l5.15-1.35A10 10 1 0 0 12 2z" />
                </svg>
              </a>
              <a href={`tel:${CONTACT.phoneRaw}`} aria-label="Call us">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              <a href={`mailto:${CONTACT.email}`} aria-label="Email us">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>
                    <span className="footer-link-arrow">→</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links-list">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services">
                    <span className="footer-link-arrow">→</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + Map */}
          <div className="footer-col footer-col--contact">
            <h4 className="footer-col-title">Find Us</h4>

            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <strong>Studio Address</strong>
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <strong>Phone</strong>
                  <a href={`tel:${CONTACT.phoneRaw}`}>{CONTACT.phone}</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <strong>Studio Hours</strong>
                  <span>Mon – Sat: 10 AM – 8 PM</span>
                  <span>Sunday: By Appointment</span>
                </div>
              </div>
            </div>

            {/* Google Map embed */}
            <div className="footer-map">
              <iframe
                title="The Wall Story Location"
                src="https://maps.google.com/maps?q=The+Wall+Story+Pune&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://share.google/lL8dEcNGzqj97nrj3"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© {year} {BRAND.name} · All rights reserved · Pune, Maharashtra</span>
          <span className="footer-bottom-right">Made With <span style={{ color: 'red' }}>❤️</span> Quebeta</span>
        </div>
      </div>
    </footer>
  );
}