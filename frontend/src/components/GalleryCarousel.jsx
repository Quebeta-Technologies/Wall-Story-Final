import { useEffect, useRef, useState } from 'react';
import { fetchGallery } from '../services/api.js';
import { mockGallery } from '../data/mockData.js';
import '../styles/gallery.css';

export default function GalleryCarousel() {
  const [items, setItems] = useState(mockGallery);
  const [lightbox, setLightbox] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    fetchGallery()
      .then((data) => data && data.length && setItems(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.gallery-slide');
    const step = card ? card.getBoundingClientRect().width + 16 : 300;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Recent Work</span>
          <h2>Rooms with <em>character.</em></h2>
          <p>Swipe through a selection of homes we've styled across Pune.</p>
        </div>
      </div>

      {!isMobile && (
        <div className="gallery-controls">
          <button className="gallery-arrow" onClick={() => scrollBy(-1)} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="gallery-arrow" onClick={() => scrollBy(1)} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      <div className="gallery-track" ref={trackRef}>
        {items.map((g, i) => (
          <button
            className="gallery-slide reveal"
            key={g._id || i}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${g.imageUrl})` }}
            onClick={() => setLightbox(g)}
            aria-label={`Open ${g.title}`}
          >
            <div className="gallery-slide-info">
              <span className="gallery-slide-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div className="gallery-slide-title">{g.title}</div>
                <div className="gallery-slide-loc">{g.location}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" aria-label="Close">×</button>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.imageUrl} alt={lightbox.title} />
            <div className="lightbox-caption">
              <strong>{lightbox.title}</strong>
              <span>{lightbox.location}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}