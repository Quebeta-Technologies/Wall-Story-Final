import { useEffect, useState } from 'react';
import { BRAND, CONTACT, NAV_LINKS } from '../data/constants.js';
import '../styles/navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'nav scrolled' : 'nav'}>
      <a href="#top" className="brand">
        <div className="brand-mark">W</div>
        <span>{BRAND.name}</span>
      </a>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          </li>
        ))}
      </ul>

      <a href={`tel:${CONTACT.phoneRaw}`} className="nav-cta">Get a Quote</a>

      <button
        className="nav-toggle"
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
