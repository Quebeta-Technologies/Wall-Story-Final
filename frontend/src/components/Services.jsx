import { useEffect, useState } from 'react';
import { fetchServices } from '../services/api.js';
import { mockServices } from '../data/mockData.js';
import '../styles/services.css';

export default function Services() {
  const [services, setServices] = useState(mockServices);

  useEffect(() => {
    fetchServices()
      .then((data) => data && data.length && setServices(data))
      .catch(() => {}); // fall back to mock
  }, []);

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

        <div className="services-grid">
          {services.map((s, i) => (
            <article className="service-card reveal" key={s._id || i}>
              <div className="service-num">{String(s.order || i + 1).padStart(2, '0')}</div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.description}</p>
              <div className="service-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
