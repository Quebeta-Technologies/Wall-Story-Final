import { useEffect, useState } from 'react';
import { CONTACT, WHATSAPP_MESSAGE } from '../data/constants.js';
import '../styles/whatsapp.css';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  // Show after user scrolls past hero
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-expand tooltip briefly on first appearance
  useEffect(() => {
    if (!visible) return;
    setTooltipOpen(true);
    const t = setTimeout(() => setTooltipOpen(false), 4000);
    return () => clearTimeout(t);
  }, [visible]);

  const href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className={`wa-float ${visible ? 'in' : ''}`}>
      {tooltipOpen && (
        <div className="wa-tooltip">
          <button
            className="wa-tooltip-close"
            aria-label="Close"
            onClick={() => setTooltipOpen(false)}
          >×</button>
          <strong>Chat with us!</strong>
          <span>Reply within minutes</span>
        </div>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-button"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setTooltipOpen(true)}
      >
        <span className="wa-pulse" />
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M17.5 14.4c-.3-.15-1.8-.9-2.1-1s-.5-.15-.7.15-.8 1-1 1.2-.4.2-.7.05a8.5 8.5 0 0 1-2.5-1.55 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.65s.3-.4.45-.55.2-.3.3-.5.05-.35 0-.5-.7-1.7-.95-2.3-.5-.5-.7-.5h-.6a1.15 1.15 0 0 0-.85.4 3.6 3.6 0 0 0-1.15 2.7 6.2 6.2 0 0 0 1.35 3.3 14.4 14.4 0 0 0 5.55 4.85c.75.3 1.35.5 1.8.65a4.35 4.35 0 0 0 2 .15 3.25 3.25 0 0 0 2.15-1.5 2.65 2.65 0 0 0 .2-1.5c-.05-.1-.25-.15-.55-.3zM12 2A10 10 0 0 0 2 12a9.9 9.9 0 0 0 1.35 5L2 22l5.15-1.35A10 10 0 0 0 12 22a10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 18.3a8.3 8.3 0 0 1-4.25-1.15l-.3-.2-3.1.8.8-3-.2-.3A8.3 8.3 0 1 1 12 20.3z"/>
        </svg>
      </a>
    </div>
  );
}
