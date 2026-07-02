import { useEffect, useState, useCallback } from 'react';
import { fetchServices } from '../services/api.js';
import { mockServices } from '../data/mockData.js';
import '../styles/services.css';

// One unique Unsplash image per service
const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&auto=format&fit=crop&q=80', // wallpapers
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=80', // curtains
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=80', // upholstery
  'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&auto=format&fit=crop&q=80', // blinds
  'https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?w=600&auto=format&fit=crop&q=80', // artefacts
  'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&auto=format&fit=crop&q=80', // wooden flooring
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&auto=format&fit=crop&q=80', // pvc flooring
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80', // landscaping
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop&q=80', // mattress
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format&fit=crop&q=80', // curtain tracks
];

export default function Services() {
  const [services, setServices] = useState(mockServices);
  const [index, setIndex] = useState(0);
  const [animDir, setAnimDir] = useState(null); // 'left' | 'right'

  useEffect(() => {
    fetchServices()
      .then((data) => data && data.length && setServices(data))
      .catch(() => {});
  }, []);

  const go = useCallback((dir) => {
    setAnimDir(dir);
    setTimeout(() => {
      setIndex((i) =>
        dir === 'next'
          ? (i + 1) % services.length
          : (i - 1 + services.length) % services.length
      );
      setAnimDir(null);
    }, 50);
  }, [services.length]);

  const prev = useCallback(() => go('prev'), [go]);
  const next = useCallback(() => go('next'), [go]);

  // Autoplay every 4 seconds
  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  const total   = services.length;
  const leftIdx  = (index - 1 + total) % total;
  const rightIdx = (index + 1) % total;

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

        <div className="svc-carousel">
          <button className="svc-arrow" onClick={prev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className={`svc-track ${animDir ? `anim-${animDir}` : ''}`}>
            <ServiceCard
              service={services[leftIdx]}
              image={SERVICE_IMAGES[leftIdx]}
              position="side"
              onClick={prev}
            />
            <ServiceCard
              service={services[index]}
              image={SERVICE_IMAGES[index]}
              position="center"
            />
            <ServiceCard
              service={services[rightIdx]}
              image={SERVICE_IMAGES[rightIdx]}
              position="side"
              onClick={next}
            />
          </div>

          <button className="svc-arrow" onClick={next} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, image, position, onClick }) {
  return (
    <div className={`svc-card svc-card--${position}`} onClick={onClick}>
      <div className="svc-card-img">
        <img src={image} alt={service.name} loading="lazy" />
      </div>
      <div className="svc-card-body">
        <h3 className="service-name">{service.name}</h3>
        <p className="service-desc">{service.description}</p>
        <div className="service-arrow-icon">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}