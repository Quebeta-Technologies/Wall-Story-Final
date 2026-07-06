import { useState, useEffect, useCallback, useRef } from 'react';
import '../styles/why.css';

const reasons = [
  {
    title: 'Sourced with Intent',
    text: "Every wallpaper roll and fabric bolt is chosen by hand — from mills we've visited and vetted personally.",
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2 L2 7 L12 12 L22 7 z" /><path d="M2 17 L12 22 L22 17" /><path d="M2 12 L12 17 L22 12" /></svg>,
  },
  {
    title: 'In-House Installation',
    text: 'No subcontractors, no surprises. Our team owns your project end to end.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></svg>,
  },
  {
    title: 'One Point of Contact',
    text: 'From swatch selection to final walkthrough, you speak to one person. Always.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  },
  {
    title: 'Honest Pricing',
    text: "Transparent quotes with no hidden line items. You always know what you're paying for.",
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  },
  {
    title: 'Premium Imports',
    text: "We bring exclusive fabrics and wallpapers from Europe and Asia that you won't find anywhere else in Pune.",
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  },
  {
    title: 'After-Sales Care',
    text: "We check in after every install. If something needs attention, we're one call away — always.",
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
  },
  {
    title: 'Smart Automation',
    text: 'Motorised blinds, automated curtain tracks — we bring technology and elegance together seamlessly.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  },
  {
    title: 'Trusted by 2000+ Homes',
    text: 'Over fifteen years and two thousand homes styled across Pune. Our work speaks for itself.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  },
  {
    title: 'Eco-Conscious Choices',
    text: 'We stock sustainable fabrics and low-VOC wallpapers for homes that care about the planet.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>,
  },
];

export default function WhyUs() {
  const [center, setCenter] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dir, setDir] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Touch tracking
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const total = reasons.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const go = useCallback((direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDir(direction);
    setTimeout(() => {
      setCenter((c) =>
        direction === 'next'
          ? (c + 1) % total
          : (c - 1 + total) % total
      );
      setIsAnimating(false);
      setDir(null);
    }, 700);
  }, [isAnimating, total]);

  const prev = useCallback(() => go('prev'), [go]);
  const next = useCallback(() => go('next'), [go]);

  // Autoplay — desktop only
  useEffect(() => {
    if (isMobile) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next, isMobile]);

  // Touch handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only swipe if horizontal movement dominates
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const leftHidden  = (center - 2 + total) % total;
  const left        = (center - 1 + total) % total;
  const centerIdx   = center;
  const right       = (center + 1) % total;
  const rightHidden = (center + 2) % total;

  const getRole = (idx) => {
    if (idx === leftHidden)  return 'hidden-left';
    if (idx === left)        return 'left';
    if (idx === centerIdx)   return 'center';
    if (idx === right)       return 'right';
    if (idx === rightHidden) return 'hidden-right';
    return 'hidden-left';
  };

  const cards = [leftHidden, left, centerIdx, right, rightHidden];

  return (
    <section id="whyus">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Why The Wall Story</span>
          <h2>Details you feel, <em>not just see.</em></h2>
        </div>

        <div
          className="why-carousel"
          onTouchStart={isMobile ? onTouchStart : undefined}
          onTouchEnd={isMobile ? onTouchEnd : undefined}
        >
          {!isMobile && (
            <button className="why-arrow" onClick={prev} disabled={isAnimating} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div className={`why-track ${dir ? `why-dir-${dir}` : ''}`}>
            {cards.map((ri) => (
              <div key={ri} className={`why-card why-card--${getRole(ri)}`}>
                <div className="why-icon">{reasons[ri].icon}</div>
                <h3>{reasons[ri].title}</h3>
                <p>{reasons[ri].text}</p>
                <div className="why-bar" />
              </div>
            ))}
          </div>

          {!isMobile && (
            <button className="why-arrow" onClick={next} disabled={isAnimating} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {!isMobile && (
          <div className="why-dots">
            {reasons.map((_, i) => (
              <button
                key={i}
                className={`why-dot ${i === center ? 'active' : ''}`}
                onClick={() => {
                  if (isAnimating || i === center) return;
                  go(i > center ? 'next' : 'prev');
                  setTimeout(() => setCenter(i), 710);
                }}
                aria-label={`Go to ${i + 1}`}
              />
            ))}
          </div>
        )}

        {isMobile && (
          <p className="why-swipe-hint">Swipe to explore →</p>
        )}
      </div>
    </section>
  );
}