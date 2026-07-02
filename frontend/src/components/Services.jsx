import { useEffect, useState } from 'react';
import { fetchServices } from '../services/api.js';
import { mockServices } from '../data/mockData.js';
import '../styles/services.css';

export default function Services() {
  const [services, setServices] = useState(mockServices);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchServices()
      .then((data) => data && data.length && setServices(data))
      .catch(() => {});
  }, []);

  const prev = () => setIndex((i) => (i - 1 + services.length) % services.length);
  const next = () => setIndex((i) => (i + 1) % services.length);

  const getVisible = () => {
    const total = services.length;
    const left  = (index - 1 + total) % total;
    const right = (index + 1) % total;
    return [left, index, right];
  };

  const [left, center, right] = getVisible();

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
          <button className="svc-arrow svc-arrow-left" onClick={prev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="svc-track">
            <ServiceCard service={services[left]}   position="left"   onClick={prev} />
            <ServiceCard service={services[center]} position="center" onClick={() => {}} />
            <ServiceCard service={services[right]}  position="right"  onClick={next} />
          </div>

          <button className="svc-arrow svc-arrow-right" onClick={next} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, position, onClick }) {
  return (
    <div className={`svc-card svc-card--${position}`} onClick={onClick}>
      <div className="svc-card-inner">
        <div className="service-num">
          {String(service.order).padStart(2, '0')}
        </div>
        <h3 className="service-name">{service.name}</h3>
        <p className="service-desc">{service.description}</p>
        <div className="service-arrow-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}