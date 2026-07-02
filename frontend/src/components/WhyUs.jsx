import '../styles/why.css';

const reasons = [
  {
    title: 'Sourced with Intent',
    text: 'Every wallpaper roll and fabric bolt is chosen by hand — from mills we\'ve visited and vetted personally.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2 L2 7 L12 12 L22 7 z" />
        <path d="M2 17 L12 22 L22 17" />
        <path d="M2 12 L12 17 L22 12" />
      </svg>
    ),
  },
  {
    title: 'In-House Installation',
    text: 'No subcontractors, no surprises. Our team owns your project end to end.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'One Point of Contact',
    text: 'From swatch selection to final walkthrough, you speak to one person. Always.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Why The Wall Story</span>
          <h2>Details you feel, <em>not just see.</em></h2>
        </div>

        <div className="why-grid">
          {reasons.map((r) => (
            <div className="why-card reveal" key={r.title}>
              <div className="why-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
