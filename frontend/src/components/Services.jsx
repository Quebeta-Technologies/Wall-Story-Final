import { useEffect, useState, useCallback, useRef } from 'react';
import { fetchServices } from '../services/api.js';
import { mockServices } from '../data/mockData.js';
import '../styles/services.css';

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format&fit=crop&q=80',
];

export default function Services() {
  const [services, setServices] = useState(mockServices);
  const [center, setCenter]     = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  useEffect(() => {
    fetchServices()
      .then((data) => data && data.length && setServices(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const total = services.length;

  const go = useCallback((direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCenter((c) =>
        direction === 'next'
          ? (c + 1) % total
          : (c - 1 + total) % total
      );
      setIsAnimating(false);
    }, 700);
  }, [isAnimating, total]);

  const prev = useCallback(() => go('prev'), [go]);
  const next = useCallback(() => go('next'), [go]);

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const leftHidden  = (center - 2 + total) % total;
  const left        = (center - 1 + total) % total;
  const right       = (center + 1) % total;
  const rightHidden = (center + 2) % total;

  const getRole = (idx) => {
    if (idx === leftHidden)  return 'hidden-left';
    if (idx === left)        return 'left';
    if (idx === center)      return 'center';
    if (idx === right)       return 'right';
    if (idx === rightHidden) return 'hidden-right';
    return 'hidden-left';
  };

  const cards = [leftHidden, left, center, right, rightHidden];

  return (
    <section id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What We Offer</span>
          <h2>Ten Chapters, <em>One Story.</em></h2>
          <div className="flourish">
            <svg viewBox="0 0 44 12" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M2 6 Q11 -1 22 6 T42 6" />
              <circle cx="22" cy="6" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <p>Every space is composed piece by piece. Here is the full range of materials, finishes and craft we bring to your home.</p>
        </div>

        <div
          className="svc-carousel"
          onTouchStart={isMobile ? onTouchStart : undefined}
          onTouchEnd={isMobile ? onTouchEnd : undefined}
        >
          {!isMobile && (
            <button className="svc-arrow" onClick={prev} disabled={isAnimating} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div className="svc-track">
            {cards.map((ri) => (
              <div key={ri} className={`svc-card svc-card--${getRole(ri)}`}>
                <div className="svc-card-img">
                  <img
                    src={SERVICE_IMAGES[ri % SERVICE_IMAGES.length]}
                    alt={services[ri]?.name}
                    loading="lazy"
                  />
                </div>
                <div className="svc-card-body">
                  <h3 className="service-name">{services[ri]?.name}</h3>
                  <p className="service-desc">{services[ri]?.description}</p>
                </div>
              </div>
            ))}
          </div>

          {!isMobile && (
            <button className="svc-arrow" onClick={next} disabled={isAnimating} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}