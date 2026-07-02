import { useEffect, useState, useCallback } from 'react';
import { fetchTestimonials } from '../services/api.js';
import { mockTestimonials } from '../data/mockData.js';
import '../styles/testimonials.css';

export default function Testimonials() {
  const [items, setItems] = useState(mockTestimonials);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchTestimonials()
      .then((data) => data && data.length && setItems(data))
      .catch(() => {});
  }, []);

  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length]);

  // Autoplay
  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Kind Words</span>
          <h2>What clients <em>are saying.</em></h2>
        </div>

        <div className="testimonial-carousel reveal">
          <button className="tc-arrow tc-arrow-left" onClick={prev} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="tc-viewport">
            <div
              className="tc-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {items.map((t) => (
                <div className="tc-slide" key={t._id}>
                  <div className="tc-card glass">
                    <div className="tc-quote-mark">"</div>
                    <div className="tc-rating">
                      {Array.from({ length: t.rating || 5 }).map((_, i) => (
                        <Star key={i} />
                      ))}
                    </div>
                    <p className="tc-quote">{t.quote}</p>
                    <div className="tc-author">
                      <div className="tc-avatar">{t.name.charAt(0)}</div>
                      <div>
                        <div className="tc-name">{t.name}</div>
                        <div className="tc-meta">
                          {t.role}{t.role && t.location ? ' · ' : ''}{t.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="tc-arrow tc-arrow-right" onClick={next} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="tc-dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`tc-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.94 6.88L22 10l-5.5 4.87L18.18 22 12 18.27 5.82 22 7.5 14.87 2 10l7.06-1.12z" />
    </svg>
  );
}
