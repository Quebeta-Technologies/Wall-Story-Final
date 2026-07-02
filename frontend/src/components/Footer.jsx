import { BRAND, CONTACT, NAV_LINKS } from '../data/constants.js';
import '../styles/footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-mark">W</div>
          <span>{BRAND.name}</span>
        </div>

        <ul className="footer-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li><a href={`tel:${CONTACT.phoneRaw}`}>Contact</a></li>
        </ul>

        <div className="footer-copy">© {year} {BRAND.name} · Curated Interiors</div>
      </div>
    </footer>
  );
}
